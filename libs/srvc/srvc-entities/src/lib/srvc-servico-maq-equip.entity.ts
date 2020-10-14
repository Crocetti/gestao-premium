import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { SrvcServico } from "./srvc-servico";
import { EstqMaquinaEquipamento } from "./estq-maquina-equipamento";
import { CdstUnidadeMedida } from "./cdst-unidade-medida";

@Index("PK_SRVC_SERVICO_MAQ_EQUIP", ["id"], { unique: true })
@Entity("SRVC_SERVICO_MAQ_EQUIP")
export class SrvcServicoMaqEquip {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("numeric", {
    name: "SRME_QUANTIDADE",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public srmeQuantidade: number | null;

  @Column("money", { name: "SRME_VALOR_UNITARIO", nullable: true })
  public srmeValorUnitario: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @ManyToOne(
    () => SrvcServico,
    (srvcServico) => srvcServico.srvcServicoMaqEquips
  )
  @JoinColumn([{ name: "SRME_SRVC_ID", referencedColumnName: "id" }])
  public srmeSrvc: SrvcServico;

  @ManyToOne(
    () => EstqMaquinaEquipamento,
    (estqMaquinaEquipamento) => estqMaquinaEquipamento.srvcServicoMaqEquips
  )
  @JoinColumn([{ name: "SRME_MQEQ_ID", referencedColumnName: "id" }])
  public srmeMqeq: EstqMaquinaEquipamento;

  @ManyToOne(
    () => CdstUnidadeMedida,
    (cdstUnidadeMedida) => cdstUnidadeMedida.srvcServicoMaqEquips
  )
  @JoinColumn([{ name: "SRME_UNID_ID", referencedColumnName: "id" }])
  public srmeUnid: CdstUnidadeMedida;
}
