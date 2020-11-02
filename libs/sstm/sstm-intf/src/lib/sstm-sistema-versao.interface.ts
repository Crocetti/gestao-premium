import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { SstmScripts } from "./sstm-scripts";
import { SstmSistema } from "./sstm-sistema";
import { SstmSistemaversaoObjetoversao } from "./sstm-sistemaversao-objetoversao";

@Index("FK_SSTM_RS_SSVS", ["ssvsSstmId"], {})
@Index("PK_SSTM_SISTEMA_VERSAO", ["ssvsId"], { unique: true })
@Entity("SSTM_SISTEMA_VERSAO")
export class SstmSistemaVersao extends BaseEntity {
  @Column("varchar", { primary: true, name: "SSVS_ID", length: 27 })
  public ssvsId: string;

  @Column("varchar", { name: "SSVS_SSTM_ID", nullable: true, length: 27 })
  public ssvsSstmId: string | null;

  @Column("varchar", {
    name: "SSVS_VERSION_SYSTEM",
    nullable: true,
    length: 20,
  })
  public ssvsVersionSystem: string | null;

  @Column("varchar", {
    name: "SSVS_VERSION_DATABASE",
    nullable: true,
    length: 20,
  })
  public ssvsVersionDatabase: string | null;

  @Column("datetime", { name: "SSVS_DT_VERSION", nullable: true })
  public ssvsDtVersion: LocalDateTime | null;

  @Column("datetime", { name: "SSVS_LASTUPDATE", nullable: true })
  public ssvsLastupdate: LocalDateTime | null;

  @OneToMany(() => SstmScripts, (sstmScripts) => sstmScripts.scptSsvs)
  public sstmScripts: SstmScripts[];

  @ManyToOne(() => SstmSistema, (sstmSistema) => sstmSistema.sstmSistemaVersaos)
  @JoinColumn([{ name: "SSVS_SSTM_ID", referencedColumnName: "sstmId" }])
  public ssvsSstm: SstmSistema;

  @OneToMany(
    () => SstmSistemaversaoObjetoversao,
    (sstmSistemaversaoObjetoversao) => sstmSistemaversaoObjetoversao.svovSsvs
  )
  public sstmSistemaversaoObjetoversaos: SstmSistemaversaoObjetoversao[];

  @RelationId(
    (sstmSistemaVersao: SstmSistemaVersao) => sstmSistemaVersao.ssvsSstm
  )
  public ssvsSstmId2: string | null;

  public constructor(init?: Partial<SstmSistemaVersao>) {
    super();
    Object.assign(this, init);
  }
}
