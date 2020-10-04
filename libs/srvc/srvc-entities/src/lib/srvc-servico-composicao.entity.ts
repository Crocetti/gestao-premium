import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CmnsCargo} from './cmns-cargo'
import {CdstUnidadeMedida} from './cdst-unidade-medida'
import {SrvcServico} from './srvc-servico'


@Index("FK_CARG_RS_SRCM",["srcmCargId",],{  })
@Index("FK_SRVC_RS_SRCM",["srcmSrvcId",],{  })
@Index("FK_UNID_RS_SRCM",["srcmUnidId",],{  })
@Index("PK_SRVC_SERVICO_COMPOSICAO",["srcmId",],{ unique:true })
@Entity("SRVC_SERVICO_COMPOSICAO")
export  class SrvcServicoComposicao extends BaseEntity {

@Column("varchar",{ primary:true,name:"SRCM_ID",length:27 })
public srcmId:string;

@Column("varchar",{ name:"SRCM_SRVC_ID",nullable:true,length:27 })
public srcmSrvcId:string | null;

@Column("varchar",{ name:"SRCM_CARG_ID",nullable:true,length:27 })
public srcmCargId:string | null;

@Column("varchar",{ name:"SRCM_UNID_ID",nullable:true,length:27 })
public srcmUnidId:string | null;

@Column("numeric",{ name:"SRCM_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public srcmQuantidade:number | null;

@Column("money",{ name:"SRCM_VALOR_UNITARIO",nullable:true,default: () => "0", })
public srcmValorUnitario:number | null;

@Column("datetime",{ name:"SRCM_LASTUPDATE",nullable:true })
public srcmLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsCargo,cmnsCargo=>cmnsCargo.srvcServicoComposicaos)
@JoinColumn([{ name: "SRCM_CARG_ID", referencedColumnName: "cargId" },
])

public srcmCarg:CmnsCargo;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.srvcServicoComposicaos)
@JoinColumn([{ name: "SRCM_UNID_ID", referencedColumnName: "unidId" },
])

public srcmUnid:CdstUnidadeMedida;

@ManyToOne(()=>SrvcServico,srvcServico=>srvcServico.srvcServicoComposicaos)
@JoinColumn([{ name: "SRCM_SRVC_ID", referencedColumnName: "srvcId" },
])

public srcmSrvc:SrvcServico;

@RelationId((srvcServicoComposicao:SrvcServicoComposicao)=>srvcServicoComposicao.srcmCarg)
public srcmCargId2:string | null;

@RelationId((srvcServicoComposicao:SrvcServicoComposicao)=>srvcServicoComposicao.srcmUnid)
public srcmUnidId2:string | null;

@RelationId((srvcServicoComposicao:SrvcServicoComposicao)=>srvcServicoComposicao.srcmSrvc)
public srcmSrvcId2:string | null;

public constructor(init?: Partial<SrvcServicoComposicao>) {
    super();
    Object.assign(this, init);
}
}
