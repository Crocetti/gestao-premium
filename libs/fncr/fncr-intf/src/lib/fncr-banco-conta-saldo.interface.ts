import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FncrBancoConta} from './fncr-banco-conta'


@Index("FK_BCCT_RS_BCCS",["bccsBcctId",],{  })
@Index("PK_FNCR_BANCO_CONTA_SALDO",["bccsId",],{ unique:true })
@Entity("FNCR_BANCO_CONTA_SALDO")
export  class FncrBancoContaSaldo extends BaseEntity {

@Column("varchar",{ primary:true,name:"BCCS_ID",length:27 })
public bccsId:string;

@Column("varchar",{ name:"BCCS_BCCT_ID",nullable:true,length:27 })
public bccsBcctId:string | null;

@Column("datetime",{ name:"BCCS_REFERENCIA",nullable:true })
public bccsReferencia:LocalDateTime | null;

@Column("money",{ name:"BCCS_VALOR",nullable:true,default: () => "0", })
public bccsValor:number | null;

@Column("datetime",{ name:"BCCS_LASTUPDATE",nullable:true })
public bccsLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrBancoConta,fncrBancoConta=>fncrBancoConta.fncrBancoContaSaldos)
@JoinColumn([{ name: "BCCS_BCCT_ID", referencedColumnName: "bcctId" },
])

public bccsBcct:FncrBancoConta;

@RelationId((fncrBancoContaSaldo:FncrBancoContaSaldo)=>fncrBancoContaSaldo.bccsBcct)
public bccsBcctId2:string | null;

public constructor(init?: Partial<FncrBancoContaSaldo>) {
    super();
    Object.assign(this, init);
}
}
