import multer from "multer";

const storage = multer.memoryStorage(); // Store file in memory buffer
export const upload = multer({ storage }).single("file"); // 'file' is the field name
