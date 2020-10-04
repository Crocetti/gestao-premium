import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {FncrNotaFiscalTitulo} from './fncr-nota-fiscal-titulo'
import {CdstCliente} from './cdst-cliente'
import {EstqCapaMovimento} from './estq-capa-movimento'
import {CdstFornecedor} from './cdst-fornecedor'
import {FncrFormaVencimento} from './fncr-forma-vencimento'
import {FncrHistoricoPadrao} from './fncr-historico-padrao'
import {CdstTransportadora} from './cdst-transportadora'
import {FsclDocumentoItem} from './fscl-documento-item'
import {FsclDocumentoPessoa} from './fscl-documento-pessoa'


@Index("FK_CLNT_RS_DCMT",["dcmtClntId",],{  })
@Index("FK_CPMV_RS_DCMT",["dcmtCpmvId",],{  })
@Index("FK_FRNC_RS_DCMT",["dcmtFrncId",],{  })
@Index("FK_FRVN_RS_DCMT",["dcmtFrvnId",],{  })
@Index("FK_HSPD_RS_DCMT",["dcmtHspdId",],{  })
@Index("FK_TRNS_RS_DCMT",["dcmtTrnsId",],{  })
@Index("PK_FSCL_DOCUMENTO",["dcmtId",],{ unique:true })
@Entity("FSCL_DOCUMENTO")
export  class FsclDocumento extends BaseEntity {

@Column("varchar",{ primary:true,name:"DCMT_ID",length:27 })
public dcmtId:string;

@Column("varchar",{ name:"DCMT_CPMV_ID",nullable:true,length:27 })
public dcmtCpmvId:string | null;

@Column("varchar",{ name:"DCMT_CLNT_ID",nullable:true,length:27 })
public dcmtClntId:string | null;

@Column("varchar",{ name:"DCMT_HSPD_ID",nullable:true,length:27 })
public dcmtHspdId:string | null;

@Column("varchar",{ name:"DCMT_FRNC_ID",nullable:true,length:27 })
public dcmtFrncId:string | null;

@Column("varchar",{ name:"DCMT_TRNS_ID",nullable:true,length:27 })
public dcmtTrnsId:string | null;

@Column("varchar",{ name:"DCMT_FRVN_ID",nullable:true,length:27 })
public dcmtFrvnId:string | null;

@Column("varchar",{ name:"DCMT_NUMERO",nullable:true,length:15 })
public dcmtNumero:string | null;

@Column("varchar",{ name:"DCMT_NFE",nullable:true,length:128 })
public dcmtNfe:string | null;

@Column("datetime",{ name:"DCMT_DT_EMISSAO",nullable:true })
public dcmtDtEmissao:LocalDateTime | null;

@Column("datetime",{ name:"DCMT_DT_LANCAMENTO",nullable:true })
public dcmtDtLancamento:LocalDateTime | null;

@Column("varchar",{ name:"DCMT_TP_DOCUMENTO",nullable:true,length:25 })
public dcmtTpDocumento:string | null;

@Column("varchar",{ name:"DCMT_TP_MOVIMENTO",nullable:true,length:10 })
public dcmtTpMovimento:string | null;

@Column("varchar",{ name:"DCMT_TP_TRANSACAO",nullable:true,length:25 })
public dcmtTpTransacao:string | null;

@Column("varchar",{ name:"DCMT_STATUS",nullable:true,length:15 })
public dcmtStatus:string | null;

@Column("int",{ name:"DCMT_QTD_ITENS",nullable:true })
public dcmtQtdItens:number | null;

@Column("money",{ name:"DCMT_VLR_TOTAL",nullable:true,default: () => "0", })
public dcmtVlrTotal:number | null;

@Column("money",{ name:"DCMT_BASE_CONTABIL",nullable:true,default: () => "0", })
public dcmtBaseContabil:number | null;

@Column("money",{ name:"DCMT_BASE_ICMS",nullable:true,default: () => "0", })
public dcmtBaseIcms:number | null;

@Column("money",{ name:"DCMT_VLR_ICMS",nullable:true,default: () => "0", })
public dcmtVlrIcms:number | null;

@Column("money",{ name:"DCMT_BASE_ICMS_SUBS",nullable:true,default: () => "0", })
public dcmtBaseIcmsSubs:number | null;

@Column("money",{ name:"DCMT_VLR_ICMS_SUBS",nullable:true,default: () => "0", })
public dcmtVlrIcmsSubs:number | null;

@Column("money",{ name:"DCMT_BASE_COFINS",nullable:true,default: () => "0", })
public dcmtBaseCofins:number | null;

@Column("money",{ name:"DCMT_VLR_COFINS",nullable:true,default: () => "0", })
public dcmtVlrCofins:number | null;

@Column("money",{ name:"DCMT_BASE_COFINS_RET",nullable:true,default: () => "0", })
public dcmtBaseCofinsRet:number | null;

@Column("money",{ name:"DCMT_VLR_COFINS_RET",nullable:true,default: () => "0", })
public dcmtVlrCofinsRet:number | null;

@Column("money",{ name:"DCMT_BASE_PIS",nullable:true,default: () => "0", })
public dcmtBasePis:number | null;

@Column("money",{ name:"DCMT_VLR_PIS",nullable:true,default: () => "0", })
public dcmtVlrPis:number | null;

@Column("money",{ name:"DCMT_BASE_PIS_RET",nullable:true,default: () => "0", })
public dcmtBasePisRet:number | null;

@Column("money",{ name:"DCMT_VLR_PIS_RET",nullable:true,default: () => "0", })
public dcmtVlrPisRet:number | null;

@Column("money",{ name:"DCMT_VLR_IPI",nullable:true,default: () => "0", })
public dcmtVlrIpi:number | null;

@Column("varchar",{ name:"DCMT_TIPO_FRETE",nullable:true,length:20 })
public dcmtTipoFrete:string | null;

@Column("money",{ name:"DCMT_VLR_FRETE",nullable:true,default: () => "0", })
public dcmtVlrFrete:number | null;

@Column("money",{ name:"DCMT_VLR_SEGURO",nullable:true,default: () => "0", })
public dcmtVlrSeguro:number | null;

@Column("money",{ name:"DCMT_VLR_DESPESAS",nullable:true,default: () => "0", })
public dcmtVlrDespesas:number | null;

@Column("money",{ name:"DCMT_VLR_DESCONTOS",nullable:true,default: () => "0", })
public dcmtVlrDescontos:number | null;

@Column("datetime",{ name:"DCMT_LASTUPDATE",nullable:true })
public dcmtLastupdate:LocalDateTime | null;

@OneToMany(()=>FncrNotaFiscalTitulo,fncrNotaFiscalTitulo=>fncrNotaFiscalTitulo.nfttNtfs)


public fncrNotaFiscalTitulos:FncrNotaFiscalTitulo[];

@ManyToOne(()=>CdstCliente,cdstCliente=>cdstCliente.fsclDocumentos)
@JoinColumn([{ name: "DCMT_CLNT_ID", referencedColumnName: "clntId" },
])

public dcmtClnt:CdstCliente;

@ManyToOne(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.fsclDocumentos)
@JoinColumn([{ name: "DCMT_CPMV_ID", referencedColumnName: "cpmvId" },
])

public dcmtCpmv:EstqCapaMovimento;

@ManyToOne(()=>CdstFornecedor,cdstFornecedor=>cdstFornecedor.fsclDocumentos)
@JoinColumn([{ name: "DCMT_FRNC_ID", referencedColumnName: "frncId" },
])

public dcmtFrnc:CdstFornecedor;

@ManyToOne(()=>FncrFormaVencimento,fncrFormaVencimento=>fncrFormaVencimento.fsclDocumentos)
@JoinColumn([{ name: "DCMT_FRVN_ID", referencedColumnName: "frvnId" },
])

public dcmtFrvn:FncrFormaVencimento;

@ManyToOne(()=>FncrHistoricoPadrao,fncrHistoricoPadrao=>fncrHistoricoPadrao.fsclDocumentos)
@JoinColumn([{ name: "DCMT_HSPD_ID", referencedColumnName: "hspdId" },
])

public dcmtHspd:FncrHistoricoPadrao;

@ManyToOne(()=>CdstTransportadora,cdstTransportadora=>cdstTransportadora.fsclDocumentos)
@JoinColumn([{ name: "DCMT_TRNS_ID", referencedColumnName: "trnsId" },
])

public dcmtTrns:CdstTransportadora;

@OneToMany(()=>FsclDocumentoItem,fsclDocumentoItem=>fsclDocumentoItem.dcitDcmt)


public fsclDocumentoItems:FsclDocumentoItem[];

@OneToMany(()=>FsclDocumentoPessoa,fsclDocumentoPessoa=>fsclDocumentoPessoa.dcpsDcmt)


public fsclDocumentoPessoas:FsclDocumentoPessoa[];

@RelationId((fsclDocumento:FsclDocumento)=>fsclDocumento.dcmtClnt)
public dcmtClntId2:string | null;

@RelationId((fsclDocumento:FsclDocumento)=>fsclDocumento.dcmtCpmv)
public dcmtCpmvId2:string | null;

@RelationId((fsclDocumento:FsclDocumento)=>fsclDocumento.dcmtFrnc)
public dcmtFrncId2:string | null;

@RelationId((fsclDocumento:FsclDocumento)=>fsclDocumento.dcmtFrvn)
public dcmtFrvnId2:string | null;

@RelationId((fsclDocumento:FsclDocumento)=>fsclDocumento.dcmtHspd)
public dcmtHspdId2:string | null;

@RelationId((fsclDocumento:FsclDocumento)=>fsclDocumento.dcmtTrns)
public dcmtTrnsId2:string | null;

public constructor(init?: Partial<FsclDocumento>) {
    super();
    Object.assign(this, init);
}
}
