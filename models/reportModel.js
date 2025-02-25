module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define("Report", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT }
  });
  return Report;
};
