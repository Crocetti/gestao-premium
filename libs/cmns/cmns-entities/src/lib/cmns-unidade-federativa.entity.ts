import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsLocalidade } from "./cmns-localidade";
import { CmnsPais } from "./cmns-pais";
import { FsclRegimeTributario } from "./fscl-regime-tributario";

@Index("PK_CMNS_UNIDADE_FEDERATIVA", ["id"], { unique: true })
@Entity("CMNS_UNIDADE_FEDERATIVA")
export class CmnsUnidadeFederativa {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "UNFD_NOME", nullable: true, length: 64 })
  public unfdNome: string | null;

  @Column("nvarchar", { name: "UNFD_SIGLA", nullable: true, length: 3 })
  public unfdSigla: string | null;

  @Column("nvarchar", { name: "UNFD_PREPOSICAO", nullable: true, length: 3 })
  public unfdPreposicao: string | null;

  @Column("nvarchar", { name: "UNFD_NR_IBGE", nullable: true, length: 12 })
  public unfdNrIbge: string | null;

  @Column("nvarchar", { name: "UNFD_CEP_INICIAL", nullable: true, length: 9 })
  public unfdCepInicial: string | null;

  @Column("nvarchar", { name: "UNFD_CEP_FINAL", nullable: true, length: 9 })
  public unfdCepFinal: string | null;

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

  @OneToMany(() => CmnsLocalidade, (cmnsLocalidade) => cmnsLocalidade.lcldUnfd)
  public cmnsLocalidades: CmnsLocalidade[];

  @ManyToOne(() => CmnsPais, (cmnsPais) => cmnsPais.cmnsUnidadeFederativas)
  @JoinColumn([{ name: "UNFD_PAIS_ID", referencedColumnName: "id" }])
  public unfdPais: CmnsPais;

  @OneToMany(
    () => FsclRegimeTributario,
    (fsclRegimeTributario) => fsclRegimeTributario.rgtbUnfd
  )
  public fsclRegimeTributarios: FsclRegimeTributario[];
}
