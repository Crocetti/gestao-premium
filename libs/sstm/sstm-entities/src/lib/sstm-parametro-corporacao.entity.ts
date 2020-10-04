import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SstmParametro} from './sstm-parametro'
import {CoreCorporacao} from './core-corporacao'


@Index("FK_CPRC_RS_PRCP",["prcpCprcId",],{  })
@Index("FK_PRMT_RS_PRCP",["prcpPrmtId",],{  })
@Index("PK_SSTM_PARAMETRO_CORPORACAO",["prcpId",],{ unique:true })
@Entity("SSTM_PARAMETRO_CORPORACAO")
export  class SstmParametroCorporacao extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRCP_ID",length:27 })
public prcpId:string;

@Column("varchar",{ name:"PRCP_PRMT_ID",nullable:true,length:27 })
public prcpPrmtId:string | null;

@Column("varchar",{ name:"PRCP_CPRC_ID",nullable:true,length:27 })
public prcpCprcId:string | null;

@Column("varchar",{ name:"PRCP_DEFAULT",length:128 })
public prcpDefault:string;

@Column("varchar",{ name:"PRCP_VALUE",nullable:true,length:128 })
public prcpValue:string | null;

@Column("smallint",{ name:"PRCP_HABILITADO",nullable:true,default: () => "0", })
public prcpHabilitado:number | null;

@Column("datetime",{ name:"PRCP_LASTUPDATE",nullable:true })
public prcpLastupdate:LocalDateTime | null;

@ManyToOne(()=>SstmParametro,sstmParametro=>sstmParametro.sstmParametroCorporacaos)
@JoinColumn([{ name: "PRCP_PRMT_ID", referencedColumnName: "prmtId" },
])

public prcpPrmt:SstmParametro;

@ManyToOne(()=>CoreCorporacao,coreCorporacao=>coreCorporacao.sstmParametroCorporacaos)
@JoinColumn([{ name: "PRCP_CPRC_ID", referencedColumnName: "cprcId" },
])

public prcpCprc:CoreCorporacao;

@RelationId((sstmParametroCorporacao:SstmParametroCorporacao)=>sstmParametroCorporacao.prcpPrmt)
public prcpPrmtId2:string | null;

@RelationId((sstmParametroCorporacao:SstmParametroCorporacao)=>sstmParametroCorporacao.prcpCprc)
public prcpCprcId2:string | null;

public constructor(init?: Partial<SstmParametroCorporacao>) {
    super();
    Object.assign(this, init);
}
}
