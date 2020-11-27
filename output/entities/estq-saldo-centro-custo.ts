import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import EstqProdutoSaldo from "./estq-produto-saldo";
import FncrPlanoConta from "./fncr-plano-conta";

@Index("PK_ESTQ_SALDO_CENTRO_CUSTO", ["id"], { unique: true })
@Entity("ESTQ_SALDO_CENTRO_CUSTO")
export default class EstqSaldoCentroCusto {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("datetime2", { name: "SDCC_MES_REFERENCIA", nullable: true })
  public sdccMesReferencia?: Date | null;

  @Column("numeric", {
    name: "SDCC_INICIAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public sdccInicial?: number | null;

  @Column("numeric", {
    name: "SDCC_ENTRADAS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public sdccEntradas?: number | null;

  @Column("numeric", {
    name: "SDCC_SAIDAS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public sdccSaidas?: number | null;

  @Column("numeric", {
    name: "SDCC_CAUTELA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public sdccCautela?: number | null;

  @Column("numeric", {
    name: "SDCC_RESERVA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public sdccReserva?: number | null;

  @Column("numeric", {
    name: "SDCC_FINAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public sdccFinal?: number | null;

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
    () => EstqProdutoSaldo,
    (estqProdutoSaldo) => estqProdutoSaldo.estqSaldoCentroCustos
  )
  @JoinColumn([{ name: "SDCC_PRSD_ID", referencedColumnName: "id" }])
  public sdccPrsd?: EstqProdutoSaldo;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.estqSaldoCentroCustos
  )
  @JoinColumn([{ name: "SDCC_CTCT_ID", referencedColumnName: "id" }])
  public sdccCtct?: FncrPlanoConta;
}
