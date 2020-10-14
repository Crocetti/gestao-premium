import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrTitulo } from "./fncr-titulo";
import { FsclDocumento } from "./fscl-documento";

@Index("PK_FNCR_NOTA_FISCAL_TITULO", ["id"], { unique: true })
@Entity("FNCR_NOTA_FISCAL_TITULO")
export class FncrNotaFiscalTitulo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

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

  @ManyToOne(() => FncrTitulo, (fncrTitulo) => fncrTitulo.fncrNotaFiscalTitulos)
  @JoinColumn([{ name: "CMTT_TTLS_ID", referencedColumnName: "id" }])
  public cmttTtls: FncrTitulo;

  @ManyToOne(
    () => FsclDocumento,
    (fsclDocumento) => fsclDocumento.fncrNotaFiscalTitulos
  )
  @JoinColumn([{ name: "NFTT_NTFS_ID", referencedColumnName: "id" }])
  public nfttNtfs: FsclDocumento;
}
