import { Column, Entity, Index, OneToMany } from 'typeorm';
import { LocalDateTime } from '@js-joda/core';
import { BasicEntity } from '@gpremium/shared-ent';
import type { ICmnsCargo } from '@gpremium/cmns-interfaces';

@Index('PK_CMNS_CARGO', ['id'], { unique: true })
@Entity('CMNS_CARGO')
export class CmnsCargo extends BasicEntity implements ICmnsCargo {

    @Column('nvarchar', { name: 'CARG_CODIGO', nullable: true, length: 3 })
    public cargCodigo: string | null;

    @Column('nvarchar', { name: 'CARG_NOME', nullable: true, length: 64 })
    public cargNome: string | null;

}
