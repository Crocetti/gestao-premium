import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CdstProduto } from "./cdst-produto";

@Index("FK_EQVT_RS_PREQ", ["preqEqvtId"], {})
@Index("FK_PRDT_RS_PREQ", ["preqPrdtId"], {})
@Index("PK_CDST_PRODUTO_EQUIVALENTE", ["preqId"], { unique: true })
@Entity("CDST_PRODUTO_EQUIVALENTE")
export class CdstProdutoEquivalente extends BaseEntity {
  @Column("varchar", { primary: true, name: "PREQ_ID", length: 27 })
  public preqId: string;

  @Column("varchar", { name: "PREQ_EQVT_ID", nullable: true, length: 27 })
  public preqEqvtId: string | null;

  @Column("varchar", { name: "PREQ_PRDT_ID", nullable: true, length: 27 })
  public preqPrdtId: string | null;

  @Column("datetime", { name: "PREQ_LASTUPDATE", nullable: true })
  public preqLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoEquivalentes
  )
  @JoinColumn([{ name: "PREQ_EQVT_ID", referencedColumnName: "prdtId" }])
  public preqEqvt: CdstProduto;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoEquivalentes2
  )
  @JoinColumn([{ name: "PREQ_PRDT_ID", referencedColumnName: "prdtId" }])
  public preqPrdt: CdstProduto;

  @RelationId(
    (cdstProdutoEquivalente: CdstProdutoEquivalente) =>
      cdstProdutoEquivalente.preqEqvt
  )
  public preqEqvtId2: string | null;

  @RelationId(
    (cdstProdutoEquivalente: CdstProdutoEquivalente) =>
      cdstProdutoEquivalente.preqPrdt
  )
  public preqPrdtId2: string | null;

  public constructor(init?: Partial<CdstProdutoEquivalente>) {
    super();
    Object.assign(this, init);
  }
}
