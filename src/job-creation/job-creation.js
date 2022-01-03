import React from 'react';
import "./job-creation.css";

const JobCreation = () => {
    return(
        <div className='job-creation'>
            <h1>New Job</h1>
            <p>Kindly provide the required information to get matched with suitable candidates</p>
            <label>Job Title</label>
            <input type="text" />
            <label>Company Name</label>
            <input type="text" />
            <label>Location</label>
            <input type="text" />
            <label>What type of employment is it?</label>
            <select>
                <option>Select option</option>
            </select>
            <label>Salary Range</label>
            <input type="text" />
            <label>Submission Deadline</label>
            <input type="text" />
            <label>What type of employment is it?</label>
            <select>
                <option>Select option</option>
            </select>
            <button className="submit">Submit Application</button>
        </div>
    )
}

export default JobCreation;