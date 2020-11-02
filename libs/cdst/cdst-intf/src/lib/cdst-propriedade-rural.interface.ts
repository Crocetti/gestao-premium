import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CdstProdutorPropriedade} from './cdst-produtor-propriedade'
import {CmnsPessoa} from './cmns-pessoa'
import {PecrModuloCriacao} from './pecr-modulo-criacao'
import {PecrProdutoBovino} from './pecr-produto-bovino'
import {PecrProdutoPecuaria} from './pecr-produto-pecuaria'


@Index("FK_PESS_RS_PPRR",["pprrPessId",],{  })
@Index("PK_CDST_PROPRIEDADE_RURAL",["pprrId",],{ unique:true })
@Entity("CDST_PROPRIEDADE_RURAL")
export  class CdstPropriedadeRural extends BaseEntity {

@Column("varchar",{ primary:true,name:"PPRR_ID",length:27 })
public pprrId:string;

@Column("varchar",{ name:"PPRR_PESS_ID",nullable:true,length:27 })
public pprrPessId:string | null;

@Column("varchar",{ name:"PPRR_NOME",nullable:true,length:128 })
public pprrNome:string | null;

@Column("varchar",{ name:"PPRR_INCRA",nullable:true,length:20 })
public pprrIncra:string | null;

@Column("varchar",{ name:"PPRR_NIRF",nullable:true,length:20 })
public pprrNirf:string | null;

@Column("varchar",{ name:"PPRR_CPOESAE",nullable:true,length:20 })
public pprrCpoesae:string | null;

@Column("numeric",{ name:"PPRR_AREA",nullable:true,precision:18,scale:4,default: () => "0", })
public pprrArea:number | null;

@Column("numeric",{ name:"PPRR_LATITUDE_SEDE",precision:18,scale:6 })
public pprrLatitudeSede:number;

@Column("numeric",{ name:"PPRR_LONGITUDE_SEDE",nullable:true,precision:18,scale:6 })
public pprrLongitudeSede:number | null;

@Column("varchar",{ name:"PPRR_VIA_ACESSO",nullable:true,length:500 })
public pprrViaAcesso:string | null;

@Column("datetime",{ name:"PPRR_LASTUPDATE",nullable:true })
public pprrLastupdate:LocalDateTime | null;

@OneToMany(()=>CdstProdutorPropriedade,cdstProdutorPropriedade=>cdstProdutorPropriedade.pdppPprr)


public cdstProdutorPropriedades:CdstProdutorPropriedade[];

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cdstPropriedadeRurals)
@JoinColumn([{ name: "PPRR_PESS_ID", referencedColumnName: "pessId" },
])

public pprrPess:CmnsPessoa;

@OneToMany(()=>PecrModuloCriacao,pecrModuloCriacao=>pecrModuloCriacao.mdcrPprr)


public pecrModuloCriacaos:PecrModuloCriacao[];

@OneToMany(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.prbvPprr)


public pecrProdutoBovinos:PecrProdutoBovino[];

@OneToMany(()=>PecrProdutoPecuaria,pecrProdutoPecuaria=>pecrProdutoPecuaria.prpePprr)


public pecrProdutoPecuarias:PecrProdutoPecuaria[];

@RelationId((cdstPropriedadeRural:CdstPropriedadeRural)=>cdstPropriedadeRural.pprrPess)
public pprrPessId2:string | null;

public constructor(init?: Partial<CdstPropriedadeRural>) {
    super();
    Object.assign(this, init);
}
}
