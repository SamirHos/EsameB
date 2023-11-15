import { Module } from '@nestjs/common';
import { AxiosService } from './axios.service';
import { AxiosController } from './axios.controller';
import { HttpService } from '@nestjs/axios';

@Module({
  controllers: [AxiosController],
  providers: [AxiosService, HttpService],
})
export class AxiosModule {}
