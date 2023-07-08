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

PROMISE RETURN FUNCTION COMPLETE ELSE INCOMPLETE[ENTITY CLASS DATA RETURN IN GENERIC VALUES]
ASYNC->DATATYPE PASS BUT DONT WAIT FOR RESPONSE 
AWAIT->Doesn't work until get response from promise.

cascade->email user deleted , to enable this option we use cascade to true.
onetomany->many(array)


//Code-7(Authentication)
//for multiple operations we will use asynchronous in a single function
//multiple process->await function
//for single-> async is optional 
//findone->return single data      
//find->return array of data

//Data Storing Security->
1.Bcrypt (hashing)
->Encryption-Two way encoding(if we encode using encryption a data we can also decode it)
If i hash any data i cannot dehash it. So,
Hashing-> One way Encoding

->Bcrypt(library of nodejs eco-system)
*Used for password hashing
Salt/Salting(random value)[for making password stronger].Salting function provided by Bcrypt.

Installation :
$ npm i bcrypt //install bcrypt
$ npm i -D @types/bcrypt //for supporting ts

To generate a salt, use the genSalt function:
//const salt = await bcrypt.genSalt();
To generate a salt, use the genSalt function:
To perform hash 
//const hassedpassed = await bcrypt.hash(password, salt);
To compare/check a password:
//const isMatch = await bcrypt.compare(password, dbpassword)[dbpassword=hashed value stored in db]


