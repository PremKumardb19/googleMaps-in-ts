"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    markerContent() {
        return `<div>
                <h1>Company Name : ${this.companyName}</h1>
                <h3>Catchphrase: ${this.catchPhrase}</h3>
                </div>`;
    }
    constructor() {
        this.color = "red";
        this.companyName = faker_1.faker.company.companyName();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude())
        };
    }
}
exports.Company = Company;
