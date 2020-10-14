import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrPlanoConta } from "./fncr-plano-conta";
import { FncrCaixaItem } from "./fncr-caixa-item";

@Index("PK_FNCR_PLANO_ORCAMENTARIO", ["id"], { unique: true })
@Entity("FNCR_PLANO_ORCAMENTARIO")
export class FncrPlanoOrcamentario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "PLOR_REFERENCIA", nullable: true })
  public plorReferencia: Date | null;

  @Column("money", { name: "PLOR_VALOR", nullable: true })
  public plorValor: number | null;

  @Column("nvarchar", { name: "PLOR_TIPO", nullable: true, length: 10 })
  public plorTipo: string | null;

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
    (fncrPlanoConta) => fncrPlanoConta.fncrPlanoOrcamentarios
  )
  @JoinColumn([{ name: "PLOR_CTCT_ID", referencedColumnName: "id" }])
  public plorCtct: FncrPlanoConta;

  @ManyToOne(
    () => FncrCaixaItem,
    (fncrCaixaItem) => fncrCaixaItem.fncrPlanoOrcamentarios
  )
  @JoinColumn([{ name: "PLOR_CXIT_ID", referencedColumnName: "id" }])
  public plorCxit: FncrCaixaItem;

  @ManyToOne(
    () => FncrPlanoConta,
    (fncrPlanoConta) => fncrPlanoConta.fncrPlanoOrcamentarios2
  )
  @JoinColumn([{ name: "PLOR_FNCR_ID", referencedColumnName: "id" }])
  public plorFncr: FncrPlanoConta;
}
