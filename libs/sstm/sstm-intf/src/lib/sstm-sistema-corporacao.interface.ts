import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { SstmSistema } from "./sstm-sistema";
import { CoreCorporacao } from "./core-corporacao";

@Index("FK_CPRC_RS_SSCP", ["sscpCprcId"], {})
@Index("FK_SSTM_RS_SSCP", ["sscpSstmId"], {})
@Index("PK_SSTM_SISTEMA_CORPORACAO", ["sscpId"], { unique: true })
@Entity("SSTM_SISTEMA_CORPORACAO")
export class SstmSistemaCorporacao extends BaseEntity {
  @Column("varchar", { primary: true, name: "SSCP_ID", length: 27 })
  public sscpId: string;

  @Column("varchar", { name: "SSCP_SSTM_ID", nullable: true, length: 27 })
  public sscpSstmId: string | null;

  @Column("varchar", { name: "SSCP_CPRC_ID", nullable: true, length: 27 })
  public sscpCprcId: string | null;

  @Column("varchar", {
    name: "SSCP_LOCAL_DATABASE",
    nullable: true,
    length: 60,
  })
  public sscpLocalDatabase: string | null;

  @Column("varchar", {
    name: "SSCP_REMOTE_DATABASE",
    nullable: true,
    length: 60,
  })
  public sscpRemoteDatabase: string | null;

  @Column("varchar", {
    name: "SSCP_SYSTEM_DATABASE",
    nullable: true,
    length: 60,
  })
  public sscpSystemDatabase: string | null;

  @Column("datetime", { name: "SSCP_LASTUPDATE", nullable: true })
  public sscpLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => SstmSistema,
    (sstmSistema) => sstmSistema.sstmSistemaCorporacaos
  )
  @JoinColumn([{ name: "SSCP_SSTM_ID", referencedColumnName: "sstmId" }])
  public sscpSstm: SstmSistema;

  @ManyToOne(
    () => CoreCorporacao,
    (coreCorporacao) => coreCorporacao.sstmSistemaCorporacaos
  )
  @JoinColumn([{ name: "SSCP_CPRC_ID", referencedColumnName: "cprcId" }])
  public sscpCprc: CoreCorporacao;

  @RelationId(
    (sstmSistemaCorporacao: SstmSistemaCorporacao) =>
      sstmSistemaCorporacao.sscpSstm
  )
  public sscpSstmId2: string | null;

  @RelationId(
    (sstmSistemaCorporacao: SstmSistemaCorporacao) =>
      sstmSistemaCorporacao.sscpCprc
  )
  public sscpCprcId2: string | null;

  public constructor(init?: Partial<SstmSistemaCorporacao>) {
    super();
    Object.assign(this, init);
  }
}
