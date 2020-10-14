import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { PecrCategoria } from "./pecr-categoria";
import { CdstPropriedadeRural } from "./cdst-propriedade-rural";

@Index("PK_PECR_PRODUTO_PECUARIA", ["id"], { unique: true })
@Entity("PECR_PRODUTO_PECUARIA")
export class PecrProdutoPecuaria {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PRPE_CODIGO", nullable: true, length: 15 })
  public prpeCodigo: string | null;

  @Column("nvarchar", { name: "PRPE_TP_CONTROLE", nullable: true, length: 15 })
  public prpeTpControle: string | null;

  @Column("nvarchar", { name: "PRPE_TP_ORIGEM", nullable: true, length: 10 })
  public prpeTpOrigem: string | null;

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
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrProdutoPecuarias
  )
  @JoinColumn([{ name: "PRPE_PRDT_ID", referencedColumnName: "id" }])
  public prpePrdt: CdstProduto;

  @ManyToOne(
    () => PecrCategoria,
    (pecrCategoria) => pecrCategoria.pecrProdutoPecuarias
  )
  @JoinColumn([{ name: "PRPE_CTGR_ID", referencedColumnName: "id" }])
  public prpeCtgr: PecrCategoria;

  @ManyToOne(
    () => CdstPropriedadeRural,
    (cdstPropriedadeRural) => cdstPropriedadeRural.pecrProdutoPecuarias
  )
  @JoinColumn([{ name: "PRPE_PPRR_ID", referencedColumnName: "id" }])
  public prpePprr: CdstPropriedadeRural;
}
