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
import { PecrLote } from "./pecr-lote";

@Index("FK_LOTE_RS_LTAN", ["ltanLoteId"], {})
@Index("FK_PRDT_RS_LTAN", ["ltanPrdtId"], {})
@Index("PK_PECR_LOTE_ANIMAL", ["ltanId"], { unique: true })
@Entity("PECR_LOTE_ANIMAL")
export class PecrLoteAnimal extends BaseEntity {
  @Column("varchar", { primary: true, name: "LTAN_ID", length: 27 })
  public ltanId: string;

  @Column("varchar", { name: "LTAN_PRDT_ID", nullable: true, length: 27 })
  public ltanPrdtId: string | null;

  @Column("varchar", { name: "LTAN_LOTE_ID", nullable: true, length: 27 })
  public ltanLoteId: string | null;

  @Column("datetime", { name: "LTAN_DT_ENTRADA", nullable: true })
  public ltanDtEntrada: LocalDateTime | null;

  @Column("datetime", { name: "LTAN_DT_SAIDA", nullable: true })
  public ltanDtSaida: LocalDateTime | null;

  @Column("datetime", { name: "LTAN_LASTUPDATE", nullable: true })
  public ltanLastupdate: LocalDateTime | null;

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.pecrLoteAnimals)
  @JoinColumn([{ name: "LTAN_PRDT_ID", referencedColumnName: "prdtId" }])
  public ltanPrdt: CdstProduto;

  @ManyToOne(() => PecrLote, (pecrLote) => pecrLote.pecrLoteAnimals)
  @JoinColumn([{ name: "LTAN_LOTE_ID", referencedColumnName: "loteId" }])
  public ltanLote: PecrLote;

  @RelationId((pecrLoteAnimal: PecrLoteAnimal) => pecrLoteAnimal.ltanPrdt)
  public ltanPrdtId2: string | null;

  @RelationId((pecrLoteAnimal: PecrLoteAnimal) => pecrLoteAnimal.ltanLote)
  public ltanLoteId2: string | null;

  public constructor(init?: Partial<PecrLoteAnimal>) {
    super();
    Object.assign(this, init);
  }
}
