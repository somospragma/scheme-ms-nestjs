import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './rest/app/app.controller';
import { AppService } from './business/app/app.service';
import { ValidationPipe } from './pipes/validation.pipe';
import { HttpModule } from '@nestjs/axios';
import { DogClient } from 'src/http/dog-client.rest-client';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController],
  providers: [
    DogClient,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
