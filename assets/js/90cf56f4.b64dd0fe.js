"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[1702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||c[d]||s;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={},a="Python PostgreSQL Job Queue",i={unversionedId:"code/python-postgresql-job-queue",id:"code/python-postgresql-job-queue",title:"Python PostgreSQL Job Queue",description:"- GitHub//github.com/travisluong/fullstackbook-python-postgresql-job-queue",source:"@site/docs/code/python-postgresql-job-queue.md",sourceDirName:"code",slug:"/code/python-postgresql-job-queue",permalink:"/code/python-postgresql-job-queue",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/code/python-postgresql-job-queue.md",tags:[],version:"current",frontMatter:{},sidebar:"codeSidebar",previous:{title:"NuxtJS To Do UI",permalink:"/code/nuxtjs-todo"},next:{title:"React To Do UI",permalink:"/code/react-todo"}},l={},p=[{value:"Command Line",id:"command-line",level:2},{value:"Worker",id:"worker",level:2},{value:"Test Script",id:"test-script",level:2},{value:"Requirements",id:"requirements",level:2},{value:"SQL",id:"sql",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-postgresql-job-queue"},"Python PostgreSQL Job Queue"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-python-postgresql-job-queue"},"https://github.com/travisluong/fullstackbook-python-postgresql-job-queue")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Vn8d3FEzFfw"},"Python PostgreSQL Job Queue"))),(0,r.kt)("h2",{id:"command-line"},"Command Line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"python -m venv venv\n. venv/bin/activate\npip install -r requirements.txt\ncreatedb\npsql job_db -f migrations/1_jobs.sql\npsql job_db\npython worker.py\npython script.py\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="psql"',title:'"psql"'},"select * from jobs;\nupdate jobs set job_status='pending' where job_status='failed';\n")),(0,r.kt)("h2",{id:"worker"},"Worker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="worker.py"',title:'"worker.py"'},'import time\nfrom enum import Enum\nfrom typing import List\nimport random\nimport psycopg\nfrom psycopg.rows import class_row\nfrom dataclasses import dataclass\nfrom datetime import datetime, timedelta\n\n\n@dataclass\nclass JobConfig:\n    poll_interval: int = 2  # number of seconds between each batch\n    max_attempts: int = 3  # maximum number of attempts before giving up\n    retry_interval: int = 5  # number of seconds to wait before retrying\n    batch_size: int = 5  # number of jobs to query per poll\n\n\n@dataclass\nclass Job:\n    job_id: int\n    job_data: str\n    job_status: str\n    attempts: int\n    last_error: str\n    run_at: datetime\n    created_at: datetime\n    updated_at: datetime\n\n\nclass JobStatus(Enum):\n    pending = "pending"\n    success = "success"\n    failed = "failed"\n\n\nconn = psycopg.connect("dbname=job_db user=postgres")\n\n\ndef task(job):\n    if random.choice([True, False, False]):\n        time.sleep(1)\n        print(f"job {job.job_id} success")\n    else:\n        raise Exception("random failure")\n\n\ndef run_job(cur, job: Job):\n    try:\n        print(f"running job {job.job_id} with data: {job.job_data}")\n        task(job)\n        cur.execute(\n            """update jobs set\n                job_status=%s,\n                attempts=%s,\n                updated_at=%s\n                where job_id=%s""",\n            [JobStatus.success, job.attempts + 1, datetime.now(), job.job_id],\n        )\n    except Exception as e:\n        handle_job_error(cur, e, job)\n\n\ndef handle_job_error(cur, e, job):\n    print(f"job {job.job_id} failed: {e}")\n    if job.attempts + 1 < JobConfig.max_attempts:\n        cur.execute(\n            """update jobs set\n            job_status=%s,\n            last_error=%s,\n            attempts=%s,\n            run_at=%s,\n            updated_at=%s\n            where job_id=%s""",\n            [\n                JobStatus.pending,\n                str(e),\n                job.attempts + 1,\n                datetime.now() + timedelta(seconds=JobConfig.retry_interval),\n                datetime.now(),\n                job.job_id,\n            ],\n        )\n    else:\n        cur.execute(\n            """update jobs set\n            job_status=%s,\n            last_error=%s,\n            attempts=%s,\n            updated_at=%s\n            where job_id=%s""",\n            [\n                JobStatus.failed,\n                str(e),\n                job.attempts + 1,\n                datetime.now(),\n                job.job_id,\n            ],\n        )\n\n\ndef get_job_fields():\n    fields = [k for k in Job.__annotations__]\n    fields_str = ",".join(fields)\n    return fields_str\n\n\ndef get_pending_jobs(cur) -> List[Job]:\n    fields_str = get_job_fields()\n    jobs = cur.execute(\n        f"""select {fields_str} from jobs\n        where job_status=%s and run_at <= now()\n        order by job_id limit %s\n        for update skip locked""",\n        [JobStatus.pending, JobConfig.batch_size],\n    ).fetchall()\n    return jobs\n\n\ndef main():\n    while True:\n        try:\n            cur = conn.cursor(row_factory=class_row(Job))\n            pending_jobs = get_pending_jobs(cur)\n            print(f"pending jobs found: {len(pending_jobs)}")\n            for job in pending_jobs:\n                run_job(cur, job)\n            conn.commit()\n        except Exception as e:\n            print(f"error while running jobs: {e}")\n        time.sleep(JobConfig.poll_interval)\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,r.kt)("h2",{id:"test-script"},"Test Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="script.py"',title:'"script.py"'},'import psycopg\n\nconn = psycopg.connect("dbname=job_db user=postgres")\n\ncur = conn.cursor()\n\nfor i in range(5):\n    conn.execute(\n        "insert into jobs (job_data, job_status) values (%s, %s)",\n        [f"hello world {i}", "pending"],\n    )\n\nconn.commit()\n\n')),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="requirements.txt"',title:'"requirements.txt"'},"psycopg==3.1.8\ntyping-extensions==4.4.0\n\n")),(0,r.kt)("h2",{id:"sql"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="migrations/1_jobs.sql"',title:'"migrations/1_jobs.sql"'},"create table jobs (\n  job_id bigserial primary key,\n  job_data text,\n  job_status text,\n  attempts int default 0,\n  last_error text,\n  run_at timestamp default now(),\n  created_at timestamp default now(),\n  updated_at timestamp default now()\n)\n")))}c.isMDXComponent=!0}}]);