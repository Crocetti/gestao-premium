import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CdstUnidadeMedida} from './cdst-unidade-medida'
import {PecrRaca} from './pecr-raca'
import {PecrGanhoPesoMedio} from './pecr-ganho-peso-medio'
import {PecrHistoricoCategoria} from './pecr-historico-categoria'
import {PecrProdutoPecuaria} from './pecr-produto-pecuaria'


@Index("FK_IDAD_RS_CTGR",["ctgrIdadId",],{  })
@Index("FK_PESO_RS_CTGR",["ctgrPesoId",],{  })
@Index("FK_RACA_RS_CTGR",["ctgrRacaId",],{  })
@Index("PK_PECR_CATEGORIA",["ctgrId",],{ unique:true })
@Entity("PECR_CATEGORIA")
export  class PecrCategoria extends BaseEntity {

@Column("varchar",{ primary:true,name:"CTGR_ID",length:27 })
public ctgrId:string;

@Column("varchar",{ name:"CTGR_PESO_ID",nullable:true,length:27 })
public ctgrPesoId:string | null;

@Column("varchar",{ name:"CTGR_IDAD_ID",nullable:true,length:27 })
public ctgrIdadId:string | null;

@Column("varchar",{ name:"CTGR_RACA_ID",nullable:true,length:27 })
public ctgrRacaId:string | null;

@Column("varchar",{ name:"CTGR_CODIGO",nullable:true,length:10 })
public ctgrCodigo:string | null;

@Column("varchar",{ name:"CTGR_NOME",nullable:true,length:40 })
public ctgrNome:string | null;

@Column("varchar",{ name:"CTGR_SEXO",nullable:true,length:10 })
public ctgrSexo:string | null;

@Column("numeric",{ name:"CTGR_IDADE_MINIMA",nullable:true,precision:18,scale:4,default: () => "0", })
public ctgrIdadeMinima:number | null;

@Column("numeric",{ name:"CTGR_IDADE_MAXIMA",nullable:true,precision:18,scale:4,default: () => "0", })
public ctgrIdadeMaxima:number | null;

@Column("numeric",{ name:"CTGR_PESO_MINIMO",nullable:true,precision:18,scale:4,default: () => "0", })
public ctgrPesoMinimo:number | null;

@Column("numeric",{ name:"CTGR_PESO_MAXIMO",nullable:true,precision:18,scale:4,default: () => "0", })
public ctgrPesoMaximo:number | null;

@Column("datetime",{ name:"CTGR_LASTUPDATE",nullable:true })
public ctgrLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.pecrCategorias)
@JoinColumn([{ name: "CTGR_IDAD_ID", referencedColumnName: "unidId" },
])

public ctgrIdad:CdstUnidadeMedida;

@ManyToOne(()=>PecrRaca,pecrRaca=>pecrRaca.pecrCategorias)
@JoinColumn([{ name: "CTGR_RACA_ID", referencedColumnName: "racaId" },
])

public ctgrRaca:PecrRaca;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.pecrCategorias2)
@JoinColumn([{ name: "CTGR_PESO_ID", referencedColumnName: "unidId" },
])

public ctgrPeso:CdstUnidadeMedida;

@OneToMany(()=>PecrGanhoPesoMedio,pecrGanhoPesoMedio=>pecrGanhoPesoMedio.gpmdCtgr)


public pecrGanhoPesoMedios:PecrGanhoPesoMedio[];

@OneToMany(()=>PecrHistoricoCategoria,pecrHistoricoCategoria=>pecrHistoricoCategoria.hsctCtgr)


public pecrHistoricoCategorias:PecrHistoricoCategoria[];

@OneToMany(()=>PecrProdutoPecuaria,pecrProdutoPecuaria=>pecrProdutoPecuaria.prpeCtgr)


public pecrProdutoPecuarias:PecrProdutoPecuaria[];

@RelationId((pecrCategoria:PecrCategoria)=>pecrCategoria.ctgrIdad)
public ctgrIdadId2:string | null;

@RelationId((pecrCategoria:PecrCategoria)=>pecrCategoria.ctgrRaca)
public ctgrRacaId2:string | null;

@RelationId((pecrCategoria:PecrCategoria)=>pecrCategoria.ctgrPeso)
public ctgrPesoId2:string | null;

public constructor(init?: Partial<PecrCategoria>) {
    super();
    Object.assign(this, init);
}
}
