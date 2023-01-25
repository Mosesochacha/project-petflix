import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


function SignUp() {


    let travelHome = useNavigate();

return(
    <div>

<form onSubmit={e => {
    e.preventDefault()
    travelHome('/home')
}
}>
<label htmlfor="newUser">NEW USERNAME:</label><br/>
<input required type="text" name="newUser" /><br />

<label htmlfor="newPassword">NEW PASSWORD:</label><br/>
<input required type="password" name="newPassword" /><br />

<label htmlfor="confirmNewpassword">CONFIRM PASSWORD:</label><br/>
<input required type="password" name="confirmNewpassword" /><br />

<label htmlFor='rememberLogIn'>REMEMBER ME</label><br/>
        <input type="checkbox" name="remember" /><br />



<input type="submit" value="SIGN UP" />


</form>

<p>member <Link to="/">Log In</Link></p>


</div>

)

}

export default SignUp;