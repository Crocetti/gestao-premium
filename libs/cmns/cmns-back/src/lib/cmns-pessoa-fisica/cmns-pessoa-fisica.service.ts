import { Inject, Injectable } from '@nestjs/common';
import { QueryParams } from '@gpremium/shared-all';
import { ResolversBack, AbstractBackService } from '@gpremium/shared-back';
import { getRepository } from 'typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class CmnsPessoaFisicaService extends AbstractBackService<CmnsPessoaFisica> {

    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly looger: Logger,
    ){
        super()
    }

    public async find(id: string, connection: string): Promise<CmnsPessoaFisica> {
        try {
            this.entityRepository = getRepository('CmnsPessoaFisica', connection);
            const select = this.entityRepository
                .createQueryBuilder('cmnsPessoaFisica')
                .where('cmnsPessoaFisica.id = :id', {id: id})
                ;
            return await select.getOne();
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async findByParams(query: QueryParams, connection: string): Promise<[CmnsPessoaFisica[], number]> {
        try {
            this.entityRepository = getRepository('CmnsPessoaFisica', connection);
            const take = query.pagesize ? query.pagesize : 15;
            const skip = query.page ? query.page *  take : 0;
            const resolver = new ResolversBack<CmnsPessoaFisica>();
            let select = this.entityRepository
                .createQueryBuilder('cmnsPessoaFisica')
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

    public async saveOne(entity: CmnsPessoaFisica, connection: string): Promise<CmnsPessoaFisica> {
        try {
            this.entityRepository = getRepository('CmnsPessoaFisica', connection);
            return await this.entityRepository.save(entity);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async saveAll(entities: CmnsPessoaFisica[], connection: string): Promise<CmnsPessoaFisica[]> {
        try {
            this.entityRepository = getRepository('CmnsPessoaFisica', connection);
            return await this.entityRepository.save(entities);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async removeOne(entity: CmnsPessoaFisica, connection: string): Promise<CmnsPessoaFisica> {
        try {
            this.entityRepository = getRepository('CmnsPessoaFisica', connection);
            return await this.entityRepository.remove(entity);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

    public async removeAll(entities: CmnsPessoaFisica[], connection: string): Promise<CmnsPessoaFisica[]> {
        try {
            this.entityRepository = getRepository('CmnsPessoaFisica', connection);
            return await this.entityRepository.remove(entities);
        } catch (error) {
            this.looger.error({level: 'error', message: JSON.stringify(error)});
            throw error;
        }
    }

}
