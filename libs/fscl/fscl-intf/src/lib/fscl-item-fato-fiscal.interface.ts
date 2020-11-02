import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FsclDocumentoItem} from './fscl-documento-item'


@Index("FK_DCIT_RS_ITFF",["itffDcitId",],{  })
@Index("PK_FSCL_ITEM_FATO_FISCAL",["itffId",],{ unique:true })
@Entity("FSCL_ITEM_FATO_FISCAL")
export  class FsclItemFatoFiscal extends BaseEntity {

@Column("varchar",{ primary:true,name:"ITFF_ID",length:27 })
public itffId:string;

@Column("varchar",{ name:"ITFF_DCIT_ID",nullable:true,length:27 })
public itffDcitId:string | null;

@Column("varchar",{ name:"ITFF_TP_FATO_FISCAL",nullable:true,length:25 })
public itffTpFatoFiscal:string | null;

@Column("money",{ name:"ITFF_BASE_CALCULO",nullable:true,default: () => "0", })
public itffBaseCalculo:number | null;

@Column("numeric",{ name:"ITFF_ALIQUOTA",nullable:true,precision:18,scale:4 })
public itffAliquota:number | null;

@Column("money",{ name:"ITFF_VALOR",nullable:true,default: () => "0", })
public itffValor:number | null;

@Column("varchar",{ name:"ITFF_CST",nullable:true,length:3 })
public itffCst:string | null;

@Column("datetime",{ name:"ITFF_LASTUPDATE",nullable:true })
public itffLastupdate:LocalDateTime | null;

@ManyToOne(()=>FsclDocumentoItem,fsclDocumentoItem=>fsclDocumentoItem.fsclItemFatoFiscals)
@JoinColumn([{ name: "ITFF_DCIT_ID", referencedColumnName: "dcitId" },
])

public itffDcit:FsclDocumentoItem;

@RelationId((fsclItemFatoFiscal:FsclItemFatoFiscal)=>fsclItemFatoFiscal.itffDcit)
public itffDcitId2:string | null;

public constructor(init?: Partial<FsclItemFatoFiscal>) {
    super();
    Object.assign(this, init);
}
}
