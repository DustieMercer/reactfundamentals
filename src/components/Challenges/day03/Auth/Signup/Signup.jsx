import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function emailOnChange (e) {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    function passwordOnChange (e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    return ( 
        <div>
            <h3>Signup</h3>
            <input type='text' placeholder='email signup' value={email} onChange={(e)=>emailOnChange(e)} />
            <br />
            <br />
            <input type='text' placeholder='email' value={password} onChange={(e)=>passwordOnChange(e)} />
        </div>
     );
}
 
export default Signup;