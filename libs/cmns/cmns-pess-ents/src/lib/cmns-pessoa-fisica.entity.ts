import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import {
    CmnsNacionalidade,
    CmnsCargo,
    CmnsProfissao,
} from "@gpremium/cmns-base-ents";
import { CmnsPessoa } from "./cmns-pessoa.entity";
import { BasicEntity } from '@gpremium/shared-ent';
import type { ICmnsCargo, ICmnsNacionalidade, ICmnsPessoa, ICmnsPessoaFisica, ICmnsProfissao } from '@gpremium/cmns-interfaces';
import { LocalDateTime } from '@js-joda/core';

@Index("PK_CMNS_PESSOA_FISICA", ["id"], { unique: true })
@Entity("CMNS_PESSOA_FISICA")
export class CmnsPessoaFisica extends BasicEntity implements ICmnsPessoaFisica {
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

  @ManyToOne(() => CmnsNacionalidade)
  @JoinColumn([{ name: "PSFS_NCNL_ID", referencedColumnName: "id" }])
  public cmnsNacionalidade: ICmnsNacionalidade;

  @ManyToOne(() => CmnsCargo)
  @JoinColumn([{ name: "PSFS_CARG_ID", referencedColumnName: "id" }])
  public cmnsCargo: ICmnsCargo;

  @OneToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaFisica)
  @JoinColumn([{ name: "PSFS_PESS_ID", referencedColumnName: "id" }])
  public cmnsPessoa: ICmnsPessoa;

  @ManyToOne(() => CmnsProfissao)
  @JoinColumn([{ name: "PSFS_PROF_ID", referencedColumnName: "id" }])
  public cmnsProfissao: ICmnsProfissao;

}
