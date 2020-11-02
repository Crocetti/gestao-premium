import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CdstProduto} from './cdst-produto'
import {CdstUnidadeMedida} from './cdst-unidade-medida'


@Index("FK_COMP_RS_PRCP",["prcpCompId",],{  })
@Index("FK_PRDT_RS_PRCP",["prcpPrdtId",],{  })
@Index("FK_UNID_RS_PRCP",["prcpUnidId",],{  })
@Index("PK_CDST_PRODUTO_COMPOSICAO",["pdcpId",],{ unique:true })
@Entity("CDST_PRODUTO_COMPOSICAO")
export  class CdstProdutoComposicao extends BaseEntity {

@Column("varchar",{ primary:true,name:"PDCP_ID",length:27 })
public pdcpId:string;

@Column("varchar",{ name:"PRCP_PRDT_ID",nullable:true,length:27 })
public prcpPrdtId:string | null;

@Column("varchar",{ name:"PRCP_COMP_ID",nullable:true,length:27 })
public prcpCompId:string | null;

@Column("varchar",{ name:"PRCP_UNID_ID",nullable:true,length:27 })
public prcpUnidId:string | null;

@Column("numeric",{ name:"PDCP_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public pdcpQuantidade:number | null;

@Column("smallint",{ name:"PDCP_VER_NA_OS",nullable:true,default: () => "0", })
public pdcpVerNaOs:number | null;

@Column("smallint",{ name:"PDCP_COMPOE_PRECO",nullable:true,default: () => "0", })
public pdcpCompoePreco:number | null;

@Column("datetime",{ name:"PDCP_LASTUPDATE",nullable:true })
public pdcpLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.cdstProdutoComposicaos)
@JoinColumn([{ name: "PRCP_COMP_ID", referencedColumnName: "prdtId" },
])

public prcpComp:CdstProduto;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.cdstProdutoComposicaos2)
@JoinColumn([{ name: "PRCP_PRDT_ID", referencedColumnName: "prdtId" },
])

public prcpPrdt:CdstProduto;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.cdstProdutoComposicaos)
@JoinColumn([{ name: "PRCP_UNID_ID", referencedColumnName: "unidId" },
])

public prcpUnid:CdstUnidadeMedida;

@RelationId((cdstProdutoComposicao:CdstProdutoComposicao)=>cdstProdutoComposicao.prcpComp)
public prcpCompId2:string | null;

@RelationId((cdstProdutoComposicao:CdstProdutoComposicao)=>cdstProdutoComposicao.prcpPrdt)
public prcpPrdtId2:string | null;

@RelationId((cdstProdutoComposicao:CdstProdutoComposicao)=>cdstProdutoComposicao.prcpUnid)
public prcpUnidId2:string | null;

public constructor(init?: Partial<CdstProdutoComposicao>) {
    super();
    Object.assign(this, init);
}
}
