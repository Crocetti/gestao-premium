import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SstmParametro} from './sstm-parametro'
import {SstmSistema} from './sstm-sistema'


@Index("FK_PRMT_RS_PRSS",["prssPrmtId",],{  })
@Index("FK_SSTM_RS_PRSS",["prssSstmId",],{  })
@Index("PK_SSTM_PARAMETRO_SISTEMA",["prssId",],{ unique:true })
@Entity("SSTM_PARAMETRO_SISTEMA")
export  class SstmParametroSistema extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRSS_ID",length:27 })
public prssId:string;

@Column("varchar",{ name:"PRSS_SSTM_ID",nullable:true,length:27 })
public prssSstmId:string | null;

@Column("varchar",{ name:"PRSS_PRMT_ID",nullable:true,length:27 })
public prssPrmtId:string | null;

@Column("varchar",{ name:"PRSS_DEFAULT",nullable:true,length:128 })
public prssDefault:string | null;

@Column("varchar",{ name:"PRSS_VALUE",nullable:true,length:128 })
public prssValue:string | null;

@Column("smallint",{ name:"PRSS_HABILITADO",nullable:true,default: () => "0", })
public prssHabilitado:number | null;

@Column("datetime",{ name:"PRSS_LASTUPDATE",nullable:true })
public prssLastupdate:LocalDateTime | null;

@ManyToOne(()=>SstmParametro,sstmParametro=>sstmParametro.sstmParametroSistemas)
@JoinColumn([{ name: "PRSS_PRMT_ID", referencedColumnName: "prmtId" },
])

public prssPrmt:SstmParametro;

@ManyToOne(()=>SstmSistema,sstmSistema=>sstmSistema.sstmParametroSistemas)
@JoinColumn([{ name: "PRSS_SSTM_ID", referencedColumnName: "sstmId" },
])

public prssSstm:SstmSistema;

@RelationId((sstmParametroSistema:SstmParametroSistema)=>sstmParametroSistema.prssPrmt)
public prssPrmtId2:string | null;

@RelationId((sstmParametroSistema:SstmParametroSistema)=>sstmParametroSistema.prssSstm)
public prssSstmId2:string | null;

public constructor(init?: Partial<SstmParametroSistema>) {
    super();
    Object.assign(this, init);
}
}
