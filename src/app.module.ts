import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './rest/app/app.controller';
import { AppService } from './business/app/app.service';
import { ValidationPipe } from './pipes/validation.pipe';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService],
})
export class AppModule {}
