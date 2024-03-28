const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 80;

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.primerNombre = faker.internet.userName();
        this.apellido = faker.internet.userName();
        this.numeroTelefono = faker.number.int();
        this.contraseña = faker.internet.password();
    }
}

const createUser = () =>{
    const newUser ={
        _id : faker.string.uuid(),
        primerNombre : faker.internet.userName(),
        apellido : faker.internet.userName(),
        numeroTelefono : faker.number.int(),
        contraseña : faker.internet.password(),
    }
    return newUser;
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.streetAddress(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

const createCompany = () =>{
    const newCompany ={
        _id : faker.string.uuid(),
        nombre : faker.company.name(),
        direccion : {
            calle: faker.location.streetAddress(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        }
    }
    return newCompany;
}

console.log(new Usuario());
console.log(new Empresa());

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.post("/api/users/v1/new", (req, res) => {
    const newUser = new Usuario();
    console.log(newUser);
    res.json( { newUser: newUser } );
});

app.post("/api/companies/v1/new", (req, res) => {
    const newCompany = new Empresa();
    console.log(newCompany);
    res.json( { newCompany: newCompany } );
});

app.post("/api/users/v2/new", (req, res) => {
    res.json( { newUser: createUser() } );
});

app.post("/api/companies/v2/new", (req, res) => {
    res.json( { newCompany: createCompany() } );
});

app.post("/api/company/v1/new", (req, res) => {
    const newCompany = new Empresa();
    const newUser = new Usuario();
    console.log(newCompany);
    console.log(newUser);
    res.json({ newUser: newUser, newCompany: newCompany });
});

app.post("/api/company/v2/new", (req, res) => {
    res.json({ newUser: createUser(), newCompany: createCompany() });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

