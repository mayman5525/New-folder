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
      applications_ar,
      filter_type_en,
      filter_type_ar,
      applications_en,
      details_ar,
      details_en,
      crossSection,
      diameter,
      length,
      shape,
      ratio,
    } = req.body;

    // Ensure applications_ar and applications_en are valid JSON arrays
    let parsedApplicationsAr = [];
    let parsedApplicationsEn = [];

    try {
      parsedApplicationsAr = Array.isArray(applications_ar)
        ? applications_ar
        : JSON.parse(applications_ar || "[]");
    } catch (error) {
      parsedApplicationsAr = [];
      throw new Error("Invalid JSON for applications_ar: " + error.message);
    }

    try {
      parsedApplicationsEn = Array.isArray(applications_en)
        ? applications_en
        : JSON.parse(applications_en || "[]");
    } catch (error) {
      parsedApplicationsEn = [];
      throw new Error("Invalid JSON for applications_en: " + error.message);
    }

    // // Ensure details_ar and details_en are JSON strings
    // const parsedDetailsAr =
    //   typeof details_ar === "object"
    //     ? JSON.stringify(details_ar)
    //     : details_ar || "{}";
    // const parsedDetailsEn =
    //   typeof details_en === "object"
    //     ? JSON.stringify(details_en)
    //     : details_en || "{}";

    // Ensure files exist before accessing their paths
    const image = req.files && req.files.image ? req.files.image[0].path : null;

    // Modify PDF URL to force inline display if it exists
    let pdfUrl = null;
    if (req.files && req.files.pdf) {
      // Get original Cloudinary URL
      pdfUrl = req.files.pdf[0].path;

      // Modify the URL to ensure PDF displays inline
      if (pdfUrl && pdfUrl.includes("/upload/")) {
        pdfUrl = pdfUrl.replace("/upload/", "/upload/fl_attachment:false/");
      }
    }

    const newProduct = await Product.create({
      id,
      type,
      is_featured,
      title_ar,
      title_en,
      description_ar,
      filter_type_en,
      filter_type_ar,
      description_en,
      heroDescription_ar,
      heroDescription_en,
      applications_ar: parsedApplicationsAr,
      applications_en: parsedApplicationsEn,
      details_ar: details_ar,
      details_en: details_en,
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
exports.getPdf = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product || !product.pdfUrl) {
      return res.status(404).send("PDF not found");
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'inline; filename="product-document.pdf"'
    );

    res.redirect(
      product.pdfUrl.replace("/upload/", "/upload/fl_attachment:false/")
    );
  } catch (error) {
    res.status(500).send("Error serving PDF: " + error.message);
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
      applications_ar,
      applications_en,
      filter_type_en,
      filter_type_ar,
      details_ar,
      details_en,
      crossSection,
      diameter,
      length,
      shape,
      ratio,
    } = req.body;

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
      filter_type_en,
      filter_type_ar,
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
