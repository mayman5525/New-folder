const { Product } = require("../models");

exports.createProduct = async (req, res) => {
  try {
    const {
      id,
      type,
      is_featured,
      title_ar,
      title_en,
      description_ar,
      description_en,
      heroDescription_ar,
      heroDescription_en,
      specifications_ar,
      specifications_en,
      applications_ar,
      applications_en,
      details_ar,
      details_en,
      crossSection,
      diameter,
      length,
      shape,
      ratio,
    } = req.body;

    // Convert JSON fields to string if they are objects
    const parsedSpecificationsAr =
      typeof specifications_ar === "object"
        ? JSON.stringify(specifications_ar)
        : specifications_ar;
    const parsedSpecificationsEn =
      typeof specifications_en === "object"
        ? JSON.stringify(specifications_en)
        : specifications_en;
    const parsedDetailsAr =
      typeof details_ar === "object" ? JSON.stringify(details_ar) : details_ar;
    const parsedDetailsEn =
      typeof details_en === "object" ? JSON.stringify(details_en) : details_en;

    // Ensure applications_ar and applications_en are arrays
    const parsedApplicationsAr = Array.isArray(applications_ar)
      ? applications_ar
      : JSON.parse(applications_ar || "[]");

    const parsedApplicationsEn = Array.isArray(applications_en)
      ? applications_en
      : JSON.parse(applications_en || "[]");

    // Get uploaded file URLs
    const image = req.files?.image?.[0]?.path || null;
    const pdfUrl = req.files?.pdf?.[0]?.path || null;

    const newProduct = await Product.create({
      id,
      type,
      is_featured,
      title_ar,
      title_en,
      description_ar,
      description_en,
      heroDescription_ar,
      heroDescription_en,
      specifications_ar: parsedSpecificationsAr,
      specifications_en: parsedSpecificationsEn,
      applications_ar: parsedApplicationsAr,
      applications_en: parsedApplicationsEn,
      details_ar: parsedDetailsAr,
      details_en: parsedDetailsEn,
      image,
      pdfUrl,
      crossSection,
      diameter,
      length,
      shape,
      ratio,
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Extract product data from request body
    const {
      type,
      is_featured,
      title_ar,
      title_en,
      description_ar,
      description_en,
      heroDescription_ar,
      heroDescription_en,
      specifications_ar,
      specifications_en,
      applications_ar,
      applications_en,
      details_ar,
      details_en,
      crossSection,
      diameter,
      length,
      shape,
      ratio,
    } = req.body;

    // Ensure JSON fields are stored as strings
    const parsedSpecificationsAr =
      typeof specifications_ar === "object"
        ? JSON.stringify(specifications_ar)
        : specifications_ar;
    const parsedSpecificationsEn =
      typeof specifications_en === "object"
        ? JSON.stringify(specifications_en)
        : specifications_en;
    const parsedDetailsAr =
      typeof details_ar === "object" ? JSON.stringify(details_ar) : details_ar;
    const parsedDetailsEn =
      typeof details_en === "object" ? JSON.stringify(details_en) : details_en;

    // Ensure applications_ar and applications_en are stored as arrays
    const parsedApplicationsAr = Array.isArray(applications_ar)
      ? applications_ar
      : JSON.parse(applications_ar || "[]");

    const parsedApplicationsEn = Array.isArray(applications_en)
      ? applications_en
      : JSON.parse(applications_en || "[]");

    // Get uploaded file URLs
    const image = req.files?.image?.[0]?.path || null;
    const pdfUrl = req.files?.pdf?.[0]?.path || null;

    // Find product by ID
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update product fields
    await product.update({
      type,
      is_featured,
      title_ar,
      title_en,
      description_ar,
      description_en,
      heroDescription_ar,
      heroDescription_en,
      specifications_ar: parsedSpecificationsAr,
      specifications_en: parsedSpecificationsEn,
      applications_ar: parsedApplicationsAr,
      applications_en: parsedApplicationsEn,
      details_ar: parsedDetailsAr,
      details_en: parsedDetailsEn,
      crossSection: crossSection,
      diameter: diameter,
      length: length,
      shape: shape,
      ratio: ratio,
      image: image || product.image, // Keep existing if not uploaded
      pdfUrl: pdfUrl || product.pdfUrl, // Keep existing if not uploaded
    });

    res.json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
