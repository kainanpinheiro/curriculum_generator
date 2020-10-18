import React from 'react';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/create-curriculo.css';

import Sidebar from '../components/Sidebar';

const CreateCurriculo = () => {
  return (
    <div id="page-create">
      <main>
        <Sidebar button={true} />
        <div className="form-curriculo">
          <form className="create-curriculo-form">
            <fieldset>
              <legend>Dados</legend>
            </fieldset>

            <div className="dados-title">
              <span>Pessoais</span>
            </div>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Celular</label>
              <input id="phone" />
            </div>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input id="email" />
            </div>

            <div className="input-block">
              <label htmlFor="objective">Objetivo</label>
              <textarea id="objective" />
            </div>

            <div className="input-block">
              <label htmlFor="role">Área</label>
              <input id="role" />
            </div>

            <div className="dados-title">
              <span>Endereço</span>
            </div>
            <div className="input-address">
              <div className="input-block">
                <label htmlFor="district">Bairro</label>
                <input id="district" />
              </div>

              <div className="input-block">
                <label htmlFor="city">Cidade</label>
                <input id="city" />
              </div>

              <div className="input-block">
                <label htmlFor="state">Estado</label>
                <input id="state" />
              </div>
            </div>

            <div className="dados-title">
              <span>Redes Sociais</span>
            </div>
            <div className="input-block">
              <label htmlFor="github">Github</label>
              <input id="github" />
            </div>

            <div className="input-block">
              <label htmlFor="linkedin">LinkedIn</label>
              <input id="linkedin" />
            </div>

            <div className="dados-title">
              <span>Formação/Curso</span>
            </div>
            <div className="input-block">
              <label htmlFor="course">Curso</label>
              <input id="course" />
            </div>

            <div className="input-block">
              <label htmlFor="graduation">Graduação</label>
              <input id="graduation" />
            </div>

            <div className="dados-title">
              <span>Experiência</span>
            </div>
            <div className="input-block">
              <label htmlFor="company">Empresa</label>
              <input id="company" />
            </div>

            <div className="input-block">
              <label htmlFor="role2">Área</label>
              <input id="role2" />
            </div>

            <div className="input-block">
              <label htmlFor="experience">Descrição</label>
              <textarea id="experience" />
            </div>

            <div className="dados-title">
              <span>Habilidades</span>
            </div>
            <div className="input-block">
              <label htmlFor="skill1">Skill 1</label>
              <input id="skill1" />
            </div>

            <div className="input-block">
              <label htmlFor="skill2">Skill 2</label>
              <input id="skill2" />
            </div>

            <div className="input-block">
              <label htmlFor="skill3">Skill 3</label>
              <input id="skill3" />
            </div>

            <div className="dados-title">
              <span>Foto</span>
            </div>
            <div className="input-block">
              <label htmlFor="image-perfil" className="new-image">
                <FiPlus size={24} color="#ffd600" />
              </label>
              <input id="image-perfil" type="file" />
            </div>

            <button className="save-button" type="submit">
              Salvar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateCurriculo;
