import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Nama pendaki dan password wajib diisi");
      return;
    }

    localStorage.setItem("isLogin", "true");
    localStorage.setItem("namaPendaki", username);

    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      {/* ORNAMEN */}
      <div className="blur-circle top-left"></div>
      <div className="blur-circle bottom-right"></div>

      {/* CARD */}
      <div className="login-card animate-fade-in-up">
        <div className="logo">🏔️</div>

        <h1 className="title">Smart Hike</h1>
        <p className="subtitle">
          Pendakian sehat, aman, dan beretika
        </p>

        <input
          type="text"
          placeholder="Nama Pendaki"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        <button onClick={handleLogin} className="btn-login">
          Masuk 🚀
        </button>

        <p className="footer">
          © Smart Hike 2026 · AI Outdoor Ethics
        </p>
      </div>
    </div>
  );
}

export default Login;
