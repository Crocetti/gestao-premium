import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {EstqMercadoria} from './estq-mercadoria'
import {SrvcServico} from './srvc-servico'
import {CdstUnidadeMedida} from './cdst-unidade-medida'


@Index("FK_MRCD_RS_SRPC",["srpcMrcdId",],{  })
@Index("FK_SRVC_RS_SRPC",["srpcSrvcId",],{  })
@Index("FK_UNID_RS_SRPC",["srpcUnidId",],{  })
@Index("PK_SRVC_SERVICO_PECAS",["srpcId",],{ unique:true })
@Entity("SRVC_SERVICO_PECAS")
export  class SrvcServicoPecas extends BaseEntity {

@Column("varchar",{ primary:true,name:"SRPC_ID",length:27 })
public srpcId:string;

@Column("varchar",{ name:"SRPC_MRCD_ID",nullable:true,length:27 })
public srpcMrcdId:string | null;

@Column("varchar",{ name:"SRPC_UNID_ID",nullable:true,length:27 })
public srpcUnidId:string | null;

@Column("varchar",{ name:"SRPC_SRVC_ID",nullable:true,length:27 })
public srpcSrvcId:string | null;

@Column("numeric",{ name:"SRPC_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public srpcQuantidade:number | null;

@Column("money",{ name:"SRPC_VALOR_UNITARIO",nullable:true,default: () => "0", })
public srpcValorUnitario:number | null;

@Column("datetime",{ name:"SRPC_LASTUPDATE",nullable:true })
public srpcLastupdate:LocalDateTime | null;

@ManyToOne(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.srvcServicoPecas)
@JoinColumn([{ name: "SRPC_MRCD_ID", referencedColumnName: "mrcdId" },
])

public srpcMrcd:EstqMercadoria;

@ManyToOne(()=>SrvcServico,srvcServico=>srvcServico.srvcServicoPecas)
@JoinColumn([{ name: "SRPC_SRVC_ID", referencedColumnName: "srvcId" },
])

public srpcSrvc:SrvcServico;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.srvcServicoPecas)
@JoinColumn([{ name: "SRPC_UNID_ID", referencedColumnName: "unidId" },
])

public srpcUnid:CdstUnidadeMedida;

@RelationId((srvcServicoPecas:SrvcServicoPecas)=>srvcServicoPecas.srpcMrcd)
public srpcMrcdId2:string | null;

@RelationId((srvcServicoPecas:SrvcServicoPecas)=>srvcServicoPecas.srpcSrvc)
public srpcSrvcId2:string | null;

@RelationId((srvcServicoPecas:SrvcServicoPecas)=>srvcServicoPecas.srpcUnid)
public srpcUnidId2:string | null;

public constructor(init?: Partial<SrvcServicoPecas>) {
    super();
    Object.assign(this, init);
}
}
