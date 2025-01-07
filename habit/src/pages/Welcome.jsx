import React from 'react';
import '../pages-css/Welcome.css';
import Header from "../components/Header";

const Welcome=()=>{
    return(
        <div className={'Welcome'}>
            <section className="App-header">
                <Header/>
            </section>
            <section className="banner">
                <h2>welcome, user!</h2>
                <h4>how consistent have you been lately?</h4>
            </section>

        </div>
    );
};
export default Welcome;
