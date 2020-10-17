import { Model, Sequelize } from 'sequelize';

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        institution: Sequelize.STRING,
        course: Sequelize.STRING,
        description: Sequelize.STRING,
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

export default Course;
