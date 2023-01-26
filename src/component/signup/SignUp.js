import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


function SignUp() {


    let travelHome = useNavigate();

return(
    <div>

<form onSubmit={e => {
    e.preventDefault()
    travelHome('/')
}
}>
<label htmlfor="newUser">NEW USERNAME:</label><br/>
<input required type="text" name="newUser" /><br />

<label htmlfor="newPassword">NEW PASSWORD:</label><br/>
<input required type="password" name="newPassword" /><br />

<label htmlFor='rememberLogIn'>REMEMBER ME</label><br/>
        <input type="checkbox" name="remember" /><br />



<input type="submit" value="SIGN UP" />


</form>

<p>member <Link to="/login">Log In</Link></p>


</div>

)

}

export default SignUp;