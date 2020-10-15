import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FsclDocumentoItem } from "./fscl-documento-item";

@Index("PK_FSCL_ITEM_FATO_FISCAL", ["id"], { unique: true })
@Entity("FSCL_ITEM_FATO_FISCAL")
export class FsclItemFatoFiscal {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "ITFF_TP_FATO_FISCAL",
    nullable: true,
    length: 25,
  })
  public itffTpFatoFiscal: string | null;

  @Column("money", { name: "ITFF_BASE_CALCULO", nullable: true })
  public itffBaseCalculo: number | null;

  @Column("numeric", {
    name: "ITFF_ALIQUOTA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public itffAliquota: number | null;

  @Column("money", { name: "ITFF_VALOR", nullable: true })
  public itffValor: number | null;

  @Column("nvarchar", { name: "ITFF_CST", nullable: true, length: 3 })
  public itffCst: string | null;

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

  @ManyToOne(
    () => FsclDocumentoItem,
    (fsclDocumentoItem) => fsclDocumentoItem.fsclItemFatoFiscals
  )
  @JoinColumn([{ name: "ITFF_DCIT_ID", referencedColumnName: "id" }])
  public itffDcit: FsclDocumentoItem;
}
