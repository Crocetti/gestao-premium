import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";
import { PecrRaca } from "./pecr-raca";

@Index("PK_VETE_PELAGEM", ["plgmId"], { unique: true })
@Entity("VETE_PELAGEM")
export class VetePelagem extends BaseEntity {
  @Column("varchar", { primary: true, name: "PLGM_ID", length: 27 })
  public plgmId: string;

  @Column("varchar", { name: "PLGM_CODIGO", nullable: true, length: 10 })
  public plgmCodigo: string | null;

  @Column("varchar", { name: "PLGM_NOME", nullable: true, length: 24 })
  public plgmNome: string | null;

  @Column("datetime", { name: "PLGM_LASTUPDATE", nullable: true })
  public plgmLastupdate: LocalDateTime | null;

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvPlgm
  )
  public pecrProdutoBovinos: PecrProdutoBovino[];

  @OneToMany(() => PecrRaca, (pecrRaca) => pecrRaca.racaPlgm)
  public pecrRacas: PecrRaca[];

  public constructor(init?: Partial<VetePelagem>) {
    super();
    Object.assign(this, init);
  }
}
