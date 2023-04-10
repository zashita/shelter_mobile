import { FILE_UPLOAD_DESTINATION } from 'src/utils/constants';

const fs = require('fs');

function writeFile(file: Express.Multer.File) {
  return fs.writeFileSync(
    `${FILE_UPLOAD_DESTINATION}/${file.filename}`,
    file.buffer,
  );
}

export function saveFile(file: Express.Multer.File) {
  if (fs.existsSync(FILE_UPLOAD_DESTINATION)) {
    return writeFile(file);
  } else {
    fs.mkdirSync(FILE_UPLOAD_DESTINATION, '0744');
    return writeFile(file);
  }
}
