import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import type {
    ICmnsTipoEmail,
} from '@gpremium/cmns-base-intf';
import type {
    ICmnsPessoa,
    ICmnsPessoaEmail,
} from '@gpremium/cmns-pess-intf';
import { CmnsPessoa } from './cmns-pessoa.entity';
import { CmnsTipoEmail } from '@gpremium/cmns-base-ents';

@Index('PK_CMNS_PESSOA_EMAIL', ['id'], { unique: true })
@Entity('CMNS_PESSOA_EMAIL')
export class CmnsPessoaEmail extends BasicEntity implements ICmnsPessoaEmail {
    @Column('nvarchar', { name: 'PSEM_ENDERECO', nullable: true, length: 256 })
    public psemEndereco: string | null;

    @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaEmails)
    @JoinColumn([{ name: 'PSEM_PESS_ID', referencedColumnName: 'id' }])
    public cmnsPessoa: ICmnsPessoa;

    @ManyToOne(() => CmnsTipoEmail)
    @JoinColumn([{ name: 'PSEM_TPEM_ID', referencedColumnName: 'id' }])
    public cmnsTipoEmail: ICmnsTipoEmail;
}
