import { Model, Sequelize } from 'sequelize';

class Curriculo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone_number: Sequelize.STRING,
        github: Sequelize.STRING,
        linkedin: Sequelize.STRING,
        email: Sequelize.STRING,
        role: Sequelize.STRING,
        objective: Sequelize.TEXT,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Image, {
      foreignKey: 'image_id',
      as: 'avatar',
    });
    this.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'address',
    });
    this.hasMany(models.Graduation, {
      foreignKey: 'curriculo_id',
      as: 'graduations',
    });
    this.hasMany(models.Experience, {
      foreignKey: 'curriculo_id',
      as: 'experiences',
    });
    this.hasMany(models.Skill, {
      foreignKey: 'curriculo_id',
      as: 'skills',
    });
  }
}

export default Curriculo;
