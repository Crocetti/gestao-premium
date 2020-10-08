import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mssql',
            host: 'alex-lt',
            port: 1433,
            username: 'sa',
            password: '@aac663#',
            database: 'systems',
            entities: [],
            synchronize: false
        }),

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
