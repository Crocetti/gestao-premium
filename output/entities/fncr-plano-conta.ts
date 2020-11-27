import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import EstqItemMovimento from "./estq-item-movimento";
import EstqSaldoCentroCusto from "./estq-saldo-centro-custo";
import FncrCaixaItem from "./fncr-caixa-item";
import FncrPlanoContaSaldo from "./fncr-plano-conta-saldo";
import FncrPlanoOrcamentario from "./fncr-plano-orcamentario";
import FncrTitulo from "./fncr-titulo";
import FncrTituloCentroCusto from "./fncr-titulo-centro-custo";

@Index("PK_FNCR_PLANO_CONTA", ["id"], { unique: true })
@Entity("FNCR_PLANO_CONTA")
export default class FncrPlanoConta {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PLCT_CONTA", nullable: true, length: 24 })
  public plctConta?: string | null;

  @Column("nvarchar", { name: "PLCT_NOME", nullable: true, length: 128 })
  public plctNome?: string | null;

  @Column("nvarchar", { name: "PLCT_REDUZIDA", nullable: true, length: 10 })
  public plctReduzida?: string | null;

  @Column("nvarchar", {
    name: "PLCT_TP_LANCAMENTO",
    nullable: true,
    length: 10,
  })
  public plctTpLancamento?: string | null;

  @Column("nvarchar", { name: "PLCT_TP_CONTA", nullable: true, length: 15 })
  public plctTpConta?: string | null;

  @Column("nvarchar", { name: "PLCT_LOCAL_CONTA", length: 25 })
  public plctLocalConta?: string;

  @Column("int", { name: "PLCT_NIVEL", nullable: true })
  public plctNivel?: number | null;

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
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.itmvCtct
  )
  public estqItemMovimentos?: EstqItemMovimento[];

  @OneToMany(
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.itmvFncr
  )
  public estqItemMovimentos2?: EstqItemMovimento[];

  @OneToMany(
    () => EstqSaldoCentroCusto,
    (estqSaldoCentroCusto) => estqSaldoCentroCusto.sdccCtct
  )
  public estqSaldoCentroCustos?: EstqSaldoCentroCusto[];

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitCtct)
  public fncrCaixaItems?: FncrCaixaItem[];

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitFncr)
  public fncrCaixaItems2?: FncrCaixaItem[];

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrPlanoContas
  )
  @JoinColumn([{ name: "PLCT_PLCT_ID", referencedColumnName: "id" }])
  public plctPlct?: FncrPlanoConta;

  @OneToMany(() => FncrPlanoConta, (fncrPlanoConta) => fncrPlanoConta.plctPlct)
  public fncrPlanoContas?: FncrPlanoConta[];

  @OneToMany(
    () => FncrPlanoContaSaldo,
    (fncrPlanoContaSaldo) => fncrPlanoContaSaldo.pcsdPlct
  )
  public fncrPlanoContaSaldos?: FncrPlanoContaSaldo[];

  @OneToMany(
    () => FncrPlanoOrcamentario,
    (fncrPlanoOrcamentario) => fncrPlanoOrcamentario.plorCtct
  )
  public fncrPlanoOrcamentarios?: FncrPlanoOrcamentario[];

  @OneToMany(
    () => FncrPlanoOrcamentario,
    (fncrPlanoOrcamentario) => fncrPlanoOrcamentario.plorFncr
  )
  public fncrPlanoOrcamentarios2?: FncrPlanoOrcamentario[];

  @OneToMany(() => FncrTitulo, (fncrTitulo) => fncrTitulo.ttlsFncr)
  public fncrTitulos?: FncrTitulo[];

  @OneToMany(
    () => FncrTituloCentroCusto,
    (fncrTituloCentroCusto) => fncrTituloCentroCusto.prpcCtct
  )
  public fncrTituloCentroCustos?: FncrTituloCentroCusto[];
}
