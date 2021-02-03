import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    function handleToggle() {
        setShowLogin(!showLogin);
    }

    return (
    <div> 
        {showLogin ? <Login /> : <Signup />}
        <br />
        <button onClick={handleToggle}>Signup / Login Toggle!</button>
        </div>
    );
};
 
export default Auth;