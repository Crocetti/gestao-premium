import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CdstCliente} from './cdst-cliente'
import {CdstFornecedor} from './cdst-fornecedor'
import {FncrFormaVencimento} from './fncr-forma-vencimento'
import {FncrHistoricoPadrao} from './fncr-historico-padrao'
import {CmnsUsuario} from './cmns-usuario'
import {RchmFuncionario} from './rchm-funcionario'
import {EstqItemMovimento} from './estq-item-movimento'
import {FsclDocumento} from './fscl-documento'
import {VeteOrdemDeServico} from './vete-ordem-de-servico'


@Index("FK_CLNT_RS_CPMV",["cpmvClntId",],{  })
@Index("FK_CPMV_RS_CPMV",["cpmvCpmvId",],{  })
@Index("FK_FRNC_RS_CPMV",["cpmvFrncId",],{  })
@Index("FK_FRVN_RS_CPMV",["cpmvFrvnId",],{  })
@Index("FK_HSPD_RS_CPMV",["cpmvHspdId",],{  })
@Index("FK_USRS_RS_CPMV",["cpmvUsrsId",],{  })
@Index("FK_VEND_RS_CPMV",["cpmvVendId",],{  })
@Index("PK_ESTQ_CAPA_MOVIMENTO",["cpmvId",],{ unique:true })
@Entity("ESTQ_CAPA_MOVIMENTO")
export  class EstqCapaMovimento extends BaseEntity {

@Column("varchar",{ primary:true,name:"CPMV_ID",length:27 })
public cpmvId:string;

@Column("varchar",{ name:"CPMV_CLNT_ID",nullable:true,length:27 })
public cpmvClntId:string | null;

@Column("varchar",{ name:"CPMV_HSPD_ID",nullable:true,length:27 })
public cpmvHspdId:string | null;

@Column("varchar",{ name:"CPMV_FRVN_ID",nullable:true,length:27 })
public cpmvFrvnId:string | null;

@Column("varchar",{ name:"CPMV_FRNC_ID",nullable:true,length:27 })
public cpmvFrncId:string | null;

@Column("varchar",{ name:"CPMV_CPMV_ID",nullable:true,length:27 })
public cpmvCpmvId:string | null;

@Column("varchar",{ name:"CPMV_USRS_ID",nullable:true,length:27 })
public cpmvUsrsId:string | null;

@Column("varchar",{ name:"CPMV_VEND_ID",nullable:true,length:27 })
public cpmvVendId:string | null;

@Column("varchar",{ name:"CPMV_NR_DOCUMENTO",nullable:true,length:15 })
public cpmvNrDocumento:string | null;

@Column("varchar",{ name:"CPMV_TP_DOCUMENTO",nullable:true,length:25 })
public cpmvTpDocumento:string | null;

@Column("datetime",{ name:"CPMV_DT_EMISSAO",nullable:true })
public cpmvDtEmissao:LocalDateTime | null;

@Column("datetime",{ name:"CPMV_DT_LANCAMENTO",nullable:true })
public cpmvDtLancamento:LocalDateTime | null;

@Column("varchar",{ name:"CPMV_TP_MOVIMENTO",nullable:true,length:10 })
public cpmvTpMovimento:string | null;

@Column("varchar",{ name:"CPMV_TP_TRANSACAO",nullable:true,length:25 })
public cpmvTpTransacao:string | null;

@Column("datetime",{ name:"CPMV_DT_SAIDA",nullable:true })
public cpmvDtSaida:LocalDateTime | null;

@Column("varchar",{ name:"CPMV_NATUREZA_OPERACAO",nullable:true,length:40 })
public cpmvNaturezaOperacao:string | null;

@Column("varchar",{ name:"CPMV_CHAVE_ACESSO",nullable:true,length:128 })
public cpmvChaveAcesso:string | null;

@Column("varchar",{ name:"CPMV_PROTOCOLO_USO",nullable:true,length:40 })
public cpmvProtocoloUso:string | null;

@Column("numeric",{ name:"CPMV_PCT_DESC_SERVICO",nullable:true,precision:18,scale:4 })
public cpmvPctDescServico:number | null;

@Column("money",{ name:"CPMV_VLR_DESC_SERVICO",nullable:true,default: () => "0", })
public cpmvVlrDescServico:number | null;

@Column("money",{ name:"CPMV_VLR_SUB_TOTAL",nullable:true,default: () => "0", })
public cpmvVlrSubTotal:number | null;

@Column("money",{ name:"CPMV_VLR_BASE_ICMS",nullable:true,default: () => "0", })
public cpmvVlrBaseIcms:number | null;

@Column("money",{ name:"CPMV_VLR_ICMS",nullable:true,default: () => "0", })
public cpmvVlrIcms:number | null;

@Column("money",{ name:"CPMV_VLR_BASE_ICMS_SUBST",nullable:true,default: () => "0", })
public cpmvVlrBaseIcmsSubst:number | null;

@Column("money",{ name:"CPMV_VLR_ICMS_SUBST",nullable:true,default: () => "0", })
public cpmvVlrIcmsSubst:number | null;

@Column("money",{ name:"CPMV_VLR_PRODUTOS",nullable:true,default: () => "0", })
public cpmvVlrProdutos:number | null;

@Column("money",{ name:"CPMV_VLR_FRETE",nullable:true,default: () => "0", })
public cpmvVlrFrete:number | null;

@Column("money",{ name:"CPMV_VLR_SEGURO",nullable:true,default: () => "0", })
public cpmvVlrSeguro:number | null;

@Column("money",{ name:"CPMV_VLR_DESCONTO",nullable:true,default: () => "0", })
public cpmvVlrDesconto:number | null;

@Column("money",{ name:"CPMV_VLR_OUTRAS_DESPESAS",nullable:true,default: () => "0", })
public cpmvVlrOutrasDespesas:number | null;

@Column("money",{ name:"CPMV_VLR_IPI",nullable:true,default: () => "0", })
public cpmvVlrIpi:number | null;

@Column("money",{ name:"CPMV_VLR_DOCUMENTO",nullable:true,default: () => "0", })
public cpmvVlrDocumento:number | null;

@Column("numeric",{ name:"CPMV_QTD_ITENS",nullable:true,precision:18,scale:4,default: () => "0", })
public cpmvQtdItens:number | null;

@Column("varchar",{ name:"CPMV_STATUS",nullable:true,length:15 })
public cpmvStatus:string | null;

@Column("varchar",{ name:"CPMV_FORMA_PAGAMENTO",nullable:true,length:15 })
public cpmvFormaPagamento:string | null;

@Column("datetime",{ name:"CPMV_LASTUPDATE",nullable:true })
public cpmvLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstCliente,cdstCliente=>cdstCliente.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_CLNT_ID", referencedColumnName: "clntId" },
])

