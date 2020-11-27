import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SstmParametro from "./sstm-parametro";
import CoreCorporacao from "./core-corporacao";

@Index("PK_SSTM_PARAMETRO_CORPORACAO", ["id"], { unique: true })
@Entity("SSTM_PARAMETRO_CORPORACAO")
export default class SstmParametroCorporacao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PRCP_DEFAULT", length: 128 })
  public prcpDefault?: string;

  @Column("nvarchar", { name: "PRCP_VALUE", nullable: true, length: 128 })
  public prcpValue?: string | null;

  @Column("bit", { name: "PRCP_HABILITADO", nullable: true })
  public prcpHabilitado?: boolean | null;

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
    () => SstmParametro,
    (sstmParametro) => sstmParametro.sstmParametroCorporacaos
  )
  @JoinColumn([{ name: "PRCP_PRMT_ID", referencedColumnName: "id" }])
  public prcpPrmt?: SstmParametro;

  @ManyToOne(
    () => CoreCorporacao,
    (coreCorporacao) => coreCorporacao.sstmParametroCorporacaos
  )
  @JoinColumn([{ name: "PRCP_CPRC_ID", referencedColumnName: "id" }])
  public prcpCprc?: CoreCorporacao;
}
