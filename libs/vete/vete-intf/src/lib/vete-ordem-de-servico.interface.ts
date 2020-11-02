import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {VeteCirurgias} from './vete-cirurgias'
import {VeteConsulta} from './vete-consulta'
import {VeteInternacao} from './vete-internacao'
import {VeteAnimal} from './vete-animal'
import {FncrTabelaPreco} from './fncr-tabela-preco'
import {CdstProduto} from './cdst-produto'
import {FncrFormaVencimento} from './fncr-forma-vencimento'
import {EstqCapaMovimento} from './estq-capa-movimento'
import {VeteRetorno} from './vete-retorno'


@Index("FK_ANML_RS_OSVT",["osvtAnmlId",],{  })
@Index("FK_CPMV_RS_OSVT",["osvtCpmvId",],{  })
@Index("FK_FRVN_RS_OSVT",["osvtFrvnId",],{  })
@Index("FK_TAXI_RS_OSVT",["osvtTaxiId",],{  })
@Index("FK_TBPC_RS_OSVT",["osvtTbpcId",],{  })
@Index("PK_VETE_ORDEM_DE_SERVICO",["osvtId",],{ unique:true })
@Entity("VETE_ORDEM_DE_SERVICO")
export  class VeteOrdemDeServico extends BaseEntity {

@Column("varchar",{ primary:true,name:"OSVT_ID",length:27 })
public osvtId:string;

@Column("varchar",{ name:"OSVT_TBPC_ID",nullable:true,length:27 })
public osvtTbpcId:string | null;

@Column("varchar",{ name:"OSVT_FRVN_ID",nullable:true,length:27 })
public osvtFrvnId:string | null;

@Column("varchar",{ name:"OSVT_CPMV_ID",nullable:true,length:27 })
public osvtCpmvId:string | null;

@Column("varchar",{ name:"OSVT_ANML_ID",nullable:true,length:27 })
public osvtAnmlId:string | null;

@Column("varchar",{ name:"OSVT_TAXI_ID",nullable:true,length:27 })
public osvtTaxiId:string | null;

@Column("varchar",{ name:"OSVT_NUMERO",nullable:true,length:10 })
public osvtNumero:string | null;

@Column("datetime",{ name:"OSVT_DT_ENTRADA",nullable:true })
public osvtDtEntrada:LocalDateTime | null;

@Column("datetime",{ name:"OSVT_DT_SAIDA",nullable:true })
public osvtDtSaida:LocalDateTime | null;

@Column("varchar",{ name:"OSVT_STATUS",nullable:true,length:25 })
public osvtStatus:string | null;

@Column("varchar",{ name:"OSVT_TIPO",nullable:true,length:25 })
public osvtTipo:string | null;

@Column("smallint",{ name:"OSVT_BUSCAR",nullable:true,default: () => "0", })
public osvtBuscar:number | null;

@Column("smallint",{ name:"OSVT_ENTREGAR",nullable:true,default: () => "0", })
public osvtEntregar:number | null;

@Column("varchar",{ name:"OSVT_FORMA_PAGAMENTO",nullable:true,length:15 })
public osvtFormaPagamento:string | null;

@Column("datetime",{ name:"OSVT_LASTUPDATE",nullable:true })
public osvtLastupdate:LocalDateTime | null;

@OneToMany(()=>VeteCirurgias,veteCirurgias=>veteCirurgias.cgiaOsvt)


public veteCirurgias:VeteCirurgias[];

@OneToMany(()=>VeteConsulta,veteConsulta=>veteConsulta.consOsvt)


public veteConsultas:VeteConsulta[];

@OneToMany(()=>VeteInternacao,veteInternacao=>veteInternacao.intrOsvt)


public veteInternacaos:VeteInternacao[];

@ManyToOne(()=>VeteAnimal,veteAnimal=>veteAnimal.veteOrdemDeServicos)
@JoinColumn([{ name: "OSVT_ANML_ID", referencedColumnName: "anmlId" },
])

public osvtAnml:VeteAnimal;

@ManyToOne(()=>FncrTabelaPreco,fncrTabelaPreco=>fncrTabelaPreco.veteOrdemDeServicos)
@JoinColumn([{ name: "OSVT_TBPC_ID", referencedColumnName: "tbpcId" },
])

public osvtTbpc:FncrTabelaPreco;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.veteOrdemDeServicos)
@JoinColumn([{ name: "OSVT_TAXI_ID", referencedColumnName: "prdtId" },
])

public osvtTaxi:CdstProduto;

@ManyToOne(()=>FncrFormaVencimento,fncrFormaVencimento=>fncrFormaVencimento.veteOrdemDeServicos)
@JoinColumn([{ name: "OSVT_FRVN_ID", referencedColumnName: "frvnId" },
])

public osvtFrvn:FncrFormaVencimento;

@ManyToOne(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.veteOrdemDeServicos)
@JoinColumn([{ name: "OSVT_CPMV_ID", referencedColumnName: "cpmvId" },
])

public osvtCpmv:EstqCapaMovimento;

@OneToMany(()=>VeteRetorno,veteRetorno=>veteRetorno.rtrnOsvt)


public veteRetornos:VeteRetorno[];

@RelationId((veteOrdemDeServico:VeteOrdemDeServico)=>veteOrdemDeServico.osvtAnml)
public osvtAnmlId2:string | null;

@RelationId((veteOrdemDeServico:VeteOrdemDeServico)=>veteOrdemDeServico.osvtTbpc)
public osvtTbpcId2:string | null;

@RelationId((veteOrdemDeServico:VeteOrdemDeServico)=>veteOrdemDeServico.osvtTaxi)
public osvtTaxiId2:string | null;

@RelationId((veteOrdemDeServico:VeteOrdemDeServico)=>veteOrdemDeServico.osvtFrvn)
public osvtFrvnId2:string | null;

@RelationId((veteOrdemDeServico:VeteOrdemDeServico)=>veteOrdemDeServico.osvtCpmv)
public osvtCpmvId2:string | null;

public constructor(init?: Partial<VeteOrdemDeServico>) {
    super();
    Object.assign(this, init);
}
}
