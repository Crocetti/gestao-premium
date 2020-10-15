import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { CmnsPessoa } from "./cmns-pessoa";
import { RchmFuncionarioHistorico } from "./rchm-funcionario-historico";
import { VeteCirurgias } from "./vete-cirurgias";
import { VeteConsulta } from "./vete-consulta";
import { VeteInternacao } from "./vete-internacao";
import { VeteRetorno } from "./vete-retorno";

@Index("PK_RCHM_FUNCIONARIO", ["id"], { unique: true })
@Entity("RCHM_FUNCIONARIO")
export class RchmFuncionario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "FCNR_MATRICULA", nullable: true, length: 20 })
  public fcnrMatricula: string | null;

  @Column("datetime2", { name: "FCNR_DT_ADMISSAO", nullable: true })
  public fcnrDtAdmissao: LocalDateTime | null;

  @Column("datetime2", { name: "FCNR_DT_DEMISSAO", nullable: true })
  public fcnrDtDemissao: LocalDateTime | null;

  @Column("smallint", { name: "FCNR_PRIMEIRO_EMPREGO", nullable: true })
  public fcnrPrimeiroEmprego: number | null;

  @Column("nvarchar", { name: "FCNR_NR_PIS", nullable: true, length: 25 })
  public fcnrNrPis: string | null;

  @Column("datetime2", { name: "FCNR_DT_PIS", nullable: true })
  public fcnrDtPis: LocalDateTime | null;

  @Column("smallint", { name: "FCNR_CONTRATO_EXPERIENCIA", nullable: true })
  public fcnrContratoExperiencia: number | null;

  @Column("int", { name: "FCNR_CONTRATO_DIAS", nullable: true })
  public fcnrContratoDias: number | null;

  @Column("nvarchar", { name: "FCNR_TIPO", nullable: true, length: 15 })
  public fcnrTipo: string | null;

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

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvVend
  )
  public estqCapaMovimentos: EstqCapaMovimento[];

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.rchmFuncionarios)
  @JoinColumn([{ name: "FCNR_PESS_ID", referencedColumnName: "id" }])
  public fcnrPess: CmnsPessoa;

  @OneToMany(
    () => RchmFuncionarioHistorico,
    (rchmFuncionarioHistorico) => rchmFuncionarioHistorico.fchsFcnr
  )
  public rchmFuncionarioHistoricos: RchmFuncionarioHistorico[];

  @OneToMany(() => VeteCirurgias, (veteCirurgias) => veteCirurgias.cgiaVete)
  public veteCirurgias: VeteCirurgias[];

  @OneToMany(() => VeteCirurgias, (veteCirurgias) => veteCirurgias.cgiaAnst)
  public veteCirurgias2: VeteCirurgias[];

  @OneToMany(() => VeteConsulta, (veteConsulta) => veteConsulta.consFcnr)
  public veteConsultas: VeteConsulta[];

  @OneToMany(() => VeteInternacao, (veteInternacao) => veteInternacao.intrVete)
  public veteInternacaos: VeteInternacao[];

  @OneToMany(() => VeteRetorno, (veteRetorno) => veteRetorno.rtrnVtat)
  public veteRetornos: VeteRetorno[];

  @OneToMany(() => VeteRetorno, (veteRetorno) => veteRetorno.rtrnVtag)
  public veteRetornos2: VeteRetorno[];
}
