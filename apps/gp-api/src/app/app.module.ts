
import { Module } from '@nestjs/common';
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
import { CORE_ENTITIES } from '@gpremium/core-entities';
// import { CDST_ENTITIES } from '@gpremium/cdst-entities';
// import { ESTQ_ENTITIES } from '@gpremium/estq-entities';
// import { FNCR_ENTITIES } from '@gpremium/fncr-entities';

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
