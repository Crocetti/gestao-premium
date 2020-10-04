import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";
import { CmnsTipoTelefone } from "./cmns-tipo-telefone";

@Index("FK_PESS_RS_PSTL", ["pstlPessId"], {})
@Index("FK_TPTL_RS_PSTL", ["pstlTptlId"], {})
@Index("PK_CMNS_PESSOA_TELEFONE", ["pstlId"], { unique: true })
@Entity("CMNS_PESSOA_TELEFONE")
export class CmnsPessoaTelefone extends BaseEntity {
  @Column("varchar", { primary: true, name: "PSTL_ID", length: 27 })
  public pstlId: string;

  @Column("varchar", { name: "PSTL_TPTL_ID", nullable: true, length: 27 })
  public pstlTptlId: string | null;

  @Column("varchar", { name: "PSTL_PESS_ID", nullable: true, length: 27 })
  public pstlPessId: string | null;

  @Column("varchar", { name: "PSTL_NUMERO", nullable: true, length: 20 })
  public pstlNumero: string | null;

  @Column("varchar", { name: "PSTL_RAMAL", nullable: true, length: 10 })
  public pstlRamal: string | null;

  @Column("varchar", { name: "PSTL_OBSERVACAO", nullable: true, length: 5000 })
  public pstlObservacao: string | null;

  @Column("datetime", { name: "PSTL_LASTUPDATE", nullable: true })
  public pstlLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaTelefones)
  @JoinColumn([{ name: "PSTL_PESS_ID", referencedColumnName: "pessId" }])
  public pstlPess: CmnsPessoa;

  @ManyToOne(
    () => CmnsTipoTelefone,
    (cmnsTipoTelefone) => cmnsTipoTelefone.cmnsPessoaTelefones
  )
  @JoinColumn([{ name: "PSTL_TPTL_ID", referencedColumnName: "tptlId" }])
  public pstlTptl: CmnsTipoTelefone;

  @RelationId(
    (cmnsPessoaTelefone: CmnsPessoaTelefone) => cmnsPessoaTelefone.pstlPess
  )
  public pstlPessId2: string | null;

  @RelationId(
    (cmnsPessoaTelefone: CmnsPessoaTelefone) => cmnsPessoaTelefone.pstlTptl
  )
  public pstlTptlId2: string | null;

  public constructor(init?: Partial<CmnsPessoaTelefone>) {
    super();
    Object.assign(this, init);
  }
}
