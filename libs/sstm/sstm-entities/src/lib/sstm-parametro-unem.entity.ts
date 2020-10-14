import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";
import { SstmParametro } from "./sstm-parametro";

@Index("PK_SSTM_PARAMETRO_UNEM", ["id"], { unique: true })
@Entity("SSTM_PARAMETRO_UNEM")
export class SstmParametroUnem {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PRUE_DEFAULT", nullable: true, length: 128 })
  public prueDefault: string | null;

  @Column("nvarchar", { name: "PRUE_VALUE", nullable: true, length: 128 })
  public prueValue: string | null;

  @Column("smallint", { name: "PRUE_HABILITADO", nullable: true })
  public prueHabilitado: number | null;

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
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.sstmParametroUnems
  )
  @JoinColumn([{ name: "PRUE_UNEM_ID", referencedColumnName: "id" }])
  public prueUnem: CoreUnidadeEmpresarial;

  @ManyToOne(
    () => SstmParametro,
    (sstmParametro) => sstmParametro.sstmParametroUnems
  )
  @JoinColumn([{ name: "PRUE_PRMT_ID", referencedColumnName: "id" }])
  public pruePrmt: SstmParametro;
}
