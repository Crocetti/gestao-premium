import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SrvcServico from "./srvc-servico";
import CmnsCargo from "./cmns-cargo";
import CdstUnidadeMedida from "./cdst-unidade-medida";

@Index("PK_SRVC_SERVICO_COMPOSICAO", ["id"], { unique: true })
@Entity("SRVC_SERVICO_COMPOSICAO")
export default class SrvcServicoComposicao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("numeric", {
    name: "SRCM_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public srcmQuantidade?: number | null;

  @Column("money", { name: "SRCM_VALOR_UNITARIO", nullable: true })
  public srcmValorUnitario?: number | null;

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
    () => SrvcServico,
    (srvcServico) => srvcServico.srvcServicoComposicaos
  )
  @JoinColumn([{ name: "SRCM_SRVC_ID", referencedColumnName: "id" }])
  public srcmSrvc?: SrvcServico;

  @ManyToOne(() => CmnsCargo, (cmnsCargo) => cmnsCargo.srvcServicoComposicaos)
  @JoinColumn([{ name: "SRCM_CARG_ID", referencedColumnName: "id" }])
  public srcmCarg?: CmnsCargo;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.srvcServicoComposicaos
  )
  @JoinColumn([{ name: "SRCM_UNID_ID", referencedColumnName: "id" }])
  public srcmUnid?: CdstUnidadeMedida;
}
