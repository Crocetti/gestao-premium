import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SstmSistema from "./sstm-sistema";
import SstmParametro from "./sstm-parametro";

@Index("PK_SSTM_PARAMETRO_SISTEMA", ["id"], { unique: true })
@Entity("SSTM_PARAMETRO_SISTEMA")
export default class SstmParametroSistema {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PRSS_DEFAULT", nullable: true, length: 128 })
  public prssDefault?: string | null;

  @Column("nvarchar", { name: "PRSS_VALUE", nullable: true, length: 128 })
  public prssValue?: string | null;

  @Column("bit", { name: "PRSS_HABILITADO", nullable: true })
  public prssHabilitado?: boolean | null;

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
    () => SstmSistema,
    (sstmSistema) => sstmSistema.sstmParametroSistemas
  )
  @JoinColumn([{ name: "PRSS_SSTM_ID", referencedColumnName: "id" }])
  public prssSstm?: SstmSistema;

  @ManyToOne(
    () => SstmParametro,
    (sstmParametro) => sstmParametro.sstmParametroSistemas
  )
  @JoinColumn([{ name: "PRSS_PRMT_ID", referencedColumnName: "id" }])
  public prssPrmt?: SstmParametro;
}
