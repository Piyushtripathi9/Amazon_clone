import React, { useState } from 'react'
import "./Login.css"
import logo from "./img/logo3.jpg";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        // firebase login 
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        // Firebase register 
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully add a user with email and password 
                if(auth) {
                    history.push('/') 
                }
            })
            .catch(error => alert(error.message))    
    }

    return (
        <div className="login">
            <Link to="/"><img className='login__logo' src={logo} alt="" /></Link>

            <div className='login__container'>
                <h1> Sign-In </h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <h5>E-mail</h5>
                    <button type='submit' onClick={signIn} className="login__signInButton">Sign-In</button>
                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of USe & Sale. Please see our Privacy Policy Notice, Our Cookies Notice and our Interest-Based Ads Notice</p>

                <button type='submit' onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
