import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { FncrTabelaPrecoItem } from "./fncr-tabela-preco-item";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("PK_FNCR_TABELA_PRECO", ["tbpcId"], { unique: true })
@Entity("FNCR_TABELA_PRECO")
export class FncrTabelaPreco extends BaseEntity {
  @Column("varchar", { primary: true, name: "TBPC_ID", length: 27 })
  public tbpcId: string;

  @Column("varchar", { name: "TBPC_CODIGO", nullable: true, length: 5 })
  public tbpcCodigo: string | null;

  @Column("varchar", { name: "TBPC_NOME", nullable: true, length: 40 })
  public tbpcNome: string | null;

  @Column("datetime", { name: "TBPC_DT_INICIAL", nullable: true })
  public tbpcDtInicial: LocalDateTime | null;

  @Column("datetime", { name: "TBPC_DT_FINAL", nullable: true })
  public tbpcDtFinal: LocalDateTime | null;

  @Column("numeric", {
    name: "TBPC_MARKUP",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public tbpcMarkup: number | null;

  @Column("datetime", { name: "TBPC_LASTUPDATE", nullable: true })
  public tbpcLastupdate: LocalDateTime | null;

  @OneToMany(
    () => FncrTabelaPrecoItem,
    (fncrTabelaPrecoItem) => fncrTabelaPrecoItem.tpitTbpc
  )
  public fncrTabelaPrecoItems: FncrTabelaPrecoItem[];

  @OneToMany(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.osvtTbpc
  )
  public veteOrdemDeServicos: VeteOrdemDeServico[];

  public constructor(init?: Partial<FncrTabelaPreco>) {
    super();
    Object.assign(this, init);
  }
}
