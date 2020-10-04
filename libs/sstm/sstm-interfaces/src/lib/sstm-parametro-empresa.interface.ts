import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SstmParametro} from './sstm-parametro'
import {CoreEmpresa} from './core-empresa'


@Index("FK_EMPR_RS_PREM",["premEmprId",],{  })
@Index("FK_PRMT_RS_PREM",["premPrmtId",],{  })
@Index("PK_SSTM_PARAMETRO_EMPRESA",["premId",],{ unique:true })
@Entity("SSTM_PARAMETRO_EMPRESA")
export  class SstmParametroEmpresa extends BaseEntity {

@Column("varchar",{ primary:true,name:"PREM_ID",length:27 })
public premId:string;

@Column("varchar",{ name:"PREM_EMPR_ID",nullable:true,length:27 })
public premEmprId:string | null;

@Column("varchar",{ name:"PREM_PRMT_ID",nullable:true,length:27 })
public premPrmtId:string | null;

@Column("varchar",{ name:"PREM_DEFAULT",nullable:true,length:128 })
public premDefault:string | null;

@Column("varchar",{ name:"PREM_VALUE",nullable:true,length:128 })
public premValue:string | null;

@Column("smallint",{ name:"PREM_HABILITADO",nullable:true,default: () => "0", })
public premHabilitado:number | null;

@Column("datetime",{ name:"PREM_LASTUPDATE",nullable:true })
public premLastupdate:LocalDateTime | null;

@ManyToOne(()=>SstmParametro,sstmParametro=>sstmParametro.sstmParametroEmpresas)
@JoinColumn([{ name: "PREM_PRMT_ID", referencedColumnName: "prmtId" },
])

public premPrmt:SstmParametro;

@ManyToOne(()=>CoreEmpresa,coreEmpresa=>coreEmpresa.sstmParametroEmpresas)
@JoinColumn([{ name: "PREM_EMPR_ID", referencedColumnName: "emprId" },
])

public premEmpr:CoreEmpresa;

@RelationId((sstmParametroEmpresa:SstmParametroEmpresa)=>sstmParametroEmpresa.premPrmt)
public premPrmtId2:string | null;

@RelationId((sstmParametroEmpresa:SstmParametroEmpresa)=>sstmParametroEmpresa.premEmpr)
public premEmprId2:string | null;

public constructor(init?: Partial<SstmParametroEmpresa>) {
    super();
    Object.assign(this, init);
}
}
