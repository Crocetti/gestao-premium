import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CmnsLocalidade from "./cmns-localidade";
import CmnsLogradouro from "./cmns-logradouro";
import CmnsPessoaEndereco from "./cmns-pessoa-endereco";

@Index("PK_CMNS_BAIRRO", ["id"], { unique: true })
@Entity("CMNS_BAIRRO")
export default class CmnsBairro {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "BAIR_NOME", nullable: true, length: 128 })
  public bairNome?: string | null;

  @Column("nvarchar", {
    name: "BAIR_NOME_ABREVIADO",
    nullable: true,
    length: 40,
  })
  public bairNomeAbreviado?: string | null;

  @Column("nvarchar", { name: "BAIR_CEP_INICIAL", nullable: true, length: 9 })
  public bairCepInicial?: string | null;

  @Column("nvarchar", { name: "BAIR_CEP_FINAL", nullable: true, length: 9 })
  public bairCepFinal?: string | null;

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

  @Column("nvarchar", { name: "BAIR_CODIGO", nullable: true, length: 10 })
  public bairCodigo?: string | null;

  @ManyToOne(
    () => CmnsLocalidade,
    (cmnsLocalidade) => cmnsLocalidade.cmnsBairros
  )
  @JoinColumn([{ name: "BAIR_LCLD_ID", referencedColumnName: "id" }])
  public bairLcld?: CmnsLocalidade;

  @OneToMany(() => CmnsLogradouro, (cmnsLogradouro) => cmnsLogradouro.lgrdBair)
  public cmnsLogradouros?: CmnsLogradouro[];

  @OneToMany(
    () => CmnsPessoaEndereco,
    (cmnsPessoaEndereco) => cmnsPessoaEndereco.psenBair
  )
  public cmnsPessoaEnderecos?: CmnsPessoaEndereco[];
}
