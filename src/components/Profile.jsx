/*************************
* File Name: Profile.jsx *
* Author: Ammar S.A.A    *
* Output: Profile page   *
*************************/

import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';

const Profile = () => {
    const { userName, userEmail, userRole, userProfilePic, state } = useContext(LoginContext);

    return (
        <div className="container">
            <h2>Profile Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={state.userName} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={state.userEmail} readOnly />
            </div>
            {/* <div className="form-group">
                <label htmlFor="role">Role</label>
                <input type="text" className="form-control" id="role" value={state.userRole} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="profilePic">Profile Picture</label>
                <img src={state.userProfilePic} alt="Profile" className="img-fluid" />
            </div> */}
        </div>
    );
};

export default Profile;
