import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SstmDatabase from "./sstm-database";
import SstmTabela from "./sstm-tabela";

@Index("PK_SSTM_TABELA_SCRIPT", ["id"], { unique: true })
@Entity("SSTM_TABELA_SCRIPT")
export default class SstmTabelaScript {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "TBSC_NOME", nullable: true, length: 40 })
  public tbscNome?: string | null;

  @Column("nvarchar", { name: "TBSC_VERSAO", nullable: true, length: 20 })
  public tbscVersao?: string | null;

  @Column("nvarchar", {
    name: "TBSC_TP_SCRIPT_TABLE",
    nullable: true,
    length: 40,
  })
  public tbscTpScriptTable?: string | null;

  @Column("nvarchar", { name: "TBSC_SCRIPT", nullable: true })
  public tbscScript?: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @ManyToOne(
    () => SstmDatabase,
    (sstmDatabase) => sstmDatabase.sstmTabelaScripts
  )
  @JoinColumn([{ name: "TBSC_DTBS_ID", referencedColumnName: "id" }])
  public tbscDtbs?: SstmDatabase;

  @ManyToOne(() => SstmTabela, (sstmTabela) => sstmTabela.sstmTabelaScripts)
  @JoinColumn([{ name: "TBSC_TBLS_ID", referencedColumnName: "id" }])
  public tbscTbls?: SstmTabela;
}
