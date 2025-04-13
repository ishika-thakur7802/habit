import React from 'react';
import '../pages-css/LandingPage.css';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import React, { useState } from "react";

const handleSubmit=(e)=>
{
    e.preventDefault()
    console.log(formData)
}
const Form=()=>{
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
}
const SignUp = () => {
    return (
        <div className={'SignUp'}>
            <section className="App-header">
                <Header/>
            </section>
            <div className={'container-su'}>
                <div className={'sign-up-box'}>
                    <div className={'hello'}>
                        <h2>Hello There!</h2>
                        <h4>Build that Habit NOW!</h4>
                    </div>
                    <div className={'Ques-Fields'}>
                        <form onSubmit={handleSubmit}>
                            <input onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} type={"text"} placeholder={"Name"} name={"name"} id={"name"}/><br/>
                            <input onChange={(e)=>setFormData({...formData, email:e.target.value})} value={formData.email} type={"text"} placeholder={"E-Mail"} name={"email"} id={"email"}/><br/>
                            <input onChange={(e)=>setFormData({...formData, password: e.target.value})} value={formData.password} type={"password"} placeholder={"Password"} name={"password"} id={"password"}/><br/>
                            <input type={"submit"} value={"LESGO"}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;