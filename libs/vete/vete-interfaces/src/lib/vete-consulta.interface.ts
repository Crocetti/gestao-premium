import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { VeteAnimal } from "./vete-animal";
import { VeteServico } from "./vete-servico";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";
import { RchmFuncionario } from "./rchm-funcionario";

@Index("FK_ANML_RS_CONS", ["consAnmlId"], {})
@Index("FK_FCNR_RS_CONS", ["consFcnrId"], {})
@Index("FK_OSVT_RS_CONS", ["consOsvtId"], {})
@Index("FK_SERV_RS_CONS", ["consServId"], {})
@Index("PK_VETE_CONSULTA", ["consId"], { unique: true })
@Entity("VETE_CONSULTA")
export class VeteConsulta extends BaseEntity {
  @Column("varchar", { primary: true, name: "CONS_ID", length: 27 })
  public consId: string;

  @Column("varchar", { name: "CONS_OSVT_ID", nullable: true, length: 27 })
  public consOsvtId: string | null;

  @Column("varchar", { name: "CONS_SERV_ID", nullable: true, length: 27 })
  public consServId: string | null;

  @Column("varchar", { name: "CONS_ANML_ID", nullable: true, length: 27 })
  public consAnmlId: string | null;

  @Column("varchar", { name: "CONS_FCNR_ID", nullable: true, length: 27 })
  public consFcnrId: string | null;

  @Column("varchar", { name: "CONS_ANAMNESIA", nullable: true, length: 5000 })
  public consAnamnesia: string | null;

  @Column("varchar", {
    name: "CONS_EXAME_FISICO",
    nullable: true,
    length: 5000,
  })
  public consExameFisico: string | null;

  @Column("varchar", { name: "CONS_RECEITUARIO", nullable: true, length: 5000 })
  public consReceituario: string | null;

  @Column("datetime", { name: "CONS_DT_AGENDADA", nullable: true })
  public consDtAgendada: LocalDateTime | null;

  @Column("datetime", { name: "CONS_DT_EVENTO", nullable: true })
  public consDtEvento: LocalDateTime | null;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteConsultas)
  @JoinColumn([{ name: "CONS_ANML_ID", referencedColumnName: "anmlId" }])
  public consAnml: VeteAnimal;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteConsultas)
  @JoinColumn([{ name: "CONS_SERV_ID", referencedColumnName: "servId" }])
  public consServ: VeteServico;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteConsultas
  )
  @JoinColumn([{ name: "CONS_OSVT_ID", referencedColumnName: "osvtId" }])
  public consOsvt: VeteOrdemDeServico;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteConsultas
  )
  @JoinColumn([{ name: "CONS_FCNR_ID", referencedColumnName: "fcnrId" }])
  public consFcnr: RchmFuncionario;

  @RelationId((veteConsulta: VeteConsulta) => veteConsulta.consAnml)
  public consAnmlId2: string | null;

  @RelationId((veteConsulta: VeteConsulta) => veteConsulta.consServ)
  public consServId2: string | null;

  @RelationId((veteConsulta: VeteConsulta) => veteConsulta.consOsvt)
  public consOsvtId2: string | null;

  @RelationId((veteConsulta: VeteConsulta) => veteConsulta.consFcnr)
  public consFcnrId2: string | null;

  public constructor(init?: Partial<VeteConsulta>) {
    super();
    Object.assign(this, init);
  }
}
