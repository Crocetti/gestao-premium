import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import VeteOrdemDeServico from "./vete-ordem-de-servico";
import VeteServico from "./vete-servico";
import VeteAnimal from "./vete-animal";
import RchmFuncionario from "./rchm-funcionario";

@Index("PK_VETE_CONSULTA", ["id"], { unique: true })
@Entity("VETE_CONSULTA")
export default class VeteConsulta {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "CONS_ANAMNESIA", nullable: true })
  public consAnamnesia?: string | null;

  @Column("nvarchar", { name: "CONS_EXAME_FISICO", nullable: true })
  public consExameFisico?: string | null;

  @Column("nvarchar", { name: "CONS_RECEITUARIO", nullable: true })
  public consReceituario?: string | null;

  @Column("datetime2", { name: "CONS_DT_AGENDADA", nullable: true })
  public consDtAgendada?: Date | null;

  @Column("datetime2", { name: "CONS_DT_EVENTO", nullable: true })
  public consDtEvento?: Date | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteConsultas
  )
  @JoinColumn([{ name: "CONS_OSVT_ID", referencedColumnName: "id" }])
  public consOsvt?: VeteOrdemDeServico;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteConsultas)
  @JoinColumn([{ name: "CONS_SERV_ID", referencedColumnName: "id" }])
  public consServ?: VeteServico;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteConsultas)
  @JoinColumn([{ name: "CONS_ANML_ID", referencedColumnName: "id" }])
  public consAnml?: VeteAnimal;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteConsultas
  )
  @JoinColumn([{ name: "CONS_FCNR_ID", referencedColumnName: "id" }])
  public consFcnr?: RchmFuncionario;
}
