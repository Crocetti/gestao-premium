import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FsclNcms} from './fscl-ncms'
import {CmnsUnidadeFederativa} from './cmns-unidade-federativa'


@Index("FK_NCMS_RS_RGTB",["rgtbNcmsId",],{  })
@Index("FK_UNFD_RS_RGTB",["rgtbUnfdId",],{  })
@Index("PK_FSCL_REGIME_TRIBUTARIO",["rgtbId",],{ unique:true })
@Entity("FSCL_REGIME_TRIBUTARIO")
export  class FsclRegimeTributario extends BaseEntity {

@Column("varchar",{ primary:true,name:"RGTB_ID",length:27 })
public rgtbId:string;

@Column("varchar",{ name:"RGTB_UNFD_ID",nullable:true,length:27 })
public rgtbUnfdId:string | null;

@Column("varchar",{ name:"RGTB_NCMS_ID",nullable:true,length:27 })
public rgtbNcmsId:string | null;

@Column("varchar",{ name:"RGTB_REGIME_FISCAL_TRIBUTARIO",nullable:true,length:25 })
public rgtbRegimeFiscalTributario:string | null;

@Column("numeric",{ name:"RGTB_IVA",nullable:true,precision:18,scale:4 })
public rgtbIva:number | null;

@Column("numeric",{ name:"RGTB_ICMS",nullable:true,precision:18,scale:4 })
public rgtbIcms:number | null;

@Column("numeric",{ name:"RGTB_REDUCAO_ICMS",nullable:true,precision:18,scale:4 })
public rgtbReducaoIcms:number | null;

@Column("numeric",{ name:"RGTB_REDUCAO_ICMS_ST",nullable:true,precision:18,scale:4 })
public rgtbReducaoIcmsSt:number | null;

@Column("money",{ name:"RGTB_PAUTA",nullable:true,default: () => "0", })
public rgtbPauta:number | null;

@Column("datetime",{ name:"RGTB_LASTUPDATE",nullable:true })
public rgtbLastupdate:LocalDateTime | null;

@ManyToOne(()=>FsclNcms,fsclNcms=>fsclNcms.fsclRegimeTributarios)
@JoinColumn([{ name: "RGTB_NCMS_ID", referencedColumnName: "ncmsId" },
])

public rgtbNcms:FsclNcms;

@ManyToOne(()=>CmnsUnidadeFederativa,cmnsUnidadeFederativa=>cmnsUnidadeFederativa.fsclRegimeTributarios)
@JoinColumn([{ name: "RGTB_UNFD_ID", referencedColumnName: "unfdId" },
])

public rgtbUnfd:CmnsUnidadeFederativa;

@RelationId((fsclRegimeTributario:FsclRegimeTributario)=>fsclRegimeTributario.rgtbNcms)
public rgtbNcmsId2:string | null;

@RelationId((fsclRegimeTributario:FsclRegimeTributario)=>fsclRegimeTributario.rgtbUnfd)
public rgtbUnfdId2:string | null;

public constructor(init?: Partial<FsclRegimeTributario>) {
    super();
    Object.assign(this, init);
}
}
