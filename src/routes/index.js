const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Homepage route
router.get('/', async (req, res, next) => {
    try {
        // Get featured products for homepage
        const featuredProducts = Product.getFeaturedProducts();
        
        res.render('index', {
            title: 'Welcome to Our Sales Website',
            products: featuredProducts,
            message: 'Discover amazing products at great prices!'
        });
    } catch (error) {
        next(error);
    }
});

// About page route
router.get('/about', (req, res, next) => {
    try {
        res.render('about', {
            title: 'About Us',
            message: 'Learn more about our company and mission'
        });
    } catch (error) {
        next(error);
    }
});

// Products page route
router.get('/products', async (req, res, next) => {
    try {
        const allProducts = Product.getAllProducts();
        
        res.render('products', {
            title: 'Our Products',
            products: allProducts,
            message: 'Browse our complete product catalog'
        });
    } catch (error) {
        next(error);
    }
});

// Contact page route
router.get('/contact', (req, res, next) => {
    try {
        res.render('contact', {
            title: 'Contact Us',
            message: 'Get in touch with our team'
        });
    } catch (error) {
        next(error);
    }
});

// Contact form submission
router.post('/contact', (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        
        // Here you would typically save to database or send email
        console.log('Contact form submission:', { name, email, message });
        
        res.render('contact', {
            title: 'Contact Us',
            message: 'Thank you for your message! We will get back to you soon.',
            success: true
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;