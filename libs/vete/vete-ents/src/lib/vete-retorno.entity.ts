import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { RchmFuncionario } from "./rchm-funcionario";
import { VeteServico } from "./vete-servico";
import { VeteAnimal } from "./vete-animal";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";
import { VeteRetornoProcedimento } from "./vete-retorno-procedimento";

@Index("PK_VETE_RETORNO", ["id"], { unique: true })
@Entity("VETE_RETORNO")
export class VeteRetorno {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("datetime2", { name: "RTRN_DT_AGENDADA", nullable: true })
  public rtrnDtAgendada: LocalDateTime | null;

  @Column("datetime2", { name: "RTRN_DT_EFETIVADA", nullable: true })
  public rtrnDtEfetivada: LocalDateTime | null;

  @Column("nvarchar", { name: "RTRN_MOTIVOS", nullable: true })
  public rtrnMotivos: string | null;

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
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteRetornos
  )
  @JoinColumn([{ name: "RTRN_VTAT_ID", referencedColumnName: "id" }])
  public rtrnVtat: RchmFuncionario;

  @ManyToOne(() => VeteServico, (veteServico) => veteServico.veteRetornos)
  @JoinColumn([{ name: "RTRN_SERV_ID", referencedColumnName: "id" }])
  public rtrnServ: VeteServico;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteRetornos)
  @JoinColumn([{ name: "RTRN_ANML_ID", referencedColumnName: "id" }])
  public rtrnAnml: VeteAnimal;

  @ManyToOne(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.veteRetornos
  )
  @JoinColumn([{ name: "RTRN_OSVT_ID", referencedColumnName: "id" }])
  public rtrnOsvt: VeteOrdemDeServico;

  @ManyToOne(
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.veteRetornos2
  )
  @JoinColumn([{ name: "RTRN_VTAG_ID", referencedColumnName: "id" }])
  public rtrnVtag: RchmFuncionario;

  @OneToMany(
    () => VeteRetornoProcedimento,
    (veteRetornoProcedimento) => veteRetornoProcedimento.rtsvRtrn
  )
  public veteRetornoProcedimentos: VeteRetornoProcedimento[];
}
