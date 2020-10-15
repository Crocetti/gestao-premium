import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FncrNotaFiscalTitulo } from "./fncr-nota-fiscal-titulo";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { CdstCliente } from "./cdst-cliente";
import { FncrHistoricoPadrao } from "./fncr-historico-padrao";
import { CdstFornecedor } from "./cdst-fornecedor";
import { CdstTransportadora } from "./cdst-transportadora";
import { FncrFormaVencimento } from "./fncr-forma-vencimento";
import { FsclDocumentoItem } from "./fscl-documento-item";
import { FsclDocumentoPessoa } from "./fscl-documento-pessoa";

@Index("PK_FSCL_DOCUMENTO", ["id"], { unique: true })
@Entity("FSCL_DOCUMENTO")
export class FsclDocumento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "DCMT_NUMERO", nullable: true, length: 15 })
  public dcmtNumero: string | null;

  @Column("nvarchar", { name: "DCMT_NFE", nullable: true, length: 128 })
  public dcmtNfe: string | null;

  @Column("datetime2", { name: "DCMT_DT_EMISSAO", nullable: true })
  public dcmtDtEmissao: LocalDateTime | null;

  @Column("datetime2", { name: "DCMT_DT_LANCAMENTO", nullable: true })
  public dcmtDtLancamento: LocalDateTime | null;

  @Column("nvarchar", { name: "DCMT_TP_DOCUMENTO", nullable: true, length: 25 })
  public dcmtTpDocumento: string | null;

  @Column("nvarchar", { name: "DCMT_TP_MOVIMENTO", nullable: true, length: 10 })
  public dcmtTpMovimento: string | null;

  @Column("nvarchar", { name: "DCMT_TP_TRANSACAO", nullable: true, length: 25 })
  public dcmtTpTransacao: string | null;

  @Column("nvarchar", { name: "DCMT_STATUS", nullable: true, length: 15 })
  public dcmtStatus: string | null;

  @Column("int", { name: "DCMT_QTD_ITENS", nullable: true })
  public dcmtQtdItens: number | null;

  @Column("money", { name: "DCMT_VLR_TOTAL", nullable: true })
  public dcmtVlrTotal: number | null;

  @Column("money", { name: "DCMT_BASE_CONTABIL", nullable: true })
  public dcmtBaseContabil: number | null;

  @Column("money", { name: "DCMT_BASE_ICMS", nullable: true })
  public dcmtBaseIcms: number | null;

  @Column("money", { name: "DCMT_VLR_ICMS", nullable: true })
  public dcmtVlrIcms: number | null;

  @Column("money", { name: "DCMT_BASE_ICMS_SUBS", nullable: true })
  public dcmtBaseIcmsSubs: number | null;

  @Column("money", { name: "DCMT_VLR_ICMS_SUBS", nullable: true })
  public dcmtVlrIcmsSubs: number | null;

  @Column("money", { name: "DCMT_BASE_COFINS", nullable: true })
  public dcmtBaseCofins: number | null;

  @Column("money", { name: "DCMT_VLR_COFINS", nullable: true })
  public dcmtVlrCofins: number | null;

  @Column("money", { name: "DCMT_BASE_COFINS_RET", nullable: true })
  public dcmtBaseCofinsRet: number | null;

  @Column("money", { name: "DCMT_VLR_COFINS_RET", nullable: true })
  public dcmtVlrCofinsRet: number | null;

  @Column("money", { name: "DCMT_BASE_PIS", nullable: true })
  public dcmtBasePis: number | null;

  @Column("money", { name: "DCMT_VLR_PIS", nullable: true })
  public dcmtVlrPis: number | null;

  @Column("money", { name: "DCMT_BASE_PIS_RET", nullable: true })
  public dcmtBasePisRet: number | null;

  @Column("money", { name: "DCMT_VLR_PIS_RET", nullable: true })
  public dcmtVlrPisRet: number | null;

  @Column("money", { name: "DCMT_VLR_IPI", nullable: true })
  public dcmtVlrIpi: number | null;

  @Column("nvarchar", { name: "DCMT_TIPO_FRETE", nullable: true, length: 20 })
  public dcmtTipoFrete: string | null;

  @Column("money", { name: "DCMT_VLR_FRETE", nullable: true })
  public dcmtVlrFrete: number | null;

  @Column("money", { name: "DCMT_VLR_SEGURO", nullable: true })
  public dcmtVlrSeguro: number | null;

  @Column("money", { name: "DCMT_VLR_DESPESAS", nullable: true })
  public dcmtVlrDespesas: number | null;

  @Column("money", { name: "DCMT_VLR_DESCONTOS", nullable: true })
  public dcmtVlrDescontos: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @OneToMany(
    () => FncrNotaFiscalTitulo,
    (fncrNotaFiscalTitulo) => fncrNotaFiscalTitulo.nfttNtfs
  )
  public fncrNotaFiscalTitulos: FncrNotaFiscalTitulo[];

  @ManyToOne(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.fsclDocumentos
  )
  @JoinColumn([{ name: "DCMT_CPMV_ID", referencedColumnName: "id" }])
  public dcmtCpmv: EstqCapaMovimento;

  @ManyToOne(() => CdstCliente, (cdstCliente) => cdstCliente.fsclDocumentos)
  @JoinColumn([{ name: "DCMT_CLNT_ID", referencedColumnName: "id" }])
  public dcmtClnt: CdstCliente;

  @ManyToOne(
    () => FncrHistoricoPadrao,
    (fncrHistoricoPadrao) => fncrHistoricoPadrao.fsclDocumentos
  )
  @JoinColumn([{ name: "DCMT_HSPD_ID", referencedColumnName: "id" }])
  public dcmtHspd: FncrHistoricoPadrao;

  @ManyToOne(
    () => CdstFornecedor,
    (cdstFornecedor) => cdstFornecedor.fsclDocumentos
  )
  @JoinColumn([{ name: "DCMT_FRNC_ID", referencedColumnName: "id" }])
  public dcmtFrnc: CdstFornecedor;

  @ManyToOne(
    () => CdstTransportadora,
    (cdstTransportadora) => cdstTransportadora.fsclDocumentos
  )
  @JoinColumn([{ name: "DCMT_TRNS_ID", referencedColumnName: "id" }])
  public dcmtTrns: CdstTransportadora;

  @ManyToOne(
    () => FncrFormaVencimento,
    (fncrFormaVencimento) => fncrFormaVencimento.fsclDocumentos
  )
  @JoinColumn([{ name: "DCMT_FRVN_ID", referencedColumnName: "id" }])
  public dcmtFrvn: FncrFormaVencimento;

  @OneToMany(
    () => FsclDocumentoItem,
    (fsclDocumentoItem) => fsclDocumentoItem.dcitDcmt
  )
  public fsclDocumentoItems: FsclDocumentoItem[];

  @OneToMany(
    () => FsclDocumentoPessoa,
    (fsclDocumentoPessoa) => fsclDocumentoPessoa.dcpsDcmt
  )
  public fsclDocumentoPessoas: FsclDocumentoPessoa[];
}
