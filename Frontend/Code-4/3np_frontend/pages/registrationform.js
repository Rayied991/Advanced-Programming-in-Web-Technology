

//platform validation
if(!email || !password){
    seterror("Email and password are required");
}
else if(isValidEmail(email)){
    seterror("Invalid email address");
}
else{
    console.log({email,password});
    setemail('');
    setpassword('');
    seteerror('');
}

const isValidemail=(email)=>{

}