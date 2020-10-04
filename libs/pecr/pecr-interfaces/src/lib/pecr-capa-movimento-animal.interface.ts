import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {PecrLote} from './pecr-lote'
import {PecrItemMovimentoAnimal} from './pecr-item-movimento-animal'


@Index("FK_LOTE_RS_CMAN",["cmanLoteId",],{  })
@Index("PK_PECR_CAPA_MOVIMENTO_ANIMAL",["cmanId",],{ unique:true })
@Entity("PECR_CAPA_MOVIMENTO_ANIMAL")
export  class PecrCapaMovimentoAnimal extends BaseEntity {

@Column("varchar",{ primary:true,name:"CMAN_ID",length:27 })
public cmanId:string;

@Column("varchar",{ name:"CMAN_LOTE_ID",nullable:true,length:27 })
public cmanLoteId:string | null;

@Column("datetime",{ name:"CMAN_DT_LANCAMENTO",nullable:true })
public cmanDtLancamento:LocalDateTime | null;

@Column("datetime",{ name:"CMAN_DT_MOVIMENTO",nullable:true })
public cmanDtMovimento:LocalDateTime | null;

@Column("varchar",{ name:"CMAN_TP_DOCUMENTO",nullable:true,length:25 })
public cmanTpDocumento:string | null;

@Column("varchar",{ name:"CMAN_TP_MOVIMENTO",nullable:true,length:10 })
public cmanTpMovimento:string | null;

@Column("varchar",{ name:"CMAN_TP_TRANSACAO",nullable:true,length:25 })
public cmanTpTransacao:string | null;

@Column("numeric",{ name:"CMAN_QTD_ITENS",nullable:true,precision:18,scale:4,default: () => "0", })
public cmanQtdItens:number | null;

@Column("datetime",{ name:"CMAN_LASTUPDATE",nullable:true })
public cmanLastupdate:LocalDateTime | null;

@ManyToOne(()=>PecrLote,pecrLote=>pecrLote.pecrCapaMovimentoAnimals)
@JoinColumn([{ name: "CMAN_LOTE_ID", referencedColumnName: "loteId" },
])

public cmanLote:PecrLote;

@OneToMany(()=>PecrItemMovimentoAnimal,pecrItemMovimentoAnimal=>pecrItemMovimentoAnimal.imanCman)


public pecrItemMovimentoAnimals:PecrItemMovimentoAnimal[];

@RelationId((pecrCapaMovimentoAnimal:PecrCapaMovimentoAnimal)=>pecrCapaMovimentoAnimal.cmanLote)
public cmanLoteId2:string | null;

public constructor(init?: Partial<PecrCapaMovimentoAnimal>) {
    super();
    Object.assign(this, init);
}
}
