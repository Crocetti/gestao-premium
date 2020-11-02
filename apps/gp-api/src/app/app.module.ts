
import { Module } from '@nestjs/common';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winstom from 'winston';
import { CmnsBackModule } from '@gpremium/cmns-back';
import { CoreBackModule } from '@gpremium/core-back';
// import { CdstBackModule } from '@gpremium/cdst-back';
// import { SstmBackModule } from '@gpremium/sstm-back';
// import { MenuBackModule } from '@gpremium/menu-back';
// import { EstqBackModule } from '@gpremium/estq-back';
import {
    CMNS_BASE_ENTITIES,
} from '@gpremium/cmns-base-ents';
import {
    CMNS_PESS_ENTITIES,
} from '@gpremium/cmns-pess-ents';
import { CORE_ENTITIES } from '@gpremium/core-ents';
// import { CDST_ENTITIES } from '@gpremium/cdst-ents';
// import { ESTQ_ENTITIES } from '@gpremium/estq-ents';
// import { FNCR_ENTITIES } from '@gpremium/fncr-ents';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        WinstonModule.forRoot({
            level: 'info',
            format: winstom.format.json(),
            transports:[
                new winstom.transports.File({
                    filename: 'error.log',
                    level: 'error',
                    format: winstom.format.combine(
                        winstom.format.timestamp(),
                        nestWinstonModuleUtilities.format.nestLike()
                    )
                }),
                new winstom.transports.File({
                    filename: 'combined.log',
                    format: winstom.format.combine(
                        winstom.format.timestamp(),
                        nestWinstonModuleUtilities.format.nestLike()
                    )
                })
            ]
        }),
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
                ...CMNS_BASE_ENTITIES,
                ...CMNS_PESS_ENTITIES,
                ...CORE_ENTITIES,
                // ...CDST_ENTITIES,
                // ...ESTQ_ENTITIES,
                // ...FNCR_ENTITIES
            ],
        }),
        CmnsBackModule,
        CoreBackModule,
        // CdstBackModule,
        // SstmBackModule,
        // MenuBackModule,
        // EstqBackModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
