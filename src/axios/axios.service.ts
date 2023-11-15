import { HttpException, Injectable } from '@nestjs/common';
import { CreateAxioDto } from './dto/create-axio.dto';
import { UpdateAxioDto } from './dto/update-axio.dto';
import { Observable, catchError, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ProdottoEntity } from 'src/prodotti/entities/prodotti.entity';
import { OrdiniDTO } from 'src/prodotti/dto/OrdiniDTO';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AxiosService {
  constructor(private readonly httpService: HttpService) {}
  create(createAxioDto: CreateAxioDto) {
    return 'This action adds a new axio';
  }

  async FindAllProdotti(): Promise<Observable<AxiosResponse<OrdiniDTO>>> {
    return this.httpService.get(`http://localhost:5000`).pipe(
      map((resp) => resp.data),
      catchError((err) => {
        throw new HttpException(err.response.data, err.response.status);
      }),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} axio`;
  }

  update(id: number, updateAxioDto: UpdateAxioDto) {
    return `This action updates a #${id} axio`;
  }

  remove(id: number) {
    return `This action removes a #${id} axio`;
  }
}
