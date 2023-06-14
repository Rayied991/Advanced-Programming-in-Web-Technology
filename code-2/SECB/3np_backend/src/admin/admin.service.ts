import { Injectable } from "@nestjs/common";


@Injectable()
export class AdminService {
    getIndex(): string{
        return "Hellow Admin";
    }
    getAdminById(id:number):any{
        return ({id:2, name:"Abc",age:30})
    }
    addAdmin(data:object){
        return data;
    }
  }