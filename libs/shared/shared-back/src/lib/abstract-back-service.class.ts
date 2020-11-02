import { QueryParams, QueryReturn, BasicAll } from '@gpremium/shared-all';
import { Repository } from 'typeorm';

export abstract class AbstractBackService<E> extends BasicAll {

    public entityRepository: Repository<E>;

    constructor() {
        super();
    }
    public abstract find(id: string, connection: string): Promise<E>;
    public abstract findByCode(cod: string, connection: string): Promise<E>
    public abstract findByParams(query: QueryParams, connection: string): Promise<[E[], number]>
    public abstract saveOne(entity: E, connection: string): Promise<E>;
    public abstract saveAll(entities: E[], connection: string): Promise<E[]>;
    public abstract removeOne(entity: E, connection: string): Promise<E>;
    public abstract removeAll(entities: E[], connection: string): Promise<E[]>;

}
