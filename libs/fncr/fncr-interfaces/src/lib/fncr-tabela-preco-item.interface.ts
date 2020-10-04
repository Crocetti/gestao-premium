import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CdstProduto} from './cdst-produto'
import {FncrTabelaPreco} from './fncr-tabela-preco'


@Index("FK_PRDT_RS_TPIT",["tpitPrdtId",],{  })
@Index("FK_TBPC_RS_TPIT",["tpitTbpcId",],{  })
@Index("PK_FNCR_TABELA_PRECO_ITEM",["tpitId",],{ unique:true })
@Entity("FNCR_TABELA_PRECO_ITEM")
export  class FncrTabelaPrecoItem extends BaseEntity {

@Column("varchar",{ primary:true,name:"TPIT_ID",length:27 })
public tpitId:string;

@Column("varchar",{ name:"TPIT_TBPC_ID",nullable:true,length:27 })
public tpitTbpcId:string | null;

@Column("varchar",{ name:"TPIT_PRDT_ID",nullable:true,length:27 })
public tpitPrdtId:string | null;

@Column("money",{ name:"TPIT_CUSTO_VENDA",nullable:true,default: () => "0", })
public tpitCustoVenda:number | null;

@Column("money",{ name:"TPIT_PRECO_VENDA",nullable:true,default: () => "0", })
public tpitPrecoVenda:number | null;

@Column("numeric",{ name:"TPIT_MARKUP",nullable:true,precision:18,scale:4 })
public tpitMarkup:number | null;

@Column("varchar",{ name:"TPIT_TIPOPRODUTO",nullable:true,length:20 })
public tpitTipoproduto:string | null;

@Column("datetime",{ name:"TPIT_LASTUPDATE",nullable:true })
public tpitLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.fncrTabelaPrecoItems)
@JoinColumn([{ name: "TPIT_PRDT_ID", referencedColumnName: "prdtId" },
])

public tpitPrdt:CdstProduto;

@ManyToOne(()=>FncrTabelaPreco,fncrTabelaPreco=>fncrTabelaPreco.fncrTabelaPrecoItems)
@JoinColumn([{ name: "TPIT_TBPC_ID", referencedColumnName: "tbpcId" },
])

public tpitTbpc:FncrTabelaPreco;

@RelationId((fncrTabelaPrecoItem:FncrTabelaPrecoItem)=>fncrTabelaPrecoItem.tpitPrdt)
public tpitPrdtId2:string | null;

@RelationId((fncrTabelaPrecoItem:FncrTabelaPrecoItem)=>fncrTabelaPrecoItem.tpitTbpc)
public tpitTbpcId2:string | null;

public constructor(init?: Partial<FncrTabelaPrecoItem>) {
    super();
    Object.assign(this, init);
}
}
