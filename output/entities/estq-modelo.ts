import { Column, Entity, Index, OneToMany } from "typeorm";
import EstqMercadoria from "./estq-mercadoria";

@Index("PK_ESTQ_MODELO", ["id"], { unique: true })
@Entity("ESTQ_MODELO")
export default class EstqModelo {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "MODE_CODIGO", nullable: true, length: 5 })
  public modeCodigo?: string | null;

  @Column("nvarchar", { name: "MODE_NOME", nullable: true, length: 40 })
  public modeNome?: string | null;

  @Column("nvarchar", { name: "MODE_DESCRICAO", nullable: true, length: 128 })
  public modeDescricao?: string | null;

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

  @OneToMany(() => EstqMercadoria, (estqMercadoria) => estqMercadoria.mrcdMode)
  public estqMercadorias?: EstqMercadoria[];
}
