import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";

@Index("PK_ESTQ_NUMERO_DOCUMENTO", ["id"], { unique: true })
@Entity("ESTQ_NUMERO_DOCUMENTO")
export class EstqNumeroDocumento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "NRDC_TP_DOCUMENTO", nullable: true, length: 25 })
  public nrdcTpDocumento: string | null;

  @Column("nvarchar", { name: "NRDC_TP_MOVIMENTO", nullable: true, length: 10 })
  public nrdcTpMovimento: string | null;

  @Column("int", { name: "NRDC_PRX_NUMERO", nullable: true })
  public nrdcPrxNumero: number | null;

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
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.estqNumeroDocumentos
  )
  @JoinColumn([{ name: "NRDC_UNEM_ID", referencedColumnName: "id" }])
  public nrdcUnem: CoreUnidadeEmpresarial;
}
