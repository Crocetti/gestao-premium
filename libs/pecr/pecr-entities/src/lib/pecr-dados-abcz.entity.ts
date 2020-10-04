import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("FK_PRBV_RS_ABCZ", ["abczPrbvId"], {})
@Index("PK_PECR_DADOS_ABCZ", ["abczId"], { unique: true })
@Entity("PECR_DADOS_ABCZ")
export class PecrDadosAbcz extends BaseEntity {
  @Column("varchar", { primary: true, name: "ABCZ_ID", length: 27 })
  public abczId: string;

  @Column("varchar", { name: "ABCZ_PRBV_ID", nullable: true, length: 27 })
  public abczPrbvId: string | null;

  @Column("varchar", { name: "ABCZ_RGN", nullable: true, length: 10 })
  public abczRgn: string | null;

  @Column("varchar", { name: "ABCZ_RGD", nullable: true, length: 10 })
  public abczRgd: string | null;

  @Column("varchar", { name: "ABCZ_SERIE", nullable: true, length: 5 })
  public abczSerie: string | null;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrDadosAbczs
  )
  @JoinColumn([{ name: "ABCZ_PRBV_ID", referencedColumnName: "prbvId" }])
  public abczPrbv: PecrProdutoBovino;

  @RelationId((pecrDadosAbcz: PecrDadosAbcz) => pecrDadosAbcz.abczPrbv)
  public abczPrbvId2: string | null;

  public constructor(init?: Partial<PecrDadosAbcz>) {
    super();
    Object.assign(this, init);
  }
}
