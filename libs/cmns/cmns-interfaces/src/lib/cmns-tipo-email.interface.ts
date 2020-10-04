import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaEmail } from "./cmns-pessoa-email";

@Index("PK_CMNS_TIPO_EMAIL", ["tpemId"], { unique: true })
@Entity("CMNS_TIPO_EMAIL")
export class CmnsTipoEmail extends BaseEntity {
  @Column("varchar", { primary: true, name: "TPEM_ID", length: 27 })
  public tpemId: string;

  @Column("varchar", { name: "TPEM_CODIGO", nullable: true, length: 3 })
  public tpemCodigo: string | null;

  @Column("varchar", { name: "TPEM_NOME", nullable: true, length: 64 })
  public tpemNome: string | null;

  @Column("datetime", { name: "TPEM_LASTUPDATE", nullable: true })
  public tpemLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaEmail,
    (cmnsPessoaEmail) => cmnsPessoaEmail.psemTpem
  )
  public cmnsPessoaEmails: CmnsPessoaEmail[];

  public constructor(init?: Partial<CmnsTipoEmail>) {
    super();
    Object.assign(this, init);
  }
}
