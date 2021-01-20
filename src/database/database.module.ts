import { DynamicModule, Global, Module } from '@nestjs/common'
import { MySQLProvider } from './mysql.provider'

@Global()
@Module({})
export class DataBaseModule {
  static forRoot(): DynamicModule {
    const connectionFactory = {
      provide: 'DATABASE',
      useFactory: () => {
        return new MySQLProvider()
      },
    }
    return {
      module: DataBaseModule,
      providers: [connectionFactory],
      exports: ['DATABASE'],
    }
  }
}
