import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsTipoEndereco } from "./cmns-tipo-endereco";
import { CmnsBairro } from "./cmns-bairro";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("PK_CMNS_PESSOA_ENDERECO", ["id"], { unique: true })
@Entity("CMNS_PESSOA_ENDERECO")
export class CmnsPessoaEndereco {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PSEN_CEP", nullable: true, length: 9 })
  public psenCep: string | null;

  @Column("nvarchar", { name: "PSEN_LOGRADOURO", nullable: true, length: 128 })
  public psenLogradouro: string | null;

  @Column("nvarchar", { name: "PSEN_NUMERO", nullable: true, length: 20 })
  public psenNumero: string | null;

  @Column("nvarchar", { name: "PSEN_COMPLEMENTO", nullable: true, length: 40 })
  public psenComplemento: string | null;

  @Column("numeric", {
    name: "PSEN_DISTANCIA_KM",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public psenDistanciaKm: number | null;

  @Column("nvarchar", { name: "PSEN_ZONA", nullable: true, length: 15 })
  public psenZona: string | null;

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

  @ManyToOne(
    () => CmnsTipoEndereco,
    (cmnsTipoEndereco) => cmnsTipoEndereco.cmnsPessoaEnderecos
  )
  @JoinColumn([{ name: "PSEN_TPEN_ID", referencedColumnName: "id" }])
  public psenTpen: CmnsTipoEndereco;

  @ManyToOne(() => CmnsBairro, (cmnsBairro) => cmnsBairro.cmnsPessoaEnderecos)
  @JoinColumn([{ name: "PSEN_BAIR_ID", referencedColumnName: "id" }])
  public psenBair: CmnsBairro;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaEnderecos)
  @JoinColumn([{ name: "PSEN_PESS_ID", referencedColumnName: "id" }])
  public psenPess: CmnsPessoa;
}
