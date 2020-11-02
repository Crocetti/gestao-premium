import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {EstqCapaMovimento} from './estq-capa-movimento'
import {CmnsPessoa} from './cmns-pessoa'
import {RchmFuncionarioHistorico} from './rchm-funcionario-historico'
import {VeteCirurgias} from './vete-cirurgias'
import {VeteConsulta} from './vete-consulta'
import {VeteInternacao} from './vete-internacao'
import {VeteRetorno} from './vete-retorno'


@Index("FK_PESS_RS_FCNR",["fcnrPessId",],{  })
@Index("PK_RCHM_FUNCIONARIO",["fcnrId",],{ unique:true })
@Entity("RCHM_FUNCIONARIO")
export  class RchmFuncionario extends BaseEntity {

@Column("varchar",{ primary:true,name:"FCNR_ID",length:27 })
public fcnrId:string;

@Column("varchar",{ name:"FCNR_PESS_ID",nullable:true,length:27 })
public fcnrPessId:string | null;

@Column("varchar",{ name:"FCNR_MATRICULA",nullable:true,length:20 })
public fcnrMatricula:string | null;

@Column("datetime",{ name:"FCNR_DT_ADMISSAO",nullable:true })
public fcnrDtAdmissao:LocalDateTime | null;

@Column("datetime",{ name:"FCNR_DT_DEMISSAO",nullable:true })
public fcnrDtDemissao:LocalDateTime | null;

@Column("smallint",{ name:"FCNR_PRIMEIRO_EMPREGO",nullable:true,default: () => "0", })
public fcnrPrimeiroEmprego:number | null;

@Column("varchar",{ name:"FCNR_NR_PIS",nullable:true,length:25 })
public fcnrNrPis:string | null;

@Column("datetime",{ name:"FCNR_DT_PIS",nullable:true })
public fcnrDtPis:LocalDateTime | null;

@Column("smallint",{ name:"FCNR_CONTRATO_EXPERIENCIA",nullable:true,default: () => "0", })
public fcnrContratoExperiencia:number | null;

@Column("int",{ name:"FCNR_CONTRATO_DIAS",nullable:true })
public fcnrContratoDias:number | null;

@Column("varchar",{ name:"FCNR_TIPO",nullable:true,length:15 })
public fcnrTipo:string | null;

@Column("datetime",{ name:"FCNR_LASTUPDATE",nullable:true })
public fcnrLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.cpmvVend)


public estqCapaMovimentos:EstqCapaMovimento[];

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.rchmFuncionarios)
@JoinColumn([{ name: "FCNR_PESS_ID", referencedColumnName: "pessId" },
])

public fcnrPess:CmnsPessoa;

@OneToMany(()=>RchmFuncionarioHistorico,rchmFuncionarioHistorico=>rchmFuncionarioHistorico.fchsFcnr)


public rchmFuncionarioHistoricos:RchmFuncionarioHistorico[];

@OneToMany(()=>VeteCirurgias,veteCirurgias=>veteCirurgias.cgiaAnst)


public veteCirurgias:VeteCirurgias[];

@OneToMany(()=>VeteCirurgias,veteCirurgias=>veteCirurgias.cgiaVete)


public veteCirurgias2:VeteCirurgias[];

@OneToMany(()=>VeteConsulta,veteConsulta=>veteConsulta.consFcnr)


public veteConsultas:VeteConsulta[];

@OneToMany(()=>VeteInternacao,veteInternacao=>veteInternacao.intrVete)


public veteInternacaos:VeteInternacao[];

@OneToMany(()=>VeteRetorno,veteRetorno=>veteRetorno.rtrnVtag)


public veteRetornos:VeteRetorno[];

@OneToMany(()=>VeteRetorno,veteRetorno=>veteRetorno.rtrnVtat)


public veteRetornos2:VeteRetorno[];

@RelationId((rchmFuncionario:RchmFuncionario)=>rchmFuncionario.fcnrPess)
public fcnrPessId2:string | null;

public constructor(init?: Partial<RchmFuncionario>) {
    super();
    Object.assign(this, init);
}
}
