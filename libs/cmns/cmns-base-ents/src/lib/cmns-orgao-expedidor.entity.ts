import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BasicEntity } from '@gpremium/shared-ent';
import type { ICmnsOrgaoExpedidor } from '@gpremium/cmns-base-intf';

@Index('PK_CMNS_ORGAO_EXPEDIDOR', ['id'], { unique: true })
@Entity('CMNS_ORGAO_EXPEDIDOR')
export class CmnsOrgaoExpedidor extends BasicEntity
    implements ICmnsOrgaoExpedidor {

    @Column('nvarchar', { name: 'OREX_CODIGO', nullable: true, length: 3 })
    public orexCodigo: string | null;

    @Column('nvarchar', { name: 'OREX_SIGLA', nullable: true, length: 10 })
    public orexSigla: string | null;

    @Column('nvarchar', { name: 'OREX_NOME', nullable: true, length: 64 })
    public orexNome: string | null;

}
