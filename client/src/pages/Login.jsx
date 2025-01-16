import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../utils/validation';
import "../styles/Login.css"
import { loginUser } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /**
   * Handle logging the user into the application
   * @returns data from the response of the request
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!(validateEmail(email) && validatePassword(password))) {
      alert("Email was invalid or password was too short");
      return;
    }
    try {
      const response = await loginUser(email, password)

      if (response.statusText !== 'OK') {
        // Handle HTTP errors
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      if (response.status === 200) {
        // cache token to memory
        localStorage.setItem("jwtToken", response.data.token);
        // navigate to dashboard
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
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
        <p className="title">Login</p>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">JMU Email</label>
            <input type="text" name="email" id="email" value={email} onChange={handleEmailChange} placeholder=""/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder=""/>
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
            </div>
          </div>
            <button className="sign" type="submit">Sign in</button>
        </form>
        <p className="signup">Don't have an account?
          <a rel="noopener noreferrer" href="/register" className=""> Register</a>
        </p>
      </div>
    </div>
  )
}

export default Login;