import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO } from "./admin.dto";

@Controller("admin")
export class AdminController{
    constructor(private readonly adminservice:AdminService){}
    @Get("/index")//route
    getindex():any{
        return this.adminservice.getIndex();
        
    }
    //part-1
    // @Get("search")
    // getAdminbyName(@Query() name:object, @Query() id:number):object{
    //     return this.adminservice.getAdminbyName(name);
    //     // return {name:name};
    // }
    //Part-2
    // @Get("search")
    // getAdminbyName(@Query() qry:any):object{
    //     // return this.adminservice.getAdminbyName(qry);
    //     // return {name:name};
    //     // return {Name:qry.name, Id:qry.id};
    //     return qry;
    // }
    @Get("search")
    getAdminbyName(@Query() qry:AdminDTO):string{
        return this.adminservice.getAdminbyName(qry);
        
    }

    @Get("/search/:id")
    getAdminbyId(@Param() id:number):any{
        return this.adminservice.getAdminById(id);

    }

    // //orginal
    // @Post("/addadmin")
    // addadmin(@Body() data:object):object{
    //     return this.adminservice.addAdmin(data);
    // }

    //After applying DTOs
    //  @Post("/addadmin")
    //  addadmin(@Body() data:AdminDTO):object{
    //      return this.adminservice.addAdmin(data);
    //  }

    //Needed To Change
    @Post("/addadmin")
    @UsePipes(new ValidationPipe())
     addadmin(@Body() data:AdminDTO):string{
        console.log(data);
         return this.adminservice.addAdmin(data);
     }

    }
