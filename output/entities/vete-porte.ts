import { Column, Entity, Index, OneToMany } from "typeorm";
import PecrRaca from "./pecr-raca";

@Index("PK_VETE_PORTE", ["id"], { unique: true })
@Entity("VETE_PORTE")
export default class VetePorte {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PRTE_CODIGO", nullable: true, length: 10 })
  public prteCodigo?: string | null;

  @Column("nvarchar", { name: "PRTE_NOME", nullable: true, length: 24 })
  public prteNome?: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @OneToMany(() => PecrRaca, (pecrRaca) => pecrRaca.racaPrte)
  public pecrRacas?: PecrRaca[];
}
