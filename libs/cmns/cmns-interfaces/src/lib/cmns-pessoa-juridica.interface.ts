import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CmnsPessoa} from './cmns-pessoa'
import {CmnsRamoAtividade} from './cmns-ramo-atividade'


@Index("FK_PESS_RS_PSJR",["psjrPessId",],{  })
@Index("FK_RMAT_RS_PSJR",["psjrRmatId",],{  })
@Index("PK_CMNS_PESSOA_JURIDICA",["psjrId",],{ unique:true })
@Entity("CMNS_PESSOA_JURIDICA")
export  class CmnsPessoaJuridica extends BaseEntity {

@Column("varchar",{ primary:true,name:"PSJR_ID",length:27 })
public psjrId:string;

@Column("varchar",{ name:"PSJR_PESS_ID",nullable:true,length:27 })
public psjrPessId:string | null;

@Column("varchar",{ name:"PSJR_RMAT_ID",nullable:true,length:27 })
public psjrRmatId:string | null;

@Column("varchar",{ name:"PSJR_RAZAO_SOCIAL",nullable:true,length:128 })
public psjrRazaoSocial:string | null;

@Column("smallint",{ name:"PSJR_ATIVA",nullable:true,default: () => "0", })
public psjrAtiva:number | null;

@Column("varchar",{ name:"PSJR_INSC_ESTADUAL",nullable:true,length:25 })
public psjrInscEstadual:string | null;

@Column("varchar",{ name:"PSJR_INSC_ESTADUAL_SUBT",nullable:true,length:25 })
public psjrInscEstadualSubt:string | null;

@Column("varchar",{ name:"PSJR_INSC_MUNICIPAL",nullable:true,length:20 })
public psjrInscMunicipal:string | null;

@Column("datetime",{ name:"PSJR_LASTUPDATE",nullable:true })
public psjrLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cmnsPessoaJuridicas)
@JoinColumn([{ name: "PSJR_PESS_ID", referencedColumnName: "pessId" },
])

public psjrPess:CmnsPessoa;

@ManyToOne(()=>CmnsRamoAtividade,cmnsRamoAtividade=>cmnsRamoAtividade.cmnsPessoaJuridicas)
@JoinColumn([{ name: "PSJR_RMAT_ID", referencedColumnName: "rmatId" },
])

public psjrRmat:CmnsRamoAtividade;

@RelationId((cmnsPessoaJuridica:CmnsPessoaJuridica)=>cmnsPessoaJuridica.psjrPess)
public psjrPessId2:string | null;

@RelationId((cmnsPessoaJuridica:CmnsPessoaJuridica)=>cmnsPessoaJuridica.psjrRmat)
public psjrRmatId2:string | null;

public constructor(init?: Partial<CmnsPessoaJuridica>) {
    super();
    Object.assign(this, init);
}
}
