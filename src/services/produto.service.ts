import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from "../models/produto.model";

@Injectable()
export class ProdutoService {

  constructor(
    @InjectModel(Produto)
    private produtoModel: typeof Produto
  ){}

  async getAll(): Promise <Produto[]>{
    return this.produtoModel.findAll();
  }

  async getById(id: number): Promise <Produto> {
    return this.produtoModel.findByPk(id);
  }

  async create(produto: Produto){
    this.produtoModel.create(produto); 
  }
  
  async update(produto: Produto): Promise<[number, Produto[]]>{
    return this.produtoModel.update(produto, {
      where: {
        id:produto.id
      }
    });
  }

  async delete(id:number){
    const produto: Produto = await this.getById(id);
    produto.destroy();
  }

}