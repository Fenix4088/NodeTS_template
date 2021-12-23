import { UploadedFile } from 'express-fileupload';
import { v4 } from 'uuid';
import path from 'path';

interface IFileService {
  saveFile(file: UploadedFile | UploadedFile[]): Promise<string | undefined>;
}

class FileService implements IFileService {
  public async saveFile(file: UploadedFile | UploadedFile[]) {
    try {
      const fileName = v4() + '.jpg';
      const filePath = path.resolve('static', fileName);

      if (Array.isArray(file)) return;

      await file.mv(filePath);

      return fileName;

    } catch (e) {
      console.log(e);
      return '';
    }
  }
}

export default new FileService();
