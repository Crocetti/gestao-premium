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
import { CmnsPessoaFisica } from "./cmns-pessoa-fisica";

@Index("FK_PROF_RS_PROF", ["profProfId"], {})
@Index("PK_CMNS_PROFISSAO", ["profId"], { unique: true })
@Entity("CMNS_PROFISSAO")
export class CmnsProfissao extends BaseEntity {
  @Column("varchar", { primary: true, name: "PROF_ID", length: 27 })
  public profId: string;

  @Column("varchar", { name: "PROF_PROF_ID", nullable: true, length: 27 })
  public profProfId: string | null;

  @Column("varchar", { name: "PROF_CODIGO", nullable: true, length: 5 })
  public profCodigo: string | null;

  @Column("varchar", { name: "PROF_NOME", nullable: true, length: 64 })
  public profNome: string | null;

  @Column("varchar", { name: "PROF_CODIGO_IRPF", nullable: true, length: 5 })
  public profCodigoIrpf: string | null;

  @Column("datetime", { name: "PROF_LASTUPDATE", nullable: true })
  public profLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaFisica,
    (cmnsPessoaFisica) => cmnsPessoaFisica.psfsProf
  )
  public cmnsPessoaFisicas: CmnsPessoaFisica[];

  @ManyToOne(
    () => CmnsProfissao,
    (cmnsProfissao) => cmnsProfissao.cmnsProfissaos
  )
  @JoinColumn([{ name: "PROF_PROF_ID", referencedColumnName: "profId" }])
  public profProf: CmnsProfissao;

  @OneToMany(() => CmnsProfissao, (cmnsProfissao) => cmnsProfissao.profProf)
  public cmnsProfissaos: CmnsProfissao[];

  @RelationId((cmnsProfissao: CmnsProfissao) => cmnsProfissao.profProf)
  public profProfId2: string | null;

  public constructor(init?: Partial<CmnsProfissao>) {
    super();
    Object.assign(this, init);
  }
}
