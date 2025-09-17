# Sales Website

A modern Node.js sales website built with Express.js and EJS templating.

## Features
- Homepage with product showcase
- Responsive design
- Clean folder structure for easy maintenance
- Error handling middleware

## Project Structure
```
web_ban_hang/
├── src/
│   ├── app.js              # Main application file
│   ├── routes/             # Route handlers
│   │   └── index.js        # Homepage routes
│   ├── models/             # Data models
│   │   └── product.js      # Product model
│   ├── middleware/         # Custom middleware
│   │   └── errorHandler.js # Error handling
│   └── config/             # Configuration files
│       └── database.js     # Database configuration
├── views/                  # EJS templates
│   ├── index.ejs          # Homepage template
│   ├── layouts/           # Layout templates
│   │   └── main.ejs       # Main layout
│   └── partials/          # Partial templates
│       ├── header.ejs     # Header component
│       └── footer.ejs     # Footer component
├── public/                # Static assets
│   ├── css/              # Stylesheets
│   │   └── style.css     # Main stylesheet
│   ├── js/               # Client-side JavaScript
│   │   └── main.js       # Main JS file
│   └── images/           # Images
├── package.json          # Project dependencies
└── README.md            # This file
```

## Installation

### Option 1: Traditional Node.js Setup
1. Install Node.js dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

### Option 2: Docker Setup (Recommended)
1. Make sure Docker is installed on your system

2. Run in development mode:
```bash
npm run docker:dev
```

3. Or run in production mode:
```bash
npm run docker:prod
```

4. Access the application:
   - Development: http://localhost:3000
   - Production: http://localhost (with nginx proxy)

📖 **For detailed Docker instructions, see [DOCKER.md](DOCKER.md)**

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (not implemented yet)

## Development Guidelines

### Adding New Routes
1. Create route handlers in `src/routes/`
2. Import and use them in `src/app.js`

### Adding New Views
1. Create EJS templates in `views/`
2. Use the main layout for consistency

### Adding Static Assets
1. CSS files go in `public/css/`
2. JavaScript files go in `public/js/`
3. Images go in `public/images/`

### Error Handling
- Custom error middleware is in `src/middleware/errorHandler.js`
- All routes should use try-catch blocks for async operations

## Troubleshooting

### Common Issues
1. **Port already in use**: Change the port in `src/app.js`
2. **Module not found**: Run `npm install` to install dependencies
3. **Template errors**: Check EJS syntax in view files

### Debugging
- Use `console.log()` for basic debugging
- Check the terminal for error messages
- Verify file paths are correct (case-sensitive on some systems)

## License
MIT