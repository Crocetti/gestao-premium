import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SstmParametro} from './sstm-parametro'
import {CoreUnidadeEmpresarial} from './core-unidade-empresarial'


@Index("FK_PRMT_RS_PRUE",["pruePrmtId",],{  })
@Index("FK_UNEM_RS_PRUE",["prueUnemId",],{  })
@Index("PK_SSTM_PARAMETRO_UNEM",["prueId",],{ unique:true })
@Entity("SSTM_PARAMETRO_UNEM")
export  class SstmParametroUnem extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRUE_ID",length:27 })
public prueId:string;

@Column("varchar",{ name:"PRUE_UNEM_ID",nullable:true,length:27 })
public prueUnemId:string | null;

@Column("varchar",{ name:"PRUE_PRMT_ID",nullable:true,length:27 })
public pruePrmtId:string | null;

@Column("varchar",{ name:"PRUE_DEFAULT",nullable:true,length:128 })
public prueDefault:string | null;

@Column("varchar",{ name:"PRUE_VALUE",nullable:true,length:128 })
public prueValue:string | null;

@Column("smallint",{ name:"PRUE_HABILITADO",nullable:true,default: () => "0", })
public prueHabilitado:number | null;

@Column("datetime",{ name:"PRUE_LASTUPDATE",nullable:true })
public prueLastupdate:LocalDateTime | null;

@ManyToOne(()=>SstmParametro,sstmParametro=>sstmParametro.sstmParametroUnems)
@JoinColumn([{ name: "PRUE_PRMT_ID", referencedColumnName: "prmtId" },
])

public pruePrmt:SstmParametro;

@ManyToOne(()=>CoreUnidadeEmpresarial,coreUnidadeEmpresarial=>coreUnidadeEmpresarial.sstmParametroUnems)
@JoinColumn([{ name: "PRUE_UNEM_ID", referencedColumnName: "unemId" },
])

public prueUnem:CoreUnidadeEmpresarial;

@RelationId((sstmParametroUnem:SstmParametroUnem)=>sstmParametroUnem.pruePrmt)
public pruePrmtId2:string | null;

@RelationId((sstmParametroUnem:SstmParametroUnem)=>sstmParametroUnem.prueUnem)
public prueUnemId2:string | null;

public constructor(init?: Partial<SstmParametroUnem>) {
    super();
    Object.assign(this, init);
}
}
