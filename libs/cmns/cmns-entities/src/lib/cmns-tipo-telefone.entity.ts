import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaTelefone } from "./cmns-pessoa-telefone";

@Index("PK_CMNS_TIPO_TELEFONE", ["tptlId"], { unique: true })
@Entity("CMNS_TIPO_TELEFONE")
export class CmnsTipoTelefone extends BaseEntity {
  @Column("varchar", { primary: true, name: "TPTL_ID", length: 27 })
  public tptlId: string;

  @Column("varchar", { name: "TPTL_CODIGO", nullable: true, length: 3 })
  public tptlCodigo: string | null;

  @Column("varchar", { name: "TPTL_NOME", nullable: true, length: 64 })
  public tptlNome: string | null;

  @Column("datetime", { name: "TPTL_LASTUPDATE", nullable: true })
  public tptlLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaTelefone,
    (cmnsPessoaTelefone) => cmnsPessoaTelefone.pstlTptl
  )
  public cmnsPessoaTelefones: CmnsPessoaTelefone[];

  public constructor(init?: Partial<CmnsTipoTelefone>) {
    super();
    Object.assign(this, init);
  }
}
