import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {EstqMercadoria} from './estq-mercadoria'


@Index("PK_ESTQ_MARCA",["marcId",],{ unique:true })
@Entity("ESTQ_MARCA")
export  class EstqMarca extends BaseEntity {

@Column("varchar",{ primary:true,name:"MARC_ID",length:27 })
public marcId:string;

@Column("varchar",{ name:"MARC_CODIGO",nullable:true,length:5 })
public marcCodigo:string | null;

@Column("varchar",{ name:"MARC_NOME",nullable:true,length:40 })
public marcNome:string | null;

@Column("varchar",{ name:"MARC_DESCRICAO",nullable:true,length:128 })
public marcDescricao:string | null;

@Column("smallint",{ name:"MARC_ATIVO",nullable:true,default: () => "0", })
public marcAtivo:number | null;

@Column("datetime",{ name:"MARC_LASTUPDATE",nullable:true })
public marcLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.mrcdMarc)


public estqMercadorias:EstqMercadoria[];

public constructor(init?: Partial<EstqMarca>) {
    super();
    Object.assign(this, init);
}
}
