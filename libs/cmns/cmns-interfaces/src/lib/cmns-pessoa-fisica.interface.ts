import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsNacionalidade } from "./cmns-nacionalidade";
import { CmnsCargo } from "./cmns-cargo";
import { CmnsPessoa } from "./cmns-pessoa";
import { CmnsProfissao } from "./cmns-profissao";

@Index("PK_CMNS_PESSOA_FISICA", ["id"], { unique: true })
@Entity("CMNS_PESSOA_FISICA")
export class CmnsPessoaFisica {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PSFS_NOME_MAE", nullable: true, length: 64 })
  public psfsNomeMae: string | null;

  @Column("nvarchar", { name: "PSFS_NOME_PAI", nullable: true, length: 64 })
  public psfsNomePai: string | null;

  @Column("datetime2", { name: "PSFS_DT_NASCIMENTO", nullable: true })
  public psfsDtNascimento: LocalDateTime | null;

  @Column("nvarchar", { name: "PSFS_SEXO", nullable: true, length: 10 })
  public psfsSexo: string | null;

  @Column("nvarchar", { name: "PSFS_ESTADO_CIVIL", nullable: true, length: 15 })
  public psfsEstadoCivil: string | null;

  @Column("nvarchar", { name: "PSFS_ESCOLARIDADE", nullable: true, length: 25 })
  public psfsEscolaridade: string | null;

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
    () => CmnsNacionalidade,
    (cmnsNacionalidade) => cmnsNacionalidade.cmnsPessoaFisicas
  )
  @JoinColumn([{ name: "PSFS_NCNL_ID", referencedColumnName: "id" }])
  public psfsNcnl: CmnsNacionalidade;

  @ManyToOne(() => CmnsCargo, (cmnsCargo) => cmnsCargo.cmnsPessoaFisicas)
  @JoinColumn([{ name: "PSFS_CARG_ID", referencedColumnName: "id" }])
  public psfsCarg: CmnsCargo;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaFisicas)
  @JoinColumn([{ name: "PSFS_PESS_ID", referencedColumnName: "id" }])
  public psfsPess: CmnsPessoa;

  @ManyToOne(
    () => CmnsProfissao,
    (cmnsProfissao) => cmnsProfissao.cmnsPessoaFisicas
  )
  @JoinColumn([{ name: "PSFS_PROF_ID", referencedColumnName: "id" }])
  public psfsProf: CmnsProfissao;
}
