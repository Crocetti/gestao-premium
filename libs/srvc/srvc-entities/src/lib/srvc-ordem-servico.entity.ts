import { Column, Entity, Index, OneToMany } from "typeorm";
import { SrvcOrdemServicoItem } from "./srvc-ordem-servico-item";

@Index("PK_SRVC_ORDEM_SERVICO", ["id"], { unique: true })
@Entity("SRVC_ORDEM_SERVICO")
export class SrvcOrdemServico {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "ODSV_NUMERO", nullable: true, length: 20 })
  public odsvNumero: string | null;

  @Column("datetime2", { name: "ODSV_DT_LANCAMENTO", nullable: true })
  public odsvDtLancamento: LocalDateTime | null;

  @Column("datetime2", { name: "ODSV_DT_EMISSAO", nullable: true })
  public odsvDtEmissao: LocalDateTime | null;

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
    () => SrvcOrdemServicoItem,
    (srvcOrdemServicoItem) => srvcOrdemServicoItem.ositOdsv
  )
  public srvcOrdemServicoItems: SrvcOrdemServicoItem[];
}
