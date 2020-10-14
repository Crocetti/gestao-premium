import { Column, Entity, Index, OneToMany } from "typeorm";
import { PecrProdutoBovino } from "./pecr-produto-bovino";
import { PecrRaca } from "./pecr-raca";

@Index("PK_VETE_PELAGEM", ["id"], { unique: true })
@Entity("VETE_PELAGEM")
export class VetePelagem {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PLGM_CODIGO", nullable: true, length: 10 })
  public plgmCodigo: string | null;

  @Column("nvarchar", { name: "PLGM_NOME", nullable: true, length: 24 })
  public plgmNome: string | null;

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

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvPlgm
  )
  public pecrProdutoBovinos: PecrProdutoBovino[];

  @OneToMany(() => PecrRaca, (pecrRaca) => pecrRaca.racaPlgm)
  public pecrRacas: PecrRaca[];
}
