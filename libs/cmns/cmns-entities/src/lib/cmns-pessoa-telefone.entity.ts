import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsTipoTelefone } from "./cmns-tipo-telefone";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("PK_CMNS_PESSOA_TELEFONE", ["id"], { unique: true })
@Entity("CMNS_PESSOA_TELEFONE")
export class CmnsPessoaTelefone {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PSTL_NUMERO", nullable: true, length: 20 })
  public pstlNumero: string | null;

  @Column("nvarchar", { name: "PSTL_RAMAL", nullable: true, length: 10 })
  public pstlRamal: string | null;

  @Column("nvarchar", { name: "PSTL_OBSERVACAO", nullable: true })
  public pstlObservacao: string | null;

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

  @ManyToOne(
    () => CmnsTipoTelefone,
    (cmnsTipoTelefone) => cmnsTipoTelefone.cmnsPessoaTelefones
  )
  @JoinColumn([{ name: "PSTL_TPTL_ID", referencedColumnName: "id" }])
  public pstlTptl: CmnsTipoTelefone;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaTelefones)
  @JoinColumn([{ name: "PSTL_PESS_ID", referencedColumnName: "id" }])
  public pstlPess: CmnsPessoa;
}
