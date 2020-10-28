import { Column, Entity, Index, OneToMany } from "typeorm";
import type { ICmnsPais, ICmnsUnidadeFederativa } from '@gpremium/cmns-interfaces';
import { CmnsUnidadeFederativa } from "./cmns-unidade-federativa.entity";
import { BasicEntity } from '@gpremium/shared-ent';

@Index("PK_CMNS_PAIS", ["id"], { unique: true })
@Entity("CMNS_PAIS")
export class CmnsPais extends BasicEntity implements ICmnsPais {
  @Column("nvarchar", { name: "PAIS_NOME", nullable: true, length: 64 })
  public paisNome: string | null;

  @Column("nvarchar", { name: "PAIS_SIGLA", nullable: true, length: 3 })
  public paisSigla: string | null;

  @Column("nvarchar", {
    name: "PAIS_NOME_ABREVIADO",
    nullable: true,
    length: 40,
  })
  public paisNomeAbreviado: string | null;

  @Column("nvarchar", { name: "PAIS_CODIGO", nullable: true, length: 10 })
  public paisCodigo: string | null;

  @Column("nvarchar", { name: "PAIS_CEP_INICIAL", nullable: true, length: 9 })
  public paisCepInicial: string | null;

  @Column("nvarchar", { name: "PAIS_CEP_FINAL", nullable: true, length: 9 })
  public paisCepFinal: string | null;

  @OneToMany(
    () => CmnsUnidadeFederativa,
    (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.cmnsPais
  )
  public cmnsUnidadeFederativas: ICmnsUnidadeFederativa[];
}
