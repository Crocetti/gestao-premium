import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsCargo } from "./cmns-cargo";
import { CmnsNacionalidade } from "./cmns-nacionalidade";
import { CmnsPessoa } from "./cmns-pessoa";
import { CmnsProfissao } from "./cmns-profissao";

@Index("FK_CARG_RS_PSFS", ["psfsCargId"], {})
@Index("FK_NCNL_RS_PSFS", ["psfsNcnlId"], {})
@Index("FK_PESS_RS_PSFS", ["psfsPessId"], {})
@Index("FK_PROF_RS_PSFS", ["psfsProfId"], {})
@Index("PK_CMNS_PESSOA_FISICA", ["psfsId"], { unique: true })
@Entity("CMNS_PESSOA_FISICA")
export class CmnsPessoaFisica extends BaseEntity {
  @Column("varchar", { primary: true, name: "PSFS_ID", length: 27 })
  public psfsId: string;

  @Column("varchar", { name: "PSFS_NCNL_ID", nullable: true, length: 27 })
  public psfsNcnlId: string | null;

  @Column("varchar", { name: "PSFS_CARG_ID", nullable: true, length: 27 })
  public psfsCargId: string | null;

  @Column("varchar", { name: "PSFS_PESS_ID", nullable: true, length: 27 })
  public psfsPessId: string | null;

  @Column("varchar", { name: "PSFS_PROF_ID", nullable: true, length: 27 })
  public psfsProfId: string | null;

  @Column("varchar", { name: "PSFS_NOME_MAE", nullable: true, length: 64 })
  public psfsNomeMae: string | null;

  @Column("varchar", { name: "PSFS_NOME_PAI", nullable: true, length: 64 })
  public psfsNomePai: string | null;

  @Column("datetime", { name: "PSFS_DT_NASCIMENTO", nullable: true })
  public psfsDtNascimento: LocalDateTime | null;

  @Column("varchar", { name: "PSFS_SEXO", nullable: true, length: 10 })
  public psfsSexo: string | null;

  @Column("varchar", { name: "PSFS_ESTADO_CIVIL", nullable: true, length: 15 })
  public psfsEstadoCivil: string | null;

  @Column("varchar", { name: "PSFS_ESCOLARIDADE", nullable: true, length: 25 })
  public psfsEscolaridade: string | null;

  @Column("datetime", { name: "PSFS_LASTUPDATE", nullable: true })
  public psfsLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsCargo, (cmnsCargo) => cmnsCargo.cmnsPessoaFisicas)
  @JoinColumn([{ name: "PSFS_CARG_ID", referencedColumnName: "cargId" }])
  public psfsCarg: CmnsCargo;

  @ManyToOne(
    () => CmnsNacionalidade,
    (cmnsNacionalidade) => cmnsNacionalidade.cmnsPessoaFisicas
  )
  @JoinColumn([{ name: "PSFS_NCNL_ID", referencedColumnName: "ncnlId" }])
  public psfsNcnl: CmnsNacionalidade;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaFisicas)
  @JoinColumn([{ name: "PSFS_PESS_ID", referencedColumnName: "pessId" }])
  public psfsPess: CmnsPessoa;

  @ManyToOne(
    () => CmnsProfissao,
    (cmnsProfissao) => cmnsProfissao.cmnsPessoaFisicas
  )
  @JoinColumn([{ name: "PSFS_PROF_ID", referencedColumnName: "profId" }])
  public psfsProf: CmnsProfissao;

  @RelationId((cmnsPessoaFisica: CmnsPessoaFisica) => cmnsPessoaFisica.psfsCarg)
  public psfsCargId2: string | null;

  @RelationId((cmnsPessoaFisica: CmnsPessoaFisica) => cmnsPessoaFisica.psfsNcnl)
  public psfsNcnlId2: string | null;

  @RelationId((cmnsPessoaFisica: CmnsPessoaFisica) => cmnsPessoaFisica.psfsPess)
  public psfsPessId2: string | null;

  @RelationId((cmnsPessoaFisica: CmnsPessoaFisica) => cmnsPessoaFisica.psfsProf)
  public psfsProfId2: string | null;

  public constructor(init?: Partial<CmnsPessoaFisica>) {
    super();
    Object.assign(this, init);
  }
}
