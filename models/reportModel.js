module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define("Report", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_ar: { type: DataTypes.STRING, allowNull: false },
    name_en: { type: DataTypes.STRING, allowNull: false },
    description_ar: { type: DataTypes.TEXT },
    mainDescription_ar: { type: DataTypes.TEXT },
    mainDescription_en: { type: DataTypes.TEXT },
    description_en: { type: DataTypes.TEXT },
    Image: { type: DataTypes.STRING },
  });
  return Report;
};
