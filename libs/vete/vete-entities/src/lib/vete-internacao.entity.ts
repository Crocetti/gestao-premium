import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RchmFuncionario } from "./rchm-funcionario";
import { VeteServico } from "./vete-servico";
import { VeteAnimal } from "./vete-animal";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("PK_VETE_INTERNACAO", ["id"], { unique: true })
@Entity("VETE_INTERNACAO")
export class VeteInternacao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "INTR_DT_ENTRADA", nullable: true })
  public intrDtEntrada: Date | null;

  @Column("datetime2", { name: "INTR_DT_SAIDA", nullable: true })
  public intrDtSaida: Date | null;

  @Column("nvarchar", { name: "INTR_SUSPEITA_CLINICA", nullable: true })
  public intrSuspeitaClinica: string | null;

  @Column("nvarchar", { name: "INTR_SINTOMAS", nullable: true })
  public intrSintomas: string | null;

  @Column("nvarchar", { name: "INTR_DADOS", nullable: true })
  public intrDados: string | null;

  @Column("nvarchar", { name: "INTR_TERMO_RESP", nullable: true })
  public intrTermoResp: string | null;

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
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteInternacaos
  )
  @JoinColumn([{ name: "INTR_VETE_ID", referencedColumnName: "id" }])
  public intrVete: RchmFuncionario;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteInternacaos)
  @JoinColumn([{ name: "INTR_SERV_ID", referencedColumnName: "id" }])
  public intrServ: VeteServico;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteInternacaos)
  @JoinColumn([{ name: "INTR_ANML_ID", referencedColumnName: "id" }])
  public intrAnml: VeteAnimal;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteInternacaos
  )
  @JoinColumn([{ name: "INTR_OSVT_ID", referencedColumnName: "id" }])
  public intrOsvt: VeteOrdemDeServico;
}
