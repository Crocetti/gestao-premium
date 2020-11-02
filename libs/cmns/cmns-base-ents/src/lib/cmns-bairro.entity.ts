import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { CmnsLocalidade } from './cmns-localidade.entity';
import { CmnsLogradouro } from './cmns-logradouro.entity';
import type { ICmnsBairro, ICmnsLocalidade, ICmnsLogradouro } from '@gpremium/cmns-base-intf';
import { BasicEntity } from '@gpremium/shared-ent';

@Index('PK_CMNS_BAIRRO', ['id'], { unique: true })
@Entity('CMNS_BAIRRO')
export class CmnsBairro extends BasicEntity implements ICmnsBairro {

    @Column('nvarchar', { name: 'BAIR_CODIGO', nullable: true, length: 10 })
    public bairCodigo: string | null;

    @Column('nvarchar', { name: 'BAIR_NOME', nullable: true, length: 128 })
    public bairNome: string | null;

    @Column('nvarchar', {
        name: 'BAIR_NOME_ABREVIADO',
        nullable: true,
        length: 40,
    })
    public bairNomeAbreviado?: string | null;

    @Column('nvarchar', { name: 'BAIR_CEP_INICIAL', nullable: true, length: 9 })
    public bairCepInicial?: string | null;

    @Column('nvarchar', { name: 'BAIR_CEP_FINAL', nullable: true, length: 9 })
    public bairCepFinal?: string | null;

    @ManyToOne(
        () => CmnsLocalidade,
        (cmnsLocalidade) => cmnsLocalidade.cmnsBairros
    )
    @JoinColumn([{ name: 'BAIR_LCLD_ID', referencedColumnName: 'id' }])
    public cmnsLocalidade: ICmnsLocalidade;

    @OneToMany(
        () => CmnsLogradouro,
        (cmnsLogradouro) => cmnsLogradouro.cmnsBairro
    )
    public cmnsLogradouros?: ICmnsLogradouro[];

}
