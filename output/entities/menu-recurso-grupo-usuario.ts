import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import MenuSistemaRecurso from "./menu-sistema-recurso";
import CmnsGrupoUsuario from "./cmns-grupo-usuario";

@Index("PK_MENU_RECURSO_GRUPO_USUARIO", ["id"], { unique: true })
@Entity("MENU_RECURSO_GRUPO_USUARIO")
export default class MenuRecursoGrupoUsuario {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("bit", { name: "RCGU_INSERT", nullable: true })
  public rcguInsert?: boolean | null;

  @Column("bit", { name: "RCGU_DELETE", nullable: true })
  public rcguDelete?: boolean | null;

  @Column("bit", { name: "RCGU_UPDATE", nullable: true })
  public rcguUpdate?: boolean | null;

  @Column("bit", { name: "RCGU_VISUALIZE", nullable: true })
  public rcguVisualize?: boolean | null;

  @Column("bit", { name: "RCGU_PRINTER", nullable: true })
  public rcguPrinter?: boolean | null;

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
    () => MenuSistemaRecurso,
    (menuSistemaRecurso) => menuSistemaRecurso.menuRecursoGrupoUsuarios
  )
  @JoinColumn([{ name: "RCGU_SSRC_ID", referencedColumnName: "id" }])
  public rcguSsrc?: MenuSistemaRecurso;

  @ManyToOne(
    () => CmnsGrupoUsuario,
    (cmnsGrupoUsuario) => cmnsGrupoUsuario.menuRecursoGrupoUsuarios
  )
  @JoinColumn([{ name: "RCGU_GRUS_ID", referencedColumnName: "id" }])
  public rcguGrus?: CmnsGrupoUsuario;
}
