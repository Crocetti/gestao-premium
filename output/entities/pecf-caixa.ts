import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CmnsPessoa from "./cmns-pessoa";

@Index("PK_PECF_CAIXA", ["id"], { unique: true })
@Entity("PECF_CAIXA")
export default class PecfCaixa {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "PECX_CODIGO", nullable: true, length: 3 })
  public pecxCodigo?: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.pecfCaixas)
  @JoinColumn([{ name: "PECX_PESS_ID", referencedColumnName: "id" }])
  public pecxPess?: CmnsPessoa;
}
