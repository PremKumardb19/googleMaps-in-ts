import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
// export const name="name"
// export default names="name"
export class User implements Mappable{
    name:string;
    location:{
        lat:number,
        lng:number
    }
    color:string="red"
    markerContent():string{
        return `User Name : ${this.name}`
    }
    constructor(){
        this.name=faker.name.firstName()
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
        console.log(this.location)
    }
    // other method for declaring the attributes
    //constructor(public name:String,public location:{lat:number,lng:number}){}
}
