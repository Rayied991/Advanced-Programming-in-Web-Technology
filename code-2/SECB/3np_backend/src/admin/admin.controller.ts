import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller("admin")
export class AdminController{
    constructor(private readonly adminservice:AdminService){}
    @Get("/index")//route
    getindex():any{
        return this.adminservice.getIndex();
        
    }

    @Get("/search/:id")
    getAdminbyId(@Param() id:number):any{
        return this.adminservice.getAdminById(id);

    }

    @Post("/addadmin")
    addadmin(@Body() data:object):object{
        return this.adminservice.addAdmin(data);
    }
   

    }