public cpmvClnt:CdstCliente;

@ManyToOne(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_CPMV_ID", referencedColumnName: "cpmvId" },
])

public cpmvCpmv:EstqCapaMovimento;

@OneToMany(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.cpmvCpmv)


public estqCapaMovimentos:EstqCapaMovimento[];

@ManyToOne(()=>CdstFornecedor,cdstFornecedor=>cdstFornecedor.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_FRNC_ID", referencedColumnName: "frncId" },
])

public cpmvFrnc:CdstFornecedor;

@ManyToOne(()=>FncrFormaVencimento,fncrFormaVencimento=>fncrFormaVencimento.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_FRVN_ID", referencedColumnName: "frvnId" },
])

public cpmvFrvn:FncrFormaVencimento;

@ManyToOne(()=>FncrHistoricoPadrao,fncrHistoricoPadrao=>fncrHistoricoPadrao.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_HSPD_ID", referencedColumnName: "hspdId" },
])

public cpmvHspd:FncrHistoricoPadrao;

@ManyToOne(()=>CmnsUsuario,cmnsUsuario=>cmnsUsuario.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_USRS_ID", referencedColumnName: "usrsId" },
])

public cpmvUsrs:CmnsUsuario;

@ManyToOne(()=>RchmFuncionario,rchmFuncionario=>rchmFuncionario.estqCapaMovimentos)
@JoinColumn([{ name: "CPMV_VEND_ID", referencedColumnName: "fcnrId" },
])

public cpmvVend:RchmFuncionario;

@OneToMany(()=>EstqItemMovimento,estqItemMovimento=>estqItemMovimento.itmvCpmv)


public estqItemMovimentos:EstqItemMovimento[];

@OneToMany(()=>FsclDocumento,fsclDocumento=>fsclDocumento.dcmtCpmv)


public fsclDocumentos:FsclDocumento[];

@OneToMany(()=>VeteOrdemDeServico,veteOrdemDeServico=>veteOrdemDeServico.osvtCpmv)


public veteOrdemDeServicos:VeteOrdemDeServico[];

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvClnt)
public cpmvClntId2:string | null;

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvCpmv)
public cpmvCpmvId2:string | null;

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvFrnc)
public cpmvFrncId2:string | null;

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvFrvn)
public cpmvFrvnId2:string | null;

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvHspd)
public cpmvHspdId2:string | null;

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvUsrs)
public cpmvUsrsId2:string | null;

@RelationId((estqCapaMovimento:EstqCapaMovimento)=>estqCapaMovimento.cpmvVend)
public cpmvVendId2:string | null;

public constructor(init?: Partial<EstqCapaMovimento>) {
    super();
    Object.assign(this, init);
}
}
