import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CdstProdutorPropriedade} from './cdst-produtor-propriedade'
import {CmnsPessoa} from './cmns-pessoa'
import {PecrAfixos} from './pecr-afixos'
import {PecrProdutoBovino} from './pecr-produto-bovino'


@Index("FK_PESS_RS_PDRR",["pdrrPessId",],{  })
@Index("PK_CDST_PRODUTOR_RURAL",["pdrrId",],{ unique:true })
@Entity("CDST_PRODUTOR_RURAL")
export  class CdstProdutorRural extends BaseEntity {

@Column("varchar",{ primary:true,name:"PDRR_ID",length:27 })
public pdrrId:string;

@Column("varchar",{ name:"PDRR_PESS_ID",nullable:true,length:27 })
public pdrrPessId:string | null;

@Column("smallint",{ name:"PDRR_ATIVO",nullable:true,default: () => "0", })
public pdrrAtivo:number | null;

@Column("datetime",{ name:"PDRR_LASTUPDATE",nullable:true })
public pdrrLastupdate:LocalDateTime | null;

@OneToMany(()=>CdstProdutorPropriedade,cdstProdutorPropriedade=>cdstProdutorPropriedade.pdppPdrr)


public cdstProdutorPropriedades:CdstProdutorPropriedade[];

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cdstProdutorRurals)
@JoinColumn([{ name: "PDRR_PESS_ID", referencedColumnName: "pessId" },
])

public pdrrPess:CmnsPessoa;

@OneToMany(()=>PecrAfixos,pecrAfixos=>pecrAfixos.afxsPdrr)


public pecrAfixos:PecrAfixos[];

@OneToMany(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.prbvCrdr)


public pecrProdutoBovinos:PecrProdutoBovino[];

@OneToMany(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.prbvPdrr)


public pecrProdutoBovinos2:PecrProdutoBovino[];

@RelationId((cdstProdutorRural:CdstProdutorRural)=>cdstProdutorRural.pdrrPess)
public pdrrPessId2:string | null;

public constructor(init?: Partial<CdstProdutorRural>) {
    super();
    Object.assign(this, init);
}
}
