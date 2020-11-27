import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import VeteServico from "./vete-servico";
import CdstProduto from "./cdst-produto";

@Index("PK_VETE_SERVICO_COMPOSICAO", ["id"], { unique: true })
@Entity("VETE_SERVICO_COMPOSICAO")
export default class VeteServicoComposicao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "SVCP_TIPO", nullable: true, length: 15 })
  public svcpTipo?: string | null;

  @Column("numeric", {
    name: "SVCP_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public svcpQuantidade?: number | null;

  @Column("money", { name: "SVCP_CUSTO_UNITARIO", nullable: true })
  public svcpCustoUnitario?: number | null;

  @Column("money", { name: "SVCP_CUSTO_TOTAL", nullable: true })
  public svcpCustoTotal?: number | null;

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

  @ManyToOne(
    () => VeteServico,
    (veteServico) => veteServico.veteServicoComposicaos
  )
  @JoinColumn([{ name: "SVCP_SERV_ID", referencedColumnName: "id" }])
  public svcpServ?: VeteServico;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.veteServicoComposicaos
  )
  @JoinColumn([{ name: "SVCP_PRDT_ID", referencedColumnName: "id" }])
  public svcpPrdt?: CdstProduto;
}
