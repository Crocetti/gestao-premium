import { Column, Entity, Index, OneToMany } from "typeorm";
import CmnsPessoaEndereco from "./cmns-pessoa-endereco";

@Index("PK_CMNS_TIPO_ENDERECO", ["id"], { unique: true })
@Entity("CMNS_TIPO_ENDERECO")
export default class CmnsTipoEndereco {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "TPEN_CODIGO", nullable: true, length: 3 })
  public tpenCodigo?: string | null;

  @Column("nvarchar", { name: "TPEN_NOME", nullable: true, length: 64 })
  public tpenNome?: string | null;

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
    () => CmnsPessoaEndereco,
    (cmnsPessoaEndereco) => cmnsPessoaEndereco.psenTpen
  )
  public cmnsPessoaEnderecos?: CmnsPessoaEndereco[];
}
