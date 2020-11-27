import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CdstProduto from "./cdst-produto";
import CdstUnidadeMedida from "./cdst-unidade-medida";

@Index("PK_CDST_PRODUTO_COMPOSICAO", ["id"], { unique: true })
@Entity("CDST_PRODUTO_COMPOSICAO")
export default class CdstProdutoComposicao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("numeric", {
    name: "PDCP_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public pdcpQuantidade?: number | null;

  @Column("bit", { name: "PDCP_VER_NA_OS", nullable: true })
  public pdcpVerNaOs?: boolean | null;

  @Column("bit", { name: "PDCP_COMPOE_PRECO", nullable: true })
  public pdcpCompoePreco?: boolean | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoComposicaos
  )
  @JoinColumn([{ name: "PRCP_PRDT_ID", referencedColumnName: "id" }])
  public prcpPrdt?: CdstProduto;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoComposicaos2
  )
  @JoinColumn([{ name: "PRCP_COMP_ID", referencedColumnName: "id" }])
  public prcpComp?: CdstProduto;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.cdstProdutoComposicaos
  )
  @JoinColumn([{ name: "PRCP_UNID_ID", referencedColumnName: "id" }])
  public prcpUnid?: CdstUnidadeMedida;
}
