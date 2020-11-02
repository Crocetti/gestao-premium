import {
    BaseEntity,
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { CoreEmpresa } from './core-empresa.entity';
import { CmnsPessoa } from '@gpremium/cmns-pess-ents';
import type {
    ICoreEmpresa,
    ICoreUnidadeEmpresarial,
} from '@gpremium/core-interfaces';
import type { ICmnsPessoa } from '@gpremium/cmns-pess-intf';
import { BasicEntity } from '@gpremium/shared-ent';

@Index('PK_CORE_UNIDADE_EMPRESARIAL', ['id'], { unique: true })
@Entity('CORE_UNIDADE_EMPRESARIAL')
export class CoreUnidadeEmpresarial extends BasicEntity
    implements ICoreUnidadeEmpresarial {
    @Column('nvarchar', { name: 'UNEM_CODIGO', nullable: true, length: 10 })
    public unemCodigo: string | null;

    @Column('nvarchar', { name: 'UNEM_SKIN_NAME', nullable: true, length: 40 })
    public unemSkinName: string | null;

    @Column('nvarchar', { name: 'UNEM_SENHA', nullable: true, length: 256 })
    public unemSenha: string | null;

    @Column('nvarchar', { name: 'UNEM_LOGOMARCA', nullable: true })
    public unemLogomarca: string | null;

    @ManyToOne(
        () => CoreEmpresa,
        (coreEmpresa) => coreEmpresa.coreUnidadeEmpresarials
    )
    @JoinColumn([{ name: 'UNEM_EMPR_ID', referencedColumnName: 'id' }])
    public coreEmpresa: ICoreEmpresa;

    @ManyToOne(() => CmnsPessoa)
    @JoinColumn([{ name: 'UNEM_PESS_ID', referencedColumnName: 'id' }])
    public cmnsPessoa: ICmnsPessoa;
}
