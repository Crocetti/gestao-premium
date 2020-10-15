import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrPlanoConta } from "./fncr-plano-conta";

@Index("PK_FNCR_PLANO_CONTA_SALDO", ["id"], { unique: true })
@Entity("FNCR_PLANO_CONTA_SALDO")
export class FncrPlanoContaSaldo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "PCSD_PERIODO", nullable: true })
  public pcsdPeriodo: LocalDateTime | null;

  @Column("money", { name: "PCSD_INICIAL", nullable: true })
  public pcsdInicial: number | null;

  @Column("money", { name: "PCSD_ENTRADAS", nullable: true })
  public pcsdEntradas: number | null;

  @Column("money", { name: "PCSD_SAIDAS", nullable: true })
  public pcsdSaidas: number | null;

  @Column("money", { name: "PCSD_FINAL", nullable: true })
  public pcsdFinal: number | null;

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
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrPlanoContaSaldos
  )
  @JoinColumn([{ name: "PCSD_PLCT_ID", referencedColumnName: "id" }])
  public pcsdPlct: FncrPlanoConta;
}
