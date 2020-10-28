import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import type { ICmnsLocalidade, ICmnsPais, ICmnsUnidadeFederativa } from '@gpremium/cmns-interfaces';
import { BasicEntity } from '@gpremium/shared-ent';
import { LocalDateTime } from '@js-joda/core';
import { CmnsLocalidade } from './cmns-localidade.entity';
import { CmnsPais } from './cmns-pais.entity';

@Index('PK_CMNS_UNIDADE_FEDERATIVA', ['id'], { unique: true })
@Entity('CMNS_UNIDADE_FEDERATIVA')
export class CmnsUnidadeFederativa extends BasicEntity
    implements ICmnsUnidadeFederativa {

    @Column('nvarchar', { name: 'UNFD_NOME', nullable: true, length: 64 })
    public unfdNome: string;

    @Column('nvarchar', { name: 'UNFD_SIGLA', nullable: true, length: 3 })
    public unfdSigla: string;

    @Column('nvarchar', { name: 'UNFD_PREPOSICAO', nullable: true, length: 3 })
    public unfdPreposicao?: string;

    @Column('nvarchar', { name: 'UNFD_NR_IBGE', nullable: true, length: 12 })
    public unfdNrIbge?: string;

    @Column('nvarchar', { name: 'UNFD_CEP_INICIAL', nullable: true, length: 9 })
    public unfdCepInicial?: string;

    @Column('nvarchar', { name: 'UNFD_CEP_FINAL', nullable: true, length: 9 })
    public unfdCepFinal?: string;

    @ManyToOne(() => CmnsPais, (cmnsPais) => cmnsPais.cmnsUnidadeFederativas)
    @JoinColumn([{ name: 'UNFD_PAIS_ID', referencedColumnName: 'id' }])
    public cmnsPais: ICmnsPais;

    @OneToMany(() => CmnsLocalidade,(cmnsLocalidade) => cmnsLocalidade.cmnsUnfd)
    public cmnsLocalidades?: ICmnsLocalidade[];
}
