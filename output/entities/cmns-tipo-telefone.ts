import { Column, Entity, Index, OneToMany } from "typeorm";
import CmnsPessoaTelefone from "./cmns-pessoa-telefone";

@Index("PK_CMNS_TIPO_TELEFONE", ["id"], { unique: true })
@Entity("CMNS_TIPO_TELEFONE")
export default class CmnsTipoTelefone {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "TPTL_CODIGO", nullable: true, length: 3 })
  public tptlCodigo?: string | null;

  @Column("nvarchar", { name: "TPTL_NOME", nullable: true, length: 64 })
  public tptlNome?: string | null;

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

  @OneToMany(
    () => CmnsPessoaTelefone,
    (cmnsPessoaTelefone) => cmnsPessoaTelefone.pstlTptl
  )
  public cmnsPessoaTelefones?: CmnsPessoaTelefone[];
}
