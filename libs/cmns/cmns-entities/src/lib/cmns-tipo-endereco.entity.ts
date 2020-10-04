import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaEndereco } from "./cmns-pessoa-endereco";

@Index("PK_CMNS_TIPO_ENDERECO", ["tpenId"], { unique: true })
@Entity("CMNS_TIPO_ENDERECO")
export class CmnsTipoEndereco extends BaseEntity {
  @Column("varchar", { primary: true, name: "TPEN_ID", length: 27 })
  public tpenId: string;

  @Column("varchar", { name: "TPEN_CODIGO", nullable: true, length: 3 })
  public tpenCodigo: string | null;

  @Column("varchar", { name: "TPEN_NOME", nullable: true, length: 64 })
  public tpenNome: string | null;

  @Column("datetime", { name: "TPEN_LASTUPDATE", nullable: true })
  public tpenLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaEndereco,
    (cmnsPessoaEndereco) => cmnsPessoaEndereco.psenTpen
  )
  public cmnsPessoaEnderecos: CmnsPessoaEndereco[];

  public constructor(init?: Partial<CmnsTipoEndereco>) {
    super();
    Object.assign(this, init);
  }
}
