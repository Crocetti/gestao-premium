import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {EstqItemMovimento} from './estq-item-movimento'
import {EstqSaldoCentroCusto} from './estq-saldo-centro-custo'
import {FncrCaixaItem} from './fncr-caixa-item'
import {FncrPlanoContaSaldo} from './fncr-plano-conta-saldo'
import {FncrPlanoOrcamentario} from './fncr-plano-orcamentario'
import {FncrTitulo} from './fncr-titulo'
import {FncrTituloCentroCusto} from './fncr-titulo-centro-custo'


@Index("FK_PLCT_RS_PLCT",["plctPlctId",],{  })
@Index("PK_FNCR_PLANO_CONTA",["plctId",],{ unique:true })
@Entity("FNCR_PLANO_CONTA")
export  class FncrPlanoConta extends BaseEntity {

@Column("varchar",{ primary:true,name:"PLCT_ID",length:27 })
public plctId:string;

@Column("varchar",{ name:"PLCT_PLCT_ID",nullable:true,length:27 })
public plctPlctId:string | null;

@Column("varchar",{ name:"PLCT_CONTA",nullable:true,length:24 })
public plctConta:string | null;

@Column("varchar",{ name:"PLCT_NOME",nullable:true,length:128 })
public plctNome:string | null;

@Column("varchar",{ name:"PLCT_REDUZIDA",nullable:true,length:10 })
public plctReduzida:string | null;

@Column("varchar",{ name:"PLCT_TP_LANCAMENTO",nullable:true,length:10 })
public plctTpLancamento:string | null;

@Column("varchar",{ name:"PLCT_TP_CONTA",nullable:true,length:15 })
public plctTpConta:string | null;

@Column("varchar",{ name:"PLCT_LOCAL_CONTA",length:25 })
public plctLocalConta:string;

@Column("int",{ name:"PLCT_NIVEL",nullable:true })
public plctNivel:number | null;

@Column("smallint",{ name:"PLCT_ATIVO",nullable:true,default: () => "0", })
public plctAtivo:number | null;

@Column("datetime",{ name:"PLCT_LASTUPDATE",nullable:true })
public plctLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqItemMovimento,estqItemMovimento=>estqItemMovimento.itmvCtct)


public estqItemMovimentos:EstqItemMovimento[];

@OneToMany(()=>EstqItemMovimento,estqItemMovimento=>estqItemMovimento.itmvFncr)


public estqItemMovimentos2:EstqItemMovimento[];

@OneToMany(()=>EstqSaldoCentroCusto,estqSaldoCentroCusto=>estqSaldoCentroCusto.sdccCtct)


public estqSaldoCentroCustos:EstqSaldoCentroCusto[];

@OneToMany(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.cxitCtct)


public fncrCaixaItems:FncrCaixaItem[];

@OneToMany(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.cxitFncr)


public fncrCaixaItems2:FncrCaixaItem[];

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrPlanoContas)
@JoinColumn([{ name: "PLCT_PLCT_ID", referencedColumnName: "plctId" },
])

public plctPlct:FncrPlanoConta;

@OneToMany(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.plctPlct)


public fncrPlanoContas:FncrPlanoConta[];

@OneToMany(()=>FncrPlanoContaSaldo,fncrPlanoContaSaldo=>fncrPlanoContaSaldo.pcsdPlct)


public fncrPlanoContaSaldos:FncrPlanoContaSaldo[];

@OneToMany(()=>FncrPlanoOrcamentario,fncrPlanoOrcamentario=>fncrPlanoOrcamentario.plorCtct)


public fncrPlanoOrcamentarios:FncrPlanoOrcamentario[];

@OneToMany(()=>FncrPlanoOrcamentario,fncrPlanoOrcamentario=>fncrPlanoOrcamentario.plorFncr)


public fncrPlanoOrcamentarios2:FncrPlanoOrcamentario[];

@OneToMany(()=>FncrTitulo,fncrTitulo=>fncrTitulo.ttlsFncr)


public fncrTitulos:FncrTitulo[];

@OneToMany(()=>FncrTituloCentroCusto,fncrTituloCentroCusto=>fncrTituloCentroCusto.prpcCtct)


public fncrTituloCentroCustos:FncrTituloCentroCusto[];

@RelationId((fncrPlanoConta:FncrPlanoConta)=>fncrPlanoConta.plctPlct)
public plctPlctId2:string | null;

public constructor(init?: Partial<FncrPlanoConta>) {
    super();
    Object.assign(this, init);
}
}
