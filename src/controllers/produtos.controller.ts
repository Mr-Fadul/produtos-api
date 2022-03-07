import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from 'src/services/produto.service';
import { Produto } from '../models/produto.model';

@Controller('produtos')
export class ProdutosController {

  constructor(private  produtoService: ProdutoService){

  }

  @Get()
  async getAll(): Promise<Produto[]>{
    return this.produtoService.getAll();
  }

  @Get(':id')
  async getProduct(@Param() params):  Promise<Produto>{
    return this.produtoService.getById(params.id);
  }

  @Post()
  async create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  @Put()
  async edit(@Body() produto: Produto): Promise<[number, Produto[]]>{
    return this.produtoService.update(produto);
  }

  @Delete(':id')
  async delete(@Param() params){
    return this.produtoService.delete(params.id);     
  }
}
