let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Mouse",
        price: 800,
        category: "Accessories"
    },
    {
        name: "Keyboard",
        price: 700,
        category: "Accessories"
    },
    {
        name: "Monitor",
        price: 15000,
        category: "Electronics"
    },
    {
        name: "Headphones",
        price: 3000,
        category: "Audio"
    }
];

// Products under ₹1000
const lowPriceProducts = products.filter(product => product.price < 1000);

console.log("Products under ₹1000:", lowPriceProducts);


// Get product names
const productNames = products.map(product => product.name);

console.log("Product Names:", productNames);


// Calculate total price
const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);