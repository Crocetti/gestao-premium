import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import {
    CmnsPessoa,
    CmnsPessoaEmail
} from "@gpremium/cmns-pess-ents";
import { BasicEntity } from '@gpremium/shared-ent';
import type { ICmnsPessoa, ICmnsPessoaEmail, ICmnsUsuario } from '@gpremium/cmns-interfaces';

@Index("PK_CMNS_USUARIO", ["id"], { unique: true })
@Entity("CMNS_USUARIO")
export class CmnsUsuario extends BasicEntity implements ICmnsUsuario {

  @Column("nvarchar", { name: "USRS_NOME_LOGIN", nullable: true, length: 40 })
  public usrsNomeLogin: string | null;

  @Column("nvarchar", { name: "USRS_SENHA", nullable: true, length: 256 })
  public usrsSenha: string | null;


  @ManyToOne(() => CmnsPessoaEmail)
  @JoinColumn([{ name: "USRS_PSEM_ID", referencedColumnName: "id" }])
  public cmnsPessoaEmail: ICmnsPessoaEmail;

  @ManyToOne(() => CmnsPessoa)
  @JoinColumn([{ name: "USRS_PESS_ID", referencedColumnName: "id" }])
  public cmnsPessoa: ICmnsPessoa;

}
