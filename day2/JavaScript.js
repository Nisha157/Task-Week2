let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Mouse",
        price: 1000,
        category: "Accessories"
    },
    {
        name: "Keyboard",
        price: 2000,
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

const calculateTotal = (products) => {
    let total = 0;

    for (let product of products) {
        total += product.price;
    }

    return total;
};

console.log("Total Price:", calculateTotal(products));

const { name, price } = products[0];

console.log("Product name:", name);
console.log("Product Price:", price);