import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { Produto } from './models/produto.model';
import { ProdutoService } from './services/produto.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect:'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3006,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto])
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutoService],
})
export class AppModule {}
