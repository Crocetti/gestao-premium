import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {EstqMercadoria} from './estq-mercadoria'


@Index("PK_ESTQ_SUBGRUPO",["sbgpId",],{ unique:true })
@Entity("ESTQ_SUBGRUPO")
export  class EstqSubgrupo extends BaseEntity {

@Column("varchar",{ primary:true,name:"SBGP_ID",length:27 })
public sbgpId:string;

@Column("varchar",{ name:"SBGP_CODIGO",nullable:true,length:5 })
public sbgpCodigo:string | null;

@Column("varchar",{ name:"SBGP_NOME",nullable:true,length:40 })
public sbgpNome:string | null;

@Column("varchar",{ name:"SBGP_DESCRICAO",nullable:true,length:128 })
public sbgpDescricao:string | null;

@Column("smallint",{ name:"SBGP_ATIVO",nullable:true,default: () => "0", })
public sbgpAtivo:number | null;

@Column("datetime",{ name:"SBGP_LASTUPDATE",nullable:true })
public sbgpLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.mrcdSbgp)


public estqMercadorias:EstqMercadoria[];

public constructor(init?: Partial<EstqSubgrupo>) {
    super();
    Object.assign(this, init);
}
}
