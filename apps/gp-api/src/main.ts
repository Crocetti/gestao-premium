/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import * as bodyParse from 'body-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors({
        origin: true,
        methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        allowedHeaders: `Content-Type,Authorization,Content-Length,X-Requested-With,Access-Control-Request-Methods,Connect-Name,X-Storage-User,X-Api-Key,X-Auth-Token`,
    });
    app.use(bodyParse.json({ limit: '50mb' }));
    app.use(bodyParse.urlencoded({ limit: '50mb', extended: true }));

    const port = process.env.PORT || 9100;
    await app.listen(port, () => {
        Logger.log(
            'Listening at http://localhost:' + port + '/' + globalPrefix
        );
    });
}

bootstrap();
