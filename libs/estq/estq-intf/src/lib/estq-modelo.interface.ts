import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {EstqMercadoria} from './estq-mercadoria'


@Index("PK_ESTQ_MODELO",["modeId",],{ unique:true })
@Entity("ESTQ_MODELO")
export  class EstqModelo extends BaseEntity {

@Column("varchar",{ primary:true,name:"MODE_ID",length:27 })
public modeId:string;

@Column("varchar",{ name:"MODE_CODIGO",nullable:true,length:5 })
public modeCodigo:string | null;

@Column("varchar",{ name:"MODE_NOME",nullable:true,length:40 })
public modeNome:string | null;

@Column("varchar",{ name:"MODE_DESCRICAO",nullable:true,length:128 })
public modeDescricao:string | null;

@Column("smallint",{ name:"MODE_ATIVO",nullable:true,default: () => "0", })
public modeAtivo:number | null;

@Column("datetime",{ name:"MODE_LASTUPDATE",nullable:true })
public modeLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.mrcdMode)


public estqMercadorias:EstqMercadoria[];

public constructor(init?: Partial<EstqModelo>) {
    super();
    Object.assign(this, init);
}
}
