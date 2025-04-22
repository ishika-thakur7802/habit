import React from 'react';
import '../pages-css/SignUp.css';
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
    const[touched, setTouched]=useState({
        name:false,
        email:false,
        password:false
    })
    const handleOnBlur=(e)=>
    {

        const{name,value}=e.target;
        setTouched(prevState => ({...prevState, [name]:true}));

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
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className={'sign-up-box'}>
                    <div className={'Ques-Fields'}>
                        <div className={'hello'}>
                            <h2>hello there!</h2>
                            <h4>build that habit NOW!</h4>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={'inputContainer'}>
                                <input onBlur={handleOnBlur}
                                       onChange={(e) => setFormData(prevState => ({
                                           ...prevState,
                                           [e.target.name]: e.target.value
                                       }))}
                                       value={touched.name && error.name!=="Looks Good!"? "": formData.name}
                                       className={'input-field'}
                                       type={"text"}
                                       placeholder={touched.name && error.name!="Looks Good!"?error.name:"Name"}
                                       name={"name"}
                                       id={"name"}/>
                                {/*<p>{error.name}</p>*/}
                            </div>

                            <div className={'inputContainer'}>
                                <input onBlur={(handleOnBlur)}
                                       onChange={(e) => setFormData(prevState => ({
                                           ...prevState,
                                           [e.target.name]: e.target.value
                                       }))}
                                       value={touched.email && error.email!="Looks Good"? "":formData.email}
                                       className={'input-field'}
                                       type={"text"}
                                       placeholder={touched.email && error.email!="Looks Good"?formData.email:"Email"}
                                       name={"email"}
                                       id={"email"}/>
                                {/*<p>{error.email}</p>*/}
                            </div>
                            <div className={'inputContainer'}>
                                <input onBlur={handleOnBlur}
                                       onChange={(e) => setFormData(prevState => ({
                                           ...prevState,
                                           [e.target.name]: e.target.value
                                       }))}
                                       value={touched.password && error.password!="That's a strong password"?"":formData.password}
                                       className={'input-field'}
                                       type={"password"}
                                       placeholder={touched.password && error.password!="That's a strong password"?error.password:"Password"}
                                       name={"password"}
                                       id={"password"}/><br/>
                                {/*<p>{error.password}</p>*/}
                            </div>
                            <div className={"submit"}>
                                <input type={"submit"} value={"Let's Begin"} disabled={isFormInvalid()} className={"submit-btn"}/>
                            </div>

                        </form>
                    </div>
                    <p>Have an account already? Sign In</p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;