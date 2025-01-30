import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validation';
import "../styles/Login.css"
import { registerUser } from '../services/authService';
import cacheValidAuth from '../utils/cacheValidAuth';

const Register = () => {
    const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /**
   * Handle logging the user into the application
   * @returns data from the response of the request
   */
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!(validateEmail(email) && validatePassword(password))) {
      alert("Email was invalid or password was too short");
      return;
    }
    try {
      const response = await registerUser(displayName, email, password)

      if (response.statusText !== 'Created') {
        // Handle HTTP errors
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      if (response.status === 201) {
        /* No longer needed, server response uses cookies to cache the token so front end won't see it 
          cache token and user to memory
          cacheValidAuth(response.data.token, JSON.stringify(response.data.user));
        */
        // can still cache id and displayName etc
        localStorage.setItem("user", response.data.user)

        // navigate to dashboard
        navigate('/');
      }
    } catch (error) {
      console.error('Register failed:', error.message);
      throw error;
    }
  }

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div style={{ 
      backgroundImage:"linear-gradient(to bottom right, #0f0617 60% , #322a39)",
      height: '100vh',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="form-container">
        <p className="title">Register</p>
        <form className="form" onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="displayName">Display Name</label>
            <input type="text" name="displayName" id="displayName" value={displayName} onChange={handleNameChange} placeholder=""/>
          </div>
          <div className="input-group">
            <label htmlFor="email">School Email</label>
            <input type="text" name="email" id="email" value={email} onChange={handleEmailChange} placeholder=""/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder=""/>
          </div>
            <button className="sign register" type="submit">Register</button>
            <a className="back" rel="noopener noreferrer" href="/login">Back to Login</a>
        </form>

      </div>
    </div>
  )
}

export default Register;