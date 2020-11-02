import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { BasicEntity } from '@gpremium/shared-ent';
import { CmnsBairro } from './cmns-bairro.entity';
import { CmnsUnidadeFederativa } from './cmns-unidade-federativa.entity';
import type{ ICmnsBairro, ICmnsLocalidade, ICmnsUnidadeFederativa } from '@gpremium/cmns-base-intf';

@Index('PK_CMNS_LOCALIDADE', ['id'], { unique: true })
@Entity('CMNS_LOCALIDADE')
export class CmnsLocalidade extends BasicEntity implements ICmnsLocalidade {

    @Column('nvarchar', { name: 'LCLD_CODIGO', nullable: true, length: 10 })
    public lcldCodigo: string;

    @Column('nvarchar', { name: 'LCLD_NR_IBGE', nullable: true, length: 12 })
    public lcldNrIbge?: string;

    @Column('nvarchar', { name: 'LCLD_NOME', nullable: true, length: 128 })
    public lcldNome: string;

    @Column('nvarchar', { name: 'LCLD_CEP', nullable: true, length: 9 })
    public lcldCep: string;

    @Column('nvarchar', { name: 'LCLD_NOME_ABREV', nullable: true, length: 40 })
    public lcldNomeAbrev: string;

    @Column('nvarchar', { name: 'LCLD_CEP_INICIAL', nullable: true, length: 9 })
    public lcldCepInicial?: string | null;

    @Column('nvarchar', { name: 'LCLD_CEP_FINAL', nullable: true, length: 9 })
    public lcldCepFinal?: string;

    @OneToMany(() => CmnsBairro, (cmnsBairro) => cmnsBairro.cmnsLocalidade)
    public cmnsBairros?: ICmnsBairro[];

    @ManyToOne(
        () => CmnsUnidadeFederativa,
        (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.cmnsLocalidades
    )
    @JoinColumn([{ name: 'LCLD_UNFD_ID', referencedColumnName: 'id' }])
    public cmnsUnfd: ICmnsUnidadeFederativa;
}
