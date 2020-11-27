import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import FncrNotaFiscalTitulo from "./fncr-nota-fiscal-titulo";
import FncrParcela from "./fncr-parcela";
import FncrFormaVencimento from "./fncr-forma-vencimento";
import CdstFornecedor from "./cdst-fornecedor";
import FncrCaixaItem from "./fncr-caixa-item";
import FncrPlanoConta from "./fncr-plano-conta";
import CdstCliente from "./cdst-cliente";
import FncrTituloCentroCusto from "./fncr-titulo-centro-custo";

@Index("PK_FNCR_TITULO", ["id"], { unique: true })
@Entity("FNCR_TITULO")
export default class FncrTitulo {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "TTLS_NR_DOCUMENTO", nullable: true, length: 25 })
  public ttlsNrDocumento?: string | null;

  @Column("datetime2", { name: "TTLS_DT_EMISSAO", nullable: true })
  public ttlsDtEmissao?: Date | null;

  @Column("money", { name: "TTLS_VLR_DOCUMENTO", nullable: true })
  public ttlsVlrDocumento?: number | null;

  @Column("int", { name: "TTLS_QTD_PARCELAS" })
  public ttlsQtdParcelas?: number;

  @Column("nvarchar", { name: "TTLS_TIPO", nullable: true, length: 20 })
  public ttlsTipo?: string | null;

  @Column("nvarchar", {
    name: "TTLS_CLASSIFICACAO",
    nullable: true,
    length: 10,
  })
  public ttlsClassificacao?: string | null;

  @Column("numeric", {
    name: "TTLS_TAXA_JUROS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ttlsTaxaJuros?: number | null;

  @Column("numeric", {
    name: "TTLS_MULTA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ttlsMulta?: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @OneToMany(
    () => FncrNotaFiscalTitulo,
    (fncrNotaFiscalTitulo) => fncrNotaFiscalTitulo.cmttTtls
  )
  public fncrNotaFiscalTitulos?: FncrNotaFiscalTitulo[];

  @OneToMany(() => FncrParcela, (fncrParcela) => fncrParcela.prclTtls)
  public fncrParcelas?: FncrParcela[];

  @ManyToOne(
    () => FncrFormaVencimento,
    (fncrFormaVencimento) => fncrFormaVencimento.fncrTitulos
  )
  @JoinColumn([{ name: "TTLS_FRVN_ID", referencedColumnName: "id" }])
  public ttlsFrvn?: FncrFormaVencimento;

  @ManyToOne(
    () => CdstFornecedor,
    (cdstFornecedor) => cdstFornecedor.fncrTitulos
  )
  @JoinColumn([{ name: "TTLS_FRNC_ID", referencedColumnName: "id" }])
  public ttlsFrnc?: CdstFornecedor;

  @ManyToOne(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.fncrTitulos)
  @JoinColumn([{ name: "TTLS_CXIT_ID", referencedColumnName: "id" }])
  public ttlsCxit?: FncrCaixaItem;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrTitulos
  )
  @JoinColumn([{ name: "TTLS_FNCR_ID", referencedColumnName: "id" }])
  public ttlsFncr?: FncrPlanoConta;

  @ManyToOne(() => CdstCliente, (cdstCliente) => cdstCliente.fncrTitulos)
  @JoinColumn([{ name: "TTLS_CLNT_ID", referencedColumnName: "id" }])
  public ttlsClnt?: CdstCliente;

  @OneToMany(
    () => FncrTituloCentroCusto,
    (fncrTituloCentroCusto) => fncrTituloCentroCusto.ttccTtls
  )
  public fncrTituloCentroCustos?: FncrTituloCentroCusto[];
}
