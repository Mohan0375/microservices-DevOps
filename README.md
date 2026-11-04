# Node.js Microservices – DevOps Assignment

A small three-service application for practicing Docker, Docker Compose, Nginx, and later AWS/Jenkins deployment.

## Services

| Service | Internal port | Endpoint through Nginx |
|---|---:|---|
| User Service | 3001 | `http://localhost:8080/users/` |
| Product Service | 3002 | `http://localhost:8080/products/` |
| Order Service | 3003 | `http://localhost:8080/orders/` |

Each service also exposes `/health`. Nginx exposes its own health endpoint at `http://localhost:8080/health`.

## Prerequisites

- Docker Engine
- Docker Compose v2 (`docker compose`)
- Git (for GitHub upload)

## Run the application

From the repository root:

```bash
docker compose up -d --build
```

Check container status:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Test the services:

```bash
curl http://localhost:8080/users/
curl http://localhost:8080/products/
curl http://localhost:8080/orders/
curl http://localhost:8080/health
```

Stop the application:

```bash
docker compose down
```

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Add Node.js microservices with Docker Compose and Nginx"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.

## Architecture

```text
                   Client
                     |
             http://localhost:8080
                     |
                  Nginx
              /      |      \
             /       |       \
       User Service Product Service Order Service
          :3001        :3002        :3003
             \          |          /
               Docker Compose network
```

The three application containers are only exposed to the internal Docker network. Nginx publishes port `8080` on the host and routes requests to the appropriate service.

## Notes

- This is a minimal sample application to demonstrate the three services named in the assignment: User Service, Product Service, and Order Service.
- The sample endpoints return static JSON. They are not connected to a database and do not implement business workflows.
- For an AWS EC2 deployment, allow inbound traffic to port `8080` only from the intended client IP ranges. Do not expose internal service ports publicly.
- Add CI/CD, Terraform, Amazon ECR, Prometheus, and Grafana configuration as separate DevOps stages when you proceed with the rest of the assignment.
