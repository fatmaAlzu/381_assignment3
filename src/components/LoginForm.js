import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayStatus from "./DisplayStatus";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      setType("error");
      setMessage("Username and password cannot be empty.");
      return;
    }

    if (password.length < 8) {
      setType("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }

    // Check credentials
    const user = users.find(
      (u) => u.username === username && u.email === password
    );

    if (user) {
      setType("success");
      setMessage("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/flavors");
      }, 2000);
    } else {
      setType("error");
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div className="main-section">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p><a href="#">Forgot Password?</a></p>

      {/* Show message only if exists */}
      {message && <DisplayStatus type={type} message={message} />}
    </div>
  );
}

export default LoginForm;