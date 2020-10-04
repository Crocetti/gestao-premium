import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CmnsPessoaJuridica} from './cmns-pessoa-juridica'


@Index("FK_RMAT_RS_RMAT",["rmatRmatId",],{  })
@Index("PK_CMNS_RAMO_ATIVIDADE",["rmatId",],{ unique:true })
@Entity("CMNS_RAMO_ATIVIDADE")
export  class CmnsRamoAtividade extends BaseEntity {

@Column("varchar",{ primary:true,name:"RMAT_ID",length:27 })
public rmatId:string;

@Column("varchar",{ name:"RMAT_RMAT_ID",nullable:true,length:27 })
public rmatRmatId:string | null;

@Column("varchar",{ name:"RMAT_NOME",nullable:true,length:256 })
public rmatNome:string | null;

@Column("varchar",{ name:"RMAT_CODIGO_RF",nullable:true,length:10 })
public rmatCodigoRf:string | null;

@Column("smallint",{ name:"RMAT_RETEM_CONFINS",nullable:true,default: () => "0", })
public rmatRetemConfins:number | null;

@Column("smallint",{ name:"RMAT_RETEM_PIS",nullable:true,default: () => "0", })
public rmatRetemPis:number | null;

@Column("smallint",{ name:"RMAT_RETEM_CSLL",nullable:true,default: () => "0", })
public rmatRetemCsll:number | null;

@Column("datetime",{ name:"RMAT_LASTUPDATE",nullable:true })
public rmatLastupdate:LocalDateTime | null;

@OneToMany(()=>CmnsPessoaJuridica,cmnsPessoaJuridica=>cmnsPessoaJuridica.psjrRmat)


public cmnsPessoaJuridicas:CmnsPessoaJuridica[];

@ManyToOne(()=>CmnsRamoAtividade,cmnsRamoAtividade=>cmnsRamoAtividade.cmnsRamoAtividades)
@JoinColumn([{ name: "RMAT_RMAT_ID", referencedColumnName: "rmatId" },
])

public rmatRmat:CmnsRamoAtividade;

@OneToMany(()=>CmnsRamoAtividade,cmnsRamoAtividade=>cmnsRamoAtividade.rmatRmat)


public cmnsRamoAtividades:CmnsRamoAtividade[];

@RelationId((cmnsRamoAtividade:CmnsRamoAtividade)=>cmnsRamoAtividade.rmatRmat)
public rmatRmatId2:string | null;

public constructor(init?: Partial<CmnsRamoAtividade>) {
    super();
    Object.assign(this, init);
}
}
