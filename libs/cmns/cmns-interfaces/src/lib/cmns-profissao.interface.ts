import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsPessoaFisica } from "./cmns-pessoa-fisica";

@Index("PK_CMNS_PROFISSAO", ["id"], { unique: true })
@Entity("CMNS_PROFISSAO")
export class CmnsProfissao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PROF_CODIGO", nullable: true, length: 5 })
  public profCodigo: string | null;

  @Column("nvarchar", { name: "PROF_NOME", nullable: true, length: 64 })
  public profNome: string | null;

  @Column("nvarchar", { name: "PROF_CODIGO_IRPF", nullable: true, length: 5 })
  public profCodigoIrpf: string | null;

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
    () => CmnsPessoaFisica,
    (cmnsPessoaFisica) => cmnsPessoaFisica.psfsProf
  )
  public cmnsPessoaFisicas: CmnsPessoaFisica[];

  @ManyToOne(
    () => CmnsProfissao,
    (cmnsProfissao) => cmnsProfissao.cmnsProfissaos
  )
  @JoinColumn([{ name: "PROF_PROF_ID", referencedColumnName: "id" }])
  public profProf: CmnsProfissao;

  @OneToMany(() => CmnsProfissao, (cmnsProfissao) => cmnsProfissao.profProf)
  public cmnsProfissaos: CmnsProfissao[];
}
