import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { EstqItemMovimento } from "./estq-item-movimento";
import { EstqMercadoria } from "./estq-mercadoria";
import { EstqProdutoSaldo } from "./estq-produto-saldo";

@Index("FK_MRCD_RS_LTVL", ["ltvlMrcdId"], {})
@Index("PK_ESTQ_LOTE_VALIDADE", ["ltvlId"], { unique: true })
@Entity("ESTQ_LOTE_VALIDADE")
export class EstqLoteValidade extends BaseEntity {
  @Column("varchar", { primary: true, name: "LTVL_ID", length: 27 })
  public ltvlId: string;

  @Column("varchar", { name: "LTVL_MRCD_ID", nullable: true, length: 27 })
  public ltvlMrcdId: string | null;

  @Column("varchar", { name: "LTVL_CODIGO", nullable: true, length: 15 })
  public ltvlCodigo: string | null;

  @Column("datetime", { name: "LTVL_DT_FABRICACAO", nullable: true })
  public ltvlDtFabricacao: LocalDateTime | null;

  @Column("datetime", { name: "LTVL_DT_VENCIMENTO", nullable: true })
  public ltvlDtVencimento: LocalDateTime | null;

  @Column("datetime", { name: "LTVL_LASTUPDATE", nullable: true })
  public ltvlLastupdate: LocalDateTime | null;

  @OneToMany(
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.itmvLtvl
  )
  public estqItemMovimentos: EstqItemMovimento[];

  @ManyToOne(
    () => EstqMercadoria,
    (estqMercadoria) => estqMercadoria.estqLoteValidades
  )
  @JoinColumn([{ name: "LTVL_MRCD_ID", referencedColumnName: "mrcdId" }])
  public ltvlMrcd: EstqMercadoria;

  @OneToMany(
    () => EstqProdutoSaldo,
    (estqProdutoSaldo) => estqProdutoSaldo.prsdLtvl
  )
  public estqProdutoSaldos: EstqProdutoSaldo[];

  @RelationId((estqLoteValidade: EstqLoteValidade) => estqLoteValidade.ltvlMrcd)
  public ltvlMrcdId2: string | null;

  public constructor(init?: Partial<EstqLoteValidade>) {
    super();
    Object.assign(this, init);
  }
}
