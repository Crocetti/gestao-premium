import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("PK_PECR_DADOS_ABCZ", ["id"], { unique: true })
@Entity("PECR_DADOS_ABCZ")
export class PecrDadosAbcz {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "ABCZ_RGN", nullable: true, length: 10 })
  public abczRgn: string | null;

  @Column("nvarchar", { name: "ABCZ_RGD", nullable: true, length: 10 })
  public abczRgd: string | null;

  @Column("nvarchar", { name: "ABCZ_SERIE", nullable: true, length: 5 })
  public abczSerie: string | null;

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
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrDadosAbczs
  )
  @JoinColumn([{ name: "ABCZ_PRBV_ID", referencedColumnName: "id" }])
  public abczPrbv: PecrProdutoBovino;
}
