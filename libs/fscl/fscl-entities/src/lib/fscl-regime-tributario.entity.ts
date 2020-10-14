import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsUnidadeFederativa } from "./cmns-unidade-federativa";
import { FsclNcms } from "./fscl-ncms";

@Index("PK_FSCL_REGIME_TRIBUTARIO", ["id"], { unique: true })
@Entity("FSCL_REGIME_TRIBUTARIO")
export class FsclRegimeTributario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "RGTB_REGIME_FISCAL_TRIBUTARIO",
    nullable: true,
    length: 25,
  })
  public rgtbRegimeFiscalTributario: string | null;

  @Column("numeric", {
    name: "RGTB_IVA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public rgtbIva: number | null;

  @Column("numeric", {
    name: "RGTB_ICMS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public rgtbIcms: number | null;

  @Column("numeric", {
    name: "RGTB_REDUCAO_ICMS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public rgtbReducaoIcms: number | null;

  @Column("numeric", {
    name: "RGTB_REDUCAO_ICMS_ST",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public rgtbReducaoIcmsSt: number | null;

  @Column("money", { name: "RGTB_PAUTA", nullable: true })
  public rgtbPauta: number | null;

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
    () => CmnsUnidadeFederativa,
    (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.fsclRegimeTributarios
  )
  @JoinColumn([{ name: "RGTB_UNFD_ID", referencedColumnName: "id" }])
  public rgtbUnfd: CmnsUnidadeFederativa;

  @ManyToOne(() => FsclNcms, (fsclNcms) => fsclNcms.fsclRegimeTributarios)
  @JoinColumn([{ name: "RGTB_NCMS_ID", referencedColumnName: "id" }])
  public rgtbNcms: FsclNcms;
}
