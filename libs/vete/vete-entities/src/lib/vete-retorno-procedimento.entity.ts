import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { VeteServico } from "./vete-servico";
import { VeteRetorno } from "./vete-retorno";

@Index("PK_VETE_RETORNO_PROCEDIMENTO", ["id"], { unique: true })
@Entity("VETE_RETORNO_PROCEDIMENTO")
export class VeteRetornoProcedimento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "RTSV_OBSERVACAO", nullable: true })
  public rtsvObservacao: string | null;

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
    () => VeteServico,
    (veteServico) => veteServico.veteRetornoProcedimentos
  )
  @JoinColumn([{ name: "RTSV_SERV_ID", referencedColumnName: "id" }])
  public rtsvServ: VeteServico;

  @ManyToOne(
    () => VeteRetorno,
    (veteRetorno) => veteRetorno.veteRetornoProcedimentos
  )
  @JoinColumn([{ name: "RTSV_RTRN_ID", referencedColumnName: "id" }])
  public rtsvRtrn: VeteRetorno;
}
