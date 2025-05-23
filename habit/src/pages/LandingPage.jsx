import React from 'react';
import '../pages-css/LandingPage.css';
import Header from "../components/Header";
import { Link } from "react-router-dom";


const LandingPage=()=>{
    return(
        <div className={'LandingPage'}>
            <section className="App-header">
                <Header/>
            </section>
            <section className="banner-landing-page">
                <h2><span id={"m"}>motivated?</span><span id={"d"}>DISCIPLINED</span> </h2>
                <h3>create habits that stick- your streaks, YOUR story!</h3>
                <h4>TRACK, BUILD, THRIVE </h4>
                    <Link to={"/signup"}>
                        <button className={"startnow"}>START NOW!</button>
                    </Link>

            </section>


        </div>
    );
};

export default LandingPage;
