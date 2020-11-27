import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import VeteServico from "./vete-servico";
import VeteRetorno from "./vete-retorno";

@Index("PK_VETE_RETORNO_PROCEDIMENTO", ["id"], { unique: true })
@Entity("VETE_RETORNO_PROCEDIMENTO")
export default class VeteRetornoProcedimento {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "RTSV_OBSERVACAO", nullable: true })
  public rtsvObservacao?: string | null;

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
    (veteServico) => veteServico.veteRetornoProcedimentos
  )
  @JoinColumn([{ name: "RTSV_SERV_ID", referencedColumnName: "id" }])
  public rtsvServ?: VeteServico;

  @ManyToOne(
    () => VeteRetorno,
    (veteRetorno) => veteRetorno.veteRetornoProcedimentos
  )
  @JoinColumn([{ name: "RTSV_RTRN_ID", referencedColumnName: "id" }])
  public rtsvRtrn?: VeteRetorno;
}
