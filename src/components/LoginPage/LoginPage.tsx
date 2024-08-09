import React, { useState  } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';


interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticación
    // ...
	navigate('/mainPage');
  };

  return (
    <div className="login-page">
      <div className="login-background"></div>
      <div className="login-container">
        <h1>Bienvenido a Pizzas Buen Gusto</h1>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default LoginPage;