/*************************
* File Name: Profile.jsx *
* Author: Ammar S.A.A    *
* Output: Profile page   *
*************************/

import React, { useContext } from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';

const Profile = () => {
<<<<<<< HEAD
=======
    // Replace the following with the user's profile data fetched from the backend or context
    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        // Add more profile data here
    };

>>>>>>> 306ea36133dfcaf645ffbe06c97a674738e11598
    const { state } = useContext(LoginContext);

    return (
        <div className="container">
            <h2>Profile Information</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" value={state.user.username} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={state.user.email} readOnly />
            </div>
            {/* Add more profile information here */}
        </div>
    );
};

export default Profile;