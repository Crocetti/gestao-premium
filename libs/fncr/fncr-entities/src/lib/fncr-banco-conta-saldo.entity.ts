import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrBancoConta } from "./fncr-banco-conta";

@Index("PK_FNCR_BANCO_CONTA_SALDO", ["id"], { unique: true })
@Entity("FNCR_BANCO_CONTA_SALDO")
export class FncrBancoContaSaldo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "BCCS_REFERENCIA", nullable: true })
  public bccsReferencia: LocalDateTime | null;

  @Column("money", { name: "BCCS_VALOR", nullable: true })
  public bccsValor: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => FncrBancoConta,
    (fncrBancoConta) => fncrBancoConta.fncrBancoContaSaldos
  )
  @JoinColumn([{ name: "BCCS_BCCT_ID", referencedColumnName: "id" }])
  public bccsBcct: FncrBancoConta;
}
