import { Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaDocumento } from "./cmns-pessoa-documento";

@Index("PK_CMNS_TIPO_DOCUMENTO", ["id"], { unique: true })
@Entity("CMNS_TIPO_DOCUMENTO")
export class CmnsTipoDocumento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "TPDC_CODIGO", nullable: true, length: 3 })
  public tpdcCodigo: string | null;

  @Column("nvarchar", { name: "TPDC_NOME", nullable: true, length: 64 })
  public tpdcNome: string | null;

  @Column("nvarchar", { name: "TPDC_TIPO", nullable: true, length: 15 })
  public tpdcTipo: string | null;

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
    (cmnsPessoaDocumento) => cmnsPessoaDocumento.psdcTpdc
  )
  public cmnsPessoaDocumentos: CmnsPessoaDocumento[];
}
