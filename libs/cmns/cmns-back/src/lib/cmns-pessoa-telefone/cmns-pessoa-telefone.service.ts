import { Inject, Injectable } from '@nestjs/common';
import { QueryParams } from '@gpremium/shared-all';
import { ResolversBack, AbstractBackService } from '@gpremium/shared-back';
import { getRepository } from 'typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class CmnsPessoaTelefoneService extends AbstractBackService<CmnsPessoaTelefone> {

    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly looger: Logger,
    ){
        super()
    }

    public async find(id: string, connection: string): Promise<CmnsPessoaTelefone> {
        try {
            this.entityRepository = getRepository('CmnsPessoaTelefone', connection);
            const select = this.entityRepository
                .createQueryBuilder('cmnsPessoaTelefone')
                .where('cmnsPessoaTelefone.id = :id', {id: id})
                ;
            return await select.getOne();
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async findByParams(query: QueryParams, connection: string): Promise<[CmnsPessoaTelefone[], number]> {
        try {
            this.entityRepository = getRepository('CmnsPessoaTelefone', connection);
            const take = query.pagesize ? query.pagesize : 15;
            const skip = query.page ? query.page *  take : 0;
            const resolver = new ResolversBack<CmnsPessoaTelefone>();
            let select = this.entityRepository
                .createQueryBuilder('cmnsPessoaTelefone')
                ;
            if (!!query.filters) {
                select = resolver.resultSelect(select, query.filters);
            }
            if (!!query.orders) {
                query.orders.forEach((element, index) => {
                    if (element instanceof Array) {
                        if (index == 0) {
                            select = select.orderBy(element[0], element[1]);
                        } else {
                            select = select.addOrderBy(element[0], element[1]);
                        }
                    }
                });
            }
            select = select.take(take).skip(skip);
            return await select.getManyAndCount();
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async saveOne(entity: CmnsPessoaTelefone, connection: string): Promise<CmnsPessoaTelefone> {
        try {
            this.entityRepository = getRepository('CmnsPessoaTelefone', connection);
            return await this.entityRepository.save(entity);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async saveAll(entities: CmnsPessoaTelefone[], connection: string): Promise<CmnsPessoaTelefone[]> {
        try {
            this.entityRepository = getRepository('CmnsPessoaTelefone', connection);
            return await this.entityRepository.save(entities);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async removeOne(entity: CmnsPessoaTelefone, connection: string): Promise<CmnsPessoaTelefone> {
        try {
            this.entityRepository = getRepository('CmnsPessoaTelefone', connection);
            return await this.entityRepository.remove(entity);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async removeAll(entities: CmnsPessoaTelefone[], connection: string): Promise<CmnsPessoaTelefone[]> {
        try {
            this.entityRepository = getRepository('CmnsPessoaTelefone', connection);
            return await this.entityRepository.remove(entities);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

}
