import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { VeteAnimal } from "./vete-animal";

@Index("FK_ANML_RS_ANFT", ["anftAnmlId"], {})
@Index("PK_VETE_ANIMAL_FOTO", ["anftId"], { unique: true })
@Entity("VETE_ANIMAL_FOTO")
export class VeteAnimalFoto extends BaseEntity {
  @Column("varchar", { primary: true, name: "ANFT_ID", length: 27 })
  public anftId: string;

  @Column("varchar", { name: "ANFT_ANML_ID", nullable: true, length: 27 })
  public anftAnmlId: string | null;

  @Column("varchar", { name: "ANFT_CODE", nullable: true, length: 5 })
  public anftCode: string | null;

  @Column("datetime", { name: "ANFT_DATA", nullable: true })
  public anftData: LocalDateTime | null;

  @Column("image", { name: "ANFT_FOTO", nullable: true })
  public anftFoto: Buffer | null;

  @Column("datetime", { name: "ANFT_LASTUPDATE", nullable: true })
  public anftLastupdate: LocalDateTime | null;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteAnimalFotos)
  @JoinColumn([{ name: "ANFT_ANML_ID", referencedColumnName: "anmlId" }])
  public anftAnml: VeteAnimal;

  @RelationId((veteAnimalFoto: VeteAnimalFoto) => veteAnimalFoto.anftAnml)
  public anftAnmlId2: string | null;

  public constructor(init?: Partial<VeteAnimalFoto>) {
    super();
    Object.assign(this, init);
  }
}
