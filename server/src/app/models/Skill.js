import { Model, Sequelize } from 'sequelize';

class Skill extends Model {
  static init(sequelize) {
    super.init(
      {
        skill: Sequelize.STRING,
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

export default Skill;
