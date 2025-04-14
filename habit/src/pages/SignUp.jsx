import React from 'react';
import '../pages-css/LandingPage.css';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const[formData, setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    // const[liveHint, setLiveHint]=useState({
    //     name:"",
    //     email:"",
    //     password:""
    // });
    const[error, setError]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleOnBlur=(e)=>
    {

        const{name,value}=e.target;

        if(name==="name")
        {
            if(value.length>0 && value.length<3)
                setError(prevState => ({...prevState, [name]:"Are you sure that's your full name?"}));
            else if(value.length==0)
                setError(prevState => ({...prevState, [name]:"Name cannot be empty"}));
            else
                setError(prevState => ({...prevState, [name]:"Looks Good!"}));
        }

        if(name==="email")
        {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(value))
            {
                setError(prevState => ({...prevState, [name]:"Invalid Email"}));
            }
            else if(value.length==0)
                setError(prevState => ({...prevState, [name]:"Email cannot be empty"}));
            else
                setError(prevState => ({...prevState, [name]:"Looks Good!"}));
        }

        if(name==="password")
        {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if(!passwordRegex.test(value)){
                setError(prevState => ({...prevState, [name]:
                        "Use 8 or more characters with a mix of letters, numbers and symbols"}));
            }
            else if(value.length==0)
                setError(prevState => ({...prevState, [name]:"Password cannot be empty"}));
            else
                setError(prevState => ({...prevState, [name]:"That's a strong password"}));

        }

    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log(formData)
    }
    const isFormInvalid = () => {
        return (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            error.name !== "Looks Good!" ||
            error.email !== "Looks Good!" ||
            error.password !== "That's a strong password"
        );
    };
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
                            <input onBlur={handleOnBlur}
                                   onChange={(e)=>setFormData(prevState => ({...prevState, [e.target.name]:e.target.value}))}
                                   value={formData.name}
                                   type={"text"}
                                   placeholder={"Name"}
                                   name={"name"}
                                   id={"name"}/>
                            <p>{error.name}</p>

                            <input onBlur={(handleOnBlur)}
                                   onChange={(e)=>setFormData(prevState => ({...prevState, [e.target.name]:e.target.value}))}
                                   value={formData.email}
                                   type={"text"}
                                   placeholder={"E-Mail"}
                                   name={"email"}
                                   id={"email"}/>
                            <p>{error.email}</p>
                            <input onBlur={handleOnBlur}
                                   onChange={(e)=>setFormData(prevState => ({...prevState, [e.target.name]:e.target.value}))}
                                   value={formData.password}
                                   type={"password"}
                                   placeholder={"Password"}
                                   name={"password"}
                                   id={"password"}/><br/>
                            <p>{error.password}</p>

                            <input type={"submit"} value={"LESGO"} disabled={isFormInvalid()}/>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;