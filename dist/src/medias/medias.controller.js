"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediasController = exports.imageFileFilter = exports.editFileName = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
require("multer");
const aws_sdk_1 = require("aws-sdk");
const uuid_1 = require("uuid");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const mime = require('mime');
const editFileName = (req, file, callback) => {
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Date.now().toString(36) + Math.random().toString(36).substring(2);
    callback(null, `${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|jfif|pdf)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
let MediasController = class MediasController {
    constructor(configService) {
        this.configService = configService;
    }
    async uploadFileToS3(dataBuffer, fileName) {
        const s3 = new aws_sdk_1.S3();
        const uploadResult = await s3.upload({
            Bucket: this.configService.get('AWS_BUCKET_NAME'),
            Body: dataBuffer,
            ContentType: mime.getType(fileName),
            Key: `${(0, uuid_1.v4)()}-${fileName}`,
        }).promise();
        const fileStorageInDB = ({
            fileName,
            fileUrl: uploadResult.Location,
            key: uploadResult.Key,
        });
        console.log("Saasas", fileStorageInDB);
        return fileStorageInDB.fileUrl;
    }
    async uploadFile(file) {
        const uploadedFile = await this.uploadFileToS3(file.buffer, file.originalname);
        return { url: uploadedFile };
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MediasController.prototype, "uploadFile", null);
MediasController = __decorate([
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MediasController);
exports.MediasController = MediasController;
//# sourceMappingURL=medias.controller.js.map