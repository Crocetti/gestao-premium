import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { CmnsLocalidade } from "./cmns-localidade";
import { CmnsLogradouro } from "./cmns-logradouro";
import { CmnsPessoaEndereco } from "./cmns-pessoa-endereco";

@Index("FK_LCLD_RS_BAIR", ["bairLcldId"], {})
@Index("PK_CMNS_BAIRRO", ["bairId"], { unique: true })
@Entity("CMNS_BAIRRO")
export class CmnsBairro extends BaseEntity {
  @Column("varchar", { primary: true, name: "BAIR_ID", length: 27 })
  public bairId: string;

  @Column("varchar", { name: "BAIR_LCLD_ID", nullable: true, length: 27 })
  public bairLcldId: string | null;

  @Column("varchar", { name: "BAIR_NOME", nullable: true, length: 128 })
  public bairNome: string | null;

  @Column("varchar", {
    name: "BAIR_NOME_ABREVIADO",
    nullable: true,
    length: 40,
  })
  public bairNomeAbreviado: string | null;

  @Column("varchar", { name: "BAIR_CEP_INICIAL", nullable: true, length: 9 })
  public bairCepInicial: string | null;

  @Column("varchar", { name: "BAIR_CEP_FINAL", nullable: true, length: 9 })
  public bairCepFinal: string | null;

  @Column("datetime", { name: "BAIR_LASTUPDATE", nullable: true })
  public bairLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CmnsLocalidade,
    (cmnsLocalidade) => cmnsLocalidade.cmnsBairros
  )
  @JoinColumn([{ name: "BAIR_LCLD_ID", referencedColumnName: "lcldId" }])
  public bairLcld: CmnsLocalidade;

  @OneToMany(() => CmnsLogradouro, (cmnsLogradouro) => cmnsLogradouro.lgrdBair)
  public cmnsLogradouros: CmnsLogradouro[];

  @OneToMany(
    () => CmnsPessoaEndereco,
    (cmnsPessoaEndereco) => cmnsPessoaEndereco.psenBair
  )
  public cmnsPessoaEnderecos: CmnsPessoaEndereco[];

  @RelationId((cmnsBairro: CmnsBairro) => cmnsBairro.bairLcld)
  public bairLcldId2: string | null;

  public constructor(init?: Partial<CmnsBairro>) {
    super();
    Object.assign(this, init);
  }
}
