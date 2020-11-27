import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import CmnsBairro from "./cmns-bairro";

@Index("PK_CMNS_LOGRADOURO", ["id"], { unique: true })
@Entity("CMNS_LOGRADOURO")
export default class CmnsLogradouro {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "LGRD_NOME", nullable: true, length: 256 })
  public lgrdNome?: string | null;

  @Column("nvarchar", { name: "LGRD_NOME_ABREV", nullable: true, length: 40 })
  public lgrdNomeAbrev?: string | null;

  @Column("nvarchar", { name: "LGRD_CEP", nullable: true, length: 9 })
  public lgrdCep?: string | null;

  @Column("nvarchar", { name: "LGRD_ZONA", nullable: true, length: 15 })
  public lgrdZona?: string | null;

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

  @Column("nvarchar", { name: "LGRD_CODIGO", nullable: true, length: 10 })
  public lgrdCodigo?: string | null;

  @ManyToOne(() => CmnsBairro, (cmnsBairro) => cmnsBairro.cmnsLogradouros)
  @JoinColumn([{ name: "LGRD_BAIR_ID", referencedColumnName: "id" }])
  public lgrdBair?: CmnsBairro;
}
