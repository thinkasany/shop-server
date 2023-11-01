import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './api/goods/goods.module';
import { SettingsModule } from './api/settings/settings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsEntity } from './api/goods/entities/good.entity';
import { SettingsEntity } from './api/settings/entities/setting.entity';
import { AuthModule } from './api/auth/auth.module';
import { UserEntity } from './api/auth/entities/auth.entity';
import { AddressModule } from './api/address/address.module';
import { AddressEntity } from './api/address/entities/address.entity';
import { RegionEntity } from './api/region/entities/region.entity';
import { RegionModule } from './api/region/region.module';
import { JwtModule } from '@nestjs/jwt';
import { FootprintModule } from './api/footprint/footprint.module';
import { FootprintEntity } from './api/footprint/entities/footprint.entity';
import { OrderModule } from './api/order/order.module';
import { OrderEntity } from './api/order/entities/order.entity';
import { CatalogModule } from './api/catalog/catalog.module';
import { CategoryEntity } from './api/catalog/entities/catalog.entity';
import { IndexModule } from './api/index/index.module';
import { AdEntity } from './api/index/entities/ad.entity';
import { NoticeEntity } from './api/index/entities/notice.entity';
import { CartModule } from './api/cart/cart.module';
import { CartEntity } from './api/cart/entities/cart.entity';
import { ShowSettingsEntity } from './api/settings/entities/showSettings.entity';
import { SearchModule } from './api/search/search.module';
import { KeywordsEntity } from './api/search/entities/keywords.entity';
import { GoodsGalleryEntity } from './api/goods/entities/goodsGallery.entity';
import { ProductEntity } from './api/goods/entities/product.entity';
import { GoodsSpecificationEntity } from './api/goods/entities/goodsSpecification.entity';
import { SpecificationEntity } from './api/goods/entities/specification.entity';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'sdfsdfsdf123123!ASDasdasdasdasda',
      signOptions: {
        expiresIn: '7d',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'shop', //shop
      synchronize: true,
      logging: true,
      entities: [
        GoodsEntity,
        SettingsEntity,
        UserEntity,
        AddressEntity,
        RegionEntity,
        FootprintEntity,
        OrderEntity,
        CategoryEntity,
        AdEntity,
        NoticeEntity,
        CartEntity,
        ShowSettingsEntity,
        KeywordsEntity,
        GoodsGalleryEntity,
        ProductEntity,
        GoodsSpecificationEntity,
        SpecificationEntity,
      ],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    GoodsModule,
    SettingsModule,
    AuthModule,
    AddressModule,
    RegionModule,
    FootprintModule,
    OrderModule,
    CatalogModule,
    IndexModule,
    CartModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
