import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrPlanoConta} from './fncr-plano-conta'
import {FncrCaixaMovimento} from './fncr-caixa-movimento'
import {FncrHistoricoPadrao} from './fncr-historico-padrao'
import {CmnsPessoa} from './cmns-pessoa'
import {FncrParcelaBaixa} from './fncr-parcela-baixa'
import {FncrPlanoOrcamentario} from './fncr-plano-orcamentario'
import {FncrTitulo} from './fncr-titulo'


@Index("FK_CTCT_RS_CXIT",["cxitCtctId",],{  })
@Index("FK_CXIT_RS_CXIT",["cxitCxitId",],{  })
@Index("FK_CXMV_RS_CXIT",["cxitCxmvId",],{  })
@Index("FK_FNCR_RS_CXIT",["cxitFncrId",],{  })
@Index("FK_HSPD_RS_CXIT",["cxitHspdId",],{  })
@Index("FK_PESS_RS_CXIT",["cxitPessId",],{  })
@Index("PK_FNCR_CAIXA_ITEM",["cxitId",],{ unique:true })
@Entity("FNCR_CAIXA_ITEM")
export  class FncrCaixaItem extends BaseEntity {

@Column("varchar",{ primary:true,name:"CXIT_ID",length:27 })
public cxitId:string;

@Column("varchar",{ name:"CXIT_HSPD_ID",nullable:true,length:27 })
public cxitHspdId:string | null;

@Column("varchar",{ name:"CXIT_PESS_ID",nullable:true,length:27 })
public cxitPessId:string | null;

@Column("varchar",{ name:"CXIT_CTCT_ID",nullable:true,length:27 })
public cxitCtctId:string | null;

@Column("varchar",{ name:"CXIT_CXIT_ID",nullable:true,length:27 })
public cxitCxitId:string | null;

@Column("varchar",{ name:"CXIT_FNCR_ID",nullable:true,length:27 })
public cxitFncrId:string | null;

@Column("varchar",{ name:"CXIT_CXMV_ID",nullable:true,length:27 })
public cxitCxmvId:string | null;

@Column("varchar",{ name:"CXIT_NR_DOCUMENTO",nullable:true,length:20 })
public cxitNrDocumento:string | null;

@Column("varchar",{ name:"CXIT_TP_LANCAMENTO",nullable:true,length:10 })
public cxitTpLancamento:string | null;

@Column("varchar",{ name:"CXIT_STATUS",nullable:true,length:15 })
public cxitStatus:string | null;

@Column("varchar",{ name:"CXIT_ESPECIE",nullable:true,length:15 })
public cxitEspecie:string | null;

@Column("datetime",{ name:"CXIT_DT_LANCAMENTO",nullable:true })
public cxitDtLancamento:LocalDateTime | null;

@Column("money",{ name:"CXIT_VLR_LANCAMENTO",nullable:true,default: () => "0", })
public cxitVlrLancamento:number | null;

@Column("datetime",{ name:"CXIT_DT_MOVIMENTO",nullable:true })
public cxitDtMovimento:LocalDateTime | null;

@Column("datetime",{ name:"CXIT_MES_REFERENCIA",nullable:true })
public cxitMesReferencia:LocalDateTime | null;

@Column("datetime",{ name:"CXIT_DT_CONCILIACAO",nullable:true })
public cxitDtConciliacao:LocalDateTime | null;

@Column("money",{ name:"CXIT_VLR_CONCILIADO",nullable:true,default: () => "0", })
public cxitVlrConciliado:number | null;

@Column("varchar",{ name:"CXIT_HISTORICO_COMPLEMENTAR",nullable:true,length:128 })
public cxitHistoricoComplementar:string | null;

@Column("varchar",{ name:"CXIT_MD5",nullable:true,length:128 })
public cxitMd5:string | null;

@Column("datetime",{ name:"CXIT_LASTUPDATE",nullable:true })
public cxitLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrCaixaItems)
@JoinColumn([{ name: "CXIT_CTCT_ID", referencedColumnName: "plctId" },
])

public cxitCtct:FncrPlanoConta;

@ManyToOne(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.fncrCaixaItems)
@JoinColumn([{ name: "CXIT_CXIT_ID", referencedColumnName: "cxitId" },
])

public cxitCxit:FncrCaixaItem;

@OneToMany(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.cxitCxit)


public fncrCaixaItems:FncrCaixaItem[];

@ManyToOne(()=>FncrCaixaMovimento,fncrCaixaMovimento=>fncrCaixaMovimento.fncrCaixaItems)
@JoinColumn([{ name: "CXIT_CXMV_ID", referencedColumnName: "cxmvId" },
])

public cxitCxmv:FncrCaixaMovimento;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrCaixaItems2)
@JoinColumn([{ name: "CXIT_FNCR_ID", referencedColumnName: "plctId" },
])

public cxitFncr:FncrPlanoConta;

@ManyToOne(()=>FncrHistoricoPadrao,fncrHistoricoPadrao=>fncrHistoricoPadrao.fncrCaixaItems)
@JoinColumn([{ name: "CXIT_HSPD_ID", referencedColumnName: "hspdId" },
])

public cxitHspd:FncrHistoricoPadrao;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.fncrCaixaItems)
@JoinColumn([{ name: "CXIT_PESS_ID", referencedColumnName: "pessId" },
])

public cxitPess:CmnsPessoa;

@OneToMany(()=>FncrParcelaBaixa,fncrParcelaBaixa=>fncrParcelaBaixa.prbxCxit)


public fncrParcelaBaixas:FncrParcelaBaixa[];

@OneToMany(()=>FncrPlanoOrcamentario,fncrPlanoOrcamentario=>fncrPlanoOrcamentario.plorCxit)


public fncrPlanoOrcamentarios:FncrPlanoOrcamentario[];

@OneToMany(()=>FncrTitulo,fncrTitulo=>fncrTitulo.ttlsCxit)


public fncrTitulos:FncrTitulo[];

@RelationId((fncrCaixaItem:FncrCaixaItem)=>fncrCaixaItem.cxitCtct)
public cxitCtctId2:string | null;

@RelationId((fncrCaixaItem:FncrCaixaItem)=>fncrCaixaItem.cxitCxit)
public cxitCxitId2:string | null;

@RelationId((fncrCaixaItem:FncrCaixaItem)=>fncrCaixaItem.cxitCxmv)
public cxitCxmvId2:string | null;

@RelationId((fncrCaixaItem:FncrCaixaItem)=>fncrCaixaItem.cxitFncr)
public cxitFncrId2:string | null;

@RelationId((fncrCaixaItem:FncrCaixaItem)=>fncrCaixaItem.cxitHspd)
public cxitHspdId2:string | null;

@RelationId((fncrCaixaItem:FncrCaixaItem)=>fncrCaixaItem.cxitPess)
public cxitPessId2:string | null;

public constructor(init?: Partial<FncrCaixaItem>) {
    super();
    Object.assign(this, init);
}
}
