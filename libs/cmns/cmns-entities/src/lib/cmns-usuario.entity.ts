import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { CmnsUnemUsuario } from "./cmns-unem-usuario";
import { CmnsPessoa } from "./cmns-pessoa";
import { CmnsPessoaEmail } from "./cmns-pessoa-email";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { SstmParametroUsuario } from "./sstm-parametro-usuario";

@Index("FK_PESS_RS_USRS", ["usrsPessId"], {})
@Index("FK_PSEM_RS_USRS", ["usrsPsemId"], {})
@Index("PK_CMNS_USUARIO", ["usrsId"], { unique: true })
@Entity("CMNS_USUARIO")
export class CmnsUsuario extends BaseEntity {
  @Column("varchar", { primary: true, name: "USRS_ID", length: 27 })
  public usrsId: string;

  @Column("varchar", { name: "USRS_PSEM_ID", nullable: true, length: 27 })
  public usrsPsemId: string | null;

  @Column("varchar", { name: "USRS_PESS_ID", nullable: true, length: 27 })
  public usrsPessId: string | null;

  @Column("varchar", { name: "USRS_NOME_LOGIN", nullable: true, length: 40 })
  public usrsNomeLogin: string | null;

  @Column("varchar", { name: "USRS_SENHA", nullable: true, length: 256 })
  public usrsSenha: string | null;

  @Column("datetime", { name: "USRS_LASTUPDATE", nullable: true })
  public usrsLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsUnemUsuario,
    (cmnsUnemUsuario) => cmnsUnemUsuario.ueusUsrs
  )
  public cmnsUnemUsuarios: CmnsUnemUsuario[];

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsUsuarios)
  @JoinColumn([{ name: "USRS_PESS_ID", referencedColumnName: "pessId" }])
  public usrsPess: CmnsPessoa;

  @ManyToOne(
    () => CmnsPessoaEmail,
    (cmnsPessoaEmail) => cmnsPessoaEmail.cmnsUsuarios
  )
  @JoinColumn([{ name: "USRS_PSEM_ID", referencedColumnName: "psemId" }])
  public usrsPsem: CmnsPessoaEmail;

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvUsrs
  )
  public estqCapaMovimentos: EstqCapaMovimento[];

  @OneToMany(
    () => SstmParametroUsuario,
    (sstmParametroUsuario) => sstmParametroUsuario.prusUsrs
  )
  public sstmParametroUsuarios: SstmParametroUsuario[];

  @RelationId((cmnsUsuario: CmnsUsuario) => cmnsUsuario.usrsPess)
  public usrsPessId2: string | null;

  @RelationId((cmnsUsuario: CmnsUsuario) => cmnsUsuario.usrsPsem)
  public usrsPsemId2: string | null;

  public constructor(init?: Partial<CmnsUsuario>) {
    super();
    Object.assign(this, init);
  }
}
