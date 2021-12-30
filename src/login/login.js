import React from "react";
import Hero from '../assets/hero.png';
import Logo from '../assets/Logo.png';
import Preview from '../assets/preview.png';
import './login.css';

const Login = () => {
    return(
        <div>
            <img src={Hero} alt="" />
            <div className="page">
                <div className="left-page">
                    <img src={Logo} alt="find job logo" />
                    <p>for employers</p>
                    <p><strong>Find the best<br /> candidates for your<br />organisation</strong></p>
                    <img src={Preview} alt="" />
                </div>
                <div className="right-page">
                    <p><span className="login">Login</span></p>
                    <label>Email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;