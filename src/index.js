"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="@types/google.maps" />
const User_1 = require("./User");
const Company_1 = require("./Company");
const CustomMap_1 = require("./CustomMap");
// import names from "./User"
//imported using default import 
const user = new User_1.User();
const company = new Company_1.Company();
const customMap = new CustomMap_1.CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);
// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)
// customMap.googleMap  can't access since the googleMap attribute is private
console.log(user);
console.log(company);
