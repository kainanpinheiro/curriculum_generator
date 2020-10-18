import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import curriculumIcon from '../images/curriculum.svg';

import '../styles/pages/curriculo-list.css';

import Sidebar from '../components/Sidebar';

const CurriculoList = () => {
  return (
    <div id="page-list">
      <main>
        <Sidebar button={false} />

        <div className="curriculo-list">
          <header>
            <h1>Currículos</h1>
          </header>
          <div className="curriculos">
            <a href="/">
              <img src={curriculumIcon} alt="Curriculo" />
            </a>
            <a href="/">
              <img src={curriculumIcon} alt="Curriculo" />
            </a>
          </div>
          <Link to="/curriculo" className="create-curriculo">
            <FiPlus size={32} color="#FFF" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CurriculoList;
