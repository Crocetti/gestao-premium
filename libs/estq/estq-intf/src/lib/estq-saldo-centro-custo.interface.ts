import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FncrPlanoConta} from './fncr-plano-conta'
import {EstqProdutoSaldo} from './estq-produto-saldo'


@Index("FK_CTCT_RS_SDCC",["sdccCtctId",],{  })
@Index("FK_PRSD_RS_SDCC",["sdccPrsdId",],{  })
@Index("PK_ESTQ_SALDO_CENTRO_CUSTO",["sdccId",],{ unique:true })
@Entity("ESTQ_SALDO_CENTRO_CUSTO")
export  class EstqSaldoCentroCusto extends BaseEntity {

@Column("varchar",{ primary:true,name:"SDCC_ID",length:27 })
public sdccId:string;

@Column("varchar",{ name:"SDCC_PRSD_ID",nullable:true,length:27 })
public sdccPrsdId:string | null;

@Column("varchar",{ name:"SDCC_CTCT_ID",nullable:true,length:27 })
public sdccCtctId:string | null;

@Column("datetime",{ name:"SDCC_MES_REFERENCIA",nullable:true })
public sdccMesReferencia:LocalDateTime | null;

@Column("numeric",{ name:"SDCC_INICIAL",nullable:true,precision:18,scale:4,default: () => "0", })
public sdccInicial:number | null;

@Column("numeric",{ name:"SDCC_ENTRADAS",nullable:true,precision:18,scale:4,default: () => "0", })
public sdccEntradas:number | null;

@Column("numeric",{ name:"SDCC_SAIDAS",nullable:true,precision:18,scale:4,default: () => "0", })
public sdccSaidas:number | null;

@Column("numeric",{ name:"SDCC_CAUTELA",nullable:true,precision:18,scale:4,default: () => "0", })
public sdccCautela:number | null;

@Column("numeric",{ name:"SDCC_RESERVA",nullable:true,precision:18,scale:4,default: () => "0", })
public sdccReserva:number | null;

@Column("numeric",{ name:"SDCC_FINAL",nullable:true,precision:18,scale:4,default: () => "0", })
public sdccFinal:number | null;

@Column("datetime",{ name:"SDCC_LASTUPDATE",nullable:true })
public sdccLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.estqSaldoCentroCustos)
@JoinColumn([{ name: "SDCC_CTCT_ID", referencedColumnName: "plctId" },
])

public sdccCtct:FncrPlanoConta;

@ManyToOne(()=>EstqProdutoSaldo,estqProdutoSaldo=>estqProdutoSaldo.estqSaldoCentroCustos)
@JoinColumn([{ name: "SDCC_PRSD_ID", referencedColumnName: "prsdId" },
])

public sdccPrsd:EstqProdutoSaldo;

@RelationId((estqSaldoCentroCusto:EstqSaldoCentroCusto)=>estqSaldoCentroCusto.sdccCtct)
public sdccCtctId2:string | null;

@RelationId((estqSaldoCentroCusto:EstqSaldoCentroCusto)=>estqSaldoCentroCusto.sdccPrsd)
public sdccPrsdId2:string | null;

public constructor(init?: Partial<EstqSaldoCentroCusto>) {
    super();
    Object.assign(this, init);
}
}
