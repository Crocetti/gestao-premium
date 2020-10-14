import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { EstqLoteValidade } from "./estq-lote-validade";
import { CdstProduto } from "./cdst-produto";
import { EstqSaldoCentroCusto } from "./estq-saldo-centro-custo";

@Index("PK_ESTQ_PRODUTO_SALDO", ["id"], { unique: true })
@Entity("ESTQ_PRODUTO_SALDO")
export class EstqProdutoSaldo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "PRSD_MES_REFERENCIA", nullable: true })
  public prsdMesReferencia: Date | null;

  @Column("numeric", {
    name: "PRSD_SALDO_INICIAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prsdSaldoInicial: number | null;

  @Column("numeric", {
    name: "PRSD_QTD_ENTRADAS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prsdQtdEntradas: number | null;

  @Column("numeric", {
    name: "PRSD_QTD_SAIDAS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prsdQtdSaidas: number | null;

  @Column("numeric", {
    name: "PRSD_EM_CAUTELA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prsdEmCautela: number | null;

  @Column("numeric", {
    name: "PRSD_SALDO_FINAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prsdSaldoFinal: number | null;

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
    () => EstqLoteValidade,
    (estqLoteValidade) => estqLoteValidade.estqProdutoSaldos
  )
  @JoinColumn([{ name: "PRSD_LTVL_ID", referencedColumnName: "id" }])
  public prsdLtvl: EstqLoteValidade;

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.estqProdutoSaldos)
  @JoinColumn([{ name: "PRSD_PRDT_ID", referencedColumnName: "id" }])
  public prsdPrdt: CdstProduto;

  @OneToMany(
    () => EstqSaldoCentroCusto,
    (estqSaldoCentroCusto) => estqSaldoCentroCusto.sdccPrsd
  )
  public estqSaldoCentroCustos: EstqSaldoCentroCusto[];
}
