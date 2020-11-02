import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FncrTitulo } from "./fncr-titulo";
import { FncrParcelaBaixa } from "./fncr-parcela-baixa";

@Index("PK_FNCR_PARCELA", ["id"], { unique: true })
@Entity("FNCR_PARCELA")
export class FncrParcela {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PRCL_NUMERO", nullable: true, length: 20 })
  public prclNumero: string | null;

  @Column("datetime2", { name: "PRCL_DT_LANCAMENTO", nullable: true })
  public prclDtLancamento: LocalDateTime | null;

  @Column("datetime2", { name: "PRCL_DT_EMISSAO", nullable: true })
  public prclDtEmissao: LocalDateTime | null;

  @Column("datetime2", { name: "PRCL_DT_VENCIMENTO", nullable: true })
  public prclDtVencimento: LocalDateTime | null;

  @Column("datetime2", { name: "PRCL_DT_BAIXA", nullable: true })
  public prclDtBaixa: LocalDateTime | null;

  @Column("money", { name: "PRCL_VLR_PARCELA", nullable: true })
  public prclVlrParcela: number | null;

  @Column("money", { name: "PRCL_VLR_DESCONTOS", nullable: true })
  public prclVlrDescontos: number | null;

  @Column("money", { name: "PRCL_VLR_ACRESCIMO", nullable: true })
  public prclVlrAcrescimo: number | null;

  @Column("money", { name: "PRCL_VLR_DESPESAS", nullable: true })
  public prclVlrDespesas: number | null;

  @Column("money", { name: "PRCL_VLR_JUROS", nullable: true })
  public prclVlrJuros: number | null;

  @Column("money", { name: "PRCL_VLR_MULTA", nullable: true })
  public prclVlrMulta: number | null;

  @Column("money", { name: "PRCL_VLR_SALDO", nullable: true })
  public prclVlrSaldo: number | null;

  @Column("nvarchar", { name: "PRCL_COMPLEMENTO", nullable: true, length: 128 })
  public prclComplemento: string | null;

  @Column("nvarchar", { name: "PRCL_SITUACAO", nullable: true, length: 15 })
  public prclSituacao: string | null;

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

  @ManyToOne(() => FncrTitulo, (fncrTitulo) => fncrTitulo.fncrParcelas)
  @JoinColumn([{ name: "PRCL_TTLS_ID", referencedColumnName: "id" }])
  public prclTtls: FncrTitulo;

  @OneToMany(
    () => FncrParcelaBaixa,
    (fncrParcelaBaixa) => fncrParcelaBaixa.prbxPrcl
  )
  public fncrParcelaBaixas: FncrParcelaBaixa[];
}
