const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20 hours"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 hours"
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 hours"
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15 hours"
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 hours"
        }
    }
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1.Print all device names.
console.log("---Print all device names.---");

devices.forEach(dev=> console.log(dev.name)
)

// 2.Print all device names whose price is greater than $800.
console.log("---Print all device names whose price is greater than $800--");

devices.filter(dev=>dev.price>800).forEach(dev=> console.log(dev.name));


// 3.Print out-of-stock devices.
console.log('--.Print out-of-stock devices.--');

devices.filter(dev=>dev.inStock=='No').forEach(dev=> console.log(dev.name));

// 4.Find the device names with battery life greater than 20 hours.
console.log('---Find the device names with battery life greater than 20 hours.---');

const x=devices.filter(life=>life.features.batteryLife>'20hours').map(dev=>dev.name)
console.log(x);


// 5.Calculate the total revenue generated when all available devices are sold out.
console.log('----Calculate the total revenue generated when all available devices are sold out.---');

