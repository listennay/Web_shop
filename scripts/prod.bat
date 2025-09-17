@echo off
REM Windows batch script to start production server

echo 🚀 Starting Sales Website in Production Mode...

REM Stop any existing containers
docker-compose down

REM Build and start the production container with nginx
docker-compose up --build -d

echo ✅ Production server started!
echo 📱 Visit: http://localhost
echo 🔍 Check logs: docker-compose logs -f