import { Column, Entity, Index, OneToMany } from "typeorm";
import PecrUnidadeCriacao from "./pecr-unidade-criacao";

@Index("PK_PECR_ESPECIE_PASTAGEM", ["id"], { unique: true })
@Entity("PECR_ESPECIE_PASTAGEM")
export default class PecrEspeciePastagem {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "ESPS_FORRAGEIRA", nullable: true, length: 128 })
  public espsForrageira?: string | null;

  @Column("nvarchar", { name: "ESPS_CULTIVAR", nullable: true, length: 128 })
  public espsCultivar?: string | null;

  @Column("int", { name: "ESPS_DESCANSO_MEDIO", nullable: true })
  public espsDescansoMedio?: number | null;

  @Column("numeric", {
    name: "ESPS_ALTURA_RESIDUAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public espsAlturaResidual?: number | null;

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

  @OneToMany(
    () => PecrUnidadeCriacao,
    (pecrUnidadeCriacao) => pecrUnidadeCriacao.uncrEsps
  )
  public pecrUnidadeCriacaos?: PecrUnidadeCriacao[];
}
