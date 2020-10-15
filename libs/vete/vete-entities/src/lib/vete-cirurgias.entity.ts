import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { VeteServico } from "./vete-servico";
import { RchmFuncionario } from "./rchm-funcionario";
import { VeteAnimal } from "./vete-animal";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("PK_VETE_CIRURGIAS", ["id"], { unique: true })
@Entity("VETE_CIRURGIAS")
export class VeteCirurgias {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "CGIA_DT_AGENDADA", nullable: true })
  public cgiaDtAgendada: LocalDateTime | null;

  @Column("datetime2", { name: "CGIA_DT_OCORRENCIA", nullable: true })
  public cgiaDtOcorrencia: LocalDateTime | null;

  @Column("nvarchar", { name: "CGIA_PROCEDIMENTO_DESC", nullable: true })
  public cgiaProcedimentoDesc: string | null;

  @Column("nvarchar", { name: "CGIA_PROCEDIMENTO_COMPL", nullable: true })
  public cgiaProcedimentoCompl: string | null;

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

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteCirurgias)
  @JoinColumn([{ name: "CGIA_SERV_ID", referencedColumnName: "id" }])
  public cgiaServ: VeteServico;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteCirurgias
  )
  @JoinColumn([{ name: "CGIA_VETE_ID", referencedColumnName: "id" }])
  public cgiaVete: RchmFuncionario;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteCirurgias2
  )
  @JoinColumn([{ name: "CGIA_ANST_ID", referencedColumnName: "id" }])
  public cgiaAnst: RchmFuncionario;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteCirurgias)
  @JoinColumn([{ name: "CGIA_ANML_ID", referencedColumnName: "id" }])
  public cgiaAnml: VeteAnimal;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteCirurgias
  )
  @JoinColumn([{ name: "CGIA_OSVT_ID", referencedColumnName: "id" }])
  public cgiaOsvt: VeteOrdemDeServico;
}
