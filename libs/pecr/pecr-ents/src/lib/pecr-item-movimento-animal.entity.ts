import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PecrCapaMovimentoAnimal } from "./pecr-capa-movimento-animal";
import { CdstUnidadeMedida } from "./cdst-unidade-medida";
import { CdstProduto } from "./cdst-produto";
import { PecrUnidadeCriacao } from "./pecr-unidade-criacao";

@Index("PK_PECR_ITEM_MOVIMENTO_ANIMAL", ["id"], { unique: true })
@Entity("PECR_ITEM_MOVIMENTO_ANIMAL")
export class PecrItemMovimentoAnimal {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("int", { name: "IMAN_IDADE" })
  public imanIdade: number;

  @Column("numeric", {
    name: "IMAN_PESO_MEDIO",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public imanPesoMedio: number | null;

  @Column("numeric", {
    name: "IMAN_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public imanQuantidade: number | null;

  @Column("nvarchar", { name: "IMAN_MOTIVO", nullable: true, length: 500 })
  public imanMotivo: string | null;

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
    () => PecrCapaMovimentoAnimal,
    (pecrCapaMovimentoAnimal) =>
      pecrCapaMovimentoAnimal.pecrItemMovimentoAnimals
  )
  @JoinColumn([{ name: "IMAN_CMAN_ID", referencedColumnName: "id" }])
  public imanCman: PecrCapaMovimentoAnimal;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.pecrItemMovimentoAnimals
  )
  @JoinColumn([{ name: "IMAN_UNID_ID", referencedColumnName: "id" }])
  public imanUnid: CdstUnidadeMedida;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.pecrItemMovimentoAnimals
  )
  @JoinColumn([{ name: "IMAN_PRDT_ID", referencedColumnName: "id" }])
  public imanPrdt: CdstProduto;

  @ManyToOne(
    () => PecrUnidadeCriacao,
    (pecrUnidadeCriacao) => pecrUnidadeCriacao.pecrItemMovimentoAnimals
  )
  @JoinColumn([{ name: "IMAN_UNCR_ID", referencedColumnName: "id" }])
  public imanUncr: PecrUnidadeCriacao;
}
