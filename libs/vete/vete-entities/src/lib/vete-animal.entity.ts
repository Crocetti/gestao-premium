import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";
import { PecrRaca } from "./pecr-raca";
import { VeteAnimalFoto } from "./vete-animal-foto";
import { VeteCirurgias } from "./vete-cirurgias";
import { VeteConsulta } from "./vete-consulta";
import { VeteInternacao } from "./vete-internacao";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";
import { VeteRetorno } from "./vete-retorno";

@Index("PK_VETE_ANIMAL", ["id"], { unique: true })
@Entity("VETE_ANIMAL")
export class VeteAnimal {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "ANML_CODIGO", nullable: true, length: 15 })
  public anmlCodigo: string | null;

  @Column("nvarchar", { name: "ANML_NOME", nullable: true, length: 40 })
  public anmlNome: string | null;

  @Column("datetime2", { name: "ANML_DT_NASCIMENTO", nullable: true })
  public anmlDtNascimento: Date | null;

  @Column("nvarchar", { name: "ANML_COR_PELAGEM", nullable: true, length: 24 })
  public anmlCorPelagem: string | null;

  @Column("nvarchar", { name: "ANML_SEXO", nullable: true, length: 10 })
  public anmlSexo: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.veteAnimals)
  @JoinColumn([{ name: "ANML_PESS_ID", referencedColumnName: "id" }])
  public anmlPess: CmnsPessoa;

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.veteAnimals)
  @JoinColumn([{ name: "ANML_RACA_ID", referencedColumnName: "id" }])
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
}
