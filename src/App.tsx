import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import AgendaPage from './components/AgendaPage/AgendaPage';
import AddEventPage from './components/AddEventPage/AddEventPage';
import PersonalPage from './components/PersonalPage/PersonalPage';
import { MainPage } from './components/MainPage';

const Main: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/personnel" element={<PersonalPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
};

export default Main;