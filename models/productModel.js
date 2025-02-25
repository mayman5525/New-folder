module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      title_ar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title_en: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_ar: {
        type: DataTypes.TEXT,
      },
      description_en: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
      pdfUrl: {
        type: DataTypes.STRING,
      },
      specifications_ar: {
        type: DataTypes.TEXT,
      },
      specifications_en: {
        type: DataTypes.TEXT,
      },
      applications_ar: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      applications_en: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      details_ar: {
        type: DataTypes.TEXT,
      },
      ratio: {
        type: DataTypes.TEXT,
      },
      crossSection: {
        type: DataTypes.TEXT,
      },
      diameter: {
        type: DataTypes.TEXT,
      },
      length: {
        type: DataTypes.TEXT,
      },
      shape: {
        type: DataTypes.TEXT,
      },
      details_en: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "Products",
      timestamps: true,
    }
  );

  return Product;
};
