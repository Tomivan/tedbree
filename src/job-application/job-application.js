import React from 'react';
import "./job-application";

const JobApplication = () => {
    return(
        <div className='job-application'>
            <h1>Frontend Developer</h1>
            <label>First Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="text" />
            <label>Location</label>
            <input type="text" />
            <label>Phone Number</label>
            <input type="text" />
            <button className="submit">Submit Application</button>
        </div>
    )
}

export default JobApplication;