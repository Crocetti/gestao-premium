import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CmnsPessoa from "./cmns-pessoa";
import CmnsTipoEmail from "./cmns-tipo-email";
import CmnsUsuario from "./cmns-usuario";

@Index("PK_CMNS_PESSOA_EMAIL", ["id"], { unique: true })
@Entity("CMNS_PESSOA_EMAIL")
export default class CmnsPessoaEmail {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PSEM_ENDERECO", nullable: true, length: 256 })
  public psemEndereco?: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaEmails)
  @JoinColumn([{ name: "PSEM_PESS_ID", referencedColumnName: "id" }])
  public psemPess?: CmnsPessoa;

  @ManyToOne(
    () => CmnsTipoEmail,
    (cmnsTipoEmail) => cmnsTipoEmail.cmnsPessoaEmails
  )
  @JoinColumn([{ name: "PSEM_TPEM_ID", referencedColumnName: "id" }])
  public psemTpem?: CmnsTipoEmail;

  @OneToMany(() => CmnsUsuario, (cmnsUsuario) => cmnsUsuario.usrsPsem)
  public cmnsUsuarios?: CmnsUsuario[];
}
