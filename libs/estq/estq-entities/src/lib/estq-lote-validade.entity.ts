import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { EstqItemMovimento } from "./estq-item-movimento";
import { EstqMercadoria } from "./estq-mercadoria";
import { EstqProdutoSaldo } from "./estq-produto-saldo";

@Index("PK_ESTQ_LOTE_VALIDADE", ["id"], { unique: true })
@Entity("ESTQ_LOTE_VALIDADE")
export class EstqLoteValidade {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "LTVL_CODIGO", nullable: true, length: 15 })
  public ltvlCodigo: string | null;

  @Column("datetime2", { name: "LTVL_DT_FABRICACAO", nullable: true })
  public ltvlDtFabricacao: Date | null;

  @Column("datetime2", { name: "LTVL_DT_VENCIMENTO", nullable: true })
  public ltvlDtVencimento: Date | null;

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

  @OneToMany(
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.itmvLtvl
  )
  public estqItemMovimentos: EstqItemMovimento[];

  @ManyToOne(
    () => EstqMercadoria,
    (estqMercadoria) => estqMercadoria.estqLoteValidades
  )
  @JoinColumn([{ name: "LTVL_MRCD_ID", referencedColumnName: "id" }])
  public ltvlMrcd: EstqMercadoria;

  @OneToMany(
    () => EstqProdutoSaldo,
    (estqProdutoSaldo) => estqProdutoSaldo.prsdLtvl
  )
  public estqProdutoSaldos: EstqProdutoSaldo[];
}
