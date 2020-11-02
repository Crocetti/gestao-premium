import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmnsTipoEndereco, CmnsBairro } from '@gpremium/cmns-base-ents';
import { CmnsPessoa } from './cmns-pessoa.entity';
import { BasicEntity } from '@gpremium/shared-ent';
import type {
    ICmnsBairro,
    ICmnsTipoEndereco,
} from '@gpremium/cmns-base-intf';
import type {
    ICmnsPessoa,
    ICmnsPessoaEndereco,
} from '@gpremium/cmns-pess-intf';

@Index('PK_CMNS_PESSOA_ENDERECO', ['id'], { unique: true })
@Entity('CMNS_PESSOA_ENDERECO')
export class CmnsPessoaEndereco extends BasicEntity
    implements ICmnsPessoaEndereco {
    @Column('nvarchar', { name: 'PSEN_CEP', nullable: true, length: 9 })
    public psenCep: string | null;

    @Column('nvarchar', {
        name: 'PSEN_LOGRADOURO',
        nullable: true,
        length: 128,
    })
    public psenLogradouro: string | null;

    @Column('nvarchar', { name: 'PSEN_NUMERO', nullable: true, length: 20 })
    public psenNumero: string | null;

    @Column('nvarchar', {
        name: 'PSEN_COMPLEMENTO',
        nullable: true,
        length: 40,
    })
    public psenComplemento: string | null;

    @Column('numeric', {
        name: 'PSEN_DISTANCIA_KM',
        nullable: true,
        precision: 18,
        scale: 4,
    })
    public psenDistanciaKm: number | null;

    @Column('nvarchar', { name: 'PSEN_ZONA', nullable: true, length: 15 })
    public psenZona: string | null;

    @ManyToOne(() => CmnsTipoEndereco)
    @JoinColumn([{ name: 'PSEN_TPEN_ID', referencedColumnName: 'id' }])
    public cmnsTipoEndereco: ICmnsTipoEndereco;

    @ManyToOne(() => CmnsBairro)
    @JoinColumn([{ name: 'PSEN_BAIR_ID', referencedColumnName: 'id' }])
    public cmnsBairro: ICmnsBairro;

    @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaEnderecos)
    @JoinColumn([{ name: 'PSEN_PESS_ID', referencedColumnName: 'id' }])
    public cmnsPessoa: ICmnsPessoa;
}
