import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/CommonModule';

@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
