import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrTabelaPreco } from "./fncr-tabela-preco";
import { CdstProduto } from "./cdst-produto";

@Index("PK_FNCR_TABELA_PRECO_ITEM", ["id"], { unique: true })
@Entity("FNCR_TABELA_PRECO_ITEM")
export class FncrTabelaPrecoItem {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("money", { name: "TPIT_CUSTO_VENDA", nullable: true })
  public tpitCustoVenda: number | null;

  @Column("money", { name: "TPIT_PRECO_VENDA", nullable: true })
  public tpitPrecoVenda: number | null;

  @Column("numeric", {
    name: "TPIT_MARKUP",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public tpitMarkup: number | null;

  @Column("nvarchar", { name: "TPIT_TIPOPRODUTO", nullable: true, length: 20 })
  public tpitTipoproduto: string | null;

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
    () => FncrTabelaPreco,
    (fncrTabelaPreco) => fncrTabelaPreco.fncrTabelaPrecoItems
  )
  @JoinColumn([{ name: "TPIT_TBPC_ID", referencedColumnName: "id" }])
  public tpitTbpc: FncrTabelaPreco;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.fncrTabelaPrecoItems
  )
  @JoinColumn([{ name: "TPIT_PRDT_ID", referencedColumnName: "id" }])
  public tpitPrdt: CdstProduto;
}
