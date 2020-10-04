import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { RchmFuncionario } from "./rchm-funcionario";
import { VeteServico } from "./vete-servico";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";
import { VeteAnimal } from "./vete-animal";
import { VeteRetornoProcedimento } from "./vete-retorno-procedimento";

@Index("FK_ANML_RS_RTRN", ["rtrnAnmlId"], {})
@Index("FK_OSVT_RS_RTRN", ["rtrnOsvtId"], {})
@Index("FK_SERV_RS_RTRN", ["rtrnServId"], {})
@Index("FK_VTAG_RS_RTRN", ["rtrnVtagId"], {})
@Index("FK_VTAT_RS_RTRN", ["rtrnVtatId"], {})
@Index("PK_VETE_RETORNO", ["rtrnId"], { unique: true })
@Entity("VETE_RETORNO")
export class VeteRetorno extends BaseEntity {
  @Column("varchar", { primary: true, name: "RTRN_ID", length: 27 })
  public rtrnId: string;

  @Column("varchar", { name: "RTRN_VTAT_ID", nullable: true, length: 27 })
  public rtrnVtatId: string | null;

  @Column("varchar", { name: "RTRN_SERV_ID", nullable: true, length: 27 })
  public rtrnServId: string | null;

  @Column("varchar", { name: "RTRN_ANML_ID", nullable: true, length: 27 })
  public rtrnAnmlId: string | null;

  @Column("varchar", { name: "RTRN_OSVT_ID", nullable: true, length: 27 })
  public rtrnOsvtId: string | null;

  @Column("varchar", { name: "RTRN_VTAG_ID", nullable: true, length: 27 })
  public rtrnVtagId: string | null;

  @Column("datetime", { name: "RTRN_DT_AGENDADA", nullable: true })
  public rtrnDtAgendada: LocalDateTime | null;

  @Column("datetime", { name: "RTRN_DT_EFETIVADA", nullable: true })
  public rtrnDtEfetivada: LocalDateTime | null;

  @Column("varchar", { name: "RTRN_MOTIVOS", nullable: true, length: 5000 })
  public rtrnMotivos: string | null;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteRetornos
  )
  @JoinColumn([{ name: "RTRN_VTAG_ID", referencedColumnName: "fcnrId" }])
  public rtrnVtag: RchmFuncionario;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteRetornos)
  @JoinColumn([{ name: "RTRN_SERV_ID", referencedColumnName: "servId" }])
  public rtrnServ: VeteServico;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteRetornos
  )
  @JoinColumn([{ name: "RTRN_OSVT_ID", referencedColumnName: "osvtId" }])
  public rtrnOsvt: VeteOrdemDeServico;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteRetornos)
  @JoinColumn([{ name: "RTRN_ANML_ID", referencedColumnName: "anmlId" }])
  public rtrnAnml: VeteAnimal;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteRetornos2
  )
  @JoinColumn([{ name: "RTRN_VTAT_ID", referencedColumnName: "fcnrId" }])
  public rtrnVtat: RchmFuncionario;

  @OneToMany(
    () => VeteRetornoProcedimento,
    (veteRetornoProcedimento) => veteRetornoProcedimento.rtsvRtrn
  )
  public veteRetornoProcedimentos: VeteRetornoProcedimento[];

  @RelationId((veteRetorno: VeteRetorno) => veteRetorno.rtrnVtag)
  public rtrnVtagId2: string | null;

  @RelationId((veteRetorno: VeteRetorno) => veteRetorno.rtrnServ)
  public rtrnServId2: string | null;

  @RelationId((veteRetorno: VeteRetorno) => veteRetorno.rtrnOsvt)
  public rtrnOsvtId2: string | null;

  @RelationId((veteRetorno: VeteRetorno) => veteRetorno.rtrnAnml)
  public rtrnAnmlId2: string | null;

  @RelationId((veteRetorno: VeteRetorno) => veteRetorno.rtrnVtat)
  public rtrnVtatId2: string | null;

  public constructor(init?: Partial<VeteRetorno>) {
    super();
    Object.assign(this, init);
  }
}
