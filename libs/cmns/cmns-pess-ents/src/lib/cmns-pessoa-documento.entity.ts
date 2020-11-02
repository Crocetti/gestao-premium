import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import {
    CmnsOrgaoExpedidor,
    CmnsTipoDocumento,
} from '@gpremium/cmns-base-ents';
import { CmnsPessoa } from './cmns-pessoa.entity';
import { BasicEntity } from '@gpremium/shared-ent';
import { LocalDateTime } from '@js-joda/core';
import type {
    ICmnsOrgaoExpedidor,
    ICmnsTipoDocumento,
} from '@gpremium/cmns-base-intf';
import type {
    ICmnsPessoa,
    ICmnsPessoaDocumento,
} from '@gpremium/cmns-pess-intf';

@Index('PK_CMNS_PESSOA_DOCUMENTO', ['id'], { unique: true })
@Entity('CMNS_PESSOA_DOCUMENTO')
export class CmnsPessoaDocumento extends BasicEntity
    implements ICmnsPessoaDocumento {
    @Column('nvarchar', {
        name: 'PSDC_NR_DOCUMENTO',
        nullable: true,
        length: 20,
    })
    public psdcNrDocumento: string | null;

    @Column('datetime2', { name: 'PSDC_DT_EMISSAO' })
    public psdcDtEmissao: LocalDateTime;

    @ManyToOne(() => CmnsOrgaoExpedidor)
    @JoinColumn([{ name: 'PSDC_OREX_ID', referencedColumnName: 'id' }])
    public cmnsOrgaoExpedidor: ICmnsOrgaoExpedidor;

    @ManyToOne(() => CmnsTipoDocumento)
    @JoinColumn([{ name: 'PSDC_TPDC_ID', referencedColumnName: 'id' }])
    public cmnsTipoDocumento: ICmnsTipoDocumento;

    @ManyToOne(
        () => CmnsPessoa,
        (cmnsPessoa) => cmnsPessoa.cmnsPessoaDocumentos
    )
    @JoinColumn([{ name: 'PSDC_PESS_ID', referencedColumnName: 'id' }])
    public cmnsPessoa: ICmnsPessoa;
}
