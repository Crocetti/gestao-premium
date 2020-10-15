import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { PecrLote } from "./pecr-lote";

@Index("PK_PECR_LOTE_ANIMAL", ["id"], { unique: true })
@Entity("PECR_LOTE_ANIMAL")
export class PecrLoteAnimal {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "LTAN_DT_ENTRADA", nullable: true })
  public ltanDtEntrada: LocalDateTime | null;

  @Column("datetime2", { name: "LTAN_DT_SAIDA", nullable: true })
  public ltanDtSaida: LocalDateTime | null;

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

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.pecrLoteAnimals)
  @JoinColumn([{ name: "LTAN_PRDT_ID", referencedColumnName: "id" }])
  public ltanPrdt: CdstProduto;

  @ManyToOne(() => PecrLote, (pecrLote) => pecrLote.pecrLoteAnimals)
  @JoinColumn([{ name: "LTAN_LOTE_ID", referencedColumnName: "id" }])
  public ltanLote: PecrLote;
}
