import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {EstqLoteValidade} from './estq-lote-validade'
import {CdstProduto} from './cdst-produto'
import {EstqSaldoCentroCusto} from './estq-saldo-centro-custo'


@Index("FK_LTVL_RS_PRSD",["prsdLtvlId",],{  })
@Index("FK_PRDT_RS_PRSD",["prsdPrdtId",],{  })
@Index("PK_ESTQ_PRODUTO_SALDO",["prsdId",],{ unique:true })
@Entity("ESTQ_PRODUTO_SALDO")
export  class EstqProdutoSaldo extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRSD_ID",length:27 })
public prsdId:string;

@Column("varchar",{ name:"PRSD_LTVL_ID",nullable:true,length:27 })
public prsdLtvlId:string | null;

@Column("varchar",{ name:"PRSD_PRDT_ID",nullable:true,length:27 })
public prsdPrdtId:string | null;

@Column("datetime",{ name:"PRSD_MES_REFERENCIA",nullable:true })
public prsdMesReferencia:LocalDateTime | null;

@Column("numeric",{ name:"PRSD_SALDO_INICIAL",nullable:true,precision:18,scale:4,default: () => "0", })
public prsdSaldoInicial:number | null;

@Column("numeric",{ name:"PRSD_QTD_ENTRADAS",nullable:true,precision:18,scale:4,default: () => "0", })
public prsdQtdEntradas:number | null;

@Column("numeric",{ name:"PRSD_QTD_SAIDAS",nullable:true,precision:18,scale:4,default: () => "0", })
public prsdQtdSaidas:number | null;

@Column("numeric",{ name:"PRSD_EM_CAUTELA",nullable:true,precision:18,scale:4,default: () => "0", })
public prsdEmCautela:number | null;

@Column("numeric",{ name:"PRSD_SALDO_FINAL",nullable:true,precision:18,scale:4,default: () => "0", })
public prsdSaldoFinal:number | null;

@Column("datetime",{ name:"PRSD_LASTUPDATE",nullable:true })
public prsdLastupdate:LocalDateTime | null;

@ManyToOne(()=>EstqLoteValidade,estqLoteValidade=>estqLoteValidade.estqProdutoSaldos)
@JoinColumn([{ name: "PRSD_LTVL_ID", referencedColumnName: "ltvlId" },
])

public prsdLtvl:EstqLoteValidade;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.estqProdutoSaldos)
@JoinColumn([{ name: "PRSD_PRDT_ID", referencedColumnName: "prdtId" },
])

public prsdPrdt:CdstProduto;

@OneToMany(()=>EstqSaldoCentroCusto,estqSaldoCentroCusto=>estqSaldoCentroCusto.sdccPrsd)


public estqSaldoCentroCustos:EstqSaldoCentroCusto[];

@RelationId((estqProdutoSaldo:EstqProdutoSaldo)=>estqProdutoSaldo.prsdLtvl)
public prsdLtvlId2:string | null;

@RelationId((estqProdutoSaldo:EstqProdutoSaldo)=>estqProdutoSaldo.prsdPrdt)
public prsdPrdtId2:string | null;

public constructor(init?: Partial<EstqProdutoSaldo>) {
    super();
    Object.assign(this, init);
}
}
