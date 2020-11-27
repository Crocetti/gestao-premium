import { Column, Entity, Index, OneToMany } from "typeorm";
import FncrTabelaPrecoItem from "./fncr-tabela-preco-item";
import VeteOrdemDeServico from "./vete-ordem-de-servico";

@Index("PK_FNCR_TABELA_PRECO", ["id"], { unique: true })
@Entity("FNCR_TABELA_PRECO")
export default class FncrTabelaPreco {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "TBPC_CODIGO", nullable: true, length: 5 })
  public tbpcCodigo?: string | null;

  @Column("nvarchar", { name: "TBPC_NOME", nullable: true, length: 40 })
  public tbpcNome?: string | null;

  @Column("datetime2", { name: "TBPC_DT_INICIAL", nullable: true })
  public tbpcDtInicial?: Date | null;

  @Column("datetime2", { name: "TBPC_DT_FINAL", nullable: true })
  public tbpcDtFinal?: Date | null;

  @Column("numeric", {
    name: "TBPC_MARKUP",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public tbpcMarkup?: number | null;

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

  @OneToMany(
    () => FncrTabelaPrecoItem,
    (fncrTabelaPrecoItem) => fncrTabelaPrecoItem.tpitTbpc
  )
  public fncrTabelaPrecoItems?: FncrTabelaPrecoItem[];

  @OneToMany(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.osvtTbpc
  )
  public veteOrdemDeServicos?: VeteOrdemDeServico[];
}
