import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CdstProduto } from "./cdst-produto";
import { CdstProdutoComposicao } from "./cdst-produto-composicao";
import { EstqItemMovimento } from "./estq-item-movimento";
import { PecrCategoria } from "./pecr-categoria";
import { PecrGanhoPesoMedio } from "./pecr-ganho-peso-medio";
import { PecrItemMovimentoAnimal } from "./pecr-item-movimento-animal";
import { SrvcServicoComposicao } from "./srvc-servico-composicao";
import { SrvcServicoMaqEquip } from "./srvc-servico-maq-equip";
import { SrvcServicoPecas } from "./srvc-servico-pecas";

@Index("PK_CDST_UNIDADE_MEDIDA", ["unidId"], { unique: true })
@Entity("CDST_UNIDADE_MEDIDA")
export class CdstUnidadeMedida extends BaseEntity {
  @Column("varchar", { primary: true, name: "UNID_ID", length: 27 })
  public unidId: string;

  @Column("varchar", { name: "UNID_SIGLA", nullable: true, length: 5 })
  public unidSigla: string | null;

  @Column("varchar", { name: "UNID_NOME", nullable: true, length: 64 })
  public unidNome: string | null;

  @Column("varchar", { name: "UNID_GRANDEZA", nullable: true, length: 25 })
  public unidGrandeza: string | null;

  @Column("datetime", { name: "UNID_LASTUPDATE", nullable: true })
  public unidLastupdate: LocalDateTime | null;

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

  @OneToMany(() => PecrCategoria, (pecrCategoria) => pecrCategoria.ctgrIdad)
  public pecrCategorias: PecrCategoria[];

  @OneToMany(() => PecrCategoria, (pecrCategoria) => pecrCategoria.ctgrPeso)
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

  public constructor(init?: Partial<CdstUnidadeMedida>) {
    super();
    Object.assign(this, init);
  }
}
