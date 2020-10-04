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
import { PecrCapaMovimentoAnimal } from "./pecr-capa-movimento-animal";
import { PecrRaca } from "./pecr-raca";
import { PecrAptidao } from "./pecr-aptidao";
import { PecrLoteAnimal } from "./pecr-lote-animal";
import { PecrLoteSaldo } from "./pecr-lote-saldo";

@Index("FK_APTD_RS_LOTE", ["loteAptdId"], {})
@Index("FK_RACA_RS_LOTE", ["loteRacaId"], {})
@Index("PK_PECR_LOTE", ["loteId"], { unique: true })
@Entity("PECR_LOTE")
export class PecrLote extends BaseEntity {
  @Column("varchar", { primary: true, name: "LOTE_ID", length: 27 })
  public loteId: string;

  @Column("varchar", { name: "LOTE_RACA_ID", nullable: true, length: 27 })
  public loteRacaId: string | null;

  @Column("varchar", { name: "LOTE_APTD_ID", nullable: true, length: 27 })
  public loteAptdId: string | null;

  @Column("varchar", { name: "LOTE_CODIGO", nullable: true, length: 10 })
  public loteCodigo: string | null;

  @Column("varchar", { name: "LOTE_NOME", nullable: true, length: 40 })
  public loteNome: string | null;

  @Column("varchar", { name: "LOTE_ORIGEM", nullable: true, length: 10 })
  public loteOrigem: string | null;

  @Column("datetime", { name: "LOTE_LASTUPDATE", nullable: true })
  public loteLastupdate: LocalDateTime | null;

  @OneToMany(
    () => PecrCapaMovimentoAnimal,
    (pecrCapaMovimentoAnimal) => pecrCapaMovimentoAnimal.cmanLote
  )
  public pecrCapaMovimentoAnimals: PecrCapaMovimentoAnimal[];

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.pecrLotes)
  @JoinColumn([{ name: "LOTE_RACA_ID", referencedColumnName: "racaId" }])
  public loteRaca: PecrRaca;

  @ManyToOne(() => PecrAptidao, (pecrAptidao) => pecrAptidao.pecrLotes)
  @JoinColumn([{ name: "LOTE_APTD_ID", referencedColumnName: "aptdId" }])
  public loteAptd: PecrAptidao;

  @OneToMany(() => PecrLoteAnimal, (pecrLoteAnimal) => pecrLoteAnimal.ltanLote)
  public pecrLoteAnimals: PecrLoteAnimal[];

  @OneToMany(() => PecrLoteSaldo, (pecrLoteSaldo) => pecrLoteSaldo.ltsdLote)
  public pecrLoteSaldos: PecrLoteSaldo[];

  @RelationId((pecrLote: PecrLote) => pecrLote.loteRaca)
  public loteRacaId2: string | null;

  @RelationId((pecrLote: PecrLote) => pecrLote.loteAptd)
  public loteAptdId2: string | null;

  public constructor(init?: Partial<PecrLote>) {
    super();
    Object.assign(this, init);
  }
}
