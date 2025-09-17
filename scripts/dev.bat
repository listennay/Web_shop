@echo off
REM Windows batch script to start development server

echo 🚀 Starting Sales Website in Development Mode...

REM Stop any existing containers
docker-compose -f docker-compose.dev.yml down

REM Build and start the development container
docker-compose -f docker-compose.dev.yml up --build

echo ✅ Development server started!
echo 📱 Visit: http://localhost:3000