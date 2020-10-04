import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";

@Index("FK_UNEM_RS_NRDC", ["nrdcUnemId"], {})
@Index("PK_ESTQ_NUMERO_DOCUMENTO", ["nrdcId"], { unique: true })
@Entity("ESTQ_NUMERO_DOCUMENTO")
export class EstqNumeroDocumento extends BaseEntity {
  @Column("varchar", { primary: true, name: "NRDC_ID", length: 27 })
  public nrdcId: string;

  @Column("varchar", { name: "NRDC_UNEM_ID", nullable: true, length: 27 })
  public nrdcUnemId: string | null;

  @Column("varchar", { name: "NRDC_TP_DOCUMENTO", nullable: true, length: 25 })
  public nrdcTpDocumento: string | null;

  @Column("varchar", { name: "NRDC_TP_MOVIMENTO", nullable: true, length: 10 })
  public nrdcTpMovimento: string | null;

  @Column("int", { name: "NRDC_PRX_NUMERO", nullable: true })
  public nrdcPrxNumero: number | null;

  @Column("datetime", { name: "NRDC_LASTUPDATE", nullable: true })
  public nrdcLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.estqNumeroDocumentos
  )
  @JoinColumn([{ name: "NRDC_UNEM_ID", referencedColumnName: "unemId" }])
  public nrdcUnem: CoreUnidadeEmpresarial;

  @RelationId(
    (estqNumeroDocumento: EstqNumeroDocumento) => estqNumeroDocumento.nrdcUnem
  )
  public nrdcUnemId2: string | null;

  public constructor(init?: Partial<EstqNumeroDocumento>) {
    super();
    Object.assign(this, init);
  }
}
