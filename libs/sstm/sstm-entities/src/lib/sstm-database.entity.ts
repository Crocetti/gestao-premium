import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { SstmTabelaScript } from "./sstm-tabela-script";

@Index("PK_SSTM_DATABASE", ["dtbsId"], { unique: true })
@Entity("SSTM_DATABASE")
export class SstmDatabase extends BaseEntity {
  @Column("varchar", { primary: true, name: "DTBS_ID", length: 27 })
  public dtbsId: string;

  @Column("varchar", { name: "DTBS_NOME", nullable: true, length: 40 })
  public dtbsNome: string | null;

  @Column("varchar", { name: "DTBS_VERSAO", nullable: true, length: 20 })
  public dtbsVersao: string | null;

  @Column("datetime", { name: "DTBS_LASTUPDATE", nullable: true })
  public dtbsLastupdate: LocalDateTime | null;

  @OneToMany(
    () => SstmTabelaScript,
    (sstmTabelaScript) => sstmTabelaScript.tbscDtbs
  )
  public sstmTabelaScripts: SstmTabelaScript[];

  public constructor(init?: Partial<SstmDatabase>) {
    super();
    Object.assign(this, init);
  }
}
