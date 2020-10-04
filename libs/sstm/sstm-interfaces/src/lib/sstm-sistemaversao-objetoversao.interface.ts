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
import { SstmObjetoVersao } from "./sstm-objeto-versao";

@Index("FK_OBVS_RS_SVOV", ["svovObvsId"], {})
@Index("FK_SSVS_RS_SVOV", ["svovSsvsId"], {})
@Index("PK_SSTM_SISTEMAVERSAO_OBJETOVE", ["svovId"], { unique: true })
@Entity("SSTM_SISTEMAVERSAO_OBJETOVERSAO")
export class SstmSistemaversaoObjetoversao extends BaseEntity {
  @Column("varchar", { primary: true, name: "SVOV_ID", length: 27 })
  public svovId: string;

  @Column("varchar", { name: "SVOV_OBVS_ID", nullable: true, length: 27 })
  public svovObvsId: string | null;

  @Column("varchar", { name: "SVOV_SSVS_ID", nullable: true, length: 27 })
  public svovSsvsId: string | null;

  @Column("datetime", { name: "SVOV_LASTUPDATE", nullable: true })
  public svovLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => SstmSistemaVersao,
    (sstmSistemaVersao) => sstmSistemaVersao.sstmSistemaversaoObjetoversaos
  )
  @JoinColumn([{ name: "SVOV_SSVS_ID", referencedColumnName: "ssvsId" }])
  public svovSsvs: SstmSistemaVersao;

  @ManyToOne(
    () => SstmObjetoVersao,
    (sstmObjetoVersao) => sstmObjetoVersao.sstmSistemaversaoObjetoversaos
  )
  @JoinColumn([{ name: "SVOV_OBVS_ID", referencedColumnName: "obvsId" }])
  public svovObvs: SstmObjetoVersao;

  @RelationId(
    (sstmSistemaversaoObjetoversao: SstmSistemaversaoObjetoversao) =>
      sstmSistemaversaoObjetoversao.svovSsvs
  )
  public svovSsvsId2: string | null;

  @RelationId(
    (sstmSistemaversaoObjetoversao: SstmSistemaversaoObjetoversao) =>
      sstmSistemaversaoObjetoversao.svovObvs
  )
  public svovObvsId2: string | null;

  public constructor(init?: Partial<SstmSistemaversaoObjetoversao>) {
    super();
    Object.assign(this, init);
  }
}
