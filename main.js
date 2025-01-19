// Класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }
    getInfo() {
        return this.type + " " + this.brand;
    }
    getPrice() {
        return "Price: " + this.price.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }
    getImage() {
        return this.image.slice(1,-1);
    }
}

// создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
class Car extends Transport {
    constructor(type, price, brand, image, doors) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return "Number of doors: " + this.doors;
    }
}

// создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла. 

class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return "Max speed: " + this.maxSpeed +" km/h";

    }
}

// Объект для работы
const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
];

// Создаём объекты
const productCar1 = new Car(
    data[0].type,
    data[0].price,
    data[0].brand,
    data[0].image,
    data[0].doors
);
const productCar2 = new Car(
    data[1].type,
    data[1].price,
    data[1].brand,
    data[1].image,
    data[1].doors
);
const productBike1 = new Bike(
    data[2].type,
    data[2].price,
    data[2].brand,
    data[2].image,
    data[2].maxSpeed
);
const productBike2 = new Bike(
    data[3].type,
    data[3].price,
    data[3].brand,
    data[3].image,
    data[3].maxSpeed
);
// Объедиянем все продукты в массив карточек продуктов
const productCards = [
    productCar1,
    productCar2,
    productBike1,
    productBike2
];


for (let productCard of productCards) {
    const catalogue = document.getElementById('catalogue');

    const productInfo = document.createElement('h2');
    productInfo.textContent = productCard.getInfo();

    const productPrice = document.createElement('h2');
    productPrice.textContent = productCard.getPrice();

    const productImage = document.createElement('img');
    productImage.src = productCard.getImage();

    // const productExtraInfo = document.createElement('h3');
    // if (productCard.doors === undefined) {
    //     productExtraInfo.textContent = productCard.getDoorsCount();
    // } else {
    //     productExtraInfo.textContent = productCard.getMaxSpeed();
    // }

    catalogue.append(
        productImage,
        productInfo,
        // productExtraInfo,
        productPrice
    );
}


