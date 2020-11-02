import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { PecrCategoria } from "./pecr-categoria";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("FK_CTGR_RS_HSCT", ["hsctCtgrId"], {})
@Index("FK_PRBV_RS_HSCT", ["hsctPrbvId"], {})
@Index("PK_PECR_HISTORICO_CATEGORIA", ["hsctId"], { unique: true })
@Entity("PECR_HISTORICO_CATEGORIA")
export class PecrHistoricoCategoria extends BaseEntity {
  @Column("varchar", { primary: true, name: "HSCT_ID", length: 27 })
  public hsctId: string;

  @Column("varchar", { name: "HSCT_PRBV_ID", nullable: true, length: 27 })
  public hsctPrbvId: string | null;

  @Column("varchar", { name: "HSCT_CTGR_ID", nullable: true, length: 27 })
  public hsctCtgrId: string | null;

  @Column("datetime", { name: "HSCT_DT_ENTRADA", nullable: true })
  public hsctDtEntrada: LocalDateTime | null;

  @Column("datetime", { name: "HSCT_DT_SAIDA", nullable: true })
  public hsctDtSaida: LocalDateTime | null;

  @Column("datetime", { name: "HSCT_LASTUPDATE", nullable: true })
  public hsctLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => PecrCategoria,
    (pecrCategoria) => pecrCategoria.pecrHistoricoCategorias
  )
  @JoinColumn([{ name: "HSCT_CTGR_ID", referencedColumnName: "ctgrId" }])
  public hsctCtgr: PecrCategoria;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCategorias
  )
  @JoinColumn([{ name: "HSCT_PRBV_ID", referencedColumnName: "prbvId" }])
  public hsctPrbv: PecrProdutoBovino;

  @RelationId(
    (pecrHistoricoCategoria: PecrHistoricoCategoria) =>
      pecrHistoricoCategoria.hsctCtgr
  )
  public hsctCtgrId2: string | null;

  @RelationId(
    (pecrHistoricoCategoria: PecrHistoricoCategoria) =>
      pecrHistoricoCategoria.hsctPrbv
  )
  public hsctPrbvId2: string | null;

  public constructor(init?: Partial<PecrHistoricoCategoria>) {
    super();
    Object.assign(this, init);
  }
}
