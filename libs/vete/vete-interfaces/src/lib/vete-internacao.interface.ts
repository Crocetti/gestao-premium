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
import { RchmFuncionario } from "./rchm-funcionario";
import { VeteServico } from "./vete-servico";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("FK_ANML_RS_INTR", ["intrAnmlId"], {})
@Index("FK_OSVT_RS_INTR", ["intrOsvtId"], {})
@Index("FK_SERV_RS_INTR", ["intrServId"], {})
@Index("FK_VETE_RS_INTR", ["intrVeteId"], {})
@Index("PK_VETE_INTERNACAO", ["intrId"], { unique: true })
@Entity("VETE_INTERNACAO")
export class VeteInternacao extends BaseEntity {
  @Column("varchar", { primary: true, name: "INTR_ID", length: 27 })
  public intrId: string;

  @Column("varchar", { name: "INTR_VETE_ID", nullable: true, length: 27 })
  public intrVeteId: string | null;

  @Column("varchar", { name: "INTR_SERV_ID", nullable: true, length: 27 })
  public intrServId: string | null;

  @Column("varchar", { name: "INTR_ANML_ID", nullable: true, length: 27 })
  public intrAnmlId: string | null;

  @Column("varchar", { name: "INTR_OSVT_ID", nullable: true, length: 27 })
  public intrOsvtId: string | null;

  @Column("datetime", { name: "INTR_DT_ENTRADA", nullable: true })
  public intrDtEntrada: LocalDateTime | null;

  @Column("datetime", { name: "INTR_DT_SAIDA", nullable: true })
  public intrDtSaida: LocalDateTime | null;

  @Column("varchar", {
    name: "INTR_SUSPEITA_CLINICA",
    nullable: true,
    length: 5000,
  })
  public intrSuspeitaClinica: string | null;

  @Column("varchar", { name: "INTR_SINTOMAS", nullable: true, length: 5000 })
  public intrSintomas: string | null;

  @Column("varchar", { name: "INTR_DADOS", nullable: true, length: 5000 })
  public intrDados: string | null;

  @Column("image", { name: "INTR_TERMO_RESP", nullable: true })
  public intrTermoResp: Buffer | null;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteInternacaos)
  @JoinColumn([{ name: "INTR_ANML_ID", referencedColumnName: "anmlId" }])
  public intrAnml: VeteAnimal;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteInternacaos
  )
  @JoinColumn([{ name: "INTR_VETE_ID", referencedColumnName: "fcnrId" }])
  public intrVete: RchmFuncionario;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteInternacaos)
  @JoinColumn([{ name: "INTR_SERV_ID", referencedColumnName: "servId" }])
  public intrServ: VeteServico;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteInternacaos
  )
  @JoinColumn([{ name: "INTR_OSVT_ID", referencedColumnName: "osvtId" }])
  public intrOsvt: VeteOrdemDeServico;

  @RelationId((veteInternacao: VeteInternacao) => veteInternacao.intrAnml)
  public intrAnmlId2: string | null;

  @RelationId((veteInternacao: VeteInternacao) => veteInternacao.intrVete)
  public intrVeteId2: string | null;

  @RelationId((veteInternacao: VeteInternacao) => veteInternacao.intrServ)
  public intrServId2: string | null;

  @RelationId((veteInternacao: VeteInternacao) => veteInternacao.intrOsvt)
  public intrOsvtId2: string | null;

  public constructor(init?: Partial<VeteInternacao>) {
    super();
    Object.assign(this, init);
  }
}
