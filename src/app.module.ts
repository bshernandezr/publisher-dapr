import { DaprModule } from './dapr/dapr.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DaprModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
