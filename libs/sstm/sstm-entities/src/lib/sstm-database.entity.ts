import { Column, Entity, Index, OneToMany } from "typeorm";
import { SstmTabelaScript } from "./sstm-tabela-script";

@Index("PK_SSTM_DATABASE", ["id"], { unique: true })
@Entity("SSTM_DATABASE")
export class SstmDatabase {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "DTBS_NOME", nullable: true, length: 40 })
  public dtbsNome: string | null;

  @Column("nvarchar", { name: "DTBS_VERSAO", nullable: true, length: 20 })
  public dtbsVersao: string | null;

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

  @OneToMany(
    () => SstmTabelaScript,
    (sstmTabelaScript) => sstmTabelaScript.tbscDtbs
  )
  public sstmTabelaScripts: SstmTabelaScript[];
}
