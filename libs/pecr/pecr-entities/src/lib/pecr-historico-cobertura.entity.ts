import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("PK_PECR_HISTORICO_COBERTURA", ["id"], { unique: true })
@Entity("PECR_HISTORICO_COBERTURA")
export class PecrHistoricoCobertura {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "HSCB_CODIGO", nullable: true, length: 15 })
  public hscbCodigo: string | null;

  @Column("datetime2", { name: "HSCB_DT_PREVISTA", nullable: true })
  public hscbDtPrevista: Date | null;

  @Column("nvarchar", { name: "HSCB_TP_PREVISTO", nullable: true, length: 25 })
  public hscbTpPrevisto: string | null;

  @Column("datetime2", { name: "HSCB_DT_REALIZADA", nullable: true })
  public hscbDtRealizada: Date | null;

  @Column("nvarchar", { name: "HSCB_TP_REALIZADO", nullable: true, length: 25 })
  public hscbTpRealizado: string | null;

  @Column("datetime2", { name: "HSCB_DT_DIAGNOSTICO", nullable: true })
  public hscbDtDiagnostico: Date | null;

  @Column("nvarchar", {
    name: "HSCB_TP_DIAGNOSTICO",
    nullable: true,
    length: 15,
  })
  public hscbTpDiagnostico: string | null;

  @Column("nvarchar", {
    name: "HSCB_MTD_DIAGNOSTICO",
    nullable: true,
    length: 15,
  })
  public hscbMtdDiagnostico: string | null;

  @Column("datetime2", { name: "HSCB_DT_PREV_PARTO", nullable: true })
  public hscbDtPrevParto: Date | null;

  @Column("datetime2", { name: "HSCB_DT_EFETIVA_PARTO", nullable: true })
  public hscbDtEfetivaParto: Date | null;

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
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas
  )
  @JoinColumn([{ name: "HSCB_PRBV_ID", referencedColumnName: "id" }])
  public hscbPrbv: PecrProdutoBovino;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas2
  )
  @JoinColumn([{ name: "HSCB_DOAD_ID", referencedColumnName: "id" }])
  public hscbDoad: PecrProdutoBovino;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas3
  )
  @JoinColumn([{ name: "HSCB_TREF_ID", referencedColumnName: "id" }])
  public hscbTref: PecrProdutoBovino;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas4
  )
  @JoinColumn([{ name: "HSCB_TRPV_ID", referencedColumnName: "id" }])
  public hscbTrpv: PecrProdutoBovino;
}
