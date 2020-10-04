import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { SstmDatabase } from "./sstm-database";
import { SstmTabela } from "./sstm-tabela";

@Index("FK_DTBS_RS_TBSC", ["tbscDtbsId"], {})
@Index("FK_TBLS_RS_TBSC", ["tbscTblsId"], {})
@Index("PK_SSTM_TABELA_SCRIPT", ["tbscId"], { unique: true })
@Entity("SSTM_TABELA_SCRIPT")
export class SstmTabelaScript extends BaseEntity {
  @Column("varchar", { primary: true, name: "TBSC_ID", length: 27 })
  public tbscId: string;

  @Column("varchar", { name: "TBSC_DTBS_ID", nullable: true, length: 27 })
  public tbscDtbsId: string | null;

  @Column("varchar", { name: "TBSC_TBLS_ID", nullable: true, length: 27 })
  public tbscTblsId: string | null;

  @Column("varchar", { name: "TBSC_NOME", nullable: true, length: 40 })
  public tbscNome: string | null;

  @Column("varchar", { name: "TBSC_VERSAO", nullable: true, length: 20 })
  public tbscVersao: string | null;

  @Column("varchar", {
    name: "TBSC_TP_SCRIPT_TABLE",
    nullable: true,
    length: 40,
  })
  public tbscTpScriptTable: string | null;

  @Column("text", { name: "TBSC_SCRIPT", nullable: true })
  public tbscScript: string | null;

  @Column("datetime", { name: "TBSC_LASTUPDATE", nullable: true })
  public tbscLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => SstmDatabase,
    (sstmDatabase) => sstmDatabase.sstmTabelaScripts
  )
  @JoinColumn([{ name: "TBSC_DTBS_ID", referencedColumnName: "dtbsId" }])
  public tbscDtbs: SstmDatabase;

  @ManyToOne(() => SstmTabela, (sstmTabela) => sstmTabela.sstmTabelaScripts)
  @JoinColumn([{ name: "TBSC_TBLS_ID", referencedColumnName: "tblsId" }])
  public tbscTbls: SstmTabela;

  @RelationId((sstmTabelaScript: SstmTabelaScript) => sstmTabelaScript.tbscDtbs)
  public tbscDtbsId2: string | null;

  @RelationId((sstmTabelaScript: SstmTabelaScript) => sstmTabelaScript.tbscTbls)
  public tbscTblsId2: string | null;

  public constructor(init?: Partial<SstmTabelaScript>) {
    super();
    Object.assign(this, init);
  }
}
