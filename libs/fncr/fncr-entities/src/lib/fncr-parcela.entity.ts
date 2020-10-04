import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrTitulo} from './fncr-titulo'
import {FncrParcelaBaixa} from './fncr-parcela-baixa'


@Index("FK_TTLS_RS_PRCL",["prclTtlsId",],{  })
@Index("PK_FNCR_PARCELA",["prclId",],{ unique:true })
@Entity("FNCR_PARCELA")
export  class FncrParcela extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRCL_ID",length:27 })
public prclId:string;

@Column("varchar",{ name:"PRCL_TTLS_ID",nullable:true,length:27 })
public prclTtlsId:string | null;

@Column("varchar",{ name:"PRCL_NUMERO",nullable:true,length:20 })
public prclNumero:string | null;

@Column("datetime",{ name:"PRCL_DT_LANCAMENTO",nullable:true })
public prclDtLancamento:LocalDateTime | null;

@Column("datetime",{ name:"PRCL_DT_EMISSAO",nullable:true })
public prclDtEmissao:LocalDateTime | null;

@Column("datetime",{ name:"PRCL_DT_VENCIMENTO",nullable:true })
public prclDtVencimento:LocalDateTime | null;

@Column("datetime",{ name:"PRCL_DT_BAIXA",nullable:true })
public prclDtBaixa:LocalDateTime | null;

@Column("money",{ name:"PRCL_VLR_PARCELA",nullable:true,default: () => "0", })
public prclVlrParcela:number | null;

@Column("money",{ name:"PRCL_VLR_DESCONTOS",nullable:true,default: () => "0", })
public prclVlrDescontos:number | null;

@Column("money",{ name:"PRCL_VLR_ACRESCIMO",nullable:true,default: () => "0", })
public prclVlrAcrescimo:number | null;

@Column("money",{ name:"PRCL_VLR_DESPESAS",nullable:true,default: () => "0", })
public prclVlrDespesas:number | null;

@Column("money",{ name:"PRCL_VLR_JUROS",nullable:true,default: () => "0", })
public prclVlrJuros:number | null;

@Column("money",{ name:"PRCL_VLR_MULTA",nullable:true,default: () => "0", })
public prclVlrMulta:number | null;

@Column("money",{ name:"PRCL_VLR_SALDO",nullable:true,default: () => "0", })
public prclVlrSaldo:number | null;

@Column("varchar",{ name:"PRCL_COMPLEMENTO",nullable:true,length:128 })
public prclComplemento:string | null;

@Column("varchar",{ name:"PRCL_SITUACAO",nullable:true,length:15 })
public prclSituacao:string | null;

@Column("datetime",{ name:"PRCL_LASTUPDATE",nullable:true })
public prclLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrTitulo,fncrTitulo=>fncrTitulo.fncrParcelas)
@JoinColumn([{ name: "PRCL_TTLS_ID", referencedColumnName: "ttlsId" },
])

public prclTtls:FncrTitulo;

@OneToMany(()=>FncrParcelaBaixa,fncrParcelaBaixa=>fncrParcelaBaixa.prbxPrcl)


public fncrParcelaBaixas:FncrParcelaBaixa[];

@RelationId((fncrParcela:FncrParcela)=>fncrParcela.prclTtls)
public prclTtlsId2:string | null;

public constructor(init?: Partial<FncrParcela>) {
    super();
    Object.assign(this, init);
}
}
