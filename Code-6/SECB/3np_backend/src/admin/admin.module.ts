import {  Module } from "@nestjs/common";
// import { AdminController } from "./admin.controller";
import {  AdminAddress, AdminEntity, AdminProfile } from "./admin.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { ManagerEntity } from "src/Manager/manager.entity";

@Module({
    imports:[TypeOrmModule.forFeature([AdminEntity,AdminProfile,AdminAddress,ManagerEntity]),],
    controllers:[AdminController],//controller
    providers:[AdminService],//service  
})
export class AdminModule{}