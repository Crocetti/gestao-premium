import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrBancoConta} from './fncr-banco-conta'
import {CmnsPessoa} from './cmns-pessoa'
import {FncrCaixaMovimento} from './fncr-caixa-movimento'


@Index("FK_PESS_RS_CAIX",["caixPessId",],{  })
@Index("PK_FNCR_CAIXA",["caixId",],{ unique:true })
@Entity("FNCR_CAIXA")
export  class FncrCaixa extends BaseEntity {

@Column("varchar",{ primary:true,name:"CAIX_ID",length:27 })
public caixId:string;

@Column("varchar",{ name:"CAIX_PESS_ID",nullable:true,length:27 })
public caixPessId:string | null;

@Column("varchar",{ name:"CAIX_CODIGO",nullable:true,length:5 })
public caixCodigo:string | null;

@Column("varchar",{ name:"CAIX_NOME",nullable:true,length:40 })
public caixNome:string | null;

@Column("smallint",{ name:"CAIX_ATIVO",nullable:true,default: () => "0", })
public caixAtivo:number | null;

@Column("datetime",{ name:"CAIX_LASTUPDATE",nullable:true })
public caixLastupdate:LocalDateTime | null;

@OneToMany(()=>FncrBancoConta,fncrBancoConta=>fncrBancoConta.bancCaix)


public fncrBancoContas:FncrBancoConta[];

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.fncrCaixas)
@JoinColumn([{ name: "CAIX_PESS_ID", referencedColumnName: "pessId" },
])

public caixPess:CmnsPessoa;

@OneToMany(()=>FncrCaixaMovimento,fncrCaixaMovimento=>fncrCaixaMovimento.cxmvCaix)


public fncrCaixaMovimentos:FncrCaixaMovimento[];

@RelationId((fncrCaixa:FncrCaixa)=>fncrCaixa.caixPess)
public caixPessId2:string | null;

public constructor(init?: Partial<FncrCaixa>) {
    super();
    Object.assign(this, init);
}
}
