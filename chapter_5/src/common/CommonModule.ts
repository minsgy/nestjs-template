import { Module } from '@nestjs/common';
import { CommonService } from './commonService';

@Module({
  providers: [CommonService],
  controllers: [CommonService],
})
export class CommonModule {}
