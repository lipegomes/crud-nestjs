import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DataBaseModule } from './database/database.module'
import { ProductModule } from './modules/product/product.module'

@Module({
  imports: [DataBaseModule.forRoot(), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
