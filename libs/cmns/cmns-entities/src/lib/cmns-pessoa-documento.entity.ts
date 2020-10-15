import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsOrgaoExpedidor } from "./cmns-orgao-expedidor";
import { CmnsTipoDocumento } from "./cmns-tipo-documento";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("PK_CMNS_PESSOA_DOCUMENTO", ["id"], { unique: true })
@Entity("CMNS_PESSOA_DOCUMENTO")
export class CmnsPessoaDocumento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PSDC_NR_DOCUMENTO", nullable: true, length: 20 })
  public psdcNrDocumento: string | null;

  @Column("datetime2", { name: "PSDC_DT_EMISSAO" })
  public psdcDtEmissao: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => CmnsOrgaoExpedidor,
    (cmnsOrgaoExpedidor) => cmnsOrgaoExpedidor.cmnsPessoaDocumentos
  )
  @JoinColumn([{ name: "PSDC_OREX_ID", referencedColumnName: "id" }])
  public psdcOrex: CmnsOrgaoExpedidor;

  @ManyToOne(
    () => CmnsTipoDocumento,
    (cmnsTipoDocumento) => cmnsTipoDocumento.cmnsPessoaDocumentos
  )
  @JoinColumn([{ name: "PSDC_TPDC_ID", referencedColumnName: "id" }])
  public psdcTpdc: CmnsTipoDocumento;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaDocumentos)
  @JoinColumn([{ name: "PSDC_PESS_ID", referencedColumnName: "id" }])
  public psdcPess: CmnsPessoa;
}
