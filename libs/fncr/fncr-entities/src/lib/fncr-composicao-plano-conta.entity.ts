import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { FncrNivelPlanoConta } from "./fncr-nivel-plano-conta";

@Index("PK_FNCR_COMPOSICAO_PLANO_CONTA", ["cmpcId"], { unique: true })
@Entity("FNCR_COMPOSICAO_PLANO_CONTA")
export class FncrComposicaoPlanoConta extends BaseEntity {
  @Column("varchar", { primary: true, name: "CMPC_ID", length: 27 })
  public cmpcId: string;

  @Column("varchar", { name: "CMPC_LOCAL_CONTA", nullable: true, length: 25 })
  public cmpcLocalConta: string | null;

  @Column("int", { name: "CMPC_NIVEIS", nullable: true })
  public cmpcNiveis: number | null;

  @Column("datetime", { name: "CMPC_LASTUPDATE", nullable: true })
  public cmpcLastupdate: LocalDateTime | null;

  @OneToMany(
    () => FncrNivelPlanoConta,
    (fncrNivelPlanoConta) => fncrNivelPlanoConta.nvpcCmpc
  )
  public fncrNivelPlanoContas: FncrNivelPlanoConta[];

  public constructor(init?: Partial<FncrComposicaoPlanoConta>) {
    super();
    Object.assign(this, init);
  }
}
