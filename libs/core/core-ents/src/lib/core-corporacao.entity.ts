import { ICmnsTipoEndereco } from '@gpremium/cmns-base-intf';
import { ICoreCorporacao, ICoreEmpresa } from '@gpremium/core-intf';
import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CoreEmpresa } from './core-empresa.entity';

@Index('PK_CORE_CORPORACAO', ['id'], { unique: true })
@Entity('CORE_CORPORACAO')
export class CoreCorporacao extends BasicEntity implements ICoreCorporacao {
    @Column('nvarchar', { name: 'CPRC_NOME', nullable: true, length: 64 })
    public cprcNome: string | null;

    @Column('nvarchar', { name: 'CPRC_SENHA', nullable: true, length: 256 })
    public cprcSenha: string | null;

    @Column('nvarchar', { name: 'CPRC_LOGOMARCA', nullable: true })
    public cprcLogomarca: string | null;

    @OneToMany(() => CoreEmpresa, (coreEmpresa) => coreEmpresa.coreCorporacao)
    public coreEmpresas?: ICoreEmpresa[];
}
