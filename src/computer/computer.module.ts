import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';

@Module({
  imports: [CpuModule, DiskModule],
  providers: [ComputerService],
  controllers: [ComputerController],
})
export class ComputerModule {}
