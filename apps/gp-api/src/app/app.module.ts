import { CDST_ENTITIES } from '@gpremium/cmns-entities';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'mssql',
            host: 'ALEX-LT',
            port: 1433,
            username: 'sa',
            password: '@aac663#',
            database: 'NEW_SYSTEMS',
            schema: 'dbo',
            synchronize: false,
            entities: [
                ...CDST_ENTITIES
            ],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
