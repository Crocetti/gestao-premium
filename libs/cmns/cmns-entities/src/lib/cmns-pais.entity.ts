import { LocalDateTime } from '@js-joda/core';
import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsUnidadeFederativa } from "./cmns-unidade-federativa.entity";
import { ICmnsPais, ICmnsUnidadeFederativa } from '@gpremium/cmns-interfaces'

@Index("PK_CMNS_PAIS", ["paisId"], { unique: true })
@Entity("CMNS_PAIS")
export class CmnsPais  implements ICmnsPais {
  @Column("varchar", { primary: true, name: "PAIS_ID", length: 27 })
  public paisId?: string;

  @Column("varchar", { name: "PAIS_NOME", nullable: true, length: 64 })
  public paisNome: string | null;

  @Column("varchar", { name: "PAIS_SIGLA", nullable: true, length: 3 })
  public paisSigla: string | null;

  @Column("varchar", {
    name: "PAIS_NOME_ABREVIADO",
    nullable: true,
    length: 40,
  })
  public paisNomeAbreviado: string | null;

  @Column("varchar", { name: "PAIS_CODIGO", nullable: true, length: 10 })
  public paisCodigo?: string;

  @Column("varchar", { name: "PAIS_CEP_INICIAL", nullable: true, length: 9 })
  public paisCepInicial?: string | null;

  @Column("varchar", { name: "PAIS_CEP_FINAL", nullable: true, length: 9 })
  public paisCepFinal?: string | null;

  @Column("datetime", { name: "PAIS_LASTUPDATE", nullable: true })
  public paisLastupdate: LocalDateTime | null;

  @OneToMany( () => CmnsUnidadeFederativa, (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.cmnsPais)
  public cmnsUnidadesFederativas: ICmnsUnidadeFederativa[]

}
