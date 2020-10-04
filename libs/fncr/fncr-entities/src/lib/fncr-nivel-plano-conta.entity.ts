import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { FncrComposicaoPlanoConta } from "./fncr-composicao-plano-conta";

@Index("FK_CMPC_RS_NVPC", ["nvpcCmpcId"], {})
@Index("PK_FNCR_NIVEL_PLANO_CONTA", ["nvpcId"], { unique: true })
@Entity("FNCR_NIVEL_PLANO_CONTA")
export class FncrNivelPlanoConta extends BaseEntity {
  @Column("varchar", { primary: true, name: "NVPC_ID", length: 27 })
  public nvpcId: string;

  @Column("varchar", { name: "NVPC_CMPC_ID", nullable: true, length: 27 })
  public nvpcCmpcId: string | null;

  @Column("int", { name: "NVPC_NIVEL", nullable: true })
  public nvpcNivel: number | null;

  @Column("int", { name: "NVPC_CASAS", nullable: true })
  public nvpcCasas: number | null;

  @Column("datetime", { name: "NVPC_LASTUPDATE", nullable: true })
  public nvpcLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => FncrComposicaoPlanoConta,
    (fncrComposicaoPlanoConta) => fncrComposicaoPlanoConta.fncrNivelPlanoContas
  )
  @JoinColumn([{ name: "NVPC_CMPC_ID", referencedColumnName: "cmpcId" }])
  public nvpcCmpc: FncrComposicaoPlanoConta;

  @RelationId(
    (fncrNivelPlanoConta: FncrNivelPlanoConta) => fncrNivelPlanoConta.nvpcCmpc
  )
  public nvpcCmpcId2: string | null;

  public constructor(init?: Partial<FncrNivelPlanoConta>) {
    super();
    Object.assign(this, init);
  }
}
