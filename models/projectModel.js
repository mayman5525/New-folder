module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    Image: { type: DataTypes.STRING },
  });
  return Project;
};
