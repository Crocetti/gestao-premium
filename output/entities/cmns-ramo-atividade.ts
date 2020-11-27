import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CmnsPessoaJuridica from "./cmns-pessoa-juridica";

@Index("PK_CMNS_RAMO_ATIVIDADE", ["id"], { unique: true })
@Entity("CMNS_RAMO_ATIVIDADE")
export default class CmnsRamoAtividade {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "RMAT_NOME", nullable: true, length: 256 })
  public rmatNome?: string | null;

  @Column("nvarchar", { name: "RMAT_CODIGO_RF", nullable: true, length: 10 })
  public rmatCodigoRf?: string | null;

  @Column("bit", { name: "RMAT_RETEM_CONFINS", nullable: true })
  public rmatRetemConfins?: boolean | null;

  @Column("bit", { name: "RMAT_RETEM_PIS", nullable: true })
  public rmatRetemPis?: boolean | null;

  @Column("bit", { name: "RMAT_RETEM_CSLL", nullable: true })
  public rmatRetemCsll?: boolean | null;

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
    () => CmnsPessoaJuridica,
    (cmnsPessoaJuridica) => cmnsPessoaJuridica.psjrRmat
  )
  public cmnsPessoaJuridicas?: CmnsPessoaJuridica[];

  @ManyToOne(
    () => CmnsRamoAtividade,
    (cmnsRamoAtividade) => cmnsRamoAtividade.cmnsRamoAtividades
  )
  @JoinColumn([{ name: "RMAT_RMAT_ID", referencedColumnName: "id" }])
  public rmatRmat?: CmnsRamoAtividade;

  @OneToMany(
    () => CmnsRamoAtividade,
    (cmnsRamoAtividade) => cmnsRamoAtividade.rmatRmat
  )
  public cmnsRamoAtividades?: CmnsRamoAtividade[];
}
