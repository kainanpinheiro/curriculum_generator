import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/create-curriculo.css';

import api from '../services/api';

import Sidebar from '../components/Sidebar';
import { useHistory } from 'react-router-dom';

const CreateCurriculo = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [objective, setObjective] = useState('');
  const [role, setRole] = useState('');

  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const [graduations, setGraduations] = useState([
    { institution: '', course: '', start: '', end: '' },
  ]);

  const [experiences, setExperiences] = useState([
    {
      company: '',
      role: '',
      description: '',
    },
  ]);

  const [skills, setSkills] = useState('');
  const [skillList, setSkillList] = useState([]);

  const [file, setFile] = useState();

  function setGraduationItemValue(position, field, value) {
    const updateGraduationItems = graduations.map((graduation, index) => {
      if (index === position) {
        return { ...graduation, [field]: value };
      }
      return graduation;
    });

    setGraduations(updateGraduationItems);
  }

  function setExperienceItemValue(position, field, value) {
    const updateExperienceItems = experiences.map((experience, index) => {
      if (index === position) {
        return { ...experience, [field]: value };
      }
      return experience;
    });

    setExperiences(updateExperienceItems);
  }

  function addSkillValue() {
    setSkillList([...skillList, skills]);
    setSkills('');
  }

  function addFileImage(event) {
    if (!event.target.files) {
      return;
    }

    const image = Array.from(event.target.files);

    setFile(image[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('role', role);
    data.append('phone_number', phoneNumber);
    data.append('email', email);
    data.append('objective', objective);
    data.append('district', district);
    data.append('city', city);
    data.append('state', state);
    data.append('linkedin', linkedin);
    data.append('github', github);
    data.append('graduationsReq', JSON.stringify(graduations));
    data.append('experiencesReq', JSON.stringify(experiences));
    data.append('skills', JSON.stringify(skillList));
    data.append('file', file);

    await api
      .post('curriculo', data)
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
  }
  return (
    <div id="page-create">
      <main>
        <Sidebar button={true} />
        <div className="form-curriculo">
          <form className="create-curriculo-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados</legend>
            </fieldset>

            <div className="dados-title">
              <span>Pessoais</span>
            </div>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="objective">Objetivo</label>
              <textarea
                id="objective"
                value={objective}
                onChange={(event) => setObjective(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="role">Área</label>
              <input
                id="role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              />
            </div>

            <div className="dados-title">
              <span>Endereço</span>
            </div>
            <div className="input-address">
              <div className="input-block">
                <label htmlFor="district">Bairro</label>
                <input
                  id="district"
                  value={district}
                  onChange={(event) => setDistrict(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="state">Estado</label>
                <input
                  id="state"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                />
              </div>
            </div>

            <div className="dados-title">
              <span>Redes Sociais</span>
            </div>
            <div className="input-block">
              <label htmlFor="github">Github</label>
              <input
                id="github"
                value={github}
                onChange={(event) => setGithub(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                id="linkedin"
                value={linkedin}
                onChange={(event) => setLinkedin(event.target.value)}
              />
            </div>

            <div className="dados-title">
              <span>Formação</span>
            </div>
            <div className="input-block">
              <label htmlFor="institution">Instituição</label>
              <input
                id="institution"
                name="institution"
                value={graduations.institution}
                onChange={(event) =>
                  setGraduationItemValue(0, 'institution', event.target.value)
                }
              />
            </div>

            <div className="input-block">
              <label htmlFor="course">Curso</label>
              <input
                id="course"
                value={graduations.course}
                onChange={(event) =>
                  setGraduationItemValue(0, 'course', event.target.value)
                }
              />
            </div>

            <div className="input-block">
              <div className="container-duration">
                <label htmlFor="start">Inicio</label>
                <input
                  id="start"
                  value={graduations.start}
                  onChange={(event) =>
                    setGraduationItemValue(0, 'start', event.target.value)
                  }
                />
                <label htmlFor="end">Término</label>
                <input
                  id="end"
                  value={graduations.end}
                  onChange={(event) =>
                    setGraduationItemValue(0, 'end', event.target.value)
                  }
                />
              </div>
            </div>

            <div className="dados-title">
              <span>Experiência</span>
            </div>
            <div className="input-block">
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                value={experiences.company}
                onChange={(event) =>
                  setExperienceItemValue(0, 'company', event.target.value)
                }
              />
            </div>

            <div className="input-block">
              <label htmlFor="role2">Área</label>
              <input
                id="role2"
                value={experiences.role}
                onChange={(event) =>
                  setExperienceItemValue(0, 'role', event.target.value)
                }
              />
            </div>

            <div className="input-block">
              <label htmlFor="experience">Descrição</label>
              <textarea
                id="experience"
                value={experiences.description}
                onChange={(event) =>
                  setExperienceItemValue(0, 'description', event.target.value)
                }
              />
            </div>

            <div className="dados-title">
              <span>Habilidades</span>
            </div>

            {skillList.map((skillValue, index) => {
              return (
                <div key={skillValue} className="container-skills">
                  {index + 1} - {skillValue}
                </div>
              );
            })}

            <div className="input-block">
              <label htmlFor="skill">Skill</label>
              <input
                id="skill"
                value={skills}
                onChange={(event) => setSkills(event.target.value)}
              />
              <button
                className="save-button"
                type="button"
                onClick={addSkillValue}
              >
                + Skill
              </button>
            </div>

            <div className="dados-title">
              <span>Foto</span>
            </div>
            <div className="input-block">
              {file ? (
                <div>{file.name}</div>
              ) : (
                <div>
                  <label htmlFor="image-perfil" className="new-image">
                    <FiPlus size={24} color="#ffd600" />
                  </label>
                  <input
                    id="image-perfil"
                    type="file"
                    onChange={addFileImage}
                  />
                </div>
              )}
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
