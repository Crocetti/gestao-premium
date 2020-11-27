import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CmnsUnemUsuario from "./cmns-unem-usuario";
import CmnsPessoaEmail from "./cmns-pessoa-email";
import CmnsPessoa from "./cmns-pessoa";
import EstqCapaMovimento from "./estq-capa-movimento";
import SstmParametroUsuario from "./sstm-parametro-usuario";

@Index("PK_CMNS_USUARIO", ["id"], { unique: true })
@Entity("CMNS_USUARIO")
export default class CmnsUsuario {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "USRS_NOME_LOGIN", nullable: true, length: 40 })
  public usrsNomeLogin?: string | null;

  @Column("nvarchar", { name: "USRS_SENHA", nullable: true, length: 256 })
  public usrsSenha?: string | null;

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

  @Column("nvarchar", { name: "USRS_CODIGO", nullable: true, length: 10 })
  public usrsCodigo?: string | null;

  @OneToMany(
    () => CmnsUnemUsuario,
    (cmnsUnemUsuario) => cmnsUnemUsuario.ueusUsrs
  )
  public cmnsUnemUsuarios?: CmnsUnemUsuario[];

  @ManyToOne(
    () => CmnsPessoaEmail,
    (cmnsPessoaEmail) => cmnsPessoaEmail.cmnsUsuarios
  )
  @JoinColumn([{ name: "USRS_PSEM_ID", referencedColumnName: "id" }])
  public usrsPsem?: CmnsPessoaEmail;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsUsuarios)
  @JoinColumn([{ name: "USRS_PESS_ID", referencedColumnName: "id" }])
  public usrsPess?: CmnsPessoa;

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvUsrs
  )
  public estqCapaMovimentos?: EstqCapaMovimento[];

  @OneToMany(
    () => SstmParametroUsuario,
    (sstmParametroUsuario) => sstmParametroUsuario.prusUsrs
  )
  public sstmParametroUsuarios?: SstmParametroUsuario[];
}
