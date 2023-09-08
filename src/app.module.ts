import { Module } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AppController } from './rest/app/app.controller';
import { AppService } from './business/app/app.service';
import { ValidationPipe } from './pipes/validation.pipe';
import { HttpModule } from '@nestjs/axios';
import { DogClient } from 'src/http/dog-client.http';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/global.config';

import * as Joi from 'joi';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ConfigModule.forRoot({
      cache: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('develop', 'prod', 'uat', 'preprod')
          .default('develop'),
        PORT: Joi.number().default(3000),
      }),
      load: [configuration]
    }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 60,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 6000,
        limit: 20
      }
    ]),
  ],
  controllers: [AppController],
  providers: [
    DogClient,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    AppService,
  ],
})
export class AppModule { }
