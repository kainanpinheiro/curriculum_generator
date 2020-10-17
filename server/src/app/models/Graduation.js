import { Model, Sequelize } from 'sequelize';

class Graduation extends Model {
  static init(sequelize) {
    super.init(
      {
        institution: Sequelize.STRING,
        course: Sequelize.STRING,
        start: Sequelize.STRING,
        end: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Curriculo, { foreignKey: 'curriculo_id' });
  }
}

export default Graduation;
