import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import api from '../services/api';

import Sidebar from '../components/Sidebar';

import '../styles/pages/curriculo.css';

const Curriculo = () => {
  const params = useParams();
  const [curriculo, setCurriculo] = useState();

  useEffect(() => {
    api.get(`curriculo/${params.id}`).then((response) => {
      setCurriculo(response.data);
    });
  }, [params.id]);

  if (!curriculo) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="page-curriculo">
      <main>
        <Sidebar button={true} />
        <div className="grid curriculo-details">
          <header>
            <img src={curriculo.avatar.url} alt="" />
            <div className="title">
              <h1>{curriculo.name}</h1>
              <span>{curriculo.role}</span>
            </div>

            <div className="redes">
              <ul>
                <li>
                  <SocialIcon
                    target="_blank"
                    url={curriculo.linkedin}
                    style={{ height: 25, width: 25 }}
                    bgColor="#7d7d7d"
                  />
                </li>

                <li>
                  <SocialIcon
                    target="_blank"
                    url={curriculo.github}
                    style={{ height: 25, width: 25 }}
                    bgColor="#7d7d7d"
                  />
                </li>
              </ul>
            </div>
          </header>

          <div className="private-details">
            <div className="private">
              <h2>Bairro</h2>
              <span>{curriculo.address.district}</span>
            </div>

            <div className="private">
              <h2>Cidade</h2>
              <span>{curriculo.address.city}</span>
            </div>

            <div className="private">
              <h2>Estado</h2>
              <span>{curriculo.address.state}</span>
            </div>

            <div className="private">
              <h2>Telefone</h2>
              <span>{curriculo.phone_number}</span>
            </div>

            <div className="private">
              <h2>Email</h2>
              <span>{curriculo.email}</span>
            </div>
          </div>

          <div className="intro">
            <header>
              <h2>Objetivo</h2>
            </header>
            <div className="intro-text">
              <p>{curriculo.objective}</p>
            </div>
          </div>

          <div className="intro">
            <header>
              <h2>Educação</h2>
            </header>
            {curriculo.graduations.map((graduation) => {
              return (
                <div className="intro-text" key={graduation.id}>
                  <p>{graduation.institution}</p>
                  <p>{graduation.course}</p>
                  <p>
                    {graduation.start} – {graduation.end}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="intro">
            <header>
              <h2>Experiência</h2>
            </header>
            {curriculo.experiences.map((experience) => {
              return (
                <div className="intro-text" key={experience.id}>
                  <p>{experience.company}</p>
                  <p>{experience.role}</p>
                  <p>{experience.description}</p>
                </div>
              );
            })}
          </div>

          <div className="intro">
            <header>
              <h2>Habilidades</h2>
            </header>
            <div className="intro-text skills-container">
              {curriculo.skills.map((skill) => {
                return <span key={skill.id}>{skill.skill}</span>;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Curriculo;
