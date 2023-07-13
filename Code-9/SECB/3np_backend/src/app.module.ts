import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [AdminModule,TypeOrmModule.forRoot({ type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '13042000',
  database: '3np_Project',//Change to your database name
  autoLoadEntities: true,//entity class automatically loaded
  synchronize: true,//table update automatically[production version false]
  } ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
