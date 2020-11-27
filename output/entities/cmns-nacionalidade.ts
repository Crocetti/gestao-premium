import { Column, Entity, Index, OneToMany } from "typeorm";
import CmnsPessoaFisica from "./cmns-pessoa-fisica";

@Index("PK_CMNS_NACIONALIDADE", ["id"], { unique: true })
@Entity("CMNS_NACIONALIDADE")
export default class CmnsNacionalidade {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "NCNL_CODIGO", nullable: true, length: 3 })
  public ncnlCodigo?: string | null;

  @Column("nvarchar", { name: "NCNL_NOME", nullable: true, length: 64 })
  public ncnlNome?: string | null;

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
    () => CmnsPessoaFisica,
    (cmnsPessoaFisica) => cmnsPessoaFisica.psfsNcnl
  )
  public cmnsPessoaFisicas?: CmnsPessoaFisica[];
}
