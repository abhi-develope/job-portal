import multer from "multer";

const storage = multer.memoryStorage(); // Store file in memory buffer
export const upload = multer({ storage }).single("resume"); // 'resume' is the field name
