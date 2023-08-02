import { useState } from "react";
import Layout from "./layout";
import axios from "axios";

export default function LoginForm(){
    const [email,setEmail]=useState('');
    const [password,setpass]=useState('');
    const [error,setError]=useState('');

    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    };
    const handleChangepass = (e) =>{
        setpass(e.target.value);
    };

    const handlesubmit= async (e)=>
    {
        e.preventDefault();

        //platform validation
if(!email || !password){
    setError("Email and password are required");
}
else if(isValidEmail(email)){
    setError("Invalid email address");
}
else{
    // getUser(email,password);
    // console.log({email,password});
    // setEmail('');
    // setpass('');
    // seteerror('');
    const res=await dosignin(email,password)
    console.log(res);
    if(res==true){
        Router.push('/profile')
    }
    else{
        setError("not found")
    }
}
    };
    const isvalidemail=(email)=>{
        const emailpattern="/^\S+@\S+\./S+$";
        return emailpattern.test(email);
    };

    return (
        <>
        {/* <Title page="title"></Title> */}
        <Layout>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <div>
                <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleChangeEmail}/>

                </div>
                <div>
                <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChangepass}/>

                </div>
                {error && <p>{error}</p>}
                <button type="submit" >Login</button>
            </form>

        </Layout>


        </>
    );

};
async function dosignin(email,password){
    try{
        const response=await axios.post('',
        email,
        password,
    );
    }
    
    catch(exc){
        console.error("Login failed",error);
    }
    console.log(response.data);
    return rerponse.data;
}

async function getUser() {
    try {

    const response = await axios.get('http://localhost:3000/admin/signin/',{email,password});
    console.log(response);
    } catch (error) {
    console.error(error);
    }
    }