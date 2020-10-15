import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("PK_PECF_CONTADOR", ["id"], { unique: true })
@Entity("PECF_CONTADOR")
export class PecfContador {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PECT_CRC", nullable: true, length: 15 })
  public pectCrc: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: LocalDateTime;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: LocalDateTime | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.pecfContadors)
  @JoinColumn([{ name: "CTDR_PESS_ID", referencedColumnName: "id" }])
  public ctdrPess: CmnsPessoa;
}
