/*************************
* File Name: Profile.jsx *
* Author: Ammar S.A.A    *
* Output: Profile page   *
*************************/

import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';

const Profile = () => {
    const { state } = useContext(LoginContext);

    return (
        <div className="container">
            <h2 className='text-capitalize'>{state.userRole} information</h2>
            <div className="row">
                <div className="form-group col-4">
                    <label htmlFor="profilePic" hidden={true}>Profile Picture</label>
                    <img src={state.userProfilePic} alt="Profile" className="img-fluid" />
                </div>
                <div className="col-8">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" value={state.userName} disabled={true} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" value={state.userEmail} disabled={true} readOnly />
                    </div>
                    {/* <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <input type="text" className="form-control" id="role" value={state.userRole} readOnly />
                </div> */}
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="btn col-5 p-2 mx-2 my-2 text-white custom-button">Change Profile Picture</div>
                <div className="btn col-5 p-2 mx-2 my-2 text-white custom-button">Change Password</div>
            </div>
        </div>
    );
};

export default Profile;
