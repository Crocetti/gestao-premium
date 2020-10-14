import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { PecrTipoEventoSanitario } from "./pecr-tipo-evento-sanitario";
import { PecrProdutoBovino } from "./pecr-produto-bovino";

@Index("PK_PECR_EVENTO_SANITARIO", ["id"], { unique: true })
@Entity("PECR_EVENTO_SANITARIO")
export class PecrEventoSanitario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "EVSN_DT_EVENTO", nullable: true })
  public evsnDtEvento: Date | null;

  @Column("nvarchar", { name: "EVSN_OBSERVACAO", nullable: true, length: 500 })
  public evsnObservacao: string | null;

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

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrEventoSanitarios
  )
  @JoinColumn([{ name: "EVSN_PRDT_ID", referencedColumnName: "id" }])
  public evsnPrdt: CdstProduto;

  @ManyToOne(
    () => PecrTipoEventoSanitario,
    (pecrTipoEventoSanitario) => pecrTipoEventoSanitario.pecrEventoSanitarios
  )
  @JoinColumn([{ name: "EVSN_TPES_ID", referencedColumnName: "id" }])
  public evsnTpes: PecrTipoEventoSanitario;

  @ManyToOne(
    () => PecrProdutoBovino,
    (pecrProdutoBovino) => pecrProdutoBovino.pecrEventoSanitarios
  )
  @JoinColumn([{ name: "EVSN_PRBV_ID", referencedColumnName: "id" }])
  public evsnPrbv: PecrProdutoBovino;
}
