import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CdstPropriedadeRural from "./cdst-propriedade-rural";
import CdstProdutorRural from "./cdst-produtor-rural";

@Index("PK_CDST_PRODUTOR_PROPRIEDADE", ["id"], { unique: true })
@Entity("CDST_PRODUTOR_PROPRIEDADE")
export default class CdstProdutorPropriedade {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", {
    name: "PDPP_CLASSIFICACAO",
    nullable: true,
    length: 25,
  })
  public pdppClassificacao?: string | null;

  @Column("bit", { name: "PDPP_RESPONSAVEL", nullable: true })
  public pdppResponsavel?: boolean | null;

  @Column("nvarchar", {
    name: "PDPP_INSC_ESTADUAL",
    nullable: true,
    length: 25,
  })
  public pdppInscEstadual?: string | null;

  @Column("nvarchar", { name: "PDPP_TIPO", nullable: true, length: 15 })
  public pdppTipo?: string | null;

  @Column("nvarchar", { name: "PDPP_SITUACAO", nullable: true, length: 15 })
  public pdppSituacao?: string | null;

  @Column("numeric", {
    name: "PDPP_AREA_OCUPADA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public pdppAreaOcupada?: number | null;

  @Column("numeric", {
    name: "PDPP_AREA_PASTAGENS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public pdppAreaPastagens?: number | null;

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

  @ManyToOne(
    () => CdstPropriedadeRural,
    (cdstPropriedadeRural) => cdstPropriedadeRural.cdstProdutorPropriedades
  )
  @JoinColumn([{ name: "PDPP_PPRR_ID", referencedColumnName: "id" }])
  public pdppPprr?: CdstPropriedadeRural;

  @ManyToOne(
    () => CdstProdutorRural,
    (cdstProdutorRural) => cdstProdutorRural.cdstProdutorPropriedades
  )
  @JoinColumn([{ name: "PDPP_PDRR_ID", referencedColumnName: "id" }])
  public pdppPdrr?: CdstProdutorRural;
}
