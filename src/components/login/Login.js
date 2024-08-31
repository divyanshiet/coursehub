import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

const LoginSignup = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegister = () => {
    if (password === confirmPassword) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="login-signup-container">
      <div className="form-box">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
          />
        )}
        <button
          onClick={isRegistering ? handleRegister : handleLogin}
          className="submit-btn"
        >
          {isRegistering ? "Register" : "Login"}
        </button>
        <p className="toggle-text">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? " Login" : " Register"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
