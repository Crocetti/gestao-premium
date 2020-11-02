import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CdstUnidadeMedida} from './cdst-unidade-medida'
import {PecrCategoria} from './pecr-categoria'
import {CdstProduto} from './cdst-produto'


@Index("FK_CTGR_RS_GPMD",["gpmdCtgrId",],{  })
@Index("FK_PESO_RS_GPMD",["gpmdPesoId",],{  })
@Index("FK_PRDT_RS_GPMD",["gpmdPrdtId",],{  })
@Index("PK_PECR_GANHO_PESO_MEDIO",["gpmdId",],{ unique:true })
@Entity("PECR_GANHO_PESO_MEDIO")
export  class PecrGanhoPesoMedio extends BaseEntity {

@Column("varchar",{ primary:true,name:"GPMD_ID",length:27 })
public gpmdId:string;

@Column("varchar",{ name:"GPMD_PESO_ID",nullable:true,length:27 })
public gpmdPesoId:string | null;

@Column("varchar",{ name:"GPMD_PRDT_ID",nullable:true,length:27 })
public gpmdPrdtId:string | null;

@Column("varchar",{ name:"GPMD_CTGR_ID",nullable:true,length:27 })
public gpmdCtgrId:string | null;

@Column("varchar",{ name:"GPMD_MES",nullable:true,length:12 })
public gpmdMes:string | null;

@Column("numeric",{ name:"GPMD_PESO",nullable:true,precision:18,scale:4,default: () => "0", })
public gpmdPeso:number | null;

@Column("datetime",{ name:"GPMD_LASTUPDATE",nullable:true })
public gpmdLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.pecrGanhoPesoMedios)
@JoinColumn([{ name: "GPMD_PESO_ID", referencedColumnName: "unidId" },
])

public gpmdPeso2:CdstUnidadeMedida;

@ManyToOne(()=>PecrCategoria,pecrCategoria=>pecrCategoria.pecrGanhoPesoMedios)
@JoinColumn([{ name: "GPMD_CTGR_ID", referencedColumnName: "ctgrId" },
])

public gpmdCtgr:PecrCategoria;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.pecrGanhoPesoMedios)
@JoinColumn([{ name: "GPMD_PRDT_ID", referencedColumnName: "prdtId" },
])

public gpmdPrdt:CdstProduto;

@RelationId((pecrGanhoPesoMedio:PecrGanhoPesoMedio)=>pecrGanhoPesoMedio.gpmdPeso2)
public gpmdPesoId2:string | null;

@RelationId((pecrGanhoPesoMedio:PecrGanhoPesoMedio)=>pecrGanhoPesoMedio.gpmdCtgr)
public gpmdCtgrId2:string | null;

@RelationId((pecrGanhoPesoMedio:PecrGanhoPesoMedio)=>pecrGanhoPesoMedio.gpmdPrdt)
public gpmdPrdtId2:string | null;

public constructor(init?: Partial<PecrGanhoPesoMedio>) {
    super();
    Object.assign(this, init);
}
}
