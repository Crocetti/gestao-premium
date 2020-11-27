import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CmnsPessoa from "./cmns-pessoa";
import CmnsRamoAtividade from "./cmns-ramo-atividade";

@Index("PK_CMNS_PESSOA_JURIDICA", ["id"], { unique: true })
@Entity("CMNS_PESSOA_JURIDICA")
export default class CmnsPessoaJuridica {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", {
    name: "PSJR_RAZAO_SOCIAL",
    nullable: true,
    length: 128,
  })
  public psjrRazaoSocial?: string | null;

  @Column("nvarchar", {
    name: "PSJR_INSC_ESTADUAL",
    nullable: true,
    length: 25,
  })
  public psjrInscEstadual?: string | null;

  @Column("nvarchar", {
    name: "PSJR_INSC_ESTADUAL_SUBT",
    nullable: true,
    length: 25,
  })
  public psjrInscEstadualSubt?: string | null;

  @Column("nvarchar", {
    name: "PSJR_INSC_MUNICIPAL",
    nullable: true,
    length: 20,
  })
  public psjrInscMunicipal?: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaJuridicas)
  @JoinColumn([{ name: "PSJR_PESS_ID", referencedColumnName: "id" }])
  public psjrPess?: CmnsPessoa;

  @ManyToOne(
    () => CmnsRamoAtividade,
    (cmnsRamoAtividade) => cmnsRamoAtividade.cmnsPessoaJuridicas
  )
  @JoinColumn([{ name: "PSJR_RMAT_ID", referencedColumnName: "id" }])
  public psjrRmat?: CmnsRamoAtividade;
}
