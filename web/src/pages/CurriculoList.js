import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import curriculumIcon from '../images/curriculum.svg';
import api from '../services/api';

import '../styles/pages/curriculo-list.css';

import Sidebar from '../components/Sidebar';

const CurriculoList = () => {
  const [curriculos, setCurriculos] = useState([]);

  useEffect(() => {
    api.get('curriculos').then((response) => {
      setCurriculos(response.data);
    });
  }, []);

  return (
    <div id="page-list">
      <main>
        <Sidebar button={false} />

        <div className="curriculo-list">
          <header>
            <h1>Currículos</h1>
          </header>
          <div className="curriculos">
            {curriculos.map((curriculo) => {
              return (
                <Link to={`/curriculo/${curriculo.id}`} key={curriculo.id}>
                  <img src={curriculumIcon} alt="Curriculo" />
                </Link>
              );
            })}
          </div>
          <Link to="/curriculo/create" className="create-curriculo">
            <FiPlus size={32} color="#FFF" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CurriculoList;
