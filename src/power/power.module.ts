import { Module } from '@nestjs/common';
import { PowerController } from './power.controller';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  controllers: [PowerController],
  exports: [PowerService],
})
export class PowerModule {}
