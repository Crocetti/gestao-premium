import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PecrDadosAbcz } from "./pecr-dados-abcz";
import { PecrEventoSanitario } from "./pecr-evento-sanitario";
import { PecrHistoricoCategoria } from "./pecr-historico-categoria";
import { PecrHistoricoCobertura } from "./pecr-historico-cobertura";
import { PecrHistoricoPesagem } from "./pecr-historico-pesagem";
import { CdstPropriedadeRural } from "./cdst-propriedade-rural";
import { PecrRaca } from "./pecr-raca";
import { VetePelagem } from "./vete-pelagem";
import { CdstProduto } from "./cdst-produto";
import { CdstProdutorRural } from "./cdst-produtor-rural";

@Index("PK_PECR_PRODUTO_BOVINO", ["id"], { unique: true })
@Entity("PECR_PRODUTO_BOVINO")
export class PecrProdutoBovino {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PRBV_NR_FAZENDA", nullable: true, length: 15 })
  public prbvNrFazenda: string | null;

  @Column("nvarchar", {
    name: "PRBV_NR_SISBOV_MANEJO",
    nullable: true,
    length: 15,
  })
  public prbvNrSisbovManejo: string | null;

  @Column("nvarchar", { name: "PRBV_SEXO", nullable: true, length: 10 })
  public prbvSexo: string | null;

  @Column("datetime2", { name: "PRBV_DT_NASCIMENTO", nullable: true })
  public prbvDtNascimento: LocalDateTime | null;

  @Column("datetime2", { name: "PRBV_DT_MORTE", nullable: true })
  public prbvDtMorte: LocalDateTime | null;

  @Column("numeric", {
    name: "PRBV_PESO_NASCIMENTO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prbvPesoNascimento: number | null;

  @Column("numeric", {
    name: "PRBV_PESO_DESMAMA",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public prbvPesoDesmama: number | null;

  @Column("nvarchar", { name: "PRBV_ORIGEM", nullable: true, length: 10 })
  public prbvOrigem: string | null;

  @Column("nvarchar", { name: "PRBV_TIPO", nullable: true, length: 15 })
  public prbvTipo: string | null;

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

  @OneToMany(() => PecrDadosAbcz, (pecrDadosAbcz) => pecrDadosAbcz.abczPrbv)
  public pecrDadosAbczs: PecrDadosAbcz[];

  @OneToMany(
    () => PecrEventoSanitario,
    (pecrEventoSanitario) => pecrEventoSanitario.evsnPrbv
  )
  public pecrEventoSanitarios: PecrEventoSanitario[];

  @OneToMany(
    () => PecrHistoricoCategoria,
    (pecrHistoricoCategoria) => pecrHistoricoCategoria.hsctPrbv
  )
  public pecrHistoricoCategorias: PecrHistoricoCategoria[];

  @OneToMany(
    () => PecrHistoricoCobertura,
    (pecrHistoricoCobertura) => pecrHistoricoCobertura.hscbPrbv
  )
  public pecrHistoricoCoberturas: PecrHistoricoCobertura[];

  @OneToMany(
    () => PecrHistoricoCobertura,
    (pecrHistoricoCobertura) => pecrHistoricoCobertura.hscbDoad
  )
  public pecrHistoricoCoberturas2: PecrHistoricoCobertura[];

  @OneToMany(
    () => PecrHistoricoCobertura,
    (pecrHistoricoCobertura) => pecrHistoricoCobertura.hscbTref
  )
  public pecrHistoricoCoberturas3: PecrHistoricoCobertura[];

  @OneToMany(
    () => PecrHistoricoCobertura,
    (pecrHistoricoCobertura) => pecrHistoricoCobertura.hscbTrpv
  )
  public pecrHistoricoCoberturas4: PecrHistoricoCobertura[];

  @OneToMany(
    () => PecrHistoricoPesagem,
    (pecrHistoricoPesagem) => pecrHistoricoPesagem.hspsPrbv
  )
  public pecrHistoricoPesagems: PecrHistoricoPesagem[];

  @ManyToOne(
    () => CdstPropriedadeRural,
    (cdstPropriedadeRural) => cdstPropriedadeRural.pecrProdutoBovinos
  )
  @JoinColumn([{ name: "PRBV_PPRR_ID", referencedColumnName: "id" }])
  public prbvPprr: CdstPropriedadeRural;

  @ManyToOne(() => PecrRaca, (pecrRaca) => pecrRaca.pecrProdutoBovinos)
  @JoinColumn([{ name: "PRBV_RACA_ID", referencedColumnName: "id" }])
  public prbvRaca: PecrRaca;

  @ManyToOne(() => VetePelagem, (vetePelagem) => vetePelagem.pecrProdutoBovinos)
  @JoinColumn([{ name: "PRBV_PLGM_ID", referencedColumnName: "id" }])
  public prbvPlgm: VetePelagem;

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.pecrProdutoBovinos)
  @JoinColumn([{ name: "PRBV_PPAI_ID", referencedColumnName: "id" }])
  public prbvPpai: CdstProduto;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrProdutoBovinos2
  )
  @JoinColumn([{ name: "PRBV_PRDT_ID", referencedColumnName: "id" }])
  public prbvPrdt: CdstProduto;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrProdutoBovinos3
  )
  @JoinColumn([{ name: "PRBV_PMAE_ID", referencedColumnName: "id" }])
  public prbvPmae: CdstProduto;

  @ManyToOne(
    () => CdstProdutorRural,
    (cdstProdutorRural) => cdstProdutorRural.pecrProdutoBovinos
  )
  @JoinColumn([{ name: "PRBV_CRDR_ID", referencedColumnName: "id" }])
  public prbvCrdr: CdstProdutorRural;

  @ManyToOne(
    () => CdstProdutorRural,
    (cdstProdutorRural) => cdstProdutorRural.pecrProdutoBovinos2
  )
  @JoinColumn([{ name: "PRBV_PDRR_ID", referencedColumnName: "id" }])
  public prbvPdrr: CdstProdutorRural;
}
