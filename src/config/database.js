// Database configuration
// This is a placeholder for future database integration

const dbConfig = {
    // For now, we're using in-memory data
    // In the future, you can add database connections here
    
    development: {
        // Example MongoDB configuration
        // host: 'localhost',
        // port: 27017,
        // database: 'sales_website_dev'
        
        // Example MySQL configuration
        // host: 'localhost',
        // port: 3306,
        // database: 'sales_website_dev',
        // username: 'root',
        // password: 'password'
    },
    
    production: {
        // Production database configuration
        // Use environment variables for sensitive data
        // host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        // database: process.env.DB_NAME,
        // username: process.env.DB_USER,
        // password: process.env.DB_PASSWORD
    },
    
    test: {
        // Test database configuration
        // database: 'sales_website_test'
    }
};

// Get current environment
const environment = process.env.NODE_ENV || 'development';

// Export configuration for current environment
module.exports = {
    current: dbConfig[environment],
    all: dbConfig,
    environment: environment
};

// Future database connection function
// const connectDatabase = async () => {
//     try {
//         // Add database connection logic here
//         console.log(`📊 Connected to ${environment} database`);
//     } catch (error) {
//         console.error('❌ Database connection failed:', error.message);
//         process.exit(1);
//     }
// };

// module.exports.connect = connectDatabase;