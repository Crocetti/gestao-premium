import { Column, Entity, Index, OneToMany } from "typeorm";
import CmnsUnidadeFederativa from "./cmns-unidade-federativa";

@Index("PK_CMNS_PAIS", ["id"], { unique: true })
@Entity("CMNS_PAIS")
export default class CmnsPais {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PAIS_NOME", nullable: true, length: 64 })
  public paisNome?: string | null;

  @Column("nvarchar", { name: "PAIS_SIGLA", nullable: true, length: 3 })
  public paisSigla?: string | null;

  @Column("nvarchar", {
    name: "PAIS_NOME_ABREVIADO",
    nullable: true,
    length: 40,
  })
  public paisNomeAbreviado?: string | null;

  @Column("nvarchar", { name: "PAIS_CODIGO", nullable: true, length: 10 })
  public paisCodigo?: string | null;

  @Column("nvarchar", { name: "PAIS_CEP_INICIAL", nullable: true, length: 9 })
  public paisCepInicial?: string | null;

  @Column("nvarchar", { name: "PAIS_CEP_FINAL", nullable: true, length: 9 })
  public paisCepFinal?: string | null;

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
    () => CmnsUnidadeFederativa,
    (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.unfdPais
  )
  public cmnsUnidadeFederativas?: CmnsUnidadeFederativa[];
}
