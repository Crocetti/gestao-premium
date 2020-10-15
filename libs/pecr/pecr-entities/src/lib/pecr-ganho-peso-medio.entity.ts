import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CdstUnidadeMedida } from "./cdst-unidade-medida";
import { CdstProduto } from "./cdst-produto";
import { PecrCategoria } from "./pecr-categoria";

@Index("PK_PECR_GANHO_PESO_MEDIO", ["id"], { unique: true })
@Entity("PECR_GANHO_PESO_MEDIO")
export class PecrGanhoPesoMedio {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "GPMD_MES", nullable: true, length: 12 })
  public gpmdMes: string | null;

  @Column("numeric", {
    name: "GPMD_PESO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public gpmdPeso: number | null;

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
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.pecrGanhoPesoMedios
  )
  @JoinColumn([{ name: "GPMD_PESO_ID", referencedColumnName: "id" }])
  public gpmdPeso2: CdstUnidadeMedida;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrGanhoPesoMedios
  )
  @JoinColumn([{ name: "GPMD_PRDT_ID", referencedColumnName: "id" }])
  public gpmdPrdt: CdstProduto;

  @ManyToOne(
    () => PecrCategoria,
    (pecrCategoria) => pecrCategoria.pecrGanhoPesoMedios
  )
  @JoinColumn([{ name: "GPMD_CTGR_ID", referencedColumnName: "id" }])
  public gpmdCtgr: PecrCategoria;
}
