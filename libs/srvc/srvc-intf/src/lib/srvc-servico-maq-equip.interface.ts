import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SrvcServico} from './srvc-servico'
import {EstqMaquinaEquipamento} from './estq-maquina-equipamento'
import {CdstUnidadeMedida} from './cdst-unidade-medida'


@Index("FK_MQEQ_RS_SRME",["srmeMqeqId",],{  })
@Index("FK_SRVC_RS_SRME",["srmeSrvcId",],{  })
@Index("FK_UNID_RS_SRME",["srmeUnidId",],{  })
@Index("PK_SRVC_SERVICO_MAQ_EQUIP",["srmeId",],{ unique:true })
@Entity("SRVC_SERVICO_MAQ_EQUIP")
export  class SrvcServicoMaqEquip extends BaseEntity {

@Column("varchar",{ primary:true,name:"SRME_ID",length:27 })
public srmeId:string;

@Column("varchar",{ name:"SRME_SRVC_ID",nullable:true,length:27 })
public srmeSrvcId:string | null;

@Column("varchar",{ name:"SRME_MQEQ_ID",nullable:true,length:27 })
public srmeMqeqId:string | null;

@Column("varchar",{ name:"SRME_UNID_ID",nullable:true,length:27 })
public srmeUnidId:string | null;

@Column("numeric",{ name:"SRME_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public srmeQuantidade:number | null;

@Column("money",{ name:"SRME_VALOR_UNITARIO",nullable:true,default: () => "0", })
public srmeValorUnitario:number | null;

@Column("datetime",{ name:"SRME_LASTUPDATE",nullable:true })
public srmeLastupdate:LocalDateTime | null;

@ManyToOne(()=>SrvcServico,srvcServico=>srvcServico.srvcServicoMaqEquips)
@JoinColumn([{ name: "SRME_SRVC_ID", referencedColumnName: "srvcId" },
])

public srmeSrvc:SrvcServico;

@ManyToOne(()=>EstqMaquinaEquipamento,estqMaquinaEquipamento=>estqMaquinaEquipamento.srvcServicoMaqEquips)
@JoinColumn([{ name: "SRME_MQEQ_ID", referencedColumnName: "mqeqId" },
])

public srmeMqeq:EstqMaquinaEquipamento;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.srvcServicoMaqEquips)
@JoinColumn([{ name: "SRME_UNID_ID", referencedColumnName: "unidId" },
])

public srmeUnid:CdstUnidadeMedida;

@RelationId((srvcServicoMaqEquip:SrvcServicoMaqEquip)=>srvcServicoMaqEquip.srmeSrvc)
public srmeSrvcId2:string | null;

@RelationId((srvcServicoMaqEquip:SrvcServicoMaqEquip)=>srvcServicoMaqEquip.srmeMqeq)
public srmeMqeqId2:string | null;

@RelationId((srvcServicoMaqEquip:SrvcServicoMaqEquip)=>srvcServicoMaqEquip.srmeUnid)
public srmeUnidId2:string | null;

public constructor(init?: Partial<SrvcServicoMaqEquip>) {
    super();
    Object.assign(this, init);
}
}
