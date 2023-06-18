import { Body, Controller, Get, Param,Put, Post, Query, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, Res } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDTO, AdminUpdateDTO } from "./admin.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError , diskStorage} from "multer";

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

    //  @Put("/adminupdate")
    //  updateadmin(@Body() data:AdminUpdateDTO):object{
    //     return this.adminservice.updateadmin(data);
    //  }

     @Put("/adminupdate/:id")
     @UsePipes(new ValidationPipe())
     updateadminbyid(@Param() id:number, @Body() data:AdminDTO):object{
        return this.adminservice.updateadminbyid(id,data);
     }
     //file 
     //without validation

    //  @Post('/upload')
    //  @UseInterceptors(FileInterceptor('myfile'))//argument-html name
    //  uploadfile(@UploadedFile() myfileobj:Express.Multer.File):object
    //  {
    //     console.log(myfileobj);
    //     return ({message:"file uploaded"});
    //  }

    //File validation
    @Post(('/upload'))
    @UseInterceptors(FileInterceptor('myfile',
    { fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
         cb(null, true);
        else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
        }
        },
        limits: { fileSize: 30000 },
        storage:diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
        },
        })
        }
    ))
    uploadFile(@UploadedFile() myfileobj: Express.Multer.File):object
{
 console.log(myfileobj)   
return ({message:"file uploaded"});
}

@Get('/getimage/:name')
getImages(@Param('name') name, @Res() res) {
 res.sendFile(name,{ root: './uploads' })
 }


    }
