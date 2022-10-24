# Docker Cheat Sheet

## Dockerfile examples

```
FROM python:3.9
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD [ "uvicorn", "main:app", "--reload", "--host", "0.0.0.0" ]
```

```
FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]
```

## Build image

```
docker build -t nfp-backend .
```

```
docker build -t nfp-frontend .
```

The -t flag tags the image.

## Run container

```
docker run -p 8000:8000 -it --rm --name nfp-backend-running nfp-backend
```

```
docker run -p 3000:3000 -it --rm --name nfp-frontend-running nfp-frontend
```

- The -p flag maps the host port to the container port. HOST:CONTAINER
- The -i and -t flags are commonly used in combination for terminal access. It is shortened to -it.
- The --rm flag ensures the container is automatically removed when it exists.
- nfp-backend-running is the name of the running container.
- nfp-backend is the name of the image.

## Bind Mounts

```
docker run -p 8000:8000 -it --rm --name nfp-backend-running -v "$PWD":/usr/src/app nfp-backend
```

```
docker run -p 3000:3000 -it --rm --name nfp-frontend-running -v "$PWD":/usr/src/app nfp-frontend
```

The `-v "$PWD":/usr/src/app` will map your current directory to the /usr/src/app directory in the container. Now, the changes you make will be reflected in the container.

## Docker Compose YAML

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

Note: The named volume is needed to persist data.

## Point database host in docker container to local machine

```
DATABASE_URL=postgresql://nfp_boilerplate_user:password@host.docker.internal/nfp_boilerplate_dev
```

This allows the app inside the container to connect to the PostgreSQL instance running on your host machine.

## Point database host to another database container

```
DATABASE_URL=postgresql://nfp_boilerplate_user:password@db/nfp_boilerplate_dev
```

## List running docker processes.

```
docker ps
```

## Open terminal into docker container.

```
docker exec -it nfp-boilerplate_backend_1 bash
```

## Shut down docker compose

```
docker compose down
```

## Start docker compose

```
docker compose up
```

## List volumes

```
docker volume ls
```

## Delete everything

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
