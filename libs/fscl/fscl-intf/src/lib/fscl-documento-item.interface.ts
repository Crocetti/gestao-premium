import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FsclCfop} from './fscl-cfop'
import {FsclDocumento} from './fscl-documento'
import {EstqItemMovimento} from './estq-item-movimento'
import {FsclItemFatoFiscal} from './fscl-item-fato-fiscal'


@Index("FK_CFOP_RS_DCIT",["dcitCfopId",],{  })
@Index("FK_DCMT_RS_DCIT",["dcitDcmtId",],{  })
@Index("FK_ITMV_RS_DCIT",["dcitItmvId",],{  })
@Index("PK_FSCL_DOCUMENTO_ITEM",["dcitId",],{ unique:true })
@Entity("FSCL_DOCUMENTO_ITEM")
export  class FsclDocumentoItem extends BaseEntity {

@Column("varchar",{ primary:true,name:"DCIT_ID",length:27 })
public dcitId:string;

@Column("varchar",{ name:"DCIT_CFOP_ID",nullable:true,length:27 })
public dcitCfopId:string | null;

@Column("varchar",{ name:"DCIT_DCMT_ID",nullable:true,length:27 })
public dcitDcmtId:string | null;

@Column("varchar",{ name:"DCIT_ITMV_ID",nullable:true,length:27 })
public dcitItmvId:string | null;

@Column("datetime",{ name:"DCIT_DT_LANCAMENTO",nullable:true })
public dcitDtLancamento:LocalDateTime | null;

@Column("datetime",{ name:"DCIT_DT_MOVIMENTO",nullable:true })
public dcitDtMovimento:LocalDateTime | null;

@Column("varchar",{ name:"DCIT_PRDT_NOME",nullable:true,length:64 })
public dcitPrdtNome:string | null;

@Column("varchar",{ name:"DCIT_PRDT_CODIGO_BARRA",nullable:true,length:20 })
public dcitPrdtCodigoBarra:string | null;

@Column("varchar",{ name:"DCIT_PRDT_REFERENCIA",nullable:true,length:40 })
public dcitPrdtReferencia:string | null;

@Column("varchar",{ name:"DCIT_UNID_SIGLA",nullable:true,length:5 })
public dcitUnidSigla:string | null;

@Column("numeric",{ name:"DCIT_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public dcitQuantidade:number | null;

@Column("money",{ name:"DCIT_PRECO_UNITARIO",nullable:true,default: () => "0", })
public dcitPrecoUnitario:number | null;

@Column("datetime",{ name:"DCIT_LASTUPDAATE",nullable:true })
public dcitLastupdaate:LocalDateTime | null;

@ManyToOne(()=>FsclCfop,fsclCfop=>fsclCfop.fsclDocumentoItems)
@JoinColumn([{ name: "DCIT_CFOP_ID", referencedColumnName: "cfopId" },
])

public dcitCfop:FsclCfop;

@ManyToOne(()=>FsclDocumento,fsclDocumento=>fsclDocumento.fsclDocumentoItems)
@JoinColumn([{ name: "DCIT_DCMT_ID", referencedColumnName: "dcmtId" },
])

public dcitDcmt:FsclDocumento;

@ManyToOne(()=>EstqItemMovimento,estqItemMovimento=>estqItemMovimento.fsclDocumentoItems)
@JoinColumn([{ name: "DCIT_ITMV_ID", referencedColumnName: "itmvId" },
])

public dcitItmv:EstqItemMovimento;

@OneToMany(()=>FsclItemFatoFiscal,fsclItemFatoFiscal=>fsclItemFatoFiscal.itffDcit)


public fsclItemFatoFiscals:FsclItemFatoFiscal[];

@RelationId((fsclDocumentoItem:FsclDocumentoItem)=>fsclDocumentoItem.dcitCfop)
public dcitCfopId2:string | null;

@RelationId((fsclDocumentoItem:FsclDocumentoItem)=>fsclDocumentoItem.dcitDcmt)
public dcitDcmtId2:string | null;

@RelationId((fsclDocumentoItem:FsclDocumentoItem)=>fsclDocumentoItem.dcitItmv)
public dcitItmvId2:string | null;

public constructor(init?: Partial<FsclDocumentoItem>) {
    super();
    Object.assign(this, init);
}
}
