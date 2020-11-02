import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {PecrItemMovimentoAnimal} from './pecr-item-movimento-animal'
import {PecrModuloCriacao} from './pecr-modulo-criacao'
import {PecrEspeciePastagem} from './pecr-especie-pastagem'


@Index("FK_ESPS_RS_UNCR",["uncrEspsId",],{  })
@Index("FK_MDCR_RS_UNCR",["uncrMdcrId",],{  })
@Index("PK_PECR_UNIDADE_CRIACAO",["uncrId",],{ unique:true })
@Entity("PECR_UNIDADE_CRIACAO")
export  class PecrUnidadeCriacao extends BaseEntity {

@Column("varchar",{ primary:true,name:"UNCR_ID",length:27 })
public uncrId:string;

@Column("varchar",{ name:"UNCR_ESPS_ID",nullable:true,length:27 })
public uncrEspsId:string | null;

@Column("varchar",{ name:"UNCR_MDCR_ID",nullable:true,length:27 })
public uncrMdcrId:string | null;

@Column("varchar",{ name:"UNCR_CODIGO",nullable:true,length:5 })
public uncrCodigo:string | null;

@Column("varchar",{ name:"UNCR_NOME",nullable:true,length:40 })
public uncrNome:string | null;

@Column("numeric",{ name:"UNCR_AREA_UTIL",nullable:true,precision:18,scale:4,default: () => "0", })
public uncrAreaUtil:number | null;

@Column("numeric",{ name:"UNCR_AREA_PERCENTUAL",nullable:true,precision:18,scale:4 })
public uncrAreaPercentual:number | null;

@Column("numeric",{ name:"UNCR_LATITUDE",nullable:true,precision:18,scale:6 })
public uncrLatitude:number | null;

@Column("numeric",{ name:"UNCR_LONGITUDE",nullable:true,precision:18,scale:6 })
public uncrLongitude:number | null;

@Column("datetime",{ name:"UNCR_LASTUPDATE",nullable:true })
public uncrLastupdate:LocalDateTime | null;

@OneToMany(()=>PecrItemMovimentoAnimal,pecrItemMovimentoAnimal=>pecrItemMovimentoAnimal.imanUncr)


public pecrItemMovimentoAnimals:PecrItemMovimentoAnimal[];

@ManyToOne(()=>PecrModuloCriacao,pecrModuloCriacao=>pecrModuloCriacao.pecrUnidadeCriacaos)
@JoinColumn([{ name: "UNCR_MDCR_ID", referencedColumnName: "mdcrId" },
])

public uncrMdcr:PecrModuloCriacao;

@ManyToOne(()=>PecrEspeciePastagem,pecrEspeciePastagem=>pecrEspeciePastagem.pecrUnidadeCriacaos)
@JoinColumn([{ name: "UNCR_ESPS_ID", referencedColumnName: "espsId" },
])

public uncrEsps:PecrEspeciePastagem;

@RelationId((pecrUnidadeCriacao:PecrUnidadeCriacao)=>pecrUnidadeCriacao.uncrMdcr)
public uncrMdcrId2:string | null;

@RelationId((pecrUnidadeCriacao:PecrUnidadeCriacao)=>pecrUnidadeCriacao.uncrEsps)
public uncrEspsId2:string | null;

public constructor(init?: Partial<PecrUnidadeCriacao>) {
    super();
    Object.assign(this, init);
}
}
