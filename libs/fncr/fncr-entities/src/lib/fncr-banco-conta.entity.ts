import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FncrCaixa } from "./fncr-caixa";
import { FncrBanco } from "./fncr-banco";
import { FncrBancoContaSaldo } from "./fncr-banco-conta-saldo";
import { FncrBancoMovimento } from "./fncr-banco-movimento";

@Index("PK_FNCR_BANCO_CONTA", ["id"], { unique: true })
@Entity("FNCR_BANCO_CONTA")
export class FncrBancoConta {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "BCCT_NR_AGENCIA", nullable: true, length: 10 })
  public bcctNrAgencia: string | null;

  @Column("nvarchar", { name: "BCCT_NR_CONTA", nullable: true, length: 10 })
  public bcctNrConta: string | null;

  @Column("datetime2", { name: "BCCT_DT_ABERTURA", nullable: true })
  public bcctDtAbertura: Date | null;

  @Column("nvarchar", {
    name: "BCCT_CLASSIFICACAO",
    nullable: true,
    length: 25,
  })
  public bcctClassificacao: string | null;

  @Column("money", { name: "BCCT_LIMITE_ESPECIAL", nullable: true })
  public bcctLimiteEspecial: number | null;

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

  @ManyToOne(() => FncrCaixa, (fncrCaixa) => fncrCaixa.fncrBancoContas)
  @JoinColumn([{ name: "BANC_CAIX_ID", referencedColumnName: "id" }])
  public bancCaix: FncrCaixa;

  @ManyToOne(() => FncrBanco, (fncrBanco) => fncrBanco.fncrBancoContas)
  @JoinColumn([{ name: "BCCT_BANC_ID", referencedColumnName: "id" }])
  public bcctBanc: FncrBanco;

  @OneToMany(
    () => FncrBancoContaSaldo,
    (fncrBancoContaSaldo) => fncrBancoContaSaldo.bccsBcct
  )
  public fncrBancoContaSaldos: FncrBancoContaSaldo[];

  @OneToMany(
    () => FncrBancoMovimento,
    (fncrBancoMovimento) => fncrBancoMovimento.bcmvBcct
  )
  public fncrBancoMovimentos: FncrBancoMovimento[];
}
