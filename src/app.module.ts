import { Module } from '@nestjs/common';
import { AppController } from './rest/app/app.controller';
import { AppService } from './business/app/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
