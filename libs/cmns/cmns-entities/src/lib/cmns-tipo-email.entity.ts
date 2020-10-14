import { Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaEmail } from "./cmns-pessoa-email";

@Index("PK_CMNS_TIPO_EMAIL", ["id"], { unique: true })
@Entity("CMNS_TIPO_EMAIL")
export class CmnsTipoEmail {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "TPEM_CODIGO", nullable: true, length: 3 })
  public tpemCodigo: string | null;

  @Column("nvarchar", { name: "TPEM_NOME", nullable: true, length: 64 })
  public tpemNome: string | null;

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
    () => CmnsPessoaEmail,
    (cmnsPessoaEmail) => cmnsPessoaEmail.psemTpem
  )
  public cmnsPessoaEmails: CmnsPessoaEmail[];
}
