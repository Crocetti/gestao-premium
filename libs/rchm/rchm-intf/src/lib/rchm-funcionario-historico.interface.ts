import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { RchmFuncionario } from "./rchm-funcionario";

@Index("FK_FCNR_RS_FCHS", ["fchsFcnrId"], {})
@Index("PK_RCHM_FUNCIONARIO_HISTORICO", ["fchsId"], { unique: true })
@Entity("RCHM_FUNCIONARIO_HISTORICO")
export class RchmFuncionarioHistorico extends BaseEntity {
  @Column("varchar", { primary: true, name: "FCHS_ID", length: 27 })
  public fchsId: string;

  @Column("varchar", { name: "FCHS_FCNR_ID", nullable: true, length: 27 })
  public fchsFcnrId: string | null;

  @Column("datetime", { name: "FCHS_DATA", nullable: true })
  public fchsData: LocalDateTime | null;

  @Column("varchar", { name: "FCHS_EVENTO", nullable: true, length: 20 })
  public fchsEvento: string | null;

  @Column("varchar", { name: "FCHS_DESCRICAO", nullable: true, length: 500 })
  public fchsDescricao: string | null;

  @Column("datetime", { name: "FCHS_LASTUPDATE", nullable: true })
  public fchsLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.rchmFuncionarioHistoricos
  )
  @JoinColumn([{ name: "FCHS_FCNR_ID", referencedColumnName: "fcnrId" }])
  public fchsFcnr: RchmFuncionario;

  @RelationId(
    (rchmFuncionarioHistorico: RchmFuncionarioHistorico) =>
      rchmFuncionarioHistorico.fchsFcnr
  )
  public fchsFcnrId2: string | null;

  public constructor(init?: Partial<RchmFuncionarioHistorico>) {
    super();
    Object.assign(this, init);
  }
}
