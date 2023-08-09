/*************************
* File Name: Profile.jsx *
* Author: Ammar S.A.A    *
* Output: Profile page   *
*************************/

import React, { useContext } from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';

const Profile = () => {
    const { userName, userEmail } = useContext(LoginContext);

    return (
        <div className="container">
            <h2>Profile Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={userName} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={userEmail} readOnly />
            </div>
            {/* Add more profile information here */}
        </div>
    );
};

export default Profile;