import React from 'react';
import '../components-css/LandingPage.css';
import Header from "./Header";

const LandingPage=()=>{
    return(
        <div className={'Landing-Page'}>
            <section className="App-header">
                <Header/>
            </section>
            <section className="banner">
                <h2>welcome, user!</h2>
                <h4>how consistent have you been lately?</h4>
                <button>check your progress</button>
            </section>

        </div>
    );
};
export default LandingPage;
