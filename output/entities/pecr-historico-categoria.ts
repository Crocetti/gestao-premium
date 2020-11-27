import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import PecrProdutoBovino from "./pecr-produto-bovino";
import PecrCategoria from "./pecr-categoria";

@Index("PK_PECR_HISTORICO_CATEGORIA", ["id"], { unique: true })
@Entity("PECR_HISTORICO_CATEGORIA")
export default class PecrHistoricoCategoria {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("datetime2", { name: "HSCT_DT_ENTRADA", nullable: true })
  public hsctDtEntrada?: Date | null;

  @Column("datetime2", { name: "HSCT_DT_SAIDA", nullable: true })
  public hsctDtSaida?: Date | null;

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

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrHistoricoCategorias
  )
  @JoinColumn([{ name: "HSCT_PRBV_ID", referencedColumnName: "id" }])
  public hsctPrbv?: PecrProdutoBovino;

  @ManyToOne(
    () => PecrCategoria,
    (pecrCategoria) => pecrCategoria.pecrHistoricoCategorias
  )
  @JoinColumn([{ name: "HSCT_CTGR_ID", referencedColumnName: "id" }])
  public hsctCtgr?: PecrCategoria;
}
