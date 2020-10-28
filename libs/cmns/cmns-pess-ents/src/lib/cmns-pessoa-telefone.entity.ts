import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmnsTipoTelefone } from '@gpremium/cmns-base-ents';
import { CmnsPessoa } from './cmns-pessoa.entity';
import { BasicEntity } from '@gpremium/shared-ent';
import type { ICmnsPessoa, ICmnsPessoaTelefone, ICmnsTipoTelefone } from '@gpremium/cmns-interfaces';

@Index('PK_CMNS_PESSOA_TELEFONE', ['id'], { unique: true })
@Entity('CMNS_PESSOA_TELEFONE')
export class CmnsPessoaTelefone extends BasicEntity
    implements ICmnsPessoaTelefone {

    @Column('nvarchar', { name: 'PSTL_NUMERO', nullable: true, length: 20 })
    public pstlNumero: string | null;

    @Column('nvarchar', { name: 'PSTL_RAMAL', nullable: true, length: 10 })
    public pstlRamal: string | null;

    @Column('nvarchar', { name: 'PSTL_OBSERVACAO', nullable: true })
    public pstlObservacao: string | null;

    @ManyToOne(() => CmnsTipoTelefone )
    @JoinColumn([{ name: 'PSTL_TPTL_ID', referencedColumnName: 'id' }])
    public cmnsTipoTelefone: ICmnsTipoTelefone;

    @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaTelefones)
    @JoinColumn([{ name: 'PSTL_PESS_ID', referencedColumnName: 'id' }])
    public cmnsPessoa: ICmnsPessoa;

}
