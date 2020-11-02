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
import { CdstProduto } from "./cdst-produto";
import { CdstPropriedadeRural } from "./cdst-propriedade-rural";

@Index("FK_CTGR_RS_PRPE", ["prpeCtgrId"], {})
@Index("FK_PPRR_RS_PRPE", ["prpePprrId"], {})
@Index("FK_PRDT_RS_PRPE", ["prpePrdtId"], {})
@Index("PK_PECR_PRODUTO_PECUARIA", ["prpeId"], { unique: true })
@Entity("PECR_PRODUTO_PECUARIA")
export class PecrProdutoPecuaria extends BaseEntity {
  @Column("varchar", { primary: true, name: "PRPE_ID", length: 27 })
  public prpeId: string;

  @Column("varchar", { name: "PRPE_PRDT_ID", nullable: true, length: 27 })
  public prpePrdtId: string | null;

  @Column("varchar", { name: "PRPE_CTGR_ID", nullable: true, length: 27 })
  public prpeCtgrId: string | null;

  @Column("varchar", { name: "PRPE_PPRR_ID", nullable: true, length: 27 })
  public prpePprrId: string | null;

  @Column("varchar", { name: "PRPE_CODIGO", nullable: true, length: 15 })
  public prpeCodigo: string | null;

  @Column("varchar", { name: "PRPE_TP_CONTROLE", nullable: true, length: 15 })
  public prpeTpControle: string | null;

  @Column("varchar", { name: "PRPE_TP_ORIGEM", nullable: true, length: 10 })
  public prpeTpOrigem: string | null;

  @Column("datetime", { name: "PRPE_LASTUPDATE", nullable: true })
  public prpeLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => PecrCategoria,
    (pecrCategoria) => pecrCategoria.pecrProdutoPecuarias
  )
  @JoinColumn([{ name: "PRPE_CTGR_ID", referencedColumnName: "ctgrId" }])
  public prpeCtgr: PecrCategoria;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrProdutoPecuarias
  )
  @JoinColumn([{ name: "PRPE_PRDT_ID", referencedColumnName: "prdtId" }])
  public prpePrdt: CdstProduto;

  @ManyToOne(
    () => CdstPropriedadeRural,
    (cdstPropriedadeRural) => cdstPropriedadeRural.pecrProdutoPecuarias
  )
  @JoinColumn([{ name: "PRPE_PPRR_ID", referencedColumnName: "pprrId" }])
  public prpePprr: CdstPropriedadeRural;

  @RelationId(
    (pecrProdutoPecuaria: PecrProdutoPecuaria) => pecrProdutoPecuaria.prpeCtgr
  )
  public prpeCtgrId2: string | null;

  @RelationId(
    (pecrProdutoPecuaria: PecrProdutoPecuaria) => pecrProdutoPecuaria.prpePrdt
  )
  public prpePrdtId2: string | null;

  @RelationId(
    (pecrProdutoPecuaria: PecrProdutoPecuaria) => pecrProdutoPecuaria.prpePprr
  )
  public prpePprrId2: string | null;

  public constructor(init?: Partial<PecrProdutoPecuaria>) {
    super();
    Object.assign(this, init);
  }
}
