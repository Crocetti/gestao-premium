import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {FncrBancoConta} from './fncr-banco-conta'
import {FncrBancoModeloBoleto} from './fncr-banco-modelo-boleto'


@Index("PK_FNCR_BANCO",["bancId",],{ unique:true })
@Entity("FNCR_BANCO")
export  class FncrBanco extends BaseEntity {

@Column("varchar",{ primary:true,name:"BANC_ID",length:27 })
public bancId:string;

@Column("varchar",{ name:"BANC_CODIGO",nullable:true,length:3 })
public bancCodigo:string | null;

@Column("varchar",{ name:"BANC_NOME",nullable:true,length:128 })
public bancNome:string | null;

@Column("varchar",{ name:"BANC_APELIDO",nullable:true,length:25 })
public bancApelido:string | null;

@Column("smallint",{ name:"BANC_ATIVO",nullable:true,default: () => "0", })
public bancAtivo:number | null;

@Column("datetime",{ name:"BANC_LASTUPDATE",nullable:true })
public bancLastupdate:LocalDateTime | null;

@OneToMany(()=>FncrBancoConta,fncrBancoConta=>fncrBancoConta.bcctBanc)


public fncrBancoContas:FncrBancoConta[];

@OneToMany(()=>FncrBancoModeloBoleto,fncrBancoModeloBoleto=>fncrBancoModeloBoleto.bcmbBanc)


public fncrBancoModeloBoletos:FncrBancoModeloBoleto[];

public constructor(init?: Partial<FncrBanco>) {
    super();
    Object.assign(this, init);
}
}
