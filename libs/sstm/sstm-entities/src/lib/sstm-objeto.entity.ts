import { Column, Entity, Index, OneToMany } from "typeorm";
import { SstmObjetoVersao } from "./sstm-objeto-versao";

@Index("PK_SSTM_OBJETO", ["id"], { unique: true })
@Entity("SSTM_OBJETO")
export class SstmObjeto {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "OBJT_NAME", nullable: true, length: 64 })
  public objtName: string | null;

  @Column("nvarchar", { name: "OBJT_FILE", nullable: true, length: 128 })
  public objtFile: string | null;

  @Column("nvarchar", { name: "OBJT_PATH", nullable: true, length: 256 })
  public objtPath: string | null;

  @Column("nvarchar", { name: "OBJT_TYPE", nullable: true, length: 15 })
  public objtType: string | null;

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

  @OneToMany(
    () => SstmObjetoVersao,
    (sstmObjetoVersao) => sstmObjetoVersao.obbnObjt
  )
  public sstmObjetoVersaos: SstmObjetoVersao[];
}
