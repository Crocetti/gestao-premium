import { Column, Entity, Index, OneToMany } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { CdstProdutoComposicao } from "./cdst-produto-composicao";
import { EstqItemMovimento } from "./estq-item-movimento";
import { PecrCategoria } from "./pecr-categoria";
import { PecrGanhoPesoMedio } from "./pecr-ganho-peso-medio";
import { PecrItemMovimentoAnimal } from "./pecr-item-movimento-animal";
import { SrvcServicoComposicao } from "./srvc-servico-composicao";
import { SrvcServicoMaqEquip } from "./srvc-servico-maq-equip";
import { SrvcServicoPecas } from "./srvc-servico-pecas";

@Index("PK_CDST_UNIDADE_MEDIDA", ["id"], { unique: true })
@Entity("CDST_UNIDADE_MEDIDA")
export class CdstUnidadeMedida {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "UNID_SIGLA", nullable: true, length: 5 })
  public unidSigla: string | null;

  @Column("nvarchar", { name: "UNID_NOME", nullable: true, length: 64 })
  public unidNome: string | null;

  @Column("nvarchar", { name: "UNID_GRANDEZA", nullable: true, length: 25 })
  public unidGrandeza: string | null;

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

  @OneToMany(() => CdstProduto, (cdstProduto) => cdstProduto.prdtUnid)
  public cdstProdutos: CdstProduto[];

  @OneToMany(
    () => CdstProdutoComposicao,
    (cdstProdutoComposicao) => cdstProdutoComposicao.prcpUnid
  )
  public cdstProdutoComposicaos: CdstProdutoComposicao[];

  @OneToMany(
    () => EstqItemMovimento,
    (estqItemMovimento) => estqItemMovimento.itmvUnid
  )
  public estqItemMovimentos: EstqItemMovimento[];

  @OneToMany(() => PecrCategoria, (pecrCategoria) => pecrCategoria.ctgrPeso)
  public pecrCategorias: PecrCategoria[];

  @OneToMany(() => PecrCategoria, (pecrCategoria) => pecrCategoria.ctgrIdad)
  public pecrCategorias2: PecrCategoria[];

  @OneToMany(
    () => PecrGanhoPesoMedio,
    (pecrGanhoPesoMedio) => pecrGanhoPesoMedio.gpmdPeso2
  )
  public pecrGanhoPesoMedios: PecrGanhoPesoMedio[];

  @OneToMany(
    () => PecrItemMovimentoAnimal,
    (pecrItemMovimentoAnimal) => pecrItemMovimentoAnimal.imanUnid
  )
  public pecrItemMovimentoAnimals: PecrItemMovimentoAnimal[];

  @OneToMany(
    () => SrvcServicoComposicao,
    (srvcServicoComposicao) => srvcServicoComposicao.srcmUnid
  )
  public srvcServicoComposicaos: SrvcServicoComposicao[];

  @OneToMany(
    () => SrvcServicoMaqEquip,
    (srvcServicoMaqEquip) => srvcServicoMaqEquip.srmeUnid
  )
  public srvcServicoMaqEquips: SrvcServicoMaqEquip[];

  @OneToMany(
    () => SrvcServicoPecas,
    (srvcServicoPecas) => srvcServicoPecas.srpcUnid
  )
  public srvcServicoPecas: SrvcServicoPecas[];
}
