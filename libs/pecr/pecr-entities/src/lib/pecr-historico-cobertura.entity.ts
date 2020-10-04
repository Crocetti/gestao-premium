import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("FK_DOAD_RS_HSCB", ["hscbDoadId"], {})
@Index("FK_PRBV_RS_HSCB", ["hscbPrbvId"], {})
@Index("FK_TREF_RS_HSCB", ["hscbTrefId"], {})
@Index("FK_TRPV_RS_HSCB", ["hscbTrpvId"], {})
@Index("PK_PECR_HISTORICO_COBERTURA", ["hscbId"], { unique: true })
@Entity("PECR_HISTORICO_COBERTURA")
export class PecrHistoricoCobertura extends BaseEntity {
  @Column("varchar", { primary: true, name: "HSCB_ID", length: 27 })
  public hscbId: string;

  @Column("varchar", { name: "HSCB_PRBV_ID", nullable: true, length: 27 })
  public hscbPrbvId: string | null;

  @Column("varchar", { name: "HSCB_DOAD_ID", nullable: true, length: 27 })
  public hscbDoadId: string | null;

  @Column("varchar", { name: "HSCB_TREF_ID", nullable: true, length: 27 })
  public hscbTrefId: string | null;

  @Column("varchar", { name: "HSCB_TRPV_ID", nullable: true, length: 27 })
  public hscbTrpvId: string | null;

  @Column("varchar", { name: "HSCB_CODIGO", nullable: true, length: 15 })
  public hscbCodigo: string | null;

  @Column("datetime", { name: "HSCB_DT_PREVISTA", nullable: true })
  public hscbDtPrevista: LocalDateTime | null;

  @Column("varchar", { name: "HSCB_TP_PREVISTO", nullable: true, length: 25 })
  public hscbTpPrevisto: string | null;

  @Column("datetime", { name: "HSCB_DT_REALIZADA", nullable: true })
  public hscbDtRealizada: LocalDateTime | null;

  @Column("varchar", { name: "HSCB_TP_REALIZADO", nullable: true, length: 25 })
  public hscbTpRealizado: string | null;

  @Column("datetime", { name: "HSCB_DT_DIAGNOSTICO", nullable: true })
  public hscbDtDiagnostico: LocalDateTime | null;

  @Column("varchar", {
    name: "HSCB_TP_DIAGNOSTICO",
    nullable: true,
    length: 15,
  })
  public hscbTpDiagnostico: string | null;

  @Column("varchar", {
    name: "HSCB_MTD_DIAGNOSTICO",
    nullable: true,
    length: 15,
  })
  public hscbMtdDiagnostico: string | null;

  @Column("datetime", { name: "HSCB_DT_PREV_PARTO", nullable: true })
  public hscbDtPrevParto: LocalDateTime | null;

  @Column("datetime", { name: "HSCB_DT_EFETIVA_PARTO", nullable: true })
  public hscbDtEfetivaParto: LocalDateTime | null;

  @Column("datetime", { name: "HSCB_LASTUPDATE", nullable: true })
  public hscbLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas
  )
  @JoinColumn([{ name: "HSCB_TREF_ID", referencedColumnName: "prbvId" }])
  public hscbTref: PecrProdutoBovino;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas2
  )
  @JoinColumn([{ name: "HSCB_PRBV_ID", referencedColumnName: "prbvId" }])
  public hscbPrbv: PecrProdutoBovino;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas3
  )
  @JoinColumn([{ name: "HSCB_DOAD_ID", referencedColumnName: "prbvId" }])
  public hscbDoad: PecrProdutoBovino;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCoberturas4
  )
  @JoinColumn([{ name: "HSCB_TRPV_ID", referencedColumnName: "prbvId" }])
  public hscbTrpv: PecrProdutoBovino;

  @RelationId(
    (pecrHistoricoCobertura: PecrHistoricoCobertura) =>
      pecrHistoricoCobertura.hscbTref
  )
  public hscbTrefId2: string | null;

  @RelationId(
    (pecrHistoricoCobertura: PecrHistoricoCobertura) =>
      pecrHistoricoCobertura.hscbPrbv
  )
  public hscbPrbvId2: string | null;

  @RelationId(
    (pecrHistoricoCobertura: PecrHistoricoCobertura) =>
      pecrHistoricoCobertura.hscbDoad
  )
  public hscbDoadId2: string | null;

  @RelationId(
    (pecrHistoricoCobertura: PecrHistoricoCobertura) =>
      pecrHistoricoCobertura.hscbTrpv
  )
  public hscbTrpvId2: string | null;

  public constructor(init?: Partial<PecrHistoricoCobertura>) {
    super();
    Object.assign(this, init);
  }
}
