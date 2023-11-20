import React from 'react';
import {useState} from 'react';
import twitterImage from '../../assets/images/twitter.png';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
/*import TwitterIcon from '@mui/icons-material/Twitter';*/
import logo from "../../assets/images/twitter_logo.jpeg";
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
const Signup = () => {

    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const 
      [  signInWithGoogle,
         googleuser, 
         googleloading,
          googleerror
        ] = useSignInWithGoogle(auth);

      if(user || googleuser) 
      {
        navigate('/')
        console.log(user)
        console.log(googleuser)
      }
      
      if(error)
      {
        console.log(error.message)
      }
      
      if(loading)
      {
        console.log(loading)
      }

 const handleSubmit = event => {
        event.preventDefault();
        console.log(email,password);
        createUserWithEmailAndPassword(email,password);
 }
  const handleGoogleSignIn =  () =>{
        signInWithGoogle();
  }

    return(
        <div className="login-container">
        <div className="Image-container">
          <img className='image' src={twitterImage} alt=""/>
        </div>
        <div className="form-container">
            <div className='form-box'>
            <img className='Twittericon' style={{color:'skyblue'}} src={logo} alt=""/>
          <h2 className='heading'>Happening Now</h2>
          <h3 className='heading1'>Join twitter today</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" 
            className='display-name'
             placeholder='@username'
             onChange={(event)=>setUsername(event.target.value)}
            />
            <input type="text" 
             className='display-name'
             placeholder='Enter full name'
             onChange={(event)=>setName(event.target.value)}
            
            />
            <input type="email"
               className='email'
               placeholder='Enail address'
               onChange={(event)=> setEmail(event.target.value)}

            />
            <input type="password"
              className='password'
              placeholder='password'
              onChange={(event)=> setPassword(event.target.value)}
            />
            <div className="btn-login">
               <button type="submit" className="btn">Sign up</button> 
            </div>
          </form>
          <hr/>
          <div className='google-button'>
            <GoogleButton 
                className='g-btn'
                type='light'
                onClick={handleGoogleSignIn}
            />
          </div>
          <div>
            Already have an account?
            <Link
              to='/login'
              style={{
                textDecoration:'none',
                color:'skyblue',
                fontWeight:'600',
                marginLeft:'5px'
              }}
              >
               Login
            </Link>
          </div>
        </div>
    </div>
    </div>
    );
};

export default Signup;