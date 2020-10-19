import { Model, Sequelize } from 'sequelize';

class SocialNetwork extends Model {
  static init(sequelize) {
    super.init(
      {
        url: Sequelize.STRING,
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

export default SocialNetwork;
