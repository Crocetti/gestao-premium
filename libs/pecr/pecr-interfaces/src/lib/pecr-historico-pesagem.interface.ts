import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {PecrProdutoBovino} from './pecr-produto-bovino'


@Index("FK_PRBV_RS_HSPS",["hspsPrbvId",],{  })
@Index("PK_PECR_HISTORICO_PESAGEM",["hspsId",],{ unique:true })
@Entity("PECR_HISTORICO_PESAGEM")
export  class PecrHistoricoPesagem extends BaseEntity {

@Column("varchar",{ primary:true,name:"HSPS_ID",length:27 })
public hspsId:string;

@Column("varchar",{ name:"HSPS_PRBV_ID",nullable:true,length:27 })
public hspsPrbvId:string | null;

@Column("datetime",{ name:"HSPS_DT_PESAGEM",nullable:true })
public hspsDtPesagem:LocalDateTime | null;

@Column("numeric",{ name:"HSPS_PESO",nullable:true,precision:18,scale:4,default: () => "0", })
public hspsPeso:number | null;

@Column("datetime",{ name:"HSPS_LASTUPDATE",nullable:true })
public hspsLastupdate:LocalDateTime | null;

@ManyToOne(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.pecrHistoricoPesagems)
@JoinColumn([{ name: "HSPS_PRBV_ID", referencedColumnName: "prbvId" },
])

public hspsPrbv:PecrProdutoBovino;

@RelationId((pecrHistoricoPesagem:PecrHistoricoPesagem)=>pecrHistoricoPesagem.hspsPrbv)
public hspsPrbvId2:string | null;

public constructor(init?: Partial<PecrHistoricoPesagem>) {
    super();
    Object.assign(this, init);
}
}
