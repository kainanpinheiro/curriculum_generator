import { Model, Sequelize } from 'sequelize';

class Experience extends Model {
  static init(sequelize) {
    super.init(
      {
        company: Sequelize.STRING,
        role: Sequelize.STRING,
        description: Sequelize.TEXT,
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

export default Experience;
