import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { CdstUnidadeMedida } from "./cdst-unidade-medida";

@Index("PK_CDST_PRODUTO_COMPOSICAO", ["id"], { unique: true })
@Entity("CDST_PRODUTO_COMPOSICAO")
export class CdstProdutoComposicao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("numeric", {
    name: "PDCP_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public pdcpQuantidade: number | null;

  @Column("smallint", { name: "PDCP_VER_NA_OS", nullable: true })
  public pdcpVerNaOs: number | null;

  @Column("smallint", { name: "PDCP_COMPOE_PRECO", nullable: true })
  public pdcpCompoePreco: number | null;

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
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoComposicaos
  )
  @JoinColumn([{ name: "PRCP_PRDT_ID", referencedColumnName: "id" }])
  public prcpPrdt: CdstProduto;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoComposicaos2
  )
  @JoinColumn([{ name: "PRCP_COMP_ID", referencedColumnName: "id" }])
  public prcpComp: CdstProduto;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.cdstProdutoComposicaos
  )
  @JoinColumn([{ name: "PRCP_UNID_ID", referencedColumnName: "id" }])
  public prcpUnid: CdstUnidadeMedida;
}
