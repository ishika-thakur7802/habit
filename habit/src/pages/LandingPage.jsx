import React from 'react';
import '../pages-css/LandingPage.css';
import Header from "../components/Header";

const LandingPage=()=>{
    return(
        <div className={'LandingPage'}>
            <section className="App-header">
                <Header/>
            </section>
            <section className="banner-landing-page">
                <h2><span id={"m"}>motivated?</span><span id={"d"}>disciplined.</span> </h2>
                <h3>create habits that stick- your streaks, YOUR story!</h3>
                <h4>TRACK, BUILD, THRIVE</h4>
                <button>START NOW!</button>
            </section>

        </div>
    );
};
export default LandingPage;
