import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function LogIn() {
    let takeHome = useNavigate();
return(
    <div>
    <form onSubmit={e => {
        e.preventDefault()
        takeHome('/')
    }
    }>
        <label htmlfor="username">USERNAME:</label><br/>
        <input required type="text" name="username" /><br />

        <label htmlfor="password">PASSWORD:</label><br/>
        <input required type="password" name="password" /><br />


        <label htmlFor='rememberLogIn'>REMEMBER ME</label><br/>
        <input type="checkbox" name="remember" /><br />

        <input type="submit" value="LOG IN"/>
    </form>
    <p>Not a member? <Link to="/register">Register</Link></p>


</div>
)



}

export default LogIn;