import Sequelize from 'sequelize';

import Curriculo from '../app/models/Curriculo';
import Image from '../app/models/Image';
import Address from '../app/models/Address';
import SocialNetwork from '../app/models/SocialNetwork';
import Graduation from '../app/models/Graduation';
import Experience from '../app/models/Experience';
import Skill from '../app/models/Skill';

import databaseConfig from '../config/database';

const models = [
  Curriculo,
  Image,
  Address,
  SocialNetwork,
  Graduation,
  Experience,
  Skill,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
