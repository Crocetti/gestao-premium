import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CdstPropriedadeRural } from "./cdst-propriedade-rural";
import { PecrUnidadeCriacao } from "./pecr-unidade-criacao";

@Index("PK_PECR_MODULO_CRIACAO", ["id"], { unique: true })
@Entity("PECR_MODULO_CRIACAO")
export class PecrModuloCriacao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "MDCR_CODIGO", nullable: true, length: 10 })
  public mdcrCodigo: string | null;

  @Column("nvarchar", { name: "MDCR_NOME", nullable: true, length: 64 })
  public mdcrNome: string | null;

  @Column("numeric", {
    name: "MDCR_AREA_TOTAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public mdcrAreaTotal: number | null;

  @Column("numeric", {
    name: "MDCR_AREA_RESERVA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public mdcrAreaReserva: number | null;

  @Column("numeric", {
    name: "MDCR_LATITUDE",
    nullable: true,
    precision: 18,
    scale: 6,
  })
  public mdcrLatitude: number | null;

  @Column("numeric", {
    name: "MDCR_LONGITUDE",
    nullable: true,
    precision: 18,
    scale: 6,
  })
  public mdcrLongitude: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => CdstPropriedadeRural,
    (cdstPropriedadeRural) => cdstPropriedadeRural.pecrModuloCriacaos
  )
  @JoinColumn([{ name: "MDCR_PPRR_ID", referencedColumnName: "id" }])
  public mdcrPprr: CdstPropriedadeRural;

  @OneToMany(
    () => PecrUnidadeCriacao,
    (pecrUnidadeCriacao) => pecrUnidadeCriacao.uncrMdcr
  )
  public pecrUnidadeCriacaos: PecrUnidadeCriacao[];
}
