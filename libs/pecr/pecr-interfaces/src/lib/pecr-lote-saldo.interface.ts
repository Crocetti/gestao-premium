import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CdstProduto} from './cdst-produto'
import {PecrLote} from './pecr-lote'


@Index("FK_LOTE_RS_LTSD",["ltsdLoteId",],{  })
@Index("FK_PRDT_RS_LTSD",["ltsdPrdtId",],{  })
@Index("PK_PECR_LOTE_SALDO",["ltsdId",],{ unique:true })
@Entity("PECR_LOTE_SALDO")
export  class PecrLoteSaldo extends BaseEntity {

@Column("varchar",{ primary:true,name:"LTSD_ID",length:27 })
public ltsdId:string;

@Column("varchar",{ name:"LTSD_PRDT_ID",nullable:true,length:27 })
public ltsdPrdtId:string | null;

@Column("varchar",{ name:"LTSD_LOTE_ID",nullable:true,length:27 })
public ltsdLoteId:string | null;

@Column("datetime",{ name:"LTSD_DT_REFERENCIA" })
public ltsdDtReferencia:LocalDateTime;

@Column("numeric",{ name:"LTSD_QTD_ENTRADA",nullable:true,precision:18,scale:4,default: () => "0", })
public ltsdQtdEntrada:number | null;

@Column("numeric",{ name:"LTSD_QTD_SAIDA",nullable:true,precision:18,scale:4,default: () => "0", })
public ltsdQtdSaida:number | null;

@Column("numeric",{ name:"LTSD_QTD_RESERVA",nullable:true,precision:18,scale:4,default: () => "0", })
public ltsdQtdReserva:number | null;

@Column("datetime",{ name:"LTSD_LASTUPDATE",nullable:true })
public ltsdLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.pecrLoteSaldos)
@JoinColumn([{ name: "LTSD_PRDT_ID", referencedColumnName: "prdtId" },
])

public ltsdPrdt:CdstProduto;

@ManyToOne(()=>PecrLote,pecrLote=>pecrLote.pecrLoteSaldos)
@JoinColumn([{ name: "LTSD_LOTE_ID", referencedColumnName: "loteId" },
])

public ltsdLote:PecrLote;

@RelationId((pecrLoteSaldo:PecrLoteSaldo)=>pecrLoteSaldo.ltsdPrdt)
public ltsdPrdtId2:string | null;

@RelationId((pecrLoteSaldo:PecrLoteSaldo)=>pecrLoteSaldo.ltsdLote)
public ltsdLoteId2:string | null;

public constructor(init?: Partial<PecrLoteSaldo>) {
    super();
    Object.assign(this, init);
}
}
