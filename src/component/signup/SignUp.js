import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './signup.css';


function SignUp() {


    let travelHome = useNavigate();

return(
    <div className='formDiv'>

<h1 style={{textAlign: "left", padding: "0px 10px 10px 10px", fontSize:"4vw", fontFamily:"fantasy", width:"40%"}}>PETFLIX</h1>

    <div className='loginDiv'>

<form className="logInForm" onSubmit={e => {
    e.preventDefault()
    if(document.getElementById('Initial').value === document.getElementById('secondInitial').value){
    travelHome('/animals')
    }else{
        alert("Please enter matching passwords")
        e.target.reset()
    };
}
}>
<label htmlFor="newUser">USERNAME:</label><br/>
<input required type="text" name="newUser" /><br />


<label htmlFor="newPassword">PASSWORD:</label><br/>
<input id="Initial" required type="password" name="newPassword" /><br />


<label htmlFor="secpassword">CONFIRM PASSWORD:</label><br/>
<input id="secondInitial" required type="password" name="secpassword" /><br />


<input type="checkbox" name="remember" />
<label htmlFor='rememberLogIn'>REMEMBER ME</label>
        <br />



<input type="submit" value="SIGN UP" /><br />

<label><p>Member? <Link to="/login"> Log In</Link></p></label>
</form>




</div>

</div>

)

}

export default SignUp;