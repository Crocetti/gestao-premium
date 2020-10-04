import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("FK_PESS_RS_CTDR", ["ctdrPessId"], {})
@Index("PK_PECF_CONTADOR", ["pectId"], { unique: true })
@Entity("PECF_CONTADOR")
export class PecfContador extends BaseEntity {
  @Column("varchar", { primary: true, name: "PECT_ID", length: 27 })
  public pectId: string;

  @Column("varchar", { name: "CTDR_PESS_ID", nullable: true, length: 27 })
  public ctdrPessId: string | null;

  @Column("varchar", { name: "PECT_CRC", nullable: true, length: 15 })
  public pectCrc: string | null;

  @Column("datetime", { name: "PECT_LASTUPDATE", nullable: true })
  public pectLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.pecfContadors)
  @JoinColumn([{ name: "CTDR_PESS_ID", referencedColumnName: "pessId" }])
  public ctdrPess: CmnsPessoa;

  @RelationId((pecfContador: PecfContador) => pecfContador.ctdrPess)
  public ctdrPessId2: string | null;

  public constructor(init?: Partial<PecfContador>) {
    super();
    Object.assign(this, init);
  }
}
