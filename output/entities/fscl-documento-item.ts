import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import FsclCfop from "./fscl-cfop";
import FsclDocumento from "./fscl-documento";
import EstqItemMovimento from "./estq-item-movimento";
import FsclItemFatoFiscal from "./fscl-item-fato-fiscal";

@Index("PK_FSCL_DOCUMENTO_ITEM", ["id"], { unique: true })
@Entity("FSCL_DOCUMENTO_ITEM")
export default class FsclDocumentoItem {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("datetime2", { name: "DCIT_DT_LANCAMENTO", nullable: true })
  public dcitDtLancamento?: Date | null;

  @Column("datetime2", { name: "DCIT_DT_MOVIMENTO", nullable: true })
  public dcitDtMovimento?: Date | null;

  @Column("nvarchar", { name: "DCIT_PRDT_NOME", nullable: true, length: 64 })
  public dcitPrdtNome?: string | null;

  @Column("nvarchar", {
    name: "DCIT_PRDT_CODIGO_BARRA",
    nullable: true,
    length: 20,
  })
  public dcitPrdtCodigoBarra?: string | null;

  @Column("nvarchar", {
    name: "DCIT_PRDT_REFERENCIA",
    nullable: true,
    length: 40,
  })
  public dcitPrdtReferencia?: string | null;

  @Column("nvarchar", { name: "DCIT_UNID_SIGLA", nullable: true, length: 5 })
  public dcitUnidSigla?: string | null;

  @Column("numeric", {
    name: "DCIT_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public dcitQuantidade?: number | null;

  @Column("money", { name: "DCIT_PRECO_UNITARIO", nullable: true })
  public dcitPrecoUnitario?: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @ManyToOne(() => FsclCfop, (fsclCfop) => fsclCfop.fsclDocumentoItems)
  @JoinColumn([{ name: "DCIT_CFOP_ID", referencedColumnName: "id" }])
  public dcitCfop?: FsclCfop;

  @ManyToOne(
    () => FsclDocumento,
    (fsclDocumento) => fsclDocumento.fsclDocumentoItems
  )
  @JoinColumn([{ name: "DCIT_DCMT_ID", referencedColumnName: "id" }])
  public dcitDcmt?: FsclDocumento;

  @ManyToOne(
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.fsclDocumentoItems
  )
  @JoinColumn([{ name: "DCIT_ITMV_ID", referencedColumnName: "id" }])
  public dcitItmv?: EstqItemMovimento;

  @OneToMany(
    () => FsclItemFatoFiscal,
    (fsclItemFatoFiscal) => fsclItemFatoFiscal.itffDcit
  )
  public fsclItemFatoFiscals?: FsclItemFatoFiscal[];
}
