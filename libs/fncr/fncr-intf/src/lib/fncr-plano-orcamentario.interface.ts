import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FncrPlanoConta} from './fncr-plano-conta'
import {FncrCaixaItem} from './fncr-caixa-item'


@Index("FK_CTCT_RS_PLOR",["plorCtctId",],{  })
@Index("FK_CXIT_RS_PLOR",["plorCxitId",],{  })
@Index("FK_FNCR_RS_PLOR",["plorFncrId",],{  })
@Index("PK_FNCR_PLANO_ORCAMENTARIO",["plorId",],{ unique:true })
@Entity("FNCR_PLANO_ORCAMENTARIO")
export  class FncrPlanoOrcamentario extends BaseEntity {

@Column("varchar",{ primary:true,name:"PLOR_ID",length:27 })
public plorId:string;

@Column("varchar",{ name:"PLOR_CTCT_ID",nullable:true,length:27 })
public plorCtctId:string | null;

@Column("varchar",{ name:"PLOR_CXIT_ID",nullable:true,length:27 })
public plorCxitId:string | null;

@Column("varchar",{ name:"PLOR_FNCR_ID",nullable:true,length:27 })
public plorFncrId:string | null;

@Column("datetime",{ name:"PLOR_REFERENCIA",nullable:true })
public plorReferencia:LocalDateTime | null;

@Column("money",{ name:"PLOR_VALOR",nullable:true,default: () => "0", })
public plorValor:number | null;

@Column("varchar",{ name:"PLOR_TIPO",nullable:true,length:10 })
public plorTipo:string | null;

@Column("datetime",{ name:"PLOR_LASTUPDATE",nullable:true })
public plorLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrPlanoOrcamentarios)
@JoinColumn([{ name: "PLOR_CTCT_ID", referencedColumnName: "plctId" },
])

public plorCtct:FncrPlanoConta;

@ManyToOne(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.fncrPlanoOrcamentarios)
@JoinColumn([{ name: "PLOR_CXIT_ID", referencedColumnName: "cxitId" },
])

public plorCxit:FncrCaixaItem;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrPlanoOrcamentarios2)
@JoinColumn([{ name: "PLOR_FNCR_ID", referencedColumnName: "plctId" },
])

public plorFncr:FncrPlanoConta;

@RelationId((fncrPlanoOrcamentario:FncrPlanoOrcamentario)=>fncrPlanoOrcamentario.plorCtct)
public plorCtctId2:string | null;

@RelationId((fncrPlanoOrcamentario:FncrPlanoOrcamentario)=>fncrPlanoOrcamentario.plorCxit)
public plorCxitId2:string | null;

@RelationId((fncrPlanoOrcamentario:FncrPlanoOrcamentario)=>fncrPlanoOrcamentario.plorFncr)
public plorFncrId2:string | null;

public constructor(init?: Partial<FncrPlanoOrcamentario>) {
    super();
    Object.assign(this, init);
}
}
