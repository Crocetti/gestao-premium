import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import PecrItemMovimentoAnimal from "./pecr-item-movimento-animal";
import PecrEspeciePastagem from "./pecr-especie-pastagem";
import PecrModuloCriacao from "./pecr-modulo-criacao";

@Index("PK_PECR_UNIDADE_CRIACAO", ["id"], { unique: true })
@Entity("PECR_UNIDADE_CRIACAO")
export default class PecrUnidadeCriacao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "UNCR_CODIGO", nullable: true, length: 5 })
  public uncrCodigo?: string | null;

  @Column("nvarchar", { name: "UNCR_NOME", nullable: true, length: 40 })
  public uncrNome?: string | null;

  @Column("numeric", {
    name: "UNCR_AREA_UTIL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public uncrAreaUtil?: number | null;

  @Column("numeric", {
    name: "UNCR_AREA_PERCENTUAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public uncrAreaPercentual?: number | null;

  @Column("numeric", {
    name: "UNCR_LATITUDE",
    nullable: true,
    precision: 18,
    scale: 6,
  })
  public uncrLatitude?: number | null;

  @Column("numeric", {
    name: "UNCR_LONGITUDE",
    nullable: true,
    precision: 18,
    scale: 6,
  })
  public uncrLongitude?: number | null;

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
    () => PecrItemMovimentoAnimal,
    (pecrItemMovimentoAnimal) => pecrItemMovimentoAnimal.imanUncr
  )
  public pecrItemMovimentoAnimals?: PecrItemMovimentoAnimal[];

  @ManyToOne(
    () => PecrEspeciePastagem,
    (pecrEspeciePastagem) => pecrEspeciePastagem.pecrUnidadeCriacaos
  )
  @JoinColumn([{ name: "UNCR_ESPS_ID", referencedColumnName: "id" }])
  public uncrEsps?: PecrEspeciePastagem;

  @ManyToOne(
    () => PecrModuloCriacao,
    (pecrModuloCriacao) => pecrModuloCriacao.pecrUnidadeCriacaos
  )
  @JoinColumn([{ name: "UNCR_MDCR_ID", referencedColumnName: "id" }])
  public uncrMdcr?: PecrModuloCriacao;
}
