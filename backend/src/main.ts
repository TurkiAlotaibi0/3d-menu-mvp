import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller('api')
class ApiController {
  @Get('ping')
  ping() {
    return { message: 'pong' };
  }
}

export { ApiController };

@Module({ controllers: [ApiController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap(); 