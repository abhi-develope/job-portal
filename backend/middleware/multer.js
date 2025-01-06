import multer from "multer";

const storage = multer.memoryStorage();

// Middleware for handling multiple file fields
export const multipleUploads = multer({ storage }).fields([
  { name: "profilePicture", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]);
