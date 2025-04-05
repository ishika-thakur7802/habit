import React from 'react';
import '../pages-css/LandingPage.css';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import React, { useState } from 'react'



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
                        <form>
                            <input type={"text"} placeholder={"Name"}/><br/>
                            <input type={"text"} placeholder={"E-Mail"}/><br/>
                            <input type={"password"} placeholder={"Password"}/><br/>
                            <input type={"submit"} value={"LESGO"}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;