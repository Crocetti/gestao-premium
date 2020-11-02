import { Column, Entity, Index } from "typeorm";

@Index("PK_FSCL_CST", ["id"], { unique: true })
@Entity("FSCL_CST")
export class FsclCst {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "FCST_CODIGO", nullable: true, length: 3 })
  public fcstCodigo: string | null;

  @Column("nvarchar", { name: "FCST_DESCRICAO", nullable: true, length: 40 })
  public fcstDescricao: string | null;

  @Column("smallint", { name: "FCST_IPI", nullable: true })
  public fcstIpi: number | null;

  @Column("nvarchar", { name: "FCST_TIPO", nullable: true, length: 10 })
  public fcstTipo: string | null;

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
}
