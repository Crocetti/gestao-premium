import { BasicAll } from '@gpremium/shared-all';
import { Response } from 'express';
import {
    DateTimeFormatter,
    LocalDate,
    LocalDateTime,
    LocalTime,
} from '@js-joda/core';

export abstract class AbstractBackController<I> extends BasicAll {
    public abstract find(
        res: Response,
        id: string,
        connectName: string
    ): I;
    public abstract findByCode(
        res: Response,
        cod: string,
        connectName: string
    ): I;
    public abstract findByParams(
        res: Response,
        queryParams: any,
        connectName: string
    ): I[];
    public abstract saveOne(
        res: Response,
        model: I,
        connectName: string
    ): I;
    public abstract saveAll(
        res: Response,
        models: I[],
        connectName: string
    ): I[];
    public abstract removeOne(
        res: Response,
        model: I,
        connectName: string
    ): I;
    public abstract removeAll(
        res: Response,
        models: I[],
        connectName: string
    ): I;

    public abstract ajustDates(model: I);

}
