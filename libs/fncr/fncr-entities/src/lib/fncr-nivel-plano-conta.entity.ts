import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrComposicaoPlanoConta } from "./fncr-composicao-plano-conta";

@Index("PK_FNCR_NIVEL_PLANO_CONTA", ["id"], { unique: true })
@Entity("FNCR_NIVEL_PLANO_CONTA")
export class FncrNivelPlanoConta {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("int", { name: "NVPC_NIVEL", nullable: true })
  public nvpcNivel: number | null;

  @Column("int", { name: "NVPC_CASAS", nullable: true })
  public nvpcCasas: number | null;

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
    () => FncrComposicaoPlanoConta,
    (fncrComposicaoPlanoConta) => fncrComposicaoPlanoConta.fncrNivelPlanoContas
  )
  @JoinColumn([{ name: "NVPC_CMPC_ID", referencedColumnName: "id" }])
  public nvpcCmpc: FncrComposicaoPlanoConta;
}
