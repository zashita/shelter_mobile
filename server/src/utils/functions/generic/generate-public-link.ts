import { FILE_UPLOAD_DESTINATION } from 'src/utils/constants';

export function genereatePublicLink(file: Express.Multer.File) {
  return `${process.env.DOMAIN_URL}/${FILE_UPLOAD_DESTINATION}/${file.filename}`;
}
