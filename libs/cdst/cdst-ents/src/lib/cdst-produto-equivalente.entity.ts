import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstProduto } from "./cdst-produto";

@Index("PK_CDST_PRODUTO_EQUIVALENTE", ["id"], { unique: true })
@Entity("CDST_PRODUTO_EQUIVALENTE")
export class CdstProdutoEquivalente {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

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
    (cdstProduto) => cdstProduto.cdstProdutoEquivalentes
  )
  @JoinColumn([{ name: "PREQ_EQVT_ID", referencedColumnName: "id" }])
  public preqEqvt: CdstProduto;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.cdstProdutoEquivalentes2
  )
  @JoinColumn([{ name: "PREQ_PRDT_ID", referencedColumnName: "id" }])
  public preqPrdt: CdstProduto;
}
