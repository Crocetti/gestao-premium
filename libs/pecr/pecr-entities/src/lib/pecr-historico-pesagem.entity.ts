import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("PK_PECR_HISTORICO_PESAGEM", ["id"], { unique: true })
@Entity("PECR_HISTORICO_PESAGEM")
export class PecrHistoricoPesagem {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "HSPS_DT_PESAGEM", nullable: true })
  public hspsDtPesagem: Date | null;

  @Column("numeric", {
    name: "HSPS_PESO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public hspsPeso: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoPesagems
  )
  @JoinColumn([{ name: "HSPS_PRBV_ID", referencedColumnName: "id" }])
  public hspsPrbv: PecrProdutoBovino;
}
