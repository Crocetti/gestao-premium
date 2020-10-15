import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SstmScripts } from "./sstm-scripts";
import { SstmSistema } from "./sstm-sistema";
import { SstmSistemaversaoObjetoversao } from "./sstm-sistemaversao-objetoversao";

@Index("PK_SSTM_SISTEMA_VERSAO", ["id"], { unique: true })
@Entity("SSTM_SISTEMA_VERSAO")
export class SstmSistemaVersao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "SSVS_VERSION_SYSTEM",
    nullable: true,
    length: 20,
  })
  public ssvsVersionSystem: string | null;

  @Column("nvarchar", {
    name: "SSVS_VERSION_DATABASE",
    nullable: true,
    length: 20,
  })
  public ssvsVersionDatabase: string | null;

  @Column("datetime2", { name: "SSVS_DT_VERSION", nullable: true })
  public ssvsDtVersion: LocalDateTime | null;

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

  @OneToMany(() => SstmScripts, (sstmScripts) => sstmScripts.scptSsvs)
  public sstmScripts: SstmScripts[];

  @ManyToOne(() => SstmSistema, (sstmSistema) => sstmSistema.sstmSistemaVersaos)
  @JoinColumn([{ name: "SSVS_SSTM_ID", referencedColumnName: "id" }])
  public ssvsSstm: SstmSistema;

  @OneToMany(
    () => SstmSistemaversaoObjetoversao,
    (sstmSistemaversaoObjetoversao) => sstmSistemaversaoObjetoversao.svovSsvs
  )
  public sstmSistemaversaoObjetoversaos: SstmSistemaversaoObjetoversao[];
}
