import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';
import Guest from './guest/guest';
import Admin from './admin/admin';
import JobApplication from './job-application/job-application';
import JobCreation from './job-creation/job-creation';

const Pages = () => {
    return(
        <Router>
            <Login exact path="/"/>
            <Guest path="/guest"/>
            <Admin path="/admin"/>
            <JobApplication  path="/job-application"/>
            <JobCreation path="job-creation"/>
        </Router>
    )
}

export default Pages;