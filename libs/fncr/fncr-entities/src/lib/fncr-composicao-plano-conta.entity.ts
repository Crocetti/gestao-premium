import { Column, Entity, Index, OneToMany } from "typeorm";
import { FncrNivelPlanoConta } from "./fncr-nivel-plano-conta";

@Index("PK_FNCR_COMPOSICAO_PLANO_CONTA", ["id"], { unique: true })
@Entity("FNCR_COMPOSICAO_PLANO_CONTA")
export class FncrComposicaoPlanoConta {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CMPC_LOCAL_CONTA", nullable: true, length: 25 })
  public cmpcLocalConta: string | null;

  @Column("int", { name: "CMPC_NIVEIS", nullable: true })
  public cmpcNiveis: number | null;

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

  @OneToMany(
    () => FncrNivelPlanoConta,
    (fncrNivelPlanoConta) => fncrNivelPlanoConta.nvpcCmpc
  )
  public fncrNivelPlanoContas: FncrNivelPlanoConta[];
}
