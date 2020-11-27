import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CoreEmpresa from "./core-empresa";
import SstmParametro from "./sstm-parametro";

@Index("PK_SSTM_PARAMETRO_EMPRESA", ["id"], { unique: true })
@Entity("SSTM_PARAMETRO_EMPRESA")
export default class SstmParametroEmpresa {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PREM_DEFAULT", nullable: true, length: 128 })
  public premDefault?: string | null;

  @Column("nvarchar", { name: "PREM_VALUE", nullable: true, length: 128 })
  public premValue?: string | null;

  @Column("bit", { name: "PREM_HABILITADO", nullable: true })
  public premHabilitado?: boolean | null;

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
    () => CoreEmpresa,
    (coreEmpresa) => coreEmpresa.sstmParametroEmpresas
  )
  @JoinColumn([{ name: "PREM_EMPR_ID", referencedColumnName: "id" }])
  public premEmpr?: CoreEmpresa;

  @ManyToOne(
    () => SstmParametro,
    (sstmParametro) => sstmParametro.sstmParametroEmpresas
  )
  @JoinColumn([{ name: "PREM_PRMT_ID", referencedColumnName: "id" }])
  public premPrmt?: SstmParametro;
}
