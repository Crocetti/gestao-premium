import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SstmSistemaVersao from "./sstm-sistema-versao";

@Index("PK_SSTM_SCRIPTS", ["id"], { unique: true })
@Entity("SSTM_SCRIPTS")
export default class SstmScripts {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "SCPT_NAME", nullable: true, length: 64 })
  public scptName?: string | null;

  @Column("text", { name: "SCPT_SCRIPT", nullable: true })
  public scptScript?: string | null;

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
    () => SstmSistemaVersao,
    (sstmSistemaVersao) => sstmSistemaVersao.sstmScripts
  )
  @JoinColumn([{ name: "SCPT_SSVS_ID", referencedColumnName: "id" }])
  public scptSsvs?: SstmSistemaVersao;
}
