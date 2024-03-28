const { faker } = require('@faker-js/faker');
class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
        this.userId = faker.string.uuid();
        this.username = faker.internet.userName();
        this.email = faker.internet.email();
        this.avatar = faker.image.avatar();
        this.password = faker.internet.password();
        this.birthdate = faker.date.birthdate();
        this.registeredAt = faker.date.past();
    }
}

console.log(new Product());
/*
 * La salida en consola de la línea anterior tendrá el siguiente aspecto
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
