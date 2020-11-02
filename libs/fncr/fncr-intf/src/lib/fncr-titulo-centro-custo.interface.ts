import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { FncrPlanoConta } from "./fncr-plano-conta";
import { FncrTitulo } from "./fncr-titulo";

@Index("FK_CTCT_RS_PRPC", ["prpcCtctId"], {})
@Index("FK_TTLS_RS_TTCC", ["ttccTtlsId"], {})
@Index("PK_FNCR_TITULO_CENTRO_CUSTO", ["ttccId"], { unique: true })
@Entity("FNCR_TITULO_CENTRO_CUSTO")
export class FncrTituloCentroCusto extends BaseEntity {
  @Column("varchar", { primary: true, name: "TTCC_ID", length: 27 })
  public ttccId: string;

  @Column("varchar", { name: "PRPC_CTCT_ID", nullable: true, length: 27 })
  public prpcCtctId: string | null;

  @Column("varchar", { name: "TTCC_TTLS_ID", nullable: true, length: 27 })
  public ttccTtlsId: string | null;

  @Column("numeric", {
    name: "TTCC_PERCENTUAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ttccPercentual: number | null;

  @Column("datetime", { name: "TTCC_LASTUPDATE", nullable: true })
  public ttccLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrTituloCentroCustos
  )
  @JoinColumn([{ name: "PRPC_CTCT_ID", referencedColumnName: "plctId" }])
  public prpcCtct: FncrPlanoConta;

  @ManyToOne(
    () => FncrTitulo,
    (fncrTitulo) => fncrTitulo.fncrTituloCentroCustos
  )
  @JoinColumn([{ name: "TTCC_TTLS_ID", referencedColumnName: "ttlsId" }])
  public ttccTtls: FncrTitulo;

  @RelationId(
    (fncrTituloCentroCusto: FncrTituloCentroCusto) =>
      fncrTituloCentroCusto.prpcCtct
  )
  public prpcCtctId2: string | null;

  @RelationId(
    (fncrTituloCentroCusto: FncrTituloCentroCusto) =>
      fncrTituloCentroCusto.ttccTtls
  )
  public ttccTtlsId2: string | null;

  public constructor(init?: Partial<FncrTituloCentroCusto>) {
    super();
    Object.assign(this, init);
  }
}
