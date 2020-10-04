import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FncrCaixaItem} from './fncr-caixa-item'
import {FncrHistoricoPadrao} from './fncr-historico-padrao'
import {FncrParcela} from './fncr-parcela'


@Index("FK_CXIT_RS_PRBX",["prbxCxitId",],{  })
@Index("FK_HSPD_RS_PRBX",["prbxHspdId",],{  })
@Index("FK_PRCL_RS_PRBX",["prbxPrclId",],{  })
@Index("PK_FNCR_PARCELA_BAIXA",["prbxId",],{ unique:true })
@Entity("FNCR_PARCELA_BAIXA")
export  class FncrParcelaBaixa extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRBX_ID",length:27 })
public prbxId:string;

@Column("varchar",{ name:"PRBX_HSPD_ID",nullable:true,length:27 })
public prbxHspdId:string | null;

@Column("varchar",{ name:"PRBX_CXIT_ID",nullable:true,length:27 })
public prbxCxitId:string | null;

@Column("varchar",{ name:"PRBX_PRCL_ID",nullable:true,length:27 })
public prbxPrclId:string | null;

@Column("varchar",{ name:"PRBX_FORMA_PAGAMENTO",nullable:true,length:15 })
public prbxFormaPagamento:string | null;

@Column("datetime",{ name:"PRBX_DT_LANCAMENTO",nullable:true })
public prbxDtLancamento:LocalDateTime | null;

@Column("datetime",{ name:"PRBX_DT_PAGAMENTO",nullable:true })
public prbxDtPagamento:LocalDateTime | null;

@Column("money",{ name:"PRBX_VLR_PAGAMENTO",nullable:true,default: () => "0", })
public prbxVlrPagamento:number | null;

@Column("money",{ name:"PRBX_VLR_DEVIDO",nullable:true,default: () => "0", })
public prbxVlrDevido:number | null;

@Column("money",{ name:"PRBX_VLR_DESCONTOS",nullable:true,default: () => "0", })
public prbxVlrDescontos:number | null;

@Column("money",{ name:"PRBX_VLR_ACRECIMOS",nullable:true,default: () => "0", })
public prbxVlrAcrecimos:number | null;

@Column("money",{ name:"PRBX_VLR_DESPESAS",nullable:true,default: () => "0", })
public prbxVlrDespesas:number | null;

@Column("money",{ name:"PRBX_VLR_JUROS",nullable:true,default: () => "0", })
public prbxVlrJuros:number | null;

@Column("money",{ name:"PRBX_VLR_MULTA",nullable:true,default: () => "0", })
public prbxVlrMulta:number | null;

@Column("smallint",{ name:"PRBX_QUITA_PARCELA",nullable:true,default: () => "0", })
public prbxQuitaParcela:number | null;

@Column("datetime",{ name:"PRBX_LASTUPDATE",nullable:true })
public prbxLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrCaixaItem,fncrCaixaItem=>fncrCaixaItem.fncrParcelaBaixas)
@JoinColumn([{ name: "PRBX_CXIT_ID", referencedColumnName: "cxitId" },
])

public prbxCxit:FncrCaixaItem;

@ManyToOne(()=>FncrHistoricoPadrao,fncrHistoricoPadrao=>fncrHistoricoPadrao.fncrParcelaBaixas)
@JoinColumn([{ name: "PRBX_HSPD_ID", referencedColumnName: "hspdId" },
])

public prbxHspd:FncrHistoricoPadrao;

@ManyToOne(()=>FncrParcela,fncrParcela=>fncrParcela.fncrParcelaBaixas)
@JoinColumn([{ name: "PRBX_PRCL_ID", referencedColumnName: "prclId" },
])

public prbxPrcl:FncrParcela;

@RelationId((fncrParcelaBaixa:FncrParcelaBaixa)=>fncrParcelaBaixa.prbxCxit)
public prbxCxitId2:string | null;

@RelationId((fncrParcelaBaixa:FncrParcelaBaixa)=>fncrParcelaBaixa.prbxHspd)
public prbxHspdId2:string | null;

@RelationId((fncrParcelaBaixa:FncrParcelaBaixa)=>fncrParcelaBaixa.prbxPrcl)
public prbxPrclId2:string | null;

public constructor(init?: Partial<FncrParcelaBaixa>) {
    super();
    Object.assign(this, init);
}
}
