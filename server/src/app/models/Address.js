import { Model, Sequelize } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        district: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Address;
