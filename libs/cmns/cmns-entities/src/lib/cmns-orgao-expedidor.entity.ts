import { Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaDocumento } from "./cmns-pessoa-documento";

@Index("PK_CMNS_ORGAO_EXPEDIDOR", ["id"], { unique: true })
@Entity("CMNS_ORGAO_EXPEDIDOR")
export class CmnsOrgaoExpedidor {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "OREX_CODIGO", nullable: true, length: 3 })
  public orexCodigo: string | null;

  @Column("nvarchar", { name: "OREX_SIGLA", nullable: true, length: 10 })
  public orexSigla: string | null;

  @Column("nvarchar", { name: "OREX_NOME", nullable: true, length: 64 })
  public orexNome: string | null;

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

  @OneToMany(
    () => CmnsPessoaDocumento,
    (cmnsPessoaDocumento) => cmnsPessoaDocumento.psdcOrex
  )
  public cmnsPessoaDocumentos: CmnsPessoaDocumento[];
}
