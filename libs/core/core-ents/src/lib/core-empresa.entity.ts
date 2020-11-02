import { BasicEntity } from '@gpremium/shared-ent';
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import type { ICoreCorporacao, ICoreEmpresa, ICoreUnidadeEmpresarial } from '@gpremium/core-interfaces';
import { CoreCorporacao } from './core-corporacao.entity';
import { CoreUnidadeEmpresarial } from './core-unidade-empresarial.entity';

@Index('PK_CORE_EMPRESA', ['id'], { unique: true })
@Entity('CORE_EMPRESA')
export class CoreEmpresa extends BasicEntity implements ICoreEmpresa {

    @Column('nvarchar', { name: 'EMPR_NOME', nullable: true, length: 64 })
    public emprNome: string | null;

    @Column('nvarchar', { name: 'EMPR_SENHA', nullable: true, length: 256 })
    public emprSenha: string | null;

    @Column('nvarchar', { name: 'EMPR_LOGOMARCA', nullable: true })
    public emprLogomarca: string | null;

    @ManyToOne(
        () => CoreCorporacao,
        (coreCorporacao) => coreCorporacao.coreEmpresas
    )
    @JoinColumn([{ name: 'EMPR_CPRC_ID', referencedColumnName: 'id' }])
    public coreCorporacao: ICoreCorporacao;

    @OneToMany(
        () => CoreUnidadeEmpresarial,
        (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.coreEmpresa
    )
    public coreUnidadeEmpresarials: ICoreUnidadeEmpresarial[];

}
