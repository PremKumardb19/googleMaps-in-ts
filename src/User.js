"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = require("@faker-js/faker");
// export const name="name"
// export default names="name"
class User {
    markerContent() {
        return `User Name : ${this.name}`;
    }
    constructor() {
        this.color = "red";
        this.name = faker_1.faker.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude())
        };
        console.log(this.location);
    }
}
exports.User = User;
