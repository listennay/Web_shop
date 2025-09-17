#!/bin/bash

# Build and run the sales website in development mode

echo "🚀 Starting Sales Website in Development Mode..."

# Stop any existing containers
docker-compose -f docker-compose.dev.yml down

# Build and start the development container
docker-compose -f docker-compose.dev.yml up --build

echo "✅ Development server started!"
echo "📱 Visit: http://localhost:3000"