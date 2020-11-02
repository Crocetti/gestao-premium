import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrHistoricoPadrao } from "./fncr-historico-padrao";
import { FncrCaixaItem } from "./fncr-caixa-item";
import { FncrParcela } from "./fncr-parcela";

@Index("PK_FNCR_PARCELA_BAIXA", ["id"], { unique: true })
@Entity("FNCR_PARCELA_BAIXA")
export class FncrParcelaBaixa {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "PRBX_FORMA_PAGAMENTO",
    nullable: true,
    length: 15,
  })
  public prbxFormaPagamento: string | null;

  @Column("datetime2", { name: "PRBX_DT_LANCAMENTO", nullable: true })
  public prbxDtLancamento: LocalDateTime | null;

  @Column("datetime2", { name: "PRBX_DT_PAGAMENTO", nullable: true })
  public prbxDtPagamento: LocalDateTime | null;

  @Column("money", { name: "PRBX_VLR_PAGAMENTO", nullable: true })
  public prbxVlrPagamento: number | null;

  @Column("money", { name: "PRBX_VLR_DEVIDO", nullable: true })
  public prbxVlrDevido: number | null;

  @Column("money", { name: "PRBX_VLR_DESCONTOS", nullable: true })
  public prbxVlrDescontos: number | null;

  @Column("money", { name: "PRBX_VLR_ACRECIMOS", nullable: true })
  public prbxVlrAcrecimos: number | null;

  @Column("money", { name: "PRBX_VLR_DESPESAS", nullable: true })
  public prbxVlrDespesas: number | null;

  @Column("money", { name: "PRBX_VLR_JUROS", nullable: true })
  public prbxVlrJuros: number | null;

  @Column("money", { name: "PRBX_VLR_MULTA", nullable: true })
  public prbxVlrMulta: number | null;

  @Column("smallint", { name: "PRBX_QUITA_PARCELA", nullable: true })
  public prbxQuitaParcela: number | null;

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
    () => FncrHistoricoPadrao,
    (fncrHistoricoPadrao) => fncrHistoricoPadrao.fncrParcelaBaixas
  )
  @JoinColumn([{ name: "PRBX_HSPD_ID", referencedColumnName: "id" }])
  public prbxHspd: FncrHistoricoPadrao;

  @ManyToOne(
    () => FncrCaixaItem,
    (fncrCaixaItem) => fncrCaixaItem.fncrParcelaBaixas
  )
  @JoinColumn([{ name: "PRBX_CXIT_ID", referencedColumnName: "id" }])
  public prbxCxit: FncrCaixaItem;

  @ManyToOne(() => FncrParcela, (fncrParcela) => fncrParcela.fncrParcelaBaixas)
  @JoinColumn([{ name: "PRBX_PRCL_ID", referencedColumnName: "id" }])
  public prbxPrcl: FncrParcela;
}
