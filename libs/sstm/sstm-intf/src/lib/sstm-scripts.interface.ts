import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { SstmSistemaVersao } from "./sstm-sistema-versao";

@Index("FK_SSVS_RS_SCPT", ["scptSsvsId"], {})
@Index("PK_SSTM_SCRIPTS", ["scptId"], { unique: true })
@Entity("SSTM_SCRIPTS")
export class SstmScripts extends BaseEntity {
  @Column("varchar", { primary: true, name: "SCPT_ID", length: 27 })
  public scptId: string;

  @Column("varchar", { name: "SCPT_SSVS_ID", nullable: true, length: 27 })
  public scptSsvsId: string | null;

  @Column("varchar", { name: "SCPT_NAME", nullable: true, length: 64 })
  public scptName: string | null;

  @Column("text", { name: "SCPT_SCRIPT", nullable: true })
  public scptScript: string | null;

  @Column("datetime", { name: "SCPT_LASTUPDATE", nullable: true })
  public scptLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => SstmSistemaVersao,
    (sstmSistemaVersao) => sstmSistemaVersao.sstmScripts
  )
  @JoinColumn([{ name: "SCPT_SSVS_ID", referencedColumnName: "ssvsId" }])
  public scptSsvs: SstmSistemaVersao;

  @RelationId((sstmScripts: SstmScripts) => sstmScripts.scptSsvs)
  public scptSsvsId2: string | null;

  public constructor(init?: Partial<SstmScripts>) {
    super();
    Object.assign(this, init);
  }
}
