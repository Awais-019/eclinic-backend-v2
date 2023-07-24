import path from "path";
import { UploadedFile } from "express-fileupload";
import { randomUUID } from "crypto";

export default {
  uploadFile: async (file: UploadedFile, folder: string) => {
    const newName = `${randomUUID()}${path.extname(file.name)}`;
    const uploadPath = path.resolve(
      `./src/public/uploads/${folder}/${newName}`
    );

    await file.mv(uploadPath);
    return process.env.BASE_URL + `/uploads/${folder}/${newName}`;
  },
};