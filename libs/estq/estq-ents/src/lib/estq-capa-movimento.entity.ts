import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CdstCliente } from "./cdst-cliente";
import { FncrHistoricoPadrao } from "./fncr-historico-padrao";
import { FncrFormaVencimento } from "./fncr-forma-vencimento";
import { CdstFornecedor } from "./cdst-fornecedor";
import { CmnsUsuario } from "./cmns-usuario";
import { RchmFuncionario } from "./rchm-funcionario";
import { EstqItemMovimento } from "./estq-item-movimento";
import { FsclDocumento } from "./fscl-documento";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("PK_ESTQ_CAPA_MOVIMENTO", ["id"], { unique: true })
@Entity("ESTQ_CAPA_MOVIMENTO")
export class EstqCapaMovimento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CPMV_NR_DOCUMENTO", nullable: true, length: 15 })
  public cpmvNrDocumento: string | null;

  @Column("nvarchar", { name: "CPMV_TP_DOCUMENTO", nullable: true, length: 25 })
  public cpmvTpDocumento: string | null;

  @Column("datetime2", { name: "CPMV_DT_EMISSAO", nullable: true })
  public cpmvDtEmissao: LocalDateTime | null;

  @Column("datetime2", { name: "CPMV_DT_LANCAMENTO", nullable: true })
  public cpmvDtLancamento: LocalDateTime | null;

  @Column("nvarchar", { name: "CPMV_TP_MOVIMENTO", nullable: true, length: 10 })
  public cpmvTpMovimento: string | null;

  @Column("nvarchar", { name: "CPMV_TP_TRANSACAO", nullable: true, length: 25 })
  public cpmvTpTransacao: string | null;

  @Column("datetime2", { name: "CPMV_DT_SAIDA", nullable: true })
  public cpmvDtSaida: LocalDateTime | null;

  @Column("nvarchar", {
    name: "CPMV_NATUREZA_OPERACAO",
    nullable: true,
    length: 40,
  })
  public cpmvNaturezaOperacao: string | null;

  @Column("nvarchar", {
    name: "CPMV_CHAVE_ACESSO",
    nullable: true,
    length: 128,
  })
  public cpmvChaveAcesso: string | null;

  @Column("nvarchar", {
    name: "CPMV_PROTOCOLO_USO",
    nullable: true,
    length: 40,
  })
  public cpmvProtocoloUso: string | null;

  @Column("numeric", {
    name: "CPMV_PCT_DESC_SERVICO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public cpmvPctDescServico: number | null;

  @Column("money", { name: "CPMV_VLR_DESC_SERVICO", nullable: true })
  public cpmvVlrDescServico: number | null;

  @Column("money", { name: "CPMV_VLR_SUB_TOTAL", nullable: true })
  public cpmvVlrSubTotal: number | null;

  @Column("money", { name: "CPMV_VLR_BASE_ICMS", nullable: true })
  public cpmvVlrBaseIcms: number | null;

  @Column("money", { name: "CPMV_VLR_ICMS", nullable: true })
  public cpmvVlrIcms: number | null;

  @Column("money", { name: "CPMV_VLR_BASE_ICMS_SUBST", nullable: true })
  public cpmvVlrBaseIcmsSubst: number | null;

  @Column("money", { name: "CPMV_VLR_ICMS_SUBST", nullable: true })
  public cpmvVlrIcmsSubst: number | null;

  @Column("money", { name: "CPMV_VLR_PRODUTOS", nullable: true })
  public cpmvVlrProdutos: number | null;

  @Column("money", { name: "CPMV_VLR_FRETE", nullable: true })
  public cpmvVlrFrete: number | null;

  @Column("money", { name: "CPMV_VLR_SEGURO", nullable: true })
  public cpmvVlrSeguro: number | null;

  @Column("money", { name: "CPMV_VLR_DESCONTO", nullable: true })
  public cpmvVlrDesconto: number | null;

  @Column("money", { name: "CPMV_VLR_OUTRAS_DESPESAS", nullable: true })
  public cpmvVlrOutrasDespesas: number | null;

  @Column("money", { name: "CPMV_VLR_IPI", nullable: true })
  public cpmvVlrIpi: number | null;

  @Column("money", { name: "CPMV_VLR_DOCUMENTO", nullable: true })
  public cpmvVlrDocumento: number | null;

  @Column("numeric", {
    name: "CPMV_QTD_ITENS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public cpmvQtdItens: number | null;

  @Column("nvarchar", { name: "CPMV_STATUS", nullable: true, length: 15 })
  public cpmvStatus: string | null;

  @Column("nvarchar", {
    name: "CPMV_FORMA_PAGAMENTO",
    nullable: true,
    length: 15,
  })
  public cpmvFormaPagamento: string | null;

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

  @ManyToOne(() => CdstCliente, (cdstCliente) => cdstCliente.estqCapaMovimentos)
  @JoinColumn([{ name: "CPMV_CLNT_ID", referencedColumnName: "id" }])
  public cpmvClnt: CdstCliente;

  @ManyToOne(
    () => FncrHistoricoPadrao,
    (fncrHistoricoPadrao) => fncrHistoricoPadrao.estqCapaMovimentos
  )
  @JoinColumn([{ name: "CPMV_HSPD_ID", referencedColumnName: "id" }])
  public cpmvHspd: FncrHistoricoPadrao;

  @ManyToOne(
    () => FncrFormaVencimento,
    (fncrFormaVencimento) => fncrFormaVencimento.estqCapaMovimentos
  )
  @JoinColumn([{ name: "CPMV_FRVN_ID", referencedColumnName: "id" }])
  public cpmvFrvn: FncrFormaVencimento;

  @ManyToOne(
    () => CdstFornecedor,
    (cdstFornecedor) => cdstFornecedor.estqCapaMovimentos
  )
  @JoinColumn([{ name: "CPMV_FRNC_ID", referencedColumnName: "id" }])
  public cpmvFrnc: CdstFornecedor;

  @ManyToOne(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.estqCapaMovimentos
  )
  @JoinColumn([{ name: "CPMV_CPMV_ID", referencedColumnName: "id" }])
  public cpmvCpmv: EstqCapaMovimento;

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvCpmv
  )
  public estqCapaMovimentos: EstqCapaMovimento[];

  @ManyToOne(() => CmnsUsuario, (cmnsUsuario) => cmnsUsuario.estqCapaMovimentos)
  @JoinColumn([{ name: "CPMV_USRS_ID", referencedColumnName: "id" }])
  public cpmvUsrs: CmnsUsuario;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.estqCapaMovimentos
  )
  @JoinColumn([{ name: "CPMV_VEND_ID", referencedColumnName: "id" }])
  public cpmvVend: RchmFuncionario;

  @OneToMany(
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.itmvCpmv
  )
  public estqItemMovimentos: EstqItemMovimento[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtCpmv)
  public fsclDocumentos: FsclDocumento[];

  @OneToMany(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.osvtCpmv
  )
  public veteOrdemDeServicos: VeteOrdemDeServico[];
}
