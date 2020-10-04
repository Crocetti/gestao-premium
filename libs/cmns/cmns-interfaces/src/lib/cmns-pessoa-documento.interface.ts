import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsOrgaoExpedidor } from "./cmns-orgao-expedidor";
import { CmnsPessoa } from "./cmns-pessoa";
import { CmnsTipoDocumento } from "./cmns-tipo-documento";

@Index("FK_OREX_RS_PSDC", ["psdcOrexId"], {})
@Index("FK_PESS_RS_PSDC", ["psdcPessId"], {})
@Index("FK_TPDC_RS_PSDC", ["psdcTpdcId"], {})
@Index("PK_CMNS_PESSOA_DOCUMENTO", ["psdcId"], { unique: true })
@Entity("CMNS_PESSOA_DOCUMENTO")
export class CmnsPessoaDocumento extends BaseEntity {
  @Column("varchar", { primary: true, name: "PSDC_ID", length: 27 })
  public psdcId: string;

  @Column("varchar", { name: "PSDC_OREX_ID", nullable: true, length: 27 })
  public psdcOrexId: string | null;

  @Column("varchar", { name: "PSDC_TPDC_ID", nullable: true, length: 27 })
  public psdcTpdcId: string | null;

  @Column("varchar", { name: "PSDC_PESS_ID", nullable: true, length: 27 })
  public psdcPessId: string | null;

  @Column("varchar", { name: "PSDC_NR_DOCUMENTO", nullable: true, length: 20 })
  public psdcNrDocumento: string | null;

  @Column("datetime", { name: "PSDC_DT_EMISSAO" })
  public psdcDtEmissao: LocalDateTime;

  @Column("datetime", { name: "PSDC_LASTUPDATE", nullable: true })
  public psdcLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CmnsOrgaoExpedidor,
    (cmnsOrgaoExpedidor) => cmnsOrgaoExpedidor.cmnsPessoaDocumentos
  )
  @JoinColumn([{ name: "PSDC_OREX_ID", referencedColumnName: "orexId" }])
  public psdcOrex: CmnsOrgaoExpedidor;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaDocumentos)
  @JoinColumn([{ name: "PSDC_PESS_ID", referencedColumnName: "pessId" }])
  public psdcPess: CmnsPessoa;

  @ManyToOne(
    () => CmnsTipoDocumento,
    (cmnsTipoDocumento) => cmnsTipoDocumento.cmnsPessoaDocumentos
  )
  @JoinColumn([{ name: "PSDC_TPDC_ID", referencedColumnName: "tpdcId" }])
  public psdcTpdc: CmnsTipoDocumento;

  @RelationId(
    (cmnsPessoaDocumento: CmnsPessoaDocumento) => cmnsPessoaDocumento.psdcOrex
  )
  public psdcOrexId2: string | null;

  @RelationId(
    (cmnsPessoaDocumento: CmnsPessoaDocumento) => cmnsPessoaDocumento.psdcPess
  )
  public psdcPessId2: string | null;

  @RelationId(
    (cmnsPessoaDocumento: CmnsPessoaDocumento) => cmnsPessoaDocumento.psdcTpdc
  )
  public psdcTpdcId2: string | null;

  public constructor(init?: Partial<CmnsPessoaDocumento>) {
    super();
    Object.assign(this, init);
  }
}
