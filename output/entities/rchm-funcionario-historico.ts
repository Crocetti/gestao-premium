import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import RchmFuncionario from "./rchm-funcionario";

@Index("PK_RCHM_FUNCIONARIO_HISTORICO", ["id"], { unique: true })
@Entity("RCHM_FUNCIONARIO_HISTORICO")
export default class RchmFuncionarioHistorico {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("datetime2", { name: "FCHS_DATA", nullable: true })
  public fchsData?: Date | null;

  @Column("nvarchar", { name: "FCHS_EVENTO", nullable: true, length: 20 })
  public fchsEvento?: string | null;

  @Column("nvarchar", { name: "FCHS_DESCRICAO", nullable: true, length: 500 })
  public fchsDescricao?: string | null;

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
    () => RchmFuncionario,
    (rchmFuncionario) => rchmFuncionario.rchmFuncionarioHistoricos
  )
  @JoinColumn([{ name: "FCHS_FCNR_ID", referencedColumnName: "id" }])
  public fchsFcnr?: RchmFuncionario;
}
