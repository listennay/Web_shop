#!/bin/bash

# Build and run the sales website in production mode

echo "🚀 Starting Sales Website in Production Mode..."

# Stop any existing containers
docker-compose down

# Build and start the production container with nginx
docker-compose up --build -d

echo "✅ Production server started!"
echo "📱 Visit: http://localhost"
echo "🔍 Check logs: docker-compose logs -f"