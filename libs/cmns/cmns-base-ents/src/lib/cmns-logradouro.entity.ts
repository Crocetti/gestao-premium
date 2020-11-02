import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmnsBairro } from './cmns-bairro.entity';
import type { ICmnsBairro, ICmnsLogradouro } from '@gpremium/cmns-base-intf';

@Index('PK_CMNS_LOGRADOURO', ['id'], { unique: true })
@Entity('CMNS_LOGRADOURO')
export class CmnsLogradouro extends BasicEntity implements ICmnsLogradouro {

    @Column('nvarchar', { name: 'LGRD_CODIGO', nullable: true, length: 10 })
    public lgrdCodigo: string;

    @Column('nvarchar', { name: 'LGRD_NOME', nullable: true, length: 256 })
    public lgrdNome: string;

    @Column('nvarchar', { name: 'LGRD_NOME_ABREV', nullable: true, length: 40 })
    public lgrdNomeAbrev?: string;

    @Column('nvarchar', { name: 'LGRD_CEP', nullable: true, length: 9 })
    public lgrdCep: string;

    @Column('nvarchar', { name: 'LGRD_ZONA', nullable: true, length: 15 })
    public lgrdZona?: string;

    @ManyToOne(() => CmnsBairro, (cmnsBairro) => cmnsBairro.cmnsLogradouros)
    @JoinColumn([{ name: 'LGRD_BAIR_ID', referencedColumnName: 'id' }])
    public cmnsBairro: ICmnsBairro;

}
