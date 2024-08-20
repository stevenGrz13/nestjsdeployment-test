import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvisModule } from './avis/avis.module';
import { ExemplestyleModule } from './exemplestyle/exemplestyle.module';
import { ImagehotelModule } from './imagehotel/imagehotel.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ParametreModule } from './parametre/parametre.module';
import { ParametrehotelModule } from './parametrehotel/parametrehotel.module';
import { TypechambreModule } from './typechambre/typechambre.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join('uploads'),
      serveRoot: '/uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', 
      password: '',
      database: 'tourism',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    HotelModule,
    AvisModule,
    ExemplestyleModule,
    ImagehotelModule,
    ParametreModule,
    ParametrehotelModule,
    TypechambreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
