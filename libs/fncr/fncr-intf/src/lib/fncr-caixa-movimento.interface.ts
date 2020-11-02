import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrCaixaItem} from './fncr-caixa-item'
import {FncrCaixa} from './fncr-caixa'


@Index("FK_CAIX_RS_CXMV",["cxmvCaixId",],{  })
@Index("PK_FNCR_CAIXA_MOVIMENTO",["cxmvId",],{ unique:true })
@Entity("FNCR_CAIXA_MOVIMENTO")
export  class FncrCaixaMovimento extends BaseEntity {

@Column("varchar",{ primary:true,name:"CXMV_ID",length:27 })
public cxmvId:string;

@Column("varchar",{ name:"CXMV_CAIX_ID",nullable:true,length:27 })
public cxmvCaixId:string | null;

@Column("varchar",{ name:"CXMV_NUMERO",nullable:true,length:20 })
public cxmvNumero:string | null;

@Column("datetime",{ name:"CXMV_DT_ABERTURA",nullable:true })
public cxmvDtAbertura:LocalDateTime | null;

@Column("datetime",{ name:"CXMV_DT_FECHAMENTO",nullable:true })
public cxmvDtFechamento:LocalDateTime | null;

@Column("money",{ name:"CXMV_VLR_CREDITOS",nullable:true,default: () => "0", })
public cxmvVlrCreditos:number | null;

@Column("money",{ name:"CXMV_VLR_DEBITOS",nullable:true,default: () => "0", })
public cxmvVlrDebitos:number | null;

@Column("money",{ name:"CXMV_SALDO_ABERTURA",nullable:true,default: () => "0", })
public cxmvSaldoAbertura:number | null;

@Column("money",{ name:"CXMV_SALDO_FECHAMENTO",nullable:true,default: () => "0", })
public cxmvSaldoFechamento:number | null;

@Column("datetime",{ name:"CXMV_LASTUPDATE",nullable:true })
public cxmvLastupdate:LocalDateTime | null;

@OneToMany(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.cxitCxmv)


public fncrCaixaItems:FncrCaixaItem[];

@ManyToOne(()=>FncrCaixa,fncrCaixa=>fncrCaixa.fncrCaixaMovimentos)
@JoinColumn([{ name: "CXMV_CAIX_ID", referencedColumnName: "caixId" },
])

public cxmvCaix:FncrCaixa;

@RelationId((fncrCaixaMovimento:FncrCaixaMovimento)=>fncrCaixaMovimento.cxmvCaix)
public cxmvCaixId2:string | null;

public constructor(init?: Partial<FncrCaixaMovimento>) {
    super();
    Object.assign(this, init);
}
}
