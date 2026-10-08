
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 85000,
        category: "Electronics",
        stock: 5
    },
    {
        id: 2,
        name: "Smartphone",
        price: 15000,
        category: "Electronics",
        stock: 10
    },
    {
        id: 3,
        name: "Headphones",
        price: 5000,
        category: "Electronics",
        stock: 15
    },
    {
        id: 4,
        name: "Mouse",
        price: 500,
        category: "Electronics",
        stock: 20
    },
    {
        id: 5,
        name: "Keyboard",
        price: 1000,
        category: "Electronics",
        stock: 25
    }
];

const inventory = products.map((product) => ({
    ...product,
    totalValue: product.price * product.stock,
    badge: product.price >= 10000 ? "Premium" : "Affordable"
}));

const lowStockExpense = products.filter((product) => {
    return product.stock <= 5 && product.price >= 1000;
});

const clearanceItems = products
    .filter((product) => product.stock > 10)
    .map((product) => ({
        name: product.name,
        salePrice: product.price * 0.8,
        savings: product.price * 0.2
    }));


const restockShipment = products
    .filter((product) => product.stock <= 10)
    .map((product) => ({
        ...product,
        stock: product.stock + 20,
        isRestocked: true
    }));

console.log(restockShipment);
