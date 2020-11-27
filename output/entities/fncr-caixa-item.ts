import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import FncrHistoricoPadrao from "./fncr-historico-padrao";
import CmnsPessoa from "./cmns-pessoa";
import FncrPlanoConta from "./fncr-plano-conta";
import FncrCaixaMovimento from "./fncr-caixa-movimento";
import FncrParcelaBaixa from "./fncr-parcela-baixa";
import FncrPlanoOrcamentario from "./fncr-plano-orcamentario";
import FncrTitulo from "./fncr-titulo";

@Index("PK_FNCR_CAIXA_ITEM", ["id"], { unique: true })
@Entity("FNCR_CAIXA_ITEM")
export default class FncrCaixaItem {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "CXIT_NR_DOCUMENTO", nullable: true, length: 20 })
  public cxitNrDocumento?: string | null;

  @Column("nvarchar", {
    name: "CXIT_TP_LANCAMENTO",
    nullable: true,
    length: 10,
  })
  public cxitTpLancamento?: string | null;

  @Column("nvarchar", { name: "CXIT_STATUS", nullable: true, length: 15 })
  public cxitStatus?: string | null;

  @Column("nvarchar", { name: "CXIT_ESPECIE", nullable: true, length: 15 })
  public cxitEspecie?: string | null;

  @Column("datetime2", { name: "CXIT_DT_LANCAMENTO", nullable: true })
  public cxitDtLancamento?: Date | null;

  @Column("money", { name: "CXIT_VLR_LANCAMENTO", nullable: true })
  public cxitVlrLancamento?: number | null;

  @Column("datetime2", { name: "CXIT_DT_MOVIMENTO", nullable: true })
  public cxitDtMovimento?: Date | null;

  @Column("datetime2", { name: "CXIT_MES_REFERENCIA", nullable: true })
  public cxitMesReferencia?: Date | null;

  @Column("datetime2", { name: "CXIT_DT_CONCILIACAO", nullable: true })
  public cxitDtConciliacao?: Date | null;

  @Column("money", { name: "CXIT_VLR_CONCILIADO", nullable: true })
  public cxitVlrConciliado?: number | null;

  @Column("nvarchar", {
    name: "CXIT_HISTORICO_COMPLEMENTAR",
    nullable: true,
    length: 128,
  })
  public cxitHistoricoComplementar?: string | null;

  @Column("nvarchar", { name: "CXIT_MD5", nullable: true, length: 128 })
  public cxitMd5?: string | null;

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

  @ManyToOne(
    () => FncrHistoricoPadrao,
    (fncrHistoricoPadrao) => fncrHistoricoPadrao.fncrCaixaItems
  )
  @JoinColumn([{ name: "CXIT_HSPD_ID", referencedColumnName: "id" }])
  public cxitHspd?: FncrHistoricoPadrao;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.fncrCaixaItems)
  @JoinColumn([{ name: "CXIT_PESS_ID", referencedColumnName: "id" }])
  public cxitPess?: CmnsPessoa;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrCaixaItems
  )
  @JoinColumn([{ name: "CXIT_CTCT_ID", referencedColumnName: "id" }])
  public cxitCtct?: FncrPlanoConta;

  @ManyToOne(
    () => FncrCaixaItem,
    (fncrCaixaItem) => fncrCaixaItem.fncrCaixaItems
  )
  @JoinColumn([{ name: "CXIT_CXIT_ID", referencedColumnName: "id" }])
  public cxitCxit?: FncrCaixaItem;

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitCxit)
  public fncrCaixaItems?: FncrCaixaItem[];

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrCaixaItems2
  )
  @JoinColumn([{ name: "CXIT_FNCR_ID", referencedColumnName: "id" }])
  public cxitFncr?: FncrPlanoConta;

  @ManyToOne(
    () => FncrCaixaMovimento,
    (fncrCaixaMovimento) => fncrCaixaMovimento.fncrCaixaItems
  )
  @JoinColumn([{ name: "CXIT_CXMV_ID", referencedColumnName: "id" }])
  public cxitCxmv?: FncrCaixaMovimento;

  @OneToMany(
    () => FncrParcelaBaixa,
    (fncrParcelaBaixa) => fncrParcelaBaixa.prbxCxit
  )
  public fncrParcelaBaixas?: FncrParcelaBaixa[];

  @OneToMany(
    () => FncrPlanoOrcamentario,
    (fncrPlanoOrcamentario) => fncrPlanoOrcamentario.plorCxit
  )
  public fncrPlanoOrcamentarios?: FncrPlanoOrcamentario[];

  @OneToMany(() => FncrTitulo, (fncrTitulo) => fncrTitulo.ttlsCxit)
  public fncrTitulos?: FncrTitulo[];
}
