import { Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaEndereco } from "./cmns-pessoa-endereco";

@Index("PK_CMNS_TIPO_ENDERECO", ["id"], { unique: true })
@Entity("CMNS_TIPO_ENDERECO")
export class CmnsTipoEndereco {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "TPEN_CODIGO", nullable: true, length: 3 })
  public tpenCodigo: string | null;

  @Column("nvarchar", { name: "TPEN_NOME", nullable: true, length: 64 })
  public tpenNome: string | null;

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
    () => CmnsPessoaEndereco,
    (cmnsPessoaEndereco) => cmnsPessoaEndereco.psenTpen
  )
  public cmnsPessoaEnderecos: CmnsPessoaEndereco[];
}
