import { Module } from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { ProdottiController } from './prodotti.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdottoEntity } from './entities/prodotti.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_COMMUNICATION',
        transport: Transport.TCP,
        options: { port: 3200 },
      },
    ]),
    TypeOrmModule.forFeature([ProdottoEntity]),
  ],
  controllers: [ProdottiController],
  providers: [ProdottiService],
})
export class ProdottiModule {}
