import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SstmSistema from "./sstm-sistema";
import SstmTabela from "./sstm-tabela";

@Index("PK_SSTM_SISTEMA_TABELA", ["id"], { unique: true })
@Entity("SSTM_SISTEMA_TABELA")
export default class SstmSistemaTabela {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "SSTB_TP_ID", length: 4 })
  public sstbTpId?: string;

  @Column("int", { name: "SSTB_NEXT_ID" })
  public sstbNextId?: number;

  @Column("bit", { name: "SSTB_KEY" })
  public sstbKey?: boolean;

  @Column("nvarchar", { name: "SSTB_FIELD", nullable: true, length: 24 })
  public sstbField?: string | null;

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

  @ManyToOne(() => SstmSistema, (sstmSistema) => sstmSistema.sstmSistemaTabelas)
  @JoinColumn([{ name: "SSTB_SSTM_ID", referencedColumnName: "id" }])
  public sstbSstm?: SstmSistema;

  @ManyToOne(() => SstmTabela, (sstmTabela) => sstmTabela.sstmSistemaTabelas)
  @JoinColumn([{ name: "SSTB_TBLS_ID", referencedColumnName: "id" }])
  public sstbTbls?: SstmTabela;
}
