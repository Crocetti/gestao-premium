import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CdstProdutorPropriedade } from "./cdst-produtor-propriedade";
import { CmnsPessoa } from "./cmns-pessoa";
import { PecrModuloCriacao } from "./pecr-modulo-criacao";
import { PecrProdutoBovino } from "./pecr-produto-bovino";
import { PecrProdutoPecuaria } from "./pecr-produto-pecuaria";

@Index("PK_CDST_PROPRIEDADE_RURAL", ["id"], { unique: true })
@Entity("CDST_PROPRIEDADE_RURAL")
export class CdstPropriedadeRural {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PPRR_NOME", nullable: true, length: 128 })
  public pprrNome: string | null;

  @Column("nvarchar", { name: "PPRR_INCRA", nullable: true, length: 20 })
  public pprrIncra: string | null;

  @Column("nvarchar", { name: "PPRR_NIRF", nullable: true, length: 20 })
  public pprrNirf: string | null;

  @Column("nvarchar", { name: "PPRR_CPOESAE", nullable: true, length: 20 })
  public pprrCpoesae: string | null;

  @Column("numeric", {
    name: "PPRR_AREA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public pprrArea: number | null;

  @Column("numeric", { name: "PPRR_LATITUDE_SEDE", precision: 18, scale: 6 })
  public pprrLatitudeSede: number;

  @Column("numeric", {
    name: "PPRR_LONGITUDE_SEDE",
    nullable: true,
    precision: 18,
    scale: 6,
  })
  public pprrLongitudeSede: number | null;

  @Column("nvarchar", { name: "PPRR_VIA_ACESSO", nullable: true, length: 500 })
  public pprrViaAcesso: string | null;

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
    () => CdstProdutorPropriedade,
    (cdstProdutorPropriedade) => cdstProdutorPropriedade.pdppPprr
  )
  public cdstProdutorPropriedades: CdstProdutorPropriedade[];

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cdstPropriedadeRurals)
  @JoinColumn([{ name: "PPRR_PESS_ID", referencedColumnName: "id" }])
  public pprrPess: CmnsPessoa;

  @OneToMany(
    () => PecrModuloCriacao,
    (pecrModuloCriacao) => pecrModuloCriacao.mdcrPprr
  )
  public pecrModuloCriacaos: PecrModuloCriacao[];

  @OneToMany(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.prbvPprr
  )
  public pecrProdutoBovinos: PecrProdutoBovino[];

  @OneToMany(
    () => PecrProdutoPecuaria,
    (pecrProdutoPecuaria) => pecrProdutoPecuaria.prpePprr
  )
  public pecrProdutoPecuarias: PecrProdutoPecuaria[];
}
