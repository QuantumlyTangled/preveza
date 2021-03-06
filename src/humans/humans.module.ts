import { Module } from '@nestjs/common';
import { HumansService } from './humans.service';
import { HumansController } from './humans.controller';

@Module({
  providers: [HumansService],
  controllers: [HumansController]
})
export class HumansModule {}
