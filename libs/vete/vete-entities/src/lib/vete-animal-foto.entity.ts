import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { VeteAnimal } from "./vete-animal";

@Index("PK_VETE_ANIMAL_FOTO", ["id"], { unique: true })
@Entity("VETE_ANIMAL_FOTO")
export class VeteAnimalFoto {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "ANFT_CODE", nullable: true, length: 5 })
  public anftCode: string | null;

  @Column("datetime2", { name: "ANFT_DATA", nullable: true })
  public anftData: Date | null;

  @Column("nvarchar", { name: "ANFT_FOTO", nullable: true })
  public anftFoto: string | null;

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

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteAnimalFotos)
  @JoinColumn([{ name: "ANFT_ANML_ID", referencedColumnName: "id" }])
  public anftAnml: VeteAnimal;
}
