import { LocalDateTime } from '@js-joda/core';
import { ICmnsLocalidade, ICmnsPais, ICmnsUnidadeFederativa } from '@gpremium/cmns-interfaces';
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
import { CmnsPais } from "./cmns-pais.entity";
import { CmnsLocalidade } from './cmns-localidade.entity';

@Index("FK_PAIS_RS_UNFD", ["unfdPaisId"], {})
@Index("PK_CMNS_UNIDADE_FEDERATIVA", ["unfdId"], { unique: true })
@Entity("CMNS_UNIDADE_FEDERATIVA")
export class CmnsUnidadeFederativa implements ICmnsUnidadeFederativa {
  @Column("varchar", { primary: true, name: "UNFD_ID", length: 27 })
  public unfdId: string;

  @Column("varchar", { name: "UNFD_NOME", nullable: true, length: 64 })
  public unfdNome: string | null;

  @Column("varchar", { name: "UNFD_SIGLA", nullable: true, length: 3 })
  public unfdSigla: string | null;

  @Column("varchar", { name: "UNFD_PREPOSICAO", nullable: true, length: 3 })
  public unfdPreposicao: string | null;

  @Column("varchar", { name: "UNFD_NR_IBGE", nullable: true, length: 12 })
  public unfdNrIbge: string | null;

  @Column("varchar", { name: "UNFD_CEP_INICIAL", nullable: true, length: 9 })
  public unfdCepInicial: string | null;

  @Column("varchar", { name: "UNFD_CEP_FINAL", nullable: true, length: 9 })
  public unfdCepFinal: string | null;

  @Column("datetime", { name: "UNFD_LASTUPDATE", nullable: true })
  public unfdLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPais)
  @JoinColumn([{ name: "UNFD_PAIS_ID", referencedColumnName: "paisId" }])
  public cmnsPais: ICmnsPais;

  @OneToMany(() => CmnsLocalidade, (cmnsLocalidade) => cmnsLocalidade.cmnsUnFd)
  public cmnsLocalidades?: ICmnsLocalidade[];

}
