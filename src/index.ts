/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
// import names from "./User"
//imported using default import 

const user=new User()
const company=new Company()
const customMap=new CustomMap("map")
customMap.addMarker(user)
customMap.addMarker(company)
// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)
// customMap.googleMap  can't access since the googleMap attribute is private
console.log(user)
console.log(company)

