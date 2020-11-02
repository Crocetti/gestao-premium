import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { EstqLoteValidade } from "./estq-lote-validade";
import { FsclNcms } from "./fscl-ncms";
import { CdstProduto } from "./cdst-produto";
import { EstqMarca } from "./estq-marca";
import { EstqGrupo } from "./estq-grupo";
import { EstqSubgrupo } from "./estq-subgrupo";
import { EstqModelo } from "./estq-modelo";
import { SrvcServicoPecas } from "./srvc-servico-pecas";

@Index("PK_ESTQ_MERCADORIA", ["id"], { unique: true })
@Entity("ESTQ_MERCADORIA")
export class EstqMercadoria {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "MRCD_CODIGO", nullable: true, length: 15 })
  public mrcdCodigo: string | null;

  @Column("nvarchar", {
    name: "MRCD_NOME_REDUZIDO",
    nullable: true,
    length: 40,
  })
  public mrcdNomeReduzido: string | null;

  @Column("nvarchar", { name: "MRCD_REFERENCIA", nullable: true, length: 40 })
  public mrcdReferencia: string | null;

  @Column("nvarchar", {
    name: "MRCD_REFERENCIA_AUX",
    nullable: true,
    length: 40,
  })
  public mrcdReferenciaAux: string | null;

  @Column("money", { name: "MRCD_PRECO_ULT_COMPRA", nullable: true })
  public mrcdPrecoUltCompra: number | null;

  @Column("money", { name: "MRCD_PRECO_CUSTO", nullable: true })
  public mrcdPrecoCusto: number | null;

  @Column("numeric", {
    name: "MRCD_ESTOQUE_MINIMO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public mrcdEstoqueMinimo: number | null;

  @Column("smallint", { name: "MRCD_ESTOQUE_NEGATIVO", nullable: true })
  public mrcdEstoqueNegativo: number | null;

  @Column("smallint", { name: "MRCD_CONTROLA_LOTE", nullable: true })
  public mrcdControlaLote: number | null;

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
    () => EstqLoteValidade,
    (estqLoteValidade) => estqLoteValidade.ltvlMrcd
  )
  public estqLoteValidades: EstqLoteValidade[];

  @ManyToOne(() => FsclNcms, (fsclNcms) => fsclNcms.estqMercadorias)
  @JoinColumn([{ name: "MRCD_NCMS_ID", referencedColumnName: "id" }])
  public mrcdNcms: FsclNcms;

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.estqMercadorias)
  @JoinColumn([{ name: "MRCD_PRDT_ID", referencedColumnName: "id" }])
  public mrcdPrdt: CdstProduto;

  @ManyToOne(() => EstqMarca, (estqMarca) => estqMarca.estqMercadorias)
  @JoinColumn([{ name: "MRCD_MARC_ID", referencedColumnName: "id" }])
  public mrcdMarc: EstqMarca;

  @ManyToOne(() => EstqGrupo, (estqGrupo) => estqGrupo.estqMercadorias)
  @JoinColumn([{ name: "MRCD_GRPS_ID", referencedColumnName: "id" }])
  public mrcdGrps: EstqGrupo;

  @ManyToOne(() => EstqSubgrupo, (estqSubgrupo) => estqSubgrupo.estqMercadorias)
  @JoinColumn([{ name: "MRCD_SBGP_ID", referencedColumnName: "id" }])
  public mrcdSbgp: EstqSubgrupo;

  @ManyToOne(() => EstqModelo, (estqModelo) => estqModelo.estqMercadorias)
  @JoinColumn([{ name: "MRCD_MODE_ID", referencedColumnName: "id" }])
  public mrcdMode: EstqModelo;

  @OneToMany(
    () => SrvcServicoPecas,
    (srvcServicoPecas) => srvcServicoPecas.srpcMrcd
  )
  public srvcServicoPecas: SrvcServicoPecas[];
}
