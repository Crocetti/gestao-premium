import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PecrLote } from "./pecr-lote";
import { PecrItemMovimentoAnimal } from "./pecr-item-movimento-animal";

@Index("PK_PECR_CAPA_MOVIMENTO_ANIMAL", ["id"], { unique: true })
@Entity("PECR_CAPA_MOVIMENTO_ANIMAL")
export class PecrCapaMovimentoAnimal {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "CMAN_DT_LANCAMENTO", nullable: true })
  public cmanDtLancamento: Date | null;

  @Column("datetime2", { name: "CMAN_DT_MOVIMENTO", nullable: true })
  public cmanDtMovimento: Date | null;

  @Column("nvarchar", { name: "CMAN_TP_DOCUMENTO", nullable: true, length: 25 })
  public cmanTpDocumento: string | null;

  @Column("nvarchar", { name: "CMAN_TP_MOVIMENTO", nullable: true, length: 10 })
  public cmanTpMovimento: string | null;

  @Column("nvarchar", { name: "CMAN_TP_TRANSACAO", nullable: true, length: 25 })
  public cmanTpTransacao: string | null;

  @Column("numeric", {
    name: "CMAN_QTD_ITENS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public cmanQtdItens: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(() => PecrLote, (pecrLote) => pecrLote.pecrCapaMovimentoAnimals)
  @JoinColumn([{ name: "CMAN_LOTE_ID", referencedColumnName: "id" }])
  public cmanLote: PecrLote;

  @OneToMany(
    () => PecrItemMovimentoAnimal,
    (pecrItemMovimentoAnimal) => pecrItemMovimentoAnimal.imanCman
  )
  public pecrItemMovimentoAnimals: PecrItemMovimentoAnimal[];
}
