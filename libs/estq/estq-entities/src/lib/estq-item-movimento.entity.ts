import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FncrPlanoConta } from "./fncr-plano-conta";
import { CdstProduto } from "./cdst-produto";
import { CdstUnidadeMedida } from "./cdst-unidade-medida";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { EstqLoteValidade } from "./estq-lote-validade";
import { FsclDocumentoItem } from "./fscl-documento-item";

@Index("PK_ESTQ_ITEM_MOVIMENTO", ["id"], { unique: true })
@Entity("ESTQ_ITEM_MOVIMENTO")
export class EstqItemMovimento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "ITMV_DT_LANCAMENTO", nullable: true })
  public itmvDtLancamento: Date | null;

  @Column("datetime2", { name: "ITMV_DT_MOVIMENTO", nullable: true })
  public itmvDtMovimento: Date | null;

  @Column("nvarchar", { name: "ITMV_PRDT_CODIGO", nullable: true, length: 20 })
  public itmvPrdtCodigo: string | null;

  @Column("nvarchar", { name: "ITMV_PRDT_NOME", nullable: true, length: 64 })
  public itmvPrdtNome: string | null;

  @Column("nvarchar", { name: "ITMV_CST", nullable: true, length: 5 })
  public itmvCst: string | null;

  @Column("nvarchar", { name: "ITMV_CFOP", nullable: true, length: 5 })
  public itmvCfop: string | null;

  @Column("money", { name: "ITMV_VLR_BASE_ICMS", nullable: true })
  public itmvVlrBaseIcms: number | null;

  @Column("money", { name: "ITMV_VLR_ICMS", nullable: true })
  public itmvVlrIcms: number | null;

  @Column("numeric", {
    name: "ITMV_ALIQUOTA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public itmvAliquota: number | null;

  @Column("nvarchar", { name: "ITMV_UNID_SIGLA", nullable: true, length: 5 })
  public itmvUnidSigla: string | null;

  @Column("numeric", {
    name: "ITMV_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public itmvQuantidade: number | null;

  @Column("money", { name: "ITMV_VALOR_UNITARIO", nullable: true })
  public itmvValorUnitario: number | null;

  @Column("numeric", {
    name: "ITMV_DESCONTO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public itmvDesconto: number | null;

  @Column("money", { name: "ITMV_VLR_TOTAL", nullable: true })
  public itmvVlrTotal: number | null;

  @Column("nvarchar", { name: "ITMV_TP_DOCUMENTO", nullable: true, length: 25 })
  public itmvTpDocumento: string | null;

  @Column("nvarchar", { name: "ITMV_TP_MOVIMENTO", nullable: true, length: 10 })
  public itmvTpMovimento: string | null;

  @Column("nvarchar", { name: "ITMV_TRANSACAO", nullable: true, length: 25 })
  public itmvTransacao: string | null;

  @Column("nvarchar", { name: "ITMV_OBSERVACAO", nullable: true, length: 256 })
  public itmvObservacao: string | null;

  @Column("nvarchar", { name: "ITMV_STATUS", nullable: true, length: 15 })
  public itmvStatus: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.estqItemMovimentos
  )
  @JoinColumn([{ name: "ITMV_CTCT_ID", referencedColumnName: "id" }])
  public itmvCtct: FncrPlanoConta;

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.estqItemMovimentos)
  @JoinColumn([{ name: "ITMV_PRDT_ID", referencedColumnName: "id" }])
  public itmvPrdt: CdstProduto;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.estqItemMovimentos2
  )
  @JoinColumn([{ name: "ITMV_FNCR_ID", referencedColumnName: "id" }])
  public itmvFncr: FncrPlanoConta;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.estqItemMovimentos
  )
  @JoinColumn([{ name: "ITMV_UNID_ID", referencedColumnName: "id" }])
  public itmvUnid: CdstUnidadeMedida;

  @ManyToOne(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.estqItemMovimentos
  )
  @JoinColumn([{ name: "ITMV_CPMV_ID", referencedColumnName: "id" }])
  public itmvCpmv: EstqCapaMovimento;

  @ManyToOne(
    () => EstqLoteValidade,
    (estqLoteValidade) => estqLoteValidade.estqItemMovimentos
  )
  @JoinColumn([{ name: "ITMV_LTVL_ID", referencedColumnName: "id" }])
  public itmvLtvl: EstqLoteValidade;

  @OneToMany(
    () => FsclDocumentoItem,
    (fsclDocumentoItem) => fsclDocumentoItem.dcitItmv
  )
  public fsclDocumentoItems: FsclDocumentoItem[];
}
