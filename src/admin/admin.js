import React from "react";
import Logo from "../assets/Logo.png";
import Ellipse2 from "../assets/Ellipse-2.png";
import Ellipse3 from '../assets/Ellipse-3.png';
import Ellipse4 from '../assets/Ellipse-4.png';
import Avatar from '../assets/Avatar.png';
import Group2 from '../assets/Group-2.png';
import Plus from '../assets/plus.png';
import Filter from '../assets/filter.png';
import Notification from '../assets/notification.png';
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/f.png";
import "./admin.css";

const Admin = () => {
    return (
        <div className="admin">
            <div className="admin-top">
                <div clasNmae="top">
                    <div className="left-side">
                        <img src={Logo} alt="" />
                        <p>For employers</p>
                    </div>
                    <div className="right-side">
                        <img src={Notification} alt="" />
                        <img src={Avatar} alt="" />
                    </div>
                </div>
                <div className="">
                    <h1>Jobs</h1>
                    <div className="circles">
                        <img src={Ellipse2} alt="" />
                        <img src={Ellipse3} alt="" />
                        <img src={Ellipse4} alt="" />
                    </div>
                </div>
            </div>
            <main className="main">
                <div className="search">
                    <div className="input">
                        <img src={Group2} alt="" />
                        <input type="search" placeholder="Front end developer" />
                        <button className="button-search">Search</button>
                    </div>
                    <button className="new-job"><img src={Plus} alt="" />New Job</button>
                </div>
                <div className="row">
                    <p></p>
                    <p>Job Title</p>
                    <p>Date Modified</p>
                    <p>Candidates</p>
                    <p></p>
                    <p>Filter<img src={Filter} alt="" /></p>
                </div>
                <div className="row-1">
                    <p></p>
                    <p>Customer Success Intern</p>
                    <p>12/7/21</p>
                    <p>50</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            </main>
            <footer className="admin-footer">
                <div className="left-footer">
                    <img src={Logo} alt="" />
                    <p>2021</p>
                    <p><i>FindJobs</i></p>
                    <p>Terms and conditions</p>
                </div>
                <div className="right-footer">
                   <img src={Instagram} alt="" />
                   <img src={Twitter} alt="" />
                   <img src={Facebook} alt="" />
                </div>
            </footer>
        </div>
    )
}

export default Admin;