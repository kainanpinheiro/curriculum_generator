import Curriculo from '../models/Curriculo';
import Image from '../models/Image';
import Address from '../models/Address';
import Graduation from '../models/Graduation';
import Experience from '../models/Experience';
import Skill from '../models/Skill';

class CurriculoController {
  async index(req, res) {
    const curriculo = await Curriculo.findAll({
      attributes: [
        'id',
        'name',
        'phone_number',
        'email',
        'objective',
        'role',
        'github',
        'linkedin',
      ],
      include: [
        {
          model: Image,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Address,
          as: 'address',
        },
        {
          model: Graduation,
          as: 'graduations',
          attributes: ['id', 'institution', 'course', 'start', 'end'],
        },
        {
          model: Experience,
          as: 'experiences',
          attributes: ['id', 'company', 'role', 'description'],
        },
        {
          model: Skill,
          as: 'skills',
          attributes: ['id', 'skill'],
        },
      ],
    });

    return res.status(200).json(curriculo);
  }

  async show(req, res) {
    const { id } = req.params;

    const curriculo = await Curriculo.findOne({
      where: { id },
      attributes: [
        'id',
        'name',
        'phone_number',
        'email',
        'objective',
        'role',
        'github',
        'linkedin',
      ],
      include: [
        {
          model: Image,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Address,
          as: 'address',
        },
        {
          model: Graduation,
          as: 'graduations',
          attributes: ['id', 'institution', 'course', 'start', 'end'],
        },
        {
          model: Experience,
          as: 'experiences',
          attributes: ['id', 'company', 'role', 'description'],
        },
        {
          model: Skill,
          as: 'skills',
          attributes: ['id', 'skill'],
        },
      ],
    });

    return res.status(200).json(curriculo);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Curriculo.destroy({ where: { id } });
    await Image.destroy({ where: { id } });
    await Address.destroy({ where: { id } });

    return res.json({});
  }

  async store(req, res) {
    const {
      name,
      phone_number,
      email,
      objective,
      role,
      github,
      linkedin,
    } = req.body;
    const { filename: path } = req.file;
    const { district, city, state } = req.body;
    const { graduationsReq } = req.body;
    const { experiencesReq } = req.body;
    const { skills } = req.body;

    const imageCreated = await Image.create({ path });
    const image_id = imageCreated.id;

    const addressCreated = await Address.create({
      district,
      city,
      state,
    });
    const address_id = addressCreated.id;

    const curriculo = await Curriculo.create({
      name,
      phone_number,
      email,
      objective,
      role,
      github,
      linkedin,
      image_id,
      address_id,
    });
    const curriculo_id = curriculo.id;

    JSON.parse(graduationsReq).forEach(async (graduations) => {
      const { institution, course, start, end } = graduations;

      await Graduation.create({
        institution,
        course,
        start,
        end,
        curriculo_id,
      });
    });

    JSON.parse(experiencesReq).forEach(async (experiences) => {
      const { company, role, description } = experiences;

      await Experience.create({
        company,
        role,
        description,
        curriculo_id,
      });
    });

    JSON.parse(skills).forEach(async (skill) => {
      await Skill.create({
        skill,
        curriculo_id,
      });
    });

    return res.status(201).json(req.body);
  }
}

export default new CurriculoController();
