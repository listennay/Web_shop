# Docker Setup for Sales Website

This document explains how to run the Sales Website using Docker containers.

## Prerequisites

- Docker Desktop installed on your system
- Docker Compose (included with Docker Desktop)

## Quick Start

### Development Mode
```bash
# Using npm scripts
npm run docker:dev

# Or using docker-compose directly
docker-compose -f docker-compose.dev.yml up --build
```

### Production Mode
```bash
# Using npm scripts
npm run docker:prod

# Or using docker-compose directly
docker-compose up --build -d
```

## Docker Files Explained

### `Dockerfile`
Multi-stage Dockerfile with:
- **Development stage**: Includes dev dependencies and nodemon
- **Production stage**: Optimized image with only production dependencies
- **Security**: Runs as non-root user
- **Health checks**: Built-in health monitoring

### `docker-compose.yml` (Production)
- **sales-website**: Main Node.js application
- **nginx**: Reverse proxy with caching and security headers
- **Networks**: Isolated container network
- **Volumes**: Persistent logs storage

### `docker-compose.dev.yml` (Development)
- **Hot reloading**: Source code mounted as volume
- **Development dependencies**: Includes nodemon and dev tools
- **Port mapping**: Direct access to port 3000

## Available Commands

### Docker Compose Commands
```bash
# Start development server
docker-compose -f docker-compose.dev.yml up --build

# Start production server
docker-compose up --build -d

# Stop all containers
docker-compose down

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f sales-website
```

### NPM Scripts
```bash
npm run docker:dev      # Start development mode
npm run docker:prod     # Start production mode
npm run docker:stop     # Stop all containers
npm run docker:logs     # View logs
npm run docker:build    # Build image only
```

### Windows Batch Scripts
```cmd
scripts\dev.bat         # Start development mode
scripts\prod.bat        # Start production mode
```

### Linux/Mac Shell Scripts
```bash
./scripts/dev.sh        # Start development mode
./scripts/prod.sh       # Start production mode
```

## Access Points

### Development Mode
- **Application**: http://localhost:3000
- **Health Check**: http://localhost:3000/health

### Production Mode
- **Application**: http://localhost (via nginx)
- **Direct App**: http://localhost:3000
- **Health Check**: http://localhost/health

## Environment Variables

You can customize the application using environment variables:

```yaml
environment:
  - NODE_ENV=production          # Environment mode
  - PORT=3000                   # Application port
  - LOG_LEVEL=info              # Logging level
```

## Volume Mounts

### Development
- `./:/app` - Source code for hot reloading
- `/app/node_modules` - Anonymous volume for node_modules

### Production
- `./logs:/app/logs` - Persistent log storage

## Health Monitoring

The application includes built-in health checks:

- **Endpoint**: `/health`
- **Docker Health Check**: Runs every 30 seconds
- **Response**: JSON with status, timestamp, uptime

Example health response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600.5,
  "environment": "production"
}
```

## Security Features

### Dockerfile Security
- Non-root user execution
- Minimal base image (Alpine Linux)
- No unnecessary packages
- Proper signal handling with dumb-init

### Nginx Security (Production)
- Security headers (XSS, CSRF protection)
- Rate limiting (10 requests/second)
- Gzip compression
- Static file caching

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Stop existing containers
   docker-compose down
   # Or change port in docker-compose.yml
   ```

2. **Permission denied errors**
   ```bash
   # On Linux/Mac, make scripts executable
   chmod +x scripts/*.sh
   ```

3. **Container won't start**
   ```bash
   # Check logs
   docker-compose logs -f sales-website
   ```

4. **Changes not reflected (development)**
   ```bash
   # Rebuild the development image
   docker-compose -f docker-compose.dev.yml up --build
   ```

### Debug Commands
```bash
# Enter running container
docker exec -it sales-website sh

# View container processes
docker ps

# View images
docker images

# Clean up unused resources
docker system prune
```

## Performance Optimization

### Production Optimizations
- Multi-stage build reduces image size
- Only production dependencies included
- Nginx caching for static assets
- Gzip compression enabled
- Health checks for container orchestration

### Development Optimizations
- Volume mounting for fast reloads
- All dev dependencies available
- Direct port access for debugging

## Deployment

### Local Development
Use the development Docker setup for local development with hot reloading.

### Production Deployment
The production Docker setup is ready for deployment to:
- Cloud platforms (AWS, GCP, Azure)
- Container orchestration (Kubernetes, Docker Swarm)
- VPS servers with Docker installed

### CI/CD Integration
The Docker setup is compatible with CI/CD pipelines:
```bash
# Build
docker build -t sales-website .

# Test
docker run --rm sales-website npm test

# Deploy
docker-compose up -d
```