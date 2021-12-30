import React from "react";
import Logo from "../assets/Logo.png";
import Ellipse2 from "../assets/Ellipse-2.png";
import Ellipse3 from '../assets/Ellipse-3.png';
import Ellipse4 from '../assets/Ellipse.png';
import Group2 from "../assets/Group.png";
import Vector from "../assets/Vector.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/f.png";
import './guest.css';

const Guest = () => {
    return(
        <div className="guest">
           <div className="navigation">
               <nav>
                   <img src={Logo} alt="" />
                   <ul>
                       <li>Jobs</li>
                       <li>Company Reviews</li>
                       <li>Find Salaries</li>
                   </ul>
                   <button className="post-jobs">Post Jobs</button>
                </nav>
                <h1>Find Your Dream Job</h1>
                <img src={Ellipse2} alt="" />
                <img src={Ellipse3} alt="" />
                <img src={Ellipse4} alt="" />
           </div>
           <div className="search">
               <input type="search" />
               <div className="search-info">
                   <div className="role">
                       <img src={Vector} alt="a search icon" />
                       <p>Front end Developer</p>
                   </div>
                   <div className="location">
                       <img src={Group2} alt="a search icon" />
                       <p>Lagos, Nigeria</p>
                   </div>
                   <button className="search-button">Search</button>
               </div>
           </div>
           <main className="main">
               <div className="main-top">
                   <p>Showing 68 results</p>
                   <p>Sort by: Latest</p>
               </div>
               <div className="main-left">
                   <div className="box">
                       <div className="box-top">
                           <p>Frontend Developer</p>
                           <p>$3k - $7k</p>
                       </div>
                       <div className="location">
                           <img src={Vector} alt="" />
                           <p>Ikeja,Lagos</p>
                       </div>
                       <p>We seek an experienced javascript web application developer<br />
                       who is proficient with react and has excellent communication skills</p>
                       <button className="button">See more</button>
                   </div>
               </div>
               <div className="main-right">
                   <div className="card">
                       <div className="box-top">
                           <p>Frontend Developer</p>
                       </div>
                       <div className="location">
                           <img src={Vector} alt="" />
                           <p>Ikeja,Lagos</p>
                       </div>
                       <button className="apply">Apply via Find Job</button>
                       <hr />
                       <p></p>
                   </div>
               </div>
           </main>
           <footer className="footer">
               <img src={Logo} alt="" />
               <p>2021 <i>FindJobs</i></p>
               <div className="quick-links">
                   <h3>Quick Links</h3>
                   <p>Home</p>
                   <p>About</p>
                   <p>Calender</p>
                   <p>Terms and Condition</p>
               </div>
               <div className="quick-links">
                   <h3>Quick Links</h3>
                   <p>Home</p>
                   <p>About</p>
                   <p>Calender</p>
                   <p>Terms and Condition</p>
               </div>
               <div className="social">
                   <h3>Social Media</h3>
                   <img src={Instagram} alt="" />
                   <img src={Twitter} alt="" />
                   <img src={Facebook} alt="" />
               </div>
           </footer>
        </div>
    )
}

export default Guest;