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
import { CmnsBairro } from "./cmns-bairro";
import { CmnsUnidadeFederativa } from "./cmns-unidade-federativa";

@Index("FK_UNFD_RS_LCLD", ["lcldUnfdId"], {})
@Index("PK_CMNS_LOCALIDADE", ["lcldId"], { unique: true })
@Entity("CMNS_LOCALIDADE")
export class CmnsLocalidade extends BaseEntity {
  @Column("varchar", { primary: true, name: "LCLD_ID", length: 27 })
  public lcldId: string;

  @Column("varchar", { name: "LCLD_UNFD_ID", nullable: true, length: 27 })
  public lcldUnfdId: string | null;

  @Column("varchar", { name: "LCLD_NR_IBGE", nullable: true, length: 12 })
  public lcldNrIbge: string | null;

  @Column("varchar", { name: "LCLD_NOME", nullable: true, length: 128 })
  public lcldNome: string | null;

  @Column("varchar", { name: "LCLD_CEP", nullable: true, length: 9 })
  public lcldCep: string | null;

  @Column("varchar", { name: "LCLD_NOME_ABREV", nullable: true, length: 40 })
  public lcldNomeAbrev: string | null;

  @Column("varchar", { name: "LCLD_CEP_INICIAL", nullable: true, length: 9 })
  public lcldCepInicial: string | null;

  @Column("varchar", { name: "LCLD_CEP_FINAL", nullable: true, length: 9 })
  public lcldCepFinal: string | null;

  @Column("datetime", { name: "LCLD_LASTUPDATE", nullable: true })
  public lcldLastupdate: LocalDateTime | null;

  @OneToMany(() => CmnsBairro, (cmnsBairro) => cmnsBairro.bairLcld)
  public cmnsBairros: CmnsBairro[];

  @ManyToOne(
    () => CmnsUnidadeFederativa,
    (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.cmnsLocalidades
  )
  @JoinColumn([{ name: "LCLD_UNFD_ID", referencedColumnName: "unfdId" }])
  public lcldUnfd: CmnsUnidadeFederativa;

  @RelationId((cmnsLocalidade: CmnsLocalidade) => cmnsLocalidade.lcldUnfd)
  public lcldUnfdId2: string | null;

  public constructor(init?: Partial<CmnsLocalidade>) {
    super();
    Object.assign(this, init);
  }
}
