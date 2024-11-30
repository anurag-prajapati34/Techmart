const multer=require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      
      cb(null, "uploads/"); // Folder to store images temporarily
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
      );
    },
  });
  
  const upload = multer({ storage: storage });
  const uploadProductImages=upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "extraImages", maxCount: 5 },
  ])

  module.exports= uploadProductImages