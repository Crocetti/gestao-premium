import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BasicEntity } from '@gpremium/shared-ent';
import { LocalDateTime } from '@js-joda/core';
import type { ICmnsNacionalidade } from '@gpremium/cmns-interfaces';

@Index('PK_CMNS_NACIONALIDADE', ['id'], { unique: true })
@Entity('CMNS_NACIONALIDADE')
export class CmnsNacionalidade extends BasicEntity
    implements ICmnsNacionalidade {

    @Column('nvarchar', { name: 'NCNL_CODIGO', nullable: true, length: 3 })
    public ncnlCodigo: string | null;

    @Column('nvarchar', { name: 'NCNL_NOME', nullable: true, length: 64 })
    public ncnlNome: string | null;

}
