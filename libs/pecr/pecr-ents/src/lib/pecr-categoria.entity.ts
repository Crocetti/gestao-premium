import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CdstUnidadeMedida } from "./cdst-unidade-medida";
import { PecrRaca } from "./pecr-raca";
import { PecrGanhoPesoMedio } from "./pecr-ganho-peso-medio";
import { PecrHistoricoCategoria } from "./pecr-historico-categoria";
import { PecrProdutoPecuaria } from "./pecr-produto-pecuaria";

@Index("PK_PECR_CATEGORIA", ["id"], { unique: true })
@Entity("PECR_CATEGORIA")
export class PecrCategoria {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CTGR_CODIGO", nullable: true, length: 10 })
  public ctgrCodigo: string | null;

  @Column("nvarchar", { name: "CTGR_NOME", nullable: true, length: 40 })
  public ctgrNome: string | null;

  @Column("nvarchar", { name: "CTGR_SEXO", nullable: true, length: 10 })
  public ctgrSexo: string | null;

  @Column("numeric", {
    name: "CTGR_IDADE_MINIMA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ctgrIdadeMinima: number | null;

  @Column("numeric", {
    name: "CTGR_IDADE_MAXIMA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ctgrIdadeMaxima: number | null;

  @Column("numeric", {
    name: "CTGR_PESO_MINIMO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ctgrPesoMinimo: number | null;

  @Column("numeric", {
    name: "CTGR_PESO_MAXIMO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ctgrPesoMaximo: number | null;

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
    (cdstUnidadeMedida) => cdstUnidadeMedida.pecrCategorias
  )
  @JoinColumn([{ name: "CTGR_PESO_ID", referencedColumnName: "id" }])
  public ctgrPeso: CdstUnidadeMedida;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.pecrCategorias2
  )
  @JoinColumn([{ name: "CTGR_IDAD_ID", referencedColumnName: "id" }])
  public ctgrIdad: CdstUnidadeMedida;

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.pecrCategorias)
  @JoinColumn([{ name: "CTGR_RACA_ID", referencedColumnName: "id" }])
  public ctgrRaca: PecrRaca;

  @OneToMany(
    () => PecrGanhoPesoMedio,
    (pecrGanhoPesoMedio) => pecrGanhoPesoMedio.gpmdCtgr
  )
  public pecrGanhoPesoMedios: PecrGanhoPesoMedio[];

  @OneToMany(
    () => PecrHistoricoCategoria,
    (pecrHistoricoCategoria) => pecrHistoricoCategoria.hsctCtgr
  )
  public pecrHistoricoCategorias: PecrHistoricoCategoria[];

  @OneToMany(
    () => PecrProdutoPecuaria,
    (pecrProdutoPecuaria) => pecrProdutoPecuaria.prpeCtgr
  )
  public pecrProdutoPecuarias: PecrProdutoPecuaria[];
}
