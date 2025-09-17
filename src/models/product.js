class Product {
    constructor(id, name, price, description, image, featured = false) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.featured = featured;
    }

    // Sample product data (in a real app, this would come from a database)
    static getProducts() {
        return [
            new Product(1, 'Laptop Gaming', 15000000, 'High-performance gaming laptop with RTX graphics', '/images/laptop.jpg', true),
            new Product(2, 'Smartphone Premium', 8000000, 'Latest smartphone with advanced camera system', '/images/phone.jpg', true),
            new Product(3, 'Wireless Headphones', 2000000, 'Premium noise-canceling wireless headphones', '/images/headphones.jpg', false),
            new Product(4, 'Smart Watch', 3000000, 'Feature-rich smartwatch with health monitoring', '/images/watch.jpg', true),
            new Product(5, 'Tablet Pro', 6000000, 'Professional tablet for creative work', '/images/tablet.jpg', false),
            new Product(6, 'Gaming Mouse', 500000, 'High-precision gaming mouse with RGB lighting', '/images/mouse.jpg', false)
        ];
    }

    // Get all products
    static getAllProducts() {
        return this.getProducts();
    }

    // Get featured products for homepage
    static getFeaturedProducts() {
        return this.getProducts().filter(product => product.featured);
    }

    // Get product by ID
    static getProductById(id) {
        const products = this.getProducts();
        return products.find(product => product.id === parseInt(id));
    }

    // Search products by name
    static searchProducts(query) {
        const products = this.getProducts();
        return products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Format price for display
    formatPrice() {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(this.price);
    }
}

module.exports = Product;