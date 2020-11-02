import { BasicEntity } from '@gpremium/shared-ent';
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import { CmnsPessoa } from './cmns-pessoa.entity';
import { CmnsRamoAtividade } from '@gpremium/cmns-base-ents';
import type {
    ICmnsRamoAtividade,
} from '@gpremium/cmns-base-intf';
import type {
    ICmnsPessoa,
    ICmnsPessoaJuridica,
} from '@gpremium/cmns-pess-intf';
@Index('PK_CMNS_PESSOA_JURIDICA', ['id'], { unique: true })
@Entity('CMNS_PESSOA_JURIDICA')
export class CmnsPessoaJuridica extends BasicEntity
    implements ICmnsPessoaJuridica {
    @Column('nvarchar', {
        name: 'PSJR_RAZAO_SOCIAL',
        nullable: true,
        length: 128,
    })
    public psjrRazaoSocial: string | null;

    @Column('nvarchar', {
        name: 'PSJR_INSC_ESTADUAL',
        nullable: true,
        length: 25,
    })
    public psjrInscEstadual: string | null;

    @Column('nvarchar', {
        name: 'PSJR_INSC_ESTADUAL_SUBT',
        nullable: true,
        length: 25,
    })
    public psjrInscEstadualSubt: string | null;

    @Column('nvarchar', {
        name: 'PSJR_INSC_MUNICIPAL',
        nullable: true,
        length: 20,
    })
    public psjrInscMunicipal: string | null;

    @OneToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaJuridica)
    @JoinColumn([{ name: 'PSJR_PESS_ID', referencedColumnName: 'id' }])
    public cmnsPessoa: ICmnsPessoa;

    @ManyToOne(() => CmnsRamoAtividade)
    @JoinColumn([{ name: 'PSJR_RMAT_ID', referencedColumnName: 'id' }])
    public cmnsRamoAtividade: ICmnsRamoAtividade;
}
