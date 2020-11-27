import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import SrvcServico from "./srvc-servico";
import SrvcOrdemServico from "./srvc-ordem-servico";

@Index("PK_SRVC_ORDEM_SERVICO_ITEM", ["id"], { unique: true })
@Entity("SRVC_ORDEM_SERVICO_ITEM")
export default class SrvcOrdemServicoItem {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "OSIT_NUMERO", length: 3 })
  public ositNumero?: string;

  @Column("numeric", {
    name: "OSIT_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public ositQuantidade?: number | null;

  @Column("money", { name: "OSIT_VALOR_UNITARIO", nullable: true })
  public ositValorUnitario?: number | null;

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
    () => SrvcServico,
    (srvcServico) => srvcServico.srvcOrdemServicoItems
  )
  @JoinColumn([{ name: "OSIT_SRVC_ID", referencedColumnName: "id" }])
  public ositSrvc?: SrvcServico;

  @ManyToOne(
    () => SrvcOrdemServico,
    (srvcOrdemServico) => srvcOrdemServico.srvcOrdemServicoItems
  )
  @JoinColumn([{ name: "OSIT_ODSV_ID", referencedColumnName: "id" }])
  public ositOdsv?: SrvcOrdemServico;
}
