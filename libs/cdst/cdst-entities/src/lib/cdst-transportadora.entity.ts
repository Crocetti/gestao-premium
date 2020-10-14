import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";
import { FsclDocumento } from "./fscl-documento";

@Index("PK_CDST_TRANSPORTADORA", ["id"], { unique: true })
@Entity("CDST_TRANSPORTADORA")
export class CdstTransportadora {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "TRNS_OBS", nullable: true })
  public trnsObs: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cdstTransportadoras)
  @JoinColumn([{ name: "TRNS_PESS_ID", referencedColumnName: "id" }])
  public trnsPess: CmnsPessoa;

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtTrns)
  public fsclDocumentos: FsclDocumento[];
}
