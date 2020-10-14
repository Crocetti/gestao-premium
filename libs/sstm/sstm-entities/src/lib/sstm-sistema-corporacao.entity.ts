import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { SstmSistema } from "./sstm-sistema";
import { CoreCorporacao } from "./core-corporacao";

@Index("PK_SSTM_SISTEMA_CORPORACAO", ["id"], { unique: true })
@Entity("SSTM_SISTEMA_CORPORACAO")
export class SstmSistemaCorporacao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "SSCP_LOCAL_DATABASE",
    nullable: true,
    length: 60,
  })
  public sscpLocalDatabase: string | null;

  @Column("nvarchar", {
    name: "SSCP_REMOTE_DATABASE",
    nullable: true,
    length: 60,
  })
  public sscpRemoteDatabase: string | null;

  @Column("nvarchar", {
    name: "SSCP_SYSTEM_DATABASE",
    nullable: true,
    length: 60,
  })
  public sscpSystemDatabase: string | null;

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
    () => SstmSistema,
    (sstmSistema) => sstmSistema.sstmSistemaCorporacaos
  )
  @JoinColumn([{ name: "SSCP_SSTM_ID", referencedColumnName: "id" }])
  public sscpSstm: SstmSistema;

  @ManyToOne(
    () => CoreCorporacao,
    (coreCorporacao) => coreCorporacao.sstmSistemaCorporacaos
  )
  @JoinColumn([{ name: "SSCP_CPRC_ID", referencedColumnName: "id" }])
  public sscpCprc: CoreCorporacao;
}
