import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CmnsPessoa} from './cmns-pessoa'
import {FsclDocumento} from './fscl-documento'


@Index("FK_PESS_RS_TRNS",["trnsPessId",],{  })
@Index("PK_CDST_TRANSPORTADORA",["trnsId",],{ unique:true })
@Entity("CDST_TRANSPORTADORA")
export  class CdstTransportadora extends BaseEntity {

@Column("varchar",{ primary:true,name:"TRNS_ID",length:27 })
public trnsId:string;

@Column("varchar",{ name:"TRNS_PESS_ID",nullable:true,length:27 })
public trnsPessId:string | null;

@Column("smallint",{ name:"TRNS_ATIVO",nullable:true,default: () => "0", })
public trnsAtivo:number | null;

@Column("varchar",{ name:"TRNS_OBS",nullable:true,length:5000 })
public trnsObs:string | null;

@Column("datetime",{ name:"TRNS_LASTUPDATE",nullable:true })
public trnsLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cdstTransportadoras)
@JoinColumn([{ name: "TRNS_PESS_ID", referencedColumnName: "pessId" },
])

public trnsPess:CmnsPessoa;

@OneToMany(()=>FsclDocumento,fsclDocumento=>fsclDocumento.dcmtTrns)


public fsclDocumentos:FsclDocumento[];

@RelationId((cdstTransportadora:CdstTransportadora)=>cdstTransportadora.trnsPess)
public trnsPessId2:string | null;

public constructor(init?: Partial<CdstTransportadora>) {
    super();
    Object.assign(this, init);
}
}
