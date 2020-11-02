import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FncrBancoConta} from './fncr-banco-conta'
import {FncrHistoricoPadrao} from './fncr-historico-padrao'


@Index("FK_BCCT_RS_BCMV",["bcmvBcctId",],{  })
@Index("FK_HSPD_RS_BCMV",["bcmvHspdId",],{  })
@Index("PK_FNCR_BANCO_MOVIMENTO",["bcmvId",],{ unique:true })
@Entity("FNCR_BANCO_MOVIMENTO")
export  class FncrBancoMovimento extends BaseEntity {

@Column("varchar",{ primary:true,name:"BCMV_ID",length:27 })
public bcmvId:string;

@Column("varchar",{ name:"BCMV_BCCT_ID",nullable:true,length:27 })
public bcmvBcctId:string | null;

@Column("varchar",{ name:"BCMV_HSPD_ID",nullable:true,length:27 })
public bcmvHspdId:string | null;

@Column("varchar",{ name:"BCMV_NUMERO_DOCUMENTO",nullable:true,length:20 })
public bcmvNumeroDocumento:string | null;

@Column("datetime",{ name:"BCMV_DT_LANCAMENTO",nullable:true })
public bcmvDtLancamento:LocalDateTime | null;

@Column("datetime",{ name:"BCMV_DT_MOVIMENTO",nullable:true })
public bcmvDtMovimento:LocalDateTime | null;

@Column("money",{ name:"BCMV_VALOR",nullable:true,default: () => "0", })
public bcmvValor:number | null;

@Column("varchar",{ name:"BCMV_COMPLEMENTO",nullable:true,length:128 })
public bcmvComplemento:string | null;

@Column("datetime",{ name:"BCMV_LASTUPDATE",nullable:true })
public bcmvLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrBancoConta,fncrBancoConta=>fncrBancoConta.fncrBancoMovimentos)
@JoinColumn([{ name: "BCMV_BCCT_ID", referencedColumnName: "bcctId" },
])

public bcmvBcct:FncrBancoConta;

@ManyToOne(()=>FncrHistoricoPadrao,fncrHistoricoPadrao=>fncrHistoricoPadrao.fncrBancoMovimentos)
@JoinColumn([{ name: "BCMV_HSPD_ID", referencedColumnName: "hspdId" },
])

public bcmvHspd:FncrHistoricoPadrao;

@RelationId((fncrBancoMovimento:FncrBancoMovimento)=>fncrBancoMovimento.bcmvBcct)
public bcmvBcctId2:string | null;

@RelationId((fncrBancoMovimento:FncrBancoMovimento)=>fncrBancoMovimento.bcmvHspd)
public bcmvHspdId2:string | null;

public constructor(init?: Partial<FncrBancoMovimento>) {
    super();
    Object.assign(this, init);
}
}
