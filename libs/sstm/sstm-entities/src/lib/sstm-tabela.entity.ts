import { Column, Entity, Index, OneToMany } from "typeorm";
import { SstmSistemaTabela } from "./sstm-sistema-tabela";
import { SstmTabelaScript } from "./sstm-tabela-script";

@Index("PK_SSTM_TABELA", ["id"], { unique: true })
@Entity("SSTM_TABELA")
export class SstmTabela {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "TBLS_NOME", nullable: true, length: 64 })
  public tblsNome: string | null;

  @Column("nvarchar", { name: "TBLS_CAPTION", nullable: true, length: 40 })
  public tblsCaption: string | null;

  @Column("nvarchar", { name: "TBLS_MNEMONICO", length: 5 })
  public tblsMnemonico: string;

  @Column("smallint", { name: "TBLS_EXPORTAVEL", nullable: true })
  public tblsExportavel: number | null;

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
    () => SstmSistemaTabela,
    (sstmSistemaTabela) => sstmSistemaTabela.sstbTbls
  )
  public sstmSistemaTabelas: SstmSistemaTabela[];

  @OneToMany(
    () => SstmTabelaScript,
    (sstmTabelaScript) => sstmTabelaScript.tbscTbls
  )
  public sstmTabelaScripts: SstmTabelaScript[];
}
