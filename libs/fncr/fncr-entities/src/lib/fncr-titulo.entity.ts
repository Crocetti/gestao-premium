import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrNotaFiscalTitulo} from './fncr-nota-fiscal-titulo'
import {FncrParcela} from './fncr-parcela'
import {CdstCliente} from './cdst-cliente'
import {FncrCaixaItem} from './fncr-caixa-item'
import {FncrPlanoConta} from './fncr-plano-conta'
import {CdstFornecedor} from './cdst-fornecedor'
import {FncrFormaVencimento} from './fncr-forma-vencimento'
import {FncrTituloCentroCusto} from './fncr-titulo-centro-custo'


@Index("FK_CLNT_RS_TTLS",["ttlsClntId",],{  })
@Index("FK_CXIT_RS_TTLS",["ttlsCxitId",],{  })
@Index("FK_FNCR_RS_TTLS",["ttlsFncrId",],{  })
@Index("FK_FRNC_RS_TTLS",["ttlsFrncId",],{  })
@Index("FK_FRVN_RS_TTLS",["ttlsFrvnId",],{  })
@Index("PK_FNCR_TITULO",["ttlsId",],{ unique:true })
@Entity("FNCR_TITULO")
export  class FncrTitulo extends BaseEntity {

@Column("varchar",{ primary:true,name:"TTLS_ID",length:27 })
public ttlsId:string;

@Column("varchar",{ name:"TTLS_FRVN_ID",nullable:true,length:27 })
public ttlsFrvnId:string | null;

@Column("varchar",{ name:"TTLS_FRNC_ID",nullable:true,length:27 })
public ttlsFrncId:string | null;

@Column("varchar",{ name:"TTLS_CXIT_ID",nullable:true,length:27 })
public ttlsCxitId:string | null;

@Column("varchar",{ name:"TTLS_FNCR_ID",nullable:true,length:27 })
public ttlsFncrId:string | null;

@Column("varchar",{ name:"TTLS_CLNT_ID",nullable:true,length:27 })
public ttlsClntId:string | null;

@Column("varchar",{ name:"TTLS_NR_DOCUMENTO",nullable:true,length:25 })
public ttlsNrDocumento:string | null;

@Column("datetime",{ name:"TTLS_DT_EMISSAO",nullable:true })
public ttlsDtEmissao:LocalDateTime | null;

@Column("money",{ name:"TTLS_VLR_DOCUMENTO",nullable:true,default: () => "0", })
public ttlsVlrDocumento:number | null;

@Column("int",{ name:"TTLS_QTD_PARCELAS" })
public ttlsQtdParcelas:number;

@Column("varchar",{ name:"TTLS_TIPO",nullable:true,length:20 })
public ttlsTipo:string | null;

@Column("varchar",{ name:"TTLS_CLASSIFICACAO",nullable:true,length:10 })
public ttlsClassificacao:string | null;

@Column("numeric",{ name:"TTLS_TAXA_JUROS",nullable:true,precision:18,scale:4 })
public ttlsTaxaJuros:number | null;

@Column("numeric",{ name:"TTLS_MULTA",nullable:true,precision:18,scale:4 })
public ttlsMulta:number | null;

@Column("datetime",{ name:"TTLS_LASTUPDATE",nullable:true })
public ttlsLastupdate:LocalDateTime | null;

@OneToMany(()=>FncrNotaFiscalTitulo,fncrNotaFiscalTitulo=>fncrNotaFiscalTitulo.cmttTtls)


public fncrNotaFiscalTitulos:FncrNotaFiscalTitulo[];

@OneToMany(()=>FncrParcela,fncrParcela=>fncrParcela.prclTtls)


public fncrParcelas:FncrParcela[];

@ManyToOne(()=>CdstCliente,cdstCliente=>cdstCliente.fncrTitulos)
@JoinColumn([{ name: "TTLS_CLNT_ID", referencedColumnName: "clntId" },
])

public ttlsClnt:CdstCliente;

@ManyToOne(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.fncrTitulos)
@JoinColumn([{ name: "TTLS_CXIT_ID", referencedColumnName: "cxitId" },
])

public ttlsCxit:FncrCaixaItem;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrTitulos)
@JoinColumn([{ name: "TTLS_FNCR_ID", referencedColumnName: "plctId" },
])

public ttlsFncr:FncrPlanoConta;

@ManyToOne(()=>CdstFornecedor,cdstFornecedor=>cdstFornecedor.fncrTitulos)
@JoinColumn([{ name: "TTLS_FRNC_ID", referencedColumnName: "frncId" },
])

public ttlsFrnc:CdstFornecedor;

@ManyToOne(()=>FncrFormaVencimento,fncrFormaVencimento=>fncrFormaVencimento.fncrTitulos)
@JoinColumn([{ name: "TTLS_FRVN_ID", referencedColumnName: "frvnId" },
])

public ttlsFrvn:FncrFormaVencimento;

@OneToMany(()=>FncrTituloCentroCusto,fncrTituloCentroCusto=>fncrTituloCentroCusto.ttccTtls)


public fncrTituloCentroCustos:FncrTituloCentroCusto[];

@RelationId((fncrTitulo:FncrTitulo)=>fncrTitulo.ttlsClnt)
public ttlsClntId2:string | null;

@RelationId((fncrTitulo:FncrTitulo)=>fncrTitulo.ttlsCxit)
public ttlsCxitId2:string | null;

@RelationId((fncrTitulo:FncrTitulo)=>fncrTitulo.ttlsFncr)
public ttlsFncrId2:string | null;

@RelationId((fncrTitulo:FncrTitulo)=>fncrTitulo.ttlsFrnc)
public ttlsFrncId2:string | null;

@RelationId((fncrTitulo:FncrTitulo)=>fncrTitulo.ttlsFrvn)
public ttlsFrvnId2:string | null;

public constructor(init?: Partial<FncrTitulo>) {
    super();
    Object.assign(this, init);
}
}
