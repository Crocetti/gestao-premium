import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CdstUnidadeMedida} from './cdst-unidade-medida'
import {PecrUnidadeCriacao} from './pecr-unidade-criacao'
import {CdstProduto} from './cdst-produto'
import {PecrCapaMovimentoAnimal} from './pecr-capa-movimento-animal'


@Index("FK_CMAN_RS_IMAN",["imanCmanId",],{  })
@Index("FK_PRDT_RS_IMAN",["imanPrdtId",],{  })
@Index("FK_UNCR_RS_IMAN",["imanUncrId",],{  })
@Index("FK_UNID_RS_IMAN",["imanUnidId",],{  })
@Index("PK_PECR_ITEM_MOVIMENTO_ANIMAL",["imanId",],{ unique:true })
@Entity("PECR_ITEM_MOVIMENTO_ANIMAL")
export  class PecrItemMovimentoAnimal extends BaseEntity {

@Column("varchar",{ primary:true,name:"IMAN_ID",length:27 })
public imanId:string;

@Column("varchar",{ name:"IMAN_CMAN_ID",nullable:true,length:27 })
public imanCmanId:string | null;

@Column("varchar",{ name:"IMAN_UNID_ID",nullable:true,length:27 })
public imanUnidId:string | null;

@Column("varchar",{ name:"IMAN_PRDT_ID",nullable:true,length:27 })
public imanPrdtId:string | null;

@Column("varchar",{ name:"IMAN_UNCR_ID",nullable:true,length:27 })
public imanUncrId:string | null;

@Column("int",{ name:"IMAN_IDADE" })
public imanIdade:number;

@Column("numeric",{ name:"IMAN_PESO_MEDIO",nullable:true,precision:18,scale:4,default: () => "0", })
public imanPesoMedio:number | null;

@Column("numeric",{ name:"IMAN_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public imanQuantidade:number | null;

@Column("varchar",{ name:"IMAN_MOTIVO",nullable:true,length:500 })
public imanMotivo:string | null;

@Column("datetime",{ name:"IMAN_LASTUPDATE",nullable:true })
public imanLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.pecrItemMovimentoAnimals)
@JoinColumn([{ name: "IMAN_UNID_ID", referencedColumnName: "unidId" },
])

public imanUnid:CdstUnidadeMedida;

@ManyToOne(()=>PecrUnidadeCriacao,pecrUnidadeCriacao=>pecrUnidadeCriacao.pecrItemMovimentoAnimals)
@JoinColumn([{ name: "IMAN_UNCR_ID", referencedColumnName: "uncrId" },
])

public imanUncr:PecrUnidadeCriacao;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.pecrItemMovimentoAnimals)
@JoinColumn([{ name: "IMAN_PRDT_ID", referencedColumnName: "prdtId" },
])

public imanPrdt:CdstProduto;

@ManyToOne(()=>PecrCapaMovimentoAnimal,pecrCapaMovimentoAnimal=>pecrCapaMovimentoAnimal.pecrItemMovimentoAnimals)
@JoinColumn([{ name: "IMAN_CMAN_ID", referencedColumnName: "cmanId" },
])

public imanCman:PecrCapaMovimentoAnimal;

@RelationId((pecrItemMovimentoAnimal:PecrItemMovimentoAnimal)=>pecrItemMovimentoAnimal.imanUnid)
public imanUnidId2:string | null;

@RelationId((pecrItemMovimentoAnimal:PecrItemMovimentoAnimal)=>pecrItemMovimentoAnimal.imanUncr)
public imanUncrId2:string | null;

@RelationId((pecrItemMovimentoAnimal:PecrItemMovimentoAnimal)=>pecrItemMovimentoAnimal.imanPrdt)
public imanPrdtId2:string | null;

@RelationId((pecrItemMovimentoAnimal:PecrItemMovimentoAnimal)=>pecrItemMovimentoAnimal.imanCman)
public imanCmanId2:string | null;

public constructor(init?: Partial<PecrItemMovimentoAnimal>) {
    super();
    Object.assign(this, init);
}
}
