import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { PecrRaca } from "./pecr-raca";

@Index("PK_VETE_PORTE", ["prteId"], { unique: true })
@Entity("VETE_PORTE")
export class VetePorte extends BaseEntity {
  @Column("varchar", { primary: true, name: "PRTE_ID", length: 27 })
  public prteId: string;

  @Column("varchar", { name: "PRTE_CODIGO", nullable: true, length: 10 })
  public prteCodigo: string | null;

  @Column("varchar", { name: "PRTE_NOME", nullable: true, length: 24 })
  public prteNome: string | null;

  @Column("datetime", { name: "PRTE_LASTUPDATE", nullable: true })
  public prteLastupdate: LocalDateTime | null;

  @OneToMany(() => PecrRaca, (pecrRaca) => pecrRaca.racaPrte)
  public pecrRacas: PecrRaca[];

  public constructor(init?: Partial<VetePorte>) {
    super();
    Object.assign(this, init);
  }
}
