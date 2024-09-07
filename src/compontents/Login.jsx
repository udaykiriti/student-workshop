import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './style.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }
      const response = await axios.post("http://localhost:8085/api/v1/employee/login", {
        email,
        password,
      });
      const { data } = response;
      if (data.message === "Email not exits") {
        setError("Email not exits");
      } else if (data.message === "Login Success") {
        setError(null); // Clear any previous error
        alert("Login Successful! Redirecting to home...");
        navigate('/home'); // Navigate to the home page
      } else {
        setError("Incorrect Email and Password not match");
      }
    } catch (err) {
      setError("An error occurred");
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button type="submit" className="btn btn-primary" onClick={login}>
                Login
              </button>
              <button onClick={() => navigate('/register')}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
