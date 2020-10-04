import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { SrvcOrdemServicoItem } from "./srvc-ordem-servico-item";

@Index("PK_SRVC_ORDEM_SERVICO", ["odsvId"], { unique: true })
@Entity("SRVC_ORDEM_SERVICO")
export class SrvcOrdemServico extends BaseEntity {
  @Column("varchar", { primary: true, name: "ODSV_ID", length: 27 })
  public odsvId: string;

  @Column("varchar", { name: "ODSV_NUMERO", nullable: true, length: 20 })
  public odsvNumero: string | null;

  @Column("datetime", { name: "ODSV_DT_LANCAMENTO", nullable: true })
  public odsvDtLancamento: LocalDateTime | null;

  @Column("datetime", { name: "ODSV_DT_EMISSAO", nullable: true })
  public odsvDtEmissao: LocalDateTime | null;

  @Column("datetime", { name: "ODSV_LASTUPDATE", nullable: true })
  public odsvLastupdate: LocalDateTime | null;

  @OneToMany(
    () => SrvcOrdemServicoItem,
    (srvcOrdemServicoItem) => srvcOrdemServicoItem.ositOdsv
  )
  public srvcOrdemServicoItems: SrvcOrdemServicoItem[];

  public constructor(init?: Partial<SrvcOrdemServico>) {
    super();
    Object.assign(this, init);
  }
}
