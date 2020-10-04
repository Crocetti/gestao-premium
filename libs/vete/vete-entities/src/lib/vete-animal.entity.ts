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
import { CmnsPessoa } from "./cmns-pessoa";
import { PecrRaca } from "./pecr-raca";
import { VeteAnimalFoto } from "./vete-animal-foto";
import { VeteCirurgias } from "./vete-cirurgias";
import { VeteConsulta } from "./vete-consulta";
import { VeteInternacao } from "./vete-internacao";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";
import { VeteRetorno } from "./vete-retorno";

@Index("FK_PESS_RS_ANML", ["anmlPessId"], {})
@Index("FK_RACA_RS_ANML", ["anmlRacaId"], {})
@Index("PK_VETE_ANIMAL", ["anmlId"], { unique: true })
@Entity("VETE_ANIMAL")
export class VeteAnimal extends BaseEntity {
  @Column("varchar", { primary: true, name: "ANML_ID", length: 27 })
  public anmlId: string;

  @Column("varchar", { name: "ANML_PESS_ID", nullable: true, length: 27 })
  public anmlPessId: string | null;

  @Column("varchar", { name: "ANML_RACA_ID", nullable: true, length: 27 })
  public anmlRacaId: string | null;

  @Column("varchar", { name: "ANML_CODIGO", nullable: true, length: 15 })
  public anmlCodigo: string | null;

  @Column("varchar", { name: "ANML_NOME", nullable: true, length: 40 })
  public anmlNome: string | null;

  @Column("datetime", { name: "ANML_DT_NASCIMENTO", nullable: true })
  public anmlDtNascimento: LocalDateTime | null;

  @Column("varchar", { name: "ANML_COR_PELAGEM", nullable: true, length: 24 })
  public anmlCorPelagem: string | null;

  @Column("varchar", { name: "ANML_SEXO", nullable: true, length: 10 })
  public anmlSexo: string | null;

  @Column("datetime", { name: "ANML_LASTUPDATE", nullable: true })
  public anmlLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.veteAnimals)
  @JoinColumn([{ name: "ANML_PESS_ID", referencedColumnName: "pessId" }])
  public anmlPess: CmnsPessoa;

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.veteAnimals)
  @JoinColumn([{ name: "ANML_RACA_ID", referencedColumnName: "racaId" }])
  public anmlRaca: PecrRaca;

  @OneToMany(() => VeteAnimalFoto, (veteAnimalFoto) => veteAnimalFoto.anftAnml)
  public veteAnimalFotos: VeteAnimalFoto[];

  @OneToMany(() => VeteCirurgias, (veteCirurgias) => veteCirurgias.cgiaAnml)
  public veteCirurgias: VeteCirurgias[];

  @OneToMany(() => VeteConsulta, (veteConsulta) => veteConsulta.consAnml)
  public veteConsultas: VeteConsulta[];

  @OneToMany(() => VeteInternacao, (veteInternacao) => veteInternacao.intrAnml)
  public veteInternacaos: VeteInternacao[];

  @OneToMany(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.osvtAnml
  )
  public veteOrdemDeServicos: VeteOrdemDeServico[];

  @OneToMany(() => VeteRetorno, (veteRetorno) => veteRetorno.rtrnAnml)
  public veteRetornos: VeteRetorno[];

  @RelationId((veteAnimal: VeteAnimal) => veteAnimal.anmlPess)
  public anmlPessId2: string | null;

  @RelationId((veteAnimal: VeteAnimal) => veteAnimal.anmlRaca)
  public anmlRacaId2: string | null;

  public constructor(init?: Partial<VeteAnimal>) {
    super();
    Object.assign(this, init);
  }
}
