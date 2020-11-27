import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import FncrPlanoConta from "./fncr-plano-conta";
import FncrTitulo from "./fncr-titulo";

@Index("PK_FNCR_TITULO_CENTRO_CUSTO", ["id"], { unique: true })
@Entity("FNCR_TITULO_CENTRO_CUSTO")
export default class FncrTituloCentroCusto {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("numeric", {
    name: "TTCC_PERCENTUAL",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ttccPercentual?: number | null;

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
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrTituloCentroCustos
  )
  @JoinColumn([{ name: "PRPC_CTCT_ID", referencedColumnName: "id" }])
  public prpcCtct?: FncrPlanoConta;

  @ManyToOne(
    () => FncrTitulo,
    (fncrTitulo) => fncrTitulo.fncrTituloCentroCustos
  )
  @JoinColumn([{ name: "TTCC_TTLS_ID", referencedColumnName: "id" }])
  public ttccTtls?: FncrTitulo;
}
