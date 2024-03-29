import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import { auth } from "./firebase";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
}

  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
}

  return (
    <div className= 'login'>
        <Link to= '/' > 
        <img
            className="login__logo"
            src = 'https://images.squarespace-cdn.com/content/v1/5bf0909c89c172ddd4355859/1551678555798-55JUOXX6TKC99LWRF5CX/CraftScape-Logo+w+border+2.png'
            
            />
            </Link>

            <div className='login__container'>
              <h1>Sign In</h1>

              <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password}
                onChange={e =>setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</
                button>
              </form>

              <p>
                Signing In you will agree all the conditions of Use & Sale.
              </p>

              <button onClick={register}
              className='login__registerButton'>Create a new account</button>
            </div>

    </div>
    )
}    
export default Login;