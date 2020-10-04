import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsBairro } from "./cmns-bairro";

@Index("FK_BAIR_RS_LGRD", ["lgrdBairId"], {})
@Index("PK_CMNS_LOGRADOURO", ["lgrdId"], { unique: true })
@Entity("CMNS_LOGRADOURO")
export class CmnsLogradouro extends BaseEntity {
  @Column("varchar", { primary: true, name: "LGRD_ID", length: 27 })
  public lgrdId: string;

  @Column("varchar", { name: "LGRD_BAIR_ID", nullable: true, length: 27 })
  public lgrdBairId: string | null;

  @Column("varchar", { name: "LGRD_NOME", nullable: true, length: 256 })
  public lgrdNome: string | null;

  @Column("varchar", { name: "LGRD_NOME_ABREV", nullable: true, length: 40 })
  public lgrdNomeAbrev: string | null;

  @Column("varchar", { name: "LGRD_CEP", nullable: true, length: 9 })
  public lgrdCep: string | null;

  @Column("varchar", { name: "LGRD_ZONA", nullable: true, length: 15 })
  public lgrdZona: string | null;

  @Column("datetime", { name: "LGRD_LASTUPDATE", nullable: true })
  public lgrdLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsBairro, (cmnsBairro) => cmnsBairro.cmnsLogradouros)
  @JoinColumn([{ name: "LGRD_BAIR_ID", referencedColumnName: "bairId" }])
  public lgrdBair: CmnsBairro;

  @RelationId((cmnsLogradouro: CmnsLogradouro) => cmnsLogradouro.lgrdBair)
  public lgrdBairId2: string | null;

  public constructor(init?: Partial<CmnsLogradouro>) {
    super();
    Object.assign(this, init);
  }
}
