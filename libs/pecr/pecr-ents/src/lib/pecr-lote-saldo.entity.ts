import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { PecrLote } from "./pecr-lote";

@Index("PK_PECR_LOTE_SALDO", ["id"], { unique: true })
@Entity("PECR_LOTE_SALDO")
export class PecrLoteSaldo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "LTSD_DT_REFERENCIA" })
  public ltsdDtReferencia: LocalDateTime;

  @Column("numeric", {
    name: "LTSD_QTD_ENTRADA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ltsdQtdEntrada: number | null;

  @Column("numeric", {
    name: "LTSD_QTD_SAIDA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ltsdQtdSaida: number | null;

  @Column("numeric", {
    name: "LTSD_QTD_RESERVA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ltsdQtdReserva: number | null;

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

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.pecrLoteSaldos)
  @JoinColumn([{ name: "LTSD_PRDT_ID", referencedColumnName: "id" }])
  public ltsdPrdt: CdstProduto;

  @ManyToOne(() => PecrLote, (pecrLote) => pecrLote.pecrLoteSaldos)
  @JoinColumn([{ name: "LTSD_LOTE_ID", referencedColumnName: "id" }])
  public ltsdLote: PecrLote;
}
