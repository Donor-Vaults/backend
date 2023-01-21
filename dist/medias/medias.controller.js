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
const fs_1 = require("fs");
const path_1 = require("path");
require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path_2 = require("path");
const multer_1 = require("multer");
const swagger_1 = require("@nestjs/swagger");
const editFileName = (req, file, callback) => {
    const fileExtName = (0, path_2.extname)(file.originalname);
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
    uploadSingle(file, header) {
        console.log("dssdsdsdsdsds");
        const origin = header.host;
        const url = `http://${origin}/documents/${file.filename}`;
        const response = {
            originalname: file.originalname,
            filename: file.filename,
            url
        };
        return response;
    }
    getFile(params) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), `uploads/${params.name}`));
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('document', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: exports.editFileName,
        }),
        fileFilter: exports.imageFileFilter,
    })),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                photo: {
                    type: 'string',
                    format: 'binary',
                }
            }
        }
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MediasController.prototype, "uploadSingle", null);
__decorate([
    (0, common_1.Get)(":name"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], MediasController.prototype, "getFile", null);
MediasController = __decorate([
    (0, common_1.Controller)('documents')
], MediasController);
exports.MediasController = MediasController;
//# sourceMappingURL=medias.controller.js.map