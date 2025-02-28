const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Configure Multer to use Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const folder = req.params.folder || "uploads"; // Dynamic folder selection
    const isImage = file.mimetype.startsWith("image/");
    const isPDF = file.mimetype === "application/pdf";

    if (isImage) {
      return {
        folder,
        format: "jpeg", // Convert all images to JPEG
        public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
        transformation: [
          { width: 1200, height: 1200, crop: "fill", gravity: "auto" },
        ],
      };
    } else if (isPDF) {
      return {
        folder,
        public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
        resource_type: "raw",
        access_mode: "public",
      };
    } else {
      throw new Error("Unsupported file type");
    }
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    console.log("📂 File received:", file.originalname, file.mimetype);
    if (
      file.mimetype.startsWith("image/") ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only images and PDFs are allowed!"), false);
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

module.exports = { upload, cloudinary };
