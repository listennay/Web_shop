const errorHandler = (err, req, res, next) => {
    // Log error details for debugging
    console.error('❌ Error occurred:');
    console.error('Message:', err.message);
    console.error('Stack:', err.stack);
    console.error('URL:', req.originalUrl);
    console.error('Method:', req.method);
    console.error('Time:', new Date().toISOString());
    console.error('---');

    // Set default error status
    let status = err.status || 500;
    let message = err.message || 'Internal Server Error';

    // Handle specific error types
    if (err.name === 'ValidationError') {
        status = 400;
        message = 'Validation Error: ' + err.message;
    } else if (err.name === 'CastError') {
        status = 400;
        message = 'Invalid data format';
    } else if (err.code === 'ENOENT') {
        status = 404;
        message = 'File not found';
    }

    // Development vs Production error handling
    const isDevelopment = process.env.NODE_ENV !== 'production';

    if (isDevelopment) {
        // In development, show detailed error information
        res.status(status).render('error', {
            title: `Error ${status}`,
            message: message,
            error: err,
            stack: err.stack,
            isDevelopment: true
        });
    } else {
        // In production, show user-friendly error messages
        const userMessage = status === 500 
            ? 'Something went wrong on our end. Please try again later.' 
            : message;

        res.status(status).render('error', {
            title: `Error ${status}`,
            message: userMessage,
            error: {},
            stack: null,
            isDevelopment: false
        });
    }
};

module.exports = errorHandler;