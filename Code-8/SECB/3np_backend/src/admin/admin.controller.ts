import { Body, Controller, Get, Param,Put, Post, Query, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, Res, ParseIntPipe, Session, UnauthorizedException } from "@nestjs/common";
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
 
    @Post('/signup')
    @UseInterceptors(FileInterceptor('image',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                    cb(null, true);
                else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            // limits: { fileSize: 60000 },
            storage: diskStorage({
                destination: './uploads',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }
    ))
    @UsePipes(new ValidationPipe)
    signup(@Body() mydata: AdminDTO, @UploadedFile() imageobj: Express.Multer.File) {//returns string and file data
        console.log(mydata);
        console.log(imageobj.filename);
        mydata.filenames = imageobj.filename;
        return this.adminservice.signup(mydata);

    }
    @Post("/signin")
     async signin(@Session() session,@Body() data:AdminDTO){
       const ismatch=await this.adminservice.signin(session,data);
        if(await ismatch==1){
            session.email=data.email;
            return {message: "Logged in"};
        }
        else{
            return {mesage: "Something is wrong"};
        }
    }
    //logout
@Get('/signout')
logout(@Session() session)
{
  
  if(session.email)
  {
    session.destroy()
    return {message:"you are logged out successfully"};
  }
  else
  {
    throw new UnauthorizedException("Can't log out");
  }
}



    @Get("/search/:id")
    getAdminbyId(@Param('id',ParseIntPipe) id:number):object{
        return this.adminservice.getAdminById(id);

    }
    @Get("search")
    getAdminbyName(@Query() qry:any):object{
        return this.adminservice.getAdminbyIDAndName(qry.id,qry.name);
        
    }
    @Get('getimagebyadminid/:adminId')
    async getimagebyid(@Param('adminId',ParseIntPipe) adminId:number,@Res() res)
    {
        const filename=await this.adminservice.getimagebyadminid(adminId);
        res.sendFile(filename, {root: './uploads'})
    }
    
 @Post("/addadmin")
 @UsePipes(new ValidationPipe())
  addadmin(@Body() data:AdminDTO):object{
    //  console.log(data);
    debugger
      return this.adminservice.addAdmin(data);
  }
  @Put('/updateadmin')
  updateAdmin(@Body() data:AdminUpdateDTO):object{
       return this.adminservice.updateAdmin(data);
  }
  @Put("/adminupdate/:id")
     @UsePipes(new ValidationPipe())
     updateadminbyid(@Param() id:number, @Body() data:AdminDTO):object{
        return this.adminservice.updateAdminById(id,data);
     }
     @Post(('/upload'))
     @UseInterceptors(FileInterceptor('myfile',
         {
             fileFilter: (req, file, cb) => {
                 if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
                     cb(null, true);
                 else {
                     cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                 }
             },
             limits: { fileSize: 30000 },
             storage: diskStorage({
                 destination: './uploads',
                 filename: function (req, file, cb) {
                     cb(null, Date.now() + file.originalname)
                 },
             })
         }
     ))
     uploadFile(@UploadedFile() myfileobj: Express.Multer.File): object {
         console.log(myfileobj)
         return ({ message: "file uploaded" });
     }

     @Get('/getimage/:name')
     getImages(@Param('name') name, @Res() res) {
         res.sendFile(name, { root: './uploads' })
     }
    @Post("/addmanager")
    addManagers(@Body() manager){
        // console.log(manager);
        debugger
        return this.adminservice.addManager(manager);
    }
    @Get("/getmanager/:adminid" )
    getManagers(@Param('adminid',ParseIntPipe ) adminid:number ){
        
        debugger
        return this.adminservice.getManagerbyId(adminid);
        //admin:parent object
        //managers:child object
    }

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
    // @Post("/addadmin")
    // @UsePipes(new ValidationPipe())
    //  addadmin(@Body() data:AdminDTO):string{
    //     console.log(data);
    //      return this.adminservice.addAdmin(data);
    //  }

    //  @Put("/adminupdate")
    //  updateadmin(@Body() data:AdminUpdateDTO):object{
    //     return this.adminservice.updateadmin(data);
    //  }

     
     //file 
     //without validation

    //  @Post('/upload')
    //  @UseInterceptors(FileInterceptor('myfile'))//argument-html name
    //  uploadfile(@UploadedFile() myfileobj:Express.Multer.File):object
    //  {
    //     console.log(myfileobj);
    //     return ({message:"file uploaded"});
    //  }

   

 


    
