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
import { CmnsPessoa } from "./cmns-pessoa";
import { CmnsTipoEmail } from "./cmns-tipo-email";
import { CmnsUsuario } from "./cmns-usuario";

@Index("FK_PESS_RS_PSEM", ["psemPessId"], {})
@Index("FK_TPEM_RS_PSEM", ["psemTpemId"], {})
@Index("PK_CMNS_PESSOA_EMAIL", ["psemId"], { unique: true })
@Entity("CMNS_PESSOA_EMAIL")
export class CmnsPessoaEmail extends BaseEntity {
  @Column("varchar", { primary: true, name: "PSEM_ID", length: 27 })
  public psemId: string;

  @Column("varchar", { name: "PSEM_PESS_ID", nullable: true, length: 27 })
  public psemPessId: string | null;

  @Column("varchar", { name: "PSEM_TPEM_ID", nullable: true, length: 27 })
  public psemTpemId: string | null;

  @Column("varchar", { name: "PSEM_ENDERECO", nullable: true, length: 256 })
  public psemEndereco: string | null;

  @Column("datetime", { name: "PSEM_LASTUPDATE", nullable: true })
  public psemLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaEmails)
  @JoinColumn([{ name: "PSEM_PESS_ID", referencedColumnName: "pessId" }])
  public psemPess: CmnsPessoa;

  @ManyToOne(
    () => CmnsTipoEmail,
    (cmnsTipoEmail) => cmnsTipoEmail.cmnsPessoaEmails
  )
  @JoinColumn([{ name: "PSEM_TPEM_ID", referencedColumnName: "tpemId" }])
  public psemTpem: CmnsTipoEmail;

  @OneToMany(() => CmnsUsuario, (cmnsUsuario) => cmnsUsuario.usrsPsem)
  public cmnsUsuarios: CmnsUsuario[];

  @RelationId((cmnsPessoaEmail: CmnsPessoaEmail) => cmnsPessoaEmail.psemPess)
  public psemPessId2: string | null;

  @RelationId((cmnsPessoaEmail: CmnsPessoaEmail) => cmnsPessoaEmail.psemTpem)
  public psemTpemId2: string | null;

  public constructor(init?: Partial<CmnsPessoaEmail>) {
    super();
    Object.assign(this, init);
  }
}
