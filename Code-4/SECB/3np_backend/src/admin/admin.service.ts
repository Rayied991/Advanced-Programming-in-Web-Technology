import { Injectable } from "@nestjs/common";
import { AdminDTO } from "./admin.dto";


@Injectable()
export class AdminService {
    getIndex(): string{
        return "Hellow Admin";
    }
    getAdminById(id:number):any{
        return ({id:2, name:"Abc",age:30})
    }
    //part-1
    // getAdminbyName(name:any):object{
    //         return {name:"abc",age:23};
    // }
    //DTO Error
//     getAdminbyName(mydata:object):object{
//         return mydata.name;////error occurs due to DTO; we can overcome this using DTO
// }
getAdminbyName(mydata:AdminDTO):string{
    return mydata.name;////error occurs due to DTO; we can overcome this using DTO
}
//ORIGINAL
    // addAdmin(data:object){
    //     return data;
    // }

    //After applying DTOs
    addAdmin(data:AdminDTO):string{
            return data.email;
        }
    
  }