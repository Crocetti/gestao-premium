import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { VeteRetorno } from "./vete-retorno";
import { VeteServico } from "./vete-servico";

@Index("FK_RTRN_RS_RTSV", ["rtsvRtrnId"], {})
@Index("FK_SERV_RS_RTSV", ["rtsvServId"], {})
@Index("PK_VETE_RETORNO_PROCEDIMENTO", ["rtsvId"], { unique: true })
@Entity("VETE_RETORNO_PROCEDIMENTO")
export class VeteRetornoProcedimento extends BaseEntity {
  @Column("varchar", { primary: true, name: "RTSV_ID", length: 27 })
  public rtsvId: string;

  @Column("varchar", { name: "RTSV_SERV_ID", nullable: true, length: 27 })
  public rtsvServId: string | null;

  @Column("varchar", { name: "RTSV_RTRN_ID", nullable: true, length: 27 })
  public rtsvRtrnId: string | null;

  @Column("varchar", { name: "RTSV_OBSERVACAO", nullable: true, length: 5000 })
  public rtsvObservacao: string | null;

  @ManyToOne(
    () => VeteRetorno,
    (veteRetorno) => veteRetorno.veteRetornoProcedimentos
  )
  @JoinColumn([{ name: "RTSV_RTRN_ID", referencedColumnName: "rtrnId" }])
  public rtsvRtrn: VeteRetorno;

  @ManyToOne(
    () => VeteServico,
    (veteServico) => veteServico.veteRetornoProcedimentos
  )
  @JoinColumn([{ name: "RTSV_SERV_ID", referencedColumnName: "servId" }])
  public rtsvServ: VeteServico;

  @RelationId(
    (veteRetornoProcedimento: VeteRetornoProcedimento) =>
      veteRetornoProcedimento.rtsvRtrn
  )
  public rtsvRtrnId2: string | null;

  @RelationId(
    (veteRetornoProcedimento: VeteRetornoProcedimento) =>
      veteRetornoProcedimento.rtsvServ
  )
  public rtsvServId2: string | null;

  public constructor(init?: Partial<VeteRetornoProcedimento>) {
    super();
    Object.assign(this, init);
  }
}
