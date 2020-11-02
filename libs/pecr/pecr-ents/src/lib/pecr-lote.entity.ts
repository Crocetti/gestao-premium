import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PecrCapaMovimentoAnimal } from "./pecr-capa-movimento-animal";
import { PecrRaca } from "./pecr-raca";
import { PecrAptidao } from "./pecr-aptidao";
import { PecrLoteAnimal } from "./pecr-lote-animal";
import { PecrLoteSaldo } from "./pecr-lote-saldo";

@Index("PK_PECR_LOTE", ["id"], { unique: true })
@Entity("PECR_LOTE")
export class PecrLote {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "LOTE_CODIGO", nullable: true, length: 10 })
  public loteCodigo: string | null;

  @Column("nvarchar", { name: "LOTE_NOME", nullable: true, length: 40 })
  public loteNome: string | null;

  @Column("nvarchar", { name: "LOTE_ORIGEM", nullable: true, length: 10 })
  public loteOrigem: string | null;

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

  @OneToMany(
    () => PecrCapaMovimentoAnimal,
    (pecrCapaMovimentoAnimal) => pecrCapaMovimentoAnimal.cmanLote
  )
  public pecrCapaMovimentoAnimals: PecrCapaMovimentoAnimal[];

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.pecrLotes)
  @JoinColumn([{ name: "LOTE_RACA_ID", referencedColumnName: "id" }])
  public loteRaca: PecrRaca;

  @ManyToOne(() => PecrAptidao, (pecrAptidao) => pecrAptidao.pecrLotes)
  @JoinColumn([{ name: "LOTE_APTD_ID", referencedColumnName: "id" }])
  public loteAptd: PecrAptidao;

  @OneToMany(() => PecrLoteAnimal, (pecrLoteAnimal) => pecrLoteAnimal.ltanLote)
  public pecrLoteAnimals: PecrLoteAnimal[];

  @OneToMany(() => PecrLoteSaldo, (pecrLoteSaldo) => pecrLoteSaldo.ltsdLote)
  public pecrLoteSaldos: PecrLoteSaldo[];
}
