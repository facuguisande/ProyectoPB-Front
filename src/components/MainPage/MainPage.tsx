import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className="main-page">
      <div className="main-page-background"></div>
      <div className="main-content">
        <h1>Pizzas Buen Gusto</h1>
        <div className="options">
          <Link to="/agenda">Ver Agenda</Link>
          <Link to="/add-event">Agregar Evento</Link>
          <Link to="/personnel">Personal</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;