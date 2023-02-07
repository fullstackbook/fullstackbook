# Python PostgreSQL Job Queue

- GitHub: https://github.com/travisluong/fullstackbook-python-postgresql-job-queue
- YouTube: [Python PostgreSQL Job Queue](https://www.youtube.com/watch?v=Vn8d3FEzFfw)

## Command Line

```bash title="Terminal"
python -m venv venv
. venv/bin/activate
pip install -r requirements.txt
createdb
psql job_db -f migrations/1_jobs.sql
psql job_db
python worker.py
python script.py
```

```sql title="psql"
select * from jobs;
update jobs set job_status='pending' where job_status='failed';
```

## Worker

```python title="worker.py"
import time
from enum import Enum
from typing import List
import random
import psycopg
from psycopg.rows import class_row
from dataclasses import dataclass
from datetime import datetime, timedelta


@dataclass
class JobConfig:
    poll_interval: int = 2  # number of seconds between each batch
    max_attempts: int = 3  # maximum number of attempts before giving up
    retry_interval: int = 5  # number of seconds to wait before retrying
    batch_size: int = 5  # number of jobs to query per poll


@dataclass
class Job:
    job_id: int
    job_data: str
    job_status: str
    attempts: int
    last_error: str
    run_at: datetime
    created_at: datetime
    updated_at: datetime


class JobStatus(Enum):
    pending = "pending"
    success = "success"
    failed = "failed"


conn = psycopg.connect("dbname=job_db user=postgres")


def task(job):
    if random.choice([True, False, False]):
        time.sleep(1)
        print(f"job {job.job_id} success")
    else:
        raise Exception("random failure")


def run_job(cur, job: Job):
    try:
        print(f"running job {job.job_id} with data: {job.job_data}")
        task(job)
        cur.execute(
            """update jobs set
                job_status=%s,
                attempts=%s,
                updated_at=%s
                where job_id=%s""",
            [JobStatus.success, job.attempts + 1, datetime.now(), job.job_id],
        )
    except Exception as e:
        handle_job_error(cur, e, job)


def handle_job_error(cur, e, job):
    print(f"job {job.job_id} failed: {e}")
    if job.attempts + 1 < JobConfig.max_attempts:
        cur.execute(
            """update jobs set
            job_status=%s,
            last_error=%s,
            attempts=%s,
            run_at=%s,
            updated_at=%s
            where job_id=%s""",
            [
                JobStatus.pending,
                str(e),
                job.attempts + 1,
                datetime.now() + timedelta(seconds=JobConfig.retry_interval),
                datetime.now(),
                job.job_id,
            ],
        )
    else:
        cur.execute(
            """update jobs set
            job_status=%s,
            last_error=%s,
            attempts=%s,
            updated_at=%s
            where job_id=%s""",
            [
                JobStatus.failed,
                str(e),
                job.attempts + 1,
                datetime.now(),
                job.job_id,
            ],
        )


def get_job_fields():
    fields = [k for k in Job.__annotations__]
    fields_str = ",".join(fields)
    return fields_str


def get_pending_jobs(cur) -> List[Job]:
    fields_str = get_job_fields()
    jobs = cur.execute(
        f"""select {fields_str} from jobs
        where job_status=%s and run_at <= now()
        order by job_id limit %s
        for update skip locked""",
        [JobStatus.pending, JobConfig.batch_size],
    ).fetchall()
    return jobs


def main():
    while True:
        try:
            cur = conn.cursor(row_factory=class_row(Job))
            pending_jobs = get_pending_jobs(cur)
            print(f"pending jobs found: {len(pending_jobs)}")
            for job in pending_jobs:
                run_job(cur, job)
            conn.commit()
        except Exception as e:
            print(f"error while running jobs: {e}")
        time.sleep(JobConfig.poll_interval)


if __name__ == "__main__":
    main()

```

## Test Script

```python title="script.py"
import psycopg

conn = psycopg.connect("dbname=job_db user=postgres")

cur = conn.cursor()

for i in range(5):
    conn.execute(
        "insert into jobs (job_data, job_status) values (%s, %s)",
        [f"hello world {i}", "pending"],
    )

conn.commit()

```

## Requirements

```txt title="requirements.txt"
psycopg==3.1.8
typing-extensions==4.4.0

```

## SQL

```sql title="migrations/1_jobs.sql"
create table jobs (
  job_id bigserial primary key,
  job_data text,
  job_status text,
  attempts int default 0,
  last_error text,
  run_at timestamp default now(),
  created_at timestamp default now(),
  updated_at timestamp default now()
)
```
