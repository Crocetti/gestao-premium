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
import { VeteAnimal } from "./vete-animal";
import { VeteServico } from "./vete-servico";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("FK_ANML_RS_CGIA", ["cgiaAnmlId"], {})
@Index("FK_ANST_RS_CGIA", ["cgiaAnstId"], {})
@Index("FK_OSVT_RS_CGIA", ["cgiaOsvtId"], {})
@Index("FK_SERV_RS_CGIA", ["cgiaServId"], {})
@Index("FK_VETE_RS_CGIA", ["cgiaVeteId"], {})
@Index("PK_VETE_CIRURGIAS", ["cgiaId"], { unique: true })
@Entity("VETE_CIRURGIAS")
export class VeteCirurgias extends BaseEntity {
  @Column("varchar", { primary: true, name: "CGIA_ID", length: 27 })
  public cgiaId: string;

  @Column("varchar", { name: "CGIA_SERV_ID", nullable: true, length: 27 })
  public cgiaServId: string | null;

  @Column("varchar", { name: "CGIA_VETE_ID", nullable: true, length: 27 })
  public cgiaVeteId: string | null;

  @Column("varchar", { name: "CGIA_ANST_ID", nullable: true, length: 27 })
  public cgiaAnstId: string | null;

  @Column("varchar", { name: "CGIA_ANML_ID", nullable: true, length: 27 })
  public cgiaAnmlId: string | null;

  @Column("varchar", { name: "CGIA_OSVT_ID", nullable: true, length: 27 })
  public cgiaOsvtId: string | null;

  @Column("datetime", { name: "CGIA_DT_AGENDADA", nullable: true })
  public cgiaDtAgendada: LocalDateTime | null;

  @Column("datetime", { name: "CGIA_DT_OCORRENCIA", nullable: true })
  public cgiaDtOcorrencia: LocalDateTime | null;

  @Column("varchar", {
    name: "CGIA_PROCEDIMENTO_DESC",
    nullable: true,
    length: 5000,
  })
  public cgiaProcedimentoDesc: string | null;

  @Column("varchar", {
    name: "CGIA_PROCEDIMENTO_COMPL",
    nullable: true,
    length: 5000,
  })
  public cgiaProcedimentoCompl: string | null;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteCirurgias
  )
  @JoinColumn([{ name: "CGIA_ANST_ID", referencedColumnName: "fcnrId" }])
  public cgiaAnst: RchmFuncionario;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteCirurgias)
  @JoinColumn([{ name: "CGIA_ANML_ID", referencedColumnName: "anmlId" }])
  public cgiaAnml: VeteAnimal;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteCirurgias2
  )
  @JoinColumn([{ name: "CGIA_VETE_ID", referencedColumnName: "fcnrId" }])
  public cgiaVete: RchmFuncionario;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteCirurgias)
  @JoinColumn([{ name: "CGIA_SERV_ID", referencedColumnName: "servId" }])
  public cgiaServ: VeteServico;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteCirurgias
  )
  @JoinColumn([{ name: "CGIA_OSVT_ID", referencedColumnName: "osvtId" }])
  public cgiaOsvt: VeteOrdemDeServico;

  @RelationId((veteCirurgias: VeteCirurgias) => veteCirurgias.cgiaAnst)
  public cgiaAnstId2: string | null;

  @RelationId((veteCirurgias: VeteCirurgias) => veteCirurgias.cgiaAnml)
  public cgiaAnmlId2: string | null;

  @RelationId((veteCirurgias: VeteCirurgias) => veteCirurgias.cgiaVete)
  public cgiaVeteId2: string | null;

  @RelationId((veteCirurgias: VeteCirurgias) => veteCirurgias.cgiaServ)
  public cgiaServId2: string | null;

  @RelationId((veteCirurgias: VeteCirurgias) => veteCirurgias.cgiaOsvt)
  public cgiaOsvtId2: string | null;

  public constructor(init?: Partial<VeteCirurgias>) {
    super();
    Object.assign(this, init);
  }
}
