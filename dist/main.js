"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const nestjs_prisma_1 = require("nestjs-prisma");
const app_module_1 = require("./src/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const prismaService = app.get(nestjs_prisma_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new nestjs_prisma_1.PrismaClientExceptionFilter(httpAdapter));
    const configService = app.get(config_1.ConfigService);
    const nestConfig = configService.get('nest');
    app.enableCors();
    console.log("dwsdsd", process.env.DATABASE_URL);
    await app.listen(process.env.PORT || nestConfig.port || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map