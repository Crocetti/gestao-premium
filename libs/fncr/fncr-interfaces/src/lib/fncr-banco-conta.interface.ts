import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrBanco} from './fncr-banco'
import {FncrCaixa} from './fncr-caixa'
import {FncrBancoContaSaldo} from './fncr-banco-conta-saldo'
import {FncrBancoMovimento} from './fncr-banco-movimento'


@Index("FK_BANC_RS_BCCT",["bcctBancId",],{  })
@Index("FK_CAIX_RS_BANC",["bancCaixId",],{  })
@Index("PK_FNCR_BANCO_CONTA",["bcctId",],{ unique:true })
@Entity("FNCR_BANCO_CONTA")
export  class FncrBancoConta extends BaseEntity {

@Column("varchar",{ primary:true,name:"BCCT_ID",length:27 })
public bcctId:string;

@Column("varchar",{ name:"BANC_CAIX_ID",nullable:true,length:27 })
public bancCaixId:string | null;

@Column("varchar",{ name:"BCCT_BANC_ID",nullable:true,length:27 })
public bcctBancId:string | null;

@Column("varchar",{ name:"BCCT_NR_AGENCIA",nullable:true,length:10 })
public bcctNrAgencia:string | null;

@Column("varchar",{ name:"BCCT_NR_CONTA",nullable:true,length:10 })
public bcctNrConta:string | null;

@Column("datetime",{ name:"BCCT_DT_ABERTURA",nullable:true })
public bcctDtAbertura:LocalDateTime | null;

@Column("varchar",{ name:"BCCT_CLASSIFICACAO",nullable:true,length:25 })
public bcctClassificacao:string | null;

@Column("money",{ name:"BCCT_LIMITE_ESPECIAL",nullable:true,default: () => "0", })
public bcctLimiteEspecial:number | null;

@Column("smallint",{ name:"BCCT_ATIVO",nullable:true,default: () => "0", })
public bcctAtivo:number | null;

@Column("datetime",{ name:"BCCT_LASTUPDATE",nullable:true })
public bcctLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrBanco,fncrBanco=>fncrBanco.fncrBancoContas)
@JoinColumn([{ name: "BCCT_BANC_ID", referencedColumnName: "bancId" },
])

public bcctBanc:FncrBanco;

@ManyToOne(()=>FncrCaixa,fncrCaixa=>fncrCaixa.fncrBancoContas)
@JoinColumn([{ name: "BANC_CAIX_ID", referencedColumnName: "caixId" },
])

public bancCaix:FncrCaixa;

@OneToMany(()=>FncrBancoContaSaldo,fncrBancoContaSaldo=>fncrBancoContaSaldo.bccsBcct)


public fncrBancoContaSaldos:FncrBancoContaSaldo[];

@OneToMany(()=>FncrBancoMovimento,fncrBancoMovimento=>fncrBancoMovimento.bcmvBcct)


public fncrBancoMovimentos:FncrBancoMovimento[];

@RelationId((fncrBancoConta:FncrBancoConta)=>fncrBancoConta.bcctBanc)
public bcctBancId2:string | null;

@RelationId((fncrBancoConta:FncrBancoConta)=>fncrBancoConta.bancCaix)
public bancCaixId2:string | null;

public constructor(init?: Partial<FncrBancoConta>) {
    super();
    Object.assign(this, init);
}
}
