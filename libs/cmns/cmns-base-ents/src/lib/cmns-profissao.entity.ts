import { BasicEntity } from '@gpremium/shared-ent';
import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import type { ICmnsProfissao } from '@gpremium/cmns-base-intf';

@Index('PK_CMNS_PROFISSAO', ['id'], { unique: true })
@Entity('CMNS_PROFISSAO')
export class CmnsProfissao extends BasicEntity implements ICmnsProfissao {

    @Column('nvarchar', { name: 'PROF_CODIGO', nullable: true, length: 5 })
    public profCodigo: string | null;

    @Column('nvarchar', { name: 'PROF_NOME', nullable: true, length: 64 })
    public profNome: string | null;

    @Column('nvarchar', { name: 'PROF_CODIGO_IRPF', nullable: true, length: 5 })
    public profCodigoIrpf: string | null;

    @ManyToOne(
        () => CmnsProfissao,
        (cmnsProfissao) => cmnsProfissao.cmnsProfissoes
    )
    @JoinColumn([{ name: 'PROF_PROF_ID', referencedColumnName: 'id' }])
    public cmnsProfissao: ICmnsProfissao;

    @OneToMany(() => CmnsProfissao, (cmnsProfissao) => cmnsProfissao.cmnsProfissao)
    public cmnsProfissoes: ICmnsProfissao[];
}
