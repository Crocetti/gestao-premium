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
import { PecrEspecie } from "./pecr-especie";
import { PecrLote } from "./pecr-lote";

@Index("FK_ESPC_RS_APTD", ["aptdEspcId"], {})
@Index("PK_PECR_APTIDAO", ["aptdId"], { unique: true })
@Entity("PECR_APTIDAO")
export class PecrAptidao extends BaseEntity {
  @Column("varchar", { primary: true, name: "APTD_ID", length: 27 })
  public aptdId: string;

  @Column("varchar", { name: "APTD_ESPC_ID", nullable: true, length: 27 })
  public aptdEspcId: string | null;

  @Column("varchar", { name: "APTD_NOME", nullable: true, length: 24 })
  public aptdNome: string | null;

  @Column("datetime", { name: "APTD_LASTUPDATE", nullable: true })
  public aptdLastupdate: LocalDateTime | null;

  @ManyToOne(() => PecrEspecie, (pecrEspecie) => pecrEspecie.pecrAptidaos)
  @JoinColumn([{ name: "APTD_ESPC_ID", referencedColumnName: "espcId" }])
  public aptdEspc: PecrEspecie;

  @OneToMany(() => PecrLote, (pecrLote) => pecrLote.loteAptd)
  public pecrLotes: PecrLote[];

  @RelationId((pecrAptidao: PecrAptidao) => pecrAptidao.aptdEspc)
  public aptdEspcId2: string | null;

  public constructor(init?: Partial<PecrAptidao>) {
    super();
    Object.assign(this, init);
  }
}
