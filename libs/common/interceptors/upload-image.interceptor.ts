import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UnsupportedMediaTypeException } from '@nestjs/common';

export const MultipleImageUploadInterceptor = (
  fieldName: string,
  maxCount = 5,
  maxSizeMB = 2,
) => {
  return FilesInterceptor(fieldName, maxCount, {
    limits: {
      fileSize: maxSizeMB * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.mimetype)) {
        return cb(
          new UnsupportedMediaTypeException(
            'Only JPEG, PNG, and WEBP images are allowed',
          ),
          false,
        );
      }
      cb(null, true);
    },
  });
};

export const SingleImageUploadInterceptor = (
  fieldName: string,
  maxSizeMB = 2,
) => {
  return FileInterceptor(fieldName, {
    limits: {
      fileSize: maxSizeMB * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.mimetype)) {
        return cb(
          new UnsupportedMediaTypeException(
            'Only JPEG, PNG, and WEBP are allowed',
          ),
          false,
        );
      }
      cb(null, true);
    },
  });
};

// @Post('upload')
// @UseInterceptors(SingleImageUploadInterceptor('file'))
// upload(@UploadedFile() file: Express.Multer.File) {
//   return this.cloudinaryService.uploadFile(file);
// }

// @Post('upload')
// @UseInterceptors(MultipleImageUploadInterceptor('files', 10, 3))
// async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
//   const uploadResults = await Promise.all(
//     files.map((file) => this.cloudinaryService.uploadFile(file)),
//   );
//   return uploadResults;
// }
