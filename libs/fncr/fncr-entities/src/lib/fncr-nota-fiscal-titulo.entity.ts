import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { FsclDocumento } from "./fscl-documento";
import { FncrTitulo } from "./fncr-titulo";

@Index("FK_NTFS_RS_NFTT", ["nfttNtfsId"], {})
@Index("FK_TTLS_RS_CMTT", ["cmttTtlsId"], {})
@Index("PK_FNCR_NOTA_FISCAL_TITULO", ["nfttId"], { unique: true })
@Entity("FNCR_NOTA_FISCAL_TITULO")
export class FncrNotaFiscalTitulo extends BaseEntity {
  @Column("varchar", { primary: true, name: "NFTT_ID", length: 27 })
  public nfttId: string;

  @Column("varchar", { name: "CMTT_TTLS_ID", nullable: true, length: 27 })
  public cmttTtlsId: string | null;

  @Column("varchar", { name: "NFTT_NTFS_ID", nullable: true, length: 27 })
  public nfttNtfsId: string | null;

  @Column("datetime", { name: "NFTT_LASTUPDATE", nullable: true })
  public nfttLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => FsclDocumento,
    (fsclDocumento) => fsclDocumento.fncrNotaFiscalTitulos
  )
  @JoinColumn([{ name: "NFTT_NTFS_ID", referencedColumnName: "dcmtId" }])
  public nfttNtfs: FsclDocumento;

  @ManyToOne(() => FncrTitulo, (fncrTitulo) => fncrTitulo.fncrNotaFiscalTitulos)
  @JoinColumn([{ name: "CMTT_TTLS_ID", referencedColumnName: "ttlsId" }])
  public cmttTtls: FncrTitulo;

  @RelationId(
    (fncrNotaFiscalTitulo: FncrNotaFiscalTitulo) =>
      fncrNotaFiscalTitulo.nfttNtfs
  )
  public nfttNtfsId2: string | null;

  @RelationId(
    (fncrNotaFiscalTitulo: FncrNotaFiscalTitulo) =>
      fncrNotaFiscalTitulo.cmttTtls
  )
  public cmttTtlsId2: string | null;

  public constructor(init?: Partial<FncrNotaFiscalTitulo>) {
    super();
    Object.assign(this, init);
  }
}
