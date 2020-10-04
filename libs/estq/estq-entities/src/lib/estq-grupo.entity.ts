import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {EstqMercadoria} from './estq-mercadoria'


@Index("PK_ESTQ_GRUPO",["grpsId",],{ unique:true })
@Entity("ESTQ_GRUPO")
export  class EstqGrupo extends BaseEntity {

@Column("varchar",{ primary:true,name:"GRPS_ID",length:27 })
public grpsId:string;

@Column("varchar",{ name:"GRPS_CODIGO",nullable:true,length:5 })
public grpsCodigo:string | null;

@Column("varchar",{ name:"GRPS_NOME",nullable:true,length:40 })
public grpsNome:string | null;

@Column("varchar",{ name:"GRPS_DESCRICAO",nullable:true,length:128 })
public grpsDescricao:string | null;

@Column("smallint",{ name:"GRPS_ATIVO",nullable:true,default: () => "0", })
public grpsAtivo:number | null;

@Column("datetime",{ name:"GRPS_LASTUPDATE",nullable:true })
public grpsLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.mrcdGrps)


public estqMercadorias:EstqMercadoria[];

public constructor(init?: Partial<EstqGrupo>) {
    super();
    Object.assign(this, init);
}
}
