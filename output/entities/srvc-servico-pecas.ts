import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import EstqMercadoria from "./estq-mercadoria";
import CdstUnidadeMedida from "./cdst-unidade-medida";
import SrvcServico from "./srvc-servico";

@Index("PK_SRVC_SERVICO_PECAS", ["id"], { unique: true })
@Entity("SRVC_SERVICO_PECAS")
export default class SrvcServicoPecas {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("numeric", {
    name: "SRPC_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public srpcQuantidade?: number | null;

  @Column("money", { name: "SRPC_VALOR_UNITARIO", nullable: true })
  public srpcValorUnitario?: number | null;

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
    () => EstqMercadoria,
    (estqMercadoria) => estqMercadoria.srvcServicoPecas
  )
  @JoinColumn([{ name: "SRPC_MRCD_ID", referencedColumnName: "id" }])
  public srpcMrcd?: EstqMercadoria;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.srvcServicoPecas
  )
  @JoinColumn([{ name: "SRPC_UNID_ID", referencedColumnName: "id" }])
  public srpcUnid?: CdstUnidadeMedida;

  @ManyToOne(() => SrvcServico, (srvcServico) => srvcServico.srvcServicoPecas)
  @JoinColumn([{ name: "SRPC_SRVC_ID", referencedColumnName: "id" }])
  public srpcSrvc?: SrvcServico;
}
