Environment Setup:
npm i -g @nestjs/cli
nest new 3np_backend[3np_backend project folder name]

Run:
npm run start
Open Postman : localhost:3000["Hello world"]["domain":"port address"]
npm run start:Dev[auto refresh]

File System::
main.ts->main file
moduler->Registration[have to register]
controller->Controller[handles business logic and request handle]
service->Provider[database fetch]

let->specific block[{}=block]; its scope is local 
const->constant not re-initialized; global scope
var->doen't matter

Datatypes->boolean,numbers,string,any,Array,void,objects
Decorators-> additional infos over primary function.["@=Decorators"]

Generics/Templates:
       datatype,object,class can be changed time to time
       Depends over call its datatype will be  changed.

Asynchronous Programming:
       Promise success->then()
       Promise error->catch()
       else :Pending()
       //starts with async keyword[function]
       await-> task complete 1 task uncomplete till then he wont leave the task
       failure->catch()

 //Pipes
 -Transform
 -Validate
 -Manipulate(one to another datatype-manipulattion/transformation)
 Pipe validation if not succeded @Get() will not validate.

 2 types of pipes.
 1.Transformation pipe-one cast to another cast
 2.Validation Pipe-
 class-validator[pre-defined library] (external library)
 npm install class-validator class-transformer

 class-validator:
 classes are decorators[special previliges provide for another function]

@ usepipesq- checks validation

installing Multer typing Packages->npm i -D @types/multer
1.Multer handles data posted in the multipart/form-data format
2.primarily used for uploading files via an HTTP POST request.

