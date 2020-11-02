import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {EstqCapaMovimento} from './estq-capa-movimento'
import {FncrPlanoConta} from './fncr-plano-conta'
import {EstqLoteValidade} from './estq-lote-validade'
import {CdstProduto} from './cdst-produto'
import {CdstUnidadeMedida} from './cdst-unidade-medida'
import {FsclDocumentoItem} from './fscl-documento-item'


@Index("FK_CPMV_RS_ITMV",["itmvCpmvId",],{  })
@Index("FK_CTCT_RS_ITMV",["itmvCtctId",],{  })
@Index("FK_FNCR_RS_ITMV",["itmvFncrId",],{  })
@Index("FK_LTVL_RS_ITMV",["itmvLtvlId",],{  })
@Index("FK_PRDT_RS_ITMV",["itmvPrdtId",],{  })
@Index("FK_UNID_RS_ITMV",["itmvUnidId",],{  })
@Index("PK_ESTQ_ITEM_MOVIMENTO",["itmvId",],{ unique:true })
@Entity("ESTQ_ITEM_MOVIMENTO")
export  class EstqItemMovimento extends BaseEntity {

@Column("varchar",{ primary:true,name:"ITMV_ID",length:27 })
public itmvId:string;

@Column("varchar",{ name:"ITMV_CTCT_ID",nullable:true,length:27 })
public itmvCtctId:string | null;

@Column("varchar",{ name:"ITMV_PRDT_ID",nullable:true,length:27 })
public itmvPrdtId:string | null;

@Column("varchar",{ name:"ITMV_FNCR_ID",nullable:true,length:27 })
public itmvFncrId:string | null;

@Column("varchar",{ name:"ITMV_UNID_ID",nullable:true,length:27 })
public itmvUnidId:string | null;

@Column("varchar",{ name:"ITMV_CPMV_ID",nullable:true,length:27 })
public itmvCpmvId:string | null;

@Column("varchar",{ name:"ITMV_LTVL_ID",nullable:true,length:27 })
public itmvLtvlId:string | null;

@Column("datetime",{ name:"ITMV_DT_LANCAMENTO",nullable:true })
public itmvDtLancamento:LocalDateTime | null;

@Column("datetime",{ name:"ITMV_DT_MOVIMENTO",nullable:true })
public itmvDtMovimento:LocalDateTime | null;

@Column("varchar",{ name:"ITMV_PRDT_CODIGO",nullable:true,length:20 })
public itmvPrdtCodigo:string | null;

@Column("varchar",{ name:"ITMV_PRDT_NOME",nullable:true,length:64 })
public itmvPrdtNome:string | null;

@Column("varchar",{ name:"ITMV_CST",nullable:true,length:5 })
public itmvCst:string | null;

@Column("varchar",{ name:"ITMV_CFOP",nullable:true,length:5 })
public itmvCfop:string | null;

@Column("money",{ name:"ITMV_VLR_BASE_ICMS",nullable:true,default: () => "0", })
public itmvVlrBaseIcms:number | null;

@Column("money",{ name:"ITMV_VLR_ICMS",nullable:true,default: () => "0", })
public itmvVlrIcms:number | null;

@Column("numeric",{ name:"ITMV_ALIQUOTA",nullable:true,precision:18,scale:4 })
public itmvAliquota:number | null;

@Column("varchar",{ name:"ITMV_UNID_SIGLA",nullable:true,length:5 })
public itmvUnidSigla:string | null;

@Column("numeric",{ name:"ITMV_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public itmvQuantidade:number | null;

@Column("money",{ name:"ITMV_VALOR_UNITARIO",nullable:true,default: () => "0", })
public itmvValorUnitario:number | null;

@Column("numeric",{ name:"ITMV_DESCONTO",nullable:true,precision:18,scale:4 })
public itmvDesconto:number | null;

@Column("money",{ name:"ITMV_VLR_TOTAL",nullable:true,default: () => "0", })
public itmvVlrTotal:number | null;

@Column("varchar",{ name:"ITMV_TP_DOCUMENTO",nullable:true,length:25 })
public itmvTpDocumento:string | null;

@Column("varchar",{ name:"ITMV_TP_MOVIMENTO",nullable:true,length:10 })
public itmvTpMovimento:string | null;

@Column("varchar",{ name:"ITMV_TRANSACAO",nullable:true,length:25 })
public itmvTransacao:string | null;

@Column("varchar",{ name:"ITMV_OBSERVACAO",nullable:true,length:256 })
public itmvObservacao:string | null;

@Column("varchar",{ name:"ITMV_STATUS",nullable:true,length:15 })
public itmvStatus:string | null;

@Column("datetime",{ name:"ITMV_LASTUPDATE",nullable:true })
public itmvLastupdate:LocalDateTimelDateTime | null;

@ManyToOne(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.estqItemMovimentos)
@JoinColumn([{ name: "ITMV_CPMV_ID", referencedColumnName: "cpmvId" },
])

public itmvCpmv:EstqCapaMovimento;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.estqItemMovimentos)
@JoinColumn([{ name: "ITMV_CTCT_ID", referencedColumnName: "plctId" },
])

public itmvCtct:FncrPlanoConta;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.estqItemMovimentos2)
@JoinColumn([{ name: "ITMV_FNCR_ID", referencedColumnName: "plctId" },
])

public itmvFncr:FncrPlanoConta;

@ManyToOne(()=>EstqLoteValidade,estqLoteValidade=>estqLoteValidade.estqItemMovimentos)
@JoinColumn([{ name: "ITMV_LTVL_ID", referencedColumnName: "ltvlId" },
])

public itmvLtvl:EstqLoteValidade;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.estqItemMovimentos)
@JoinColumn([{ name: "ITMV_PRDT_ID", referencedColumnName: "prdtId" },
])

public itmvPrdt:CdstProduto;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.estqItemMovimentos)
@JoinColumn([{ name: "ITMV_UNID_ID", referencedColumnName: "unidId" },
])

public itmvUnid:CdstUnidadeMedida;

@OneToMany(()=>FsclDocumentoItem,fsclDocumentoItem=>fsclDocumentoItem.dcitItmv)


public fsclDocumentoItems:FsclDocumentoItem[];

@RelationId((estqItemMovimento:EstqItemMovimento)=>estqItemMovimento.itmvCpmv)
public itmvCpmvId2:string | null;

@RelationId((estqItemMovimento:EstqItemMovimento)=>estqItemMovimento.itmvCtct)
public itmvCtctId2:string | null;

@RelationId((estqItemMovimento:EstqItemMovimento)=>estqItemMovimento.itmvFncr)
public itmvFncrId2:string | null;

@RelationId((estqItemMovimento:EstqItemMovimento)=>estqItemMovimento.itmvLtvl)
public itmvLtvlId2:string | null;

@RelationId((estqItemMovimento:EstqItemMovimento)=>estqItemMovimento.itmvPrdt)
public itmvPrdtId2:string | null;

@RelationId((estqItemMovimento:EstqItemMovimento)=>estqItemMovimento.itmvUnid)
public itmvUnidId2:string | null;

public constructor(init?: Partial<EstqItemMovimento>) {
    super();
    Object.assign(this, init);
}
}
