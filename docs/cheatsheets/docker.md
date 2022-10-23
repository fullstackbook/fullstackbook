# Docker Cheat Sheet

## Backend Dockerfile

Create Dockerfile in nfp-backend.

```
FROM python:3.9
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD [ "uvicorn", "main:app", "--reload", "--host", "0.0.0.0" ]
```

In .env, you will want to change the localhost string in your DATABASE_URL to host.docker.internal. It should look something like this.

```
DATABASE_URL=postgresql://nfp_boilerplate_user:password@host.docker.internal/nfp_boilerplate_dev
```

This allows the app inside the container to connect to the PostgreSQL instance running on your host machine.

### Build the image

```
docker build -t nfp-backend .
```

The -t flag tags the images.

### Run the container

```
docker run -p 8000:8000 -it --rm --name nfp-backend-running nfp-backend
```

- The -p flag maps the host port to the container port. HOST:CONTAINER
- The -i and -t flags are commonly used in combination for terminal access. It is shortened to -it.
- The --rm flag ensures the container is automatically removed when it exists.
- nfp-backend-running is the name of the running container.
- nfp-backend is the name of the image.

## Frontend Dockerfile

Create Dockerfile in nfp-frontend.

```
FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]
```

### Run the build

```
docker build -t nfp-frontend .
```

### Run the container

```
docker run -p 3000:3000 -it --rm --name nfp-frontend-running nfp-frontend
```

Bind Mounts

```
docker run -p 8000:8000 -it --rm --name nfp-backend-running -v "$PWD":/usr/src/app nfp-backend
```

The -v "$PWD":/usr/src/app will map your current directory to the /usr/src/app directory in the container. Now, the changes you make will be reflected in the container.

The bind mount can now be used for the frontend:

```
docker run -p 3000:3000 -it --rm --name nfp-frontend-running -v "$PWD":/usr/src/app nfp-frontend
```

## Docker Compose

Create a docker-compose.yml in the project root.

```
version: "3.9"
services:
  backend:
    build: nfp-backend
    ports:
      - 8000:8000
    volumes:
      - ./nfp-backend:/usr/src/app
  frontend:
    build: nfp-frontend
    ports:
      - 3000:3000
    volumes:
      - ./nfp-frontend:/usr/src/app
```

## Run docker compose

```
docker compose up
```

With one command, you can build and run all of the containers at the same time.

## Database container

Add the following to the docker-compose.yml under services.

```
db:
    image: postgres:14
    restart: always
    environment:
      POSTGRES_USER: nfp_boilerplate_user
      POSTGRES_DB: nfp_boilerplate_dev
      POSTGRES_PASSWORD: password
```

In .env:

```
DATABASE_URL=postgresql://nfp_boilerplate_user:password@db/nfp_boilerplate_dev
```

In alembic.ini:

```
sqlalchemy.url = postgresql://nfp_boilerplate_user:password@db/nfp_boilerplate_dev
```

Notice that the host has changed to db in both files.

Type ctrl+c to shut down the currently running process.

Then run docker compose again:

```
docker compose up
```

We will need to run the migrations again since this is a new DB.

## List running docker processes.

```
docker ps
```

## Open terminal into docker container.

```
docker exec -it nfp-boilerplate_backend_1 bash
```

Note: Make sure the container name matches what was listed from the docker ps.

Inside of the container, run migrations:

```
alembic upgrade head
```

Then, exit the container:

```
exit
```

Open a terminal into the database container.

```
docker exec -it nfp-boilerplate_db_1 bash
```

Open a psql session:

```
psql -U nfp_boilerplate_user nfp_boilerplate_dev
```

Verify that the tables were created.

```
\dt
```

Verify the app is still functioning in by going to http://localhost:3000/notes in your browser.

Docker networks

```
curl backend:8000
```

## Named volumes

Add the following to the docker-compose.yml:

```
volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```  

## docker-compose.yml

```
version: "3.9"
services:
  backend:
    build: nfp-backend
    ports:
      - 8000:8000
    volumes:
      - ./nfp-backend:/usr/src/app
  frontend:
    build: nfp-frontend
    ports:
      - 3000:3000
    volumes:
      - ./nfp-frontend:/usr/src/app
  db:
    image: postgres:14
    restart: always
    environment:
      POSTGRES_USER: nfp_boilerplate_user
      POSTGRES_DB: nfp_boilerplate_dev
      POSTGRES_PASSWORD: password
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```

Type ctrl+c to shut down the docker compose process.

Then run:

```
docker compose down
```

Then bring the containers back up with:

```
docker compose up
```

The data in the container should have persisted. Without the named volume, the data would be wiped forever if the image gets removed.

## List volumes

```
docker volume ls
```

## Armageddon

Run this sequence of commands to destroy everything.

```
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker network prune -f
docker rmi -f $(docker images --filter dangling=true -qa)
docker volume rm $(docker volume ls --filter dangling=true -q)
docker rmi -f $(docker images -qa)
```

## References

- https://medium.com/@travisluong/how-to-develop-a-full-stack-next-js-fastapi-postgresql-app-using-docker-7d6412fb44c7
- https://github.com/travisluong/nfp-boilerplate