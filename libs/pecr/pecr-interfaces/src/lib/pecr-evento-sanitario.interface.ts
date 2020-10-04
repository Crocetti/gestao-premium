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
import { PecrTipoEventoSanitario } from "./pecr-tipo-evento-sanitario";
import { CdstProduto } from "./cdst-produto";

@Index("FK_PRBV_RS_EVSN", ["evsnPrbvId"], {})
@Index("FK_PRDT_RS_EVSN", ["evsnPrdtId"], {})
@Index("FK_TPES_RS_EVSN", ["evsnTpesId"], {})
@Index("PK_PECR_EVENTO_SANITARIO", ["evsnId"], { unique: true })
@Entity("PECR_EVENTO_SANITARIO")
export class PecrEventoSanitario extends BaseEntity {
  @Column("varchar", { primary: true, name: "EVSN_ID", length: 27 })
  public evsnId: string;

  @Column("varchar", { name: "EVSN_PRDT_ID", nullable: true, length: 27 })
  public evsnPrdtId: string | null;

  @Column("varchar", { name: "EVSN_TPES_ID", nullable: true, length: 27 })
  public evsnTpesId: string | null;

  @Column("varchar", { name: "EVSN_PRBV_ID", nullable: true, length: 27 })
  public evsnPrbvId: string | null;

  @Column("datetime", { name: "EVSN_DT_EVENTO", nullable: true })
  public evsnDtEvento: LocalDateTime | null;

  @Column("varchar", { name: "EVSN_OBSERVACAO", nullable: true, length: 500 })
  public evsnObservacao: string | null;

  @Column("datetime", { name: "EVSN_LASTUPDATE", nullable: true })
  public evsnLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrEventoSanitarios
  )
  @JoinColumn([{ name: "EVSN_PRBV_ID", referencedColumnName: "prbvId" }])
  public evsnPrbv: PecrProdutoBovino;

  @ManyToOne(
    () => PecrTipoEventoSanitario,
    (pecrTipoEventoSanitario) => pecrTipoEventoSanitario.pecrEventoSanitarios
  )
  @JoinColumn([{ name: "EVSN_TPES_ID", referencedColumnName: "tpesId" }])
  public evsnTpes: PecrTipoEventoSanitario;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrEventoSanitarios
  )
  @JoinColumn([{ name: "EVSN_PRDT_ID", referencedColumnName: "prdtId" }])
  public evsnPrdt: CdstProduto;

  @RelationId(
    (pecrEventoSanitario: PecrEventoSanitario) => pecrEventoSanitario.evsnPrbv
  )
  public evsnPrbvId2: string | null;

  @RelationId(
    (pecrEventoSanitario: PecrEventoSanitario) => pecrEventoSanitario.evsnTpes
  )
  public evsnTpesId2: string | null;

  @RelationId(
    (pecrEventoSanitario: PecrEventoSanitario) => pecrEventoSanitario.evsnPrdt
  )
  public evsnPrdtId2: string | null;

  public constructor(init?: Partial<PecrEventoSanitario>) {
    super();
    Object.assign(this, init);
  }
}
