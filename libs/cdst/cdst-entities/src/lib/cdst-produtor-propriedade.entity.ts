import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CdstPropriedadeRural} from './cdst-propriedade-rural'
import {CdstProdutorRural} from './cdst-produtor-rural'


@Index("FK_PDRR_RS_PDPP",["pdppPdrrId",],{  })
@Index("FK_PPRR_RS_PDPP",["pdppPprrId",],{  })
@Index("PK_CDST_PRODUTOR_PROPRIEDADE",["pdppId",],{ unique:true })
@Entity("CDST_PRODUTOR_PROPRIEDADE")
export  class CdstProdutorPropriedade extends BaseEntity {

@Column("varchar",{ primary:true,name:"PDPP_ID",length:27 })
public pdppId:string;

@Column("varchar",{ name:"PDPP_PPRR_ID",nullable:true,length:27 })
public pdppPprrId:string | null;

@Column("varchar",{ name:"PDPP_PDRR_ID",nullable:true,length:27 })
public pdppPdrrId:string | null;

@Column("varchar",{ name:"PDPP_CLASSIFICACAO",nullable:true,length:25 })
public pdppClassificacao:string | null;

@Column("smallint",{ name:"PDPP_RESPONSAVEL",nullable:true,default: () => "0", })
public pdppResponsavel:number | null;

@Column("varchar",{ name:"PDPP_INSC_ESTADUAL",nullable:true,length:25 })
public pdppInscEstadual:string | null;

@Column("smallint",{ name:"PDPP_ATIVO",nullable:true,default: () => "0", })
public pdppAtivo:number | null;

@Column("varchar",{ name:"PDPP_TIPO",nullable:true,length:15 })
public pdppTipo:string | null;

@Column("varchar",{ name:"PDPP_SITUACAO",nullable:true,length:15 })
public pdppSituacao:string | null;

@Column("numeric",{ name:"PDPP_AREA_OCUPADA",nullable:true,precision:18,scale:4,default: () => "0", })
public pdppAreaOcupada:number | null;

@Column("numeric",{ name:"PDPP_AREA_PASTAGENS",nullable:true,precision:18,scale:4,default: () => "0", })
public pdppAreaPastagens:number | null;

@Column("datetime",{ name:"PDPP_LASTUPDATE",nullable:true })
public pdppLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstPropriedadeRural,cdstPropriedadeRural=>cdstPropriedadeRural.cdstProdutorPropriedades)
@JoinColumn([{ name: "PDPP_PPRR_ID", referencedColumnName: "pprrId" },
])

public pdppPprr:CdstPropriedadeRural;

@ManyToOne(()=>CdstProdutorRural,cdstProdutorRural=>cdstProdutorRural.cdstProdutorPropriedades)
@JoinColumn([{ name: "PDPP_PDRR_ID", referencedColumnName: "pdrrId" },
])

public pdppPdrr:CdstProdutorRural;

@RelationId((cdstProdutorPropriedade:CdstProdutorPropriedade)=>cdstProdutorPropriedade.pdppPprr)
public pdppPprrId2:string | null;

@RelationId((cdstProdutorPropriedade:CdstProdutorPropriedade)=>cdstProdutorPropriedade.pdppPdrr)
public pdppPdrrId2:string | null;

public constructor(init?: Partial<CdstProdutorPropriedade>) {
    super();
    Object.assign(this, init);
}
}
