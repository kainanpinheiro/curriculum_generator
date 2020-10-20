import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import bananaIcon from '../images/banana.svg';

import '../styles/components/sidebar.css';

const Sidebar = ({ button }) => {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <header>
        <h1>Frexcurrículo</h1>
        <img src={bananaIcon} alt="Logo" />
      </header>
      <footer>
        {button ? (
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        ) : (
          <p>Faça seu currículo, é gratuito! :)</p>
        )}
      </footer>
    </aside>
  );
};

export default Sidebar;
