import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MenuSistemaRecurso } from "./menu-sistema-recurso";
import { CmnsGrupoUsuario } from "./cmns-grupo-usuario";

@Index("PK_MENU_RECURSO_GRUPO_USUARIO", ["id"], { unique: true })
@Entity("MENU_RECURSO_GRUPO_USUARIO")
export class MenuRecursoGrupoUsuario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("smallint", { name: "RCGU_INSERT", nullable: true })
  public rcguInsert: number | null;

  @Column("smallint", { name: "RCGU_DELETE", nullable: true })
  public rcguDelete: number | null;

  @Column("smallint", { name: "RCGU_UPDATE", nullable: true })
  public rcguUpdate: number | null;

  @Column("smallint", { name: "RCGU_VISUALIZE", nullable: true })
  public rcguVisualize: number | null;

  @Column("smallint", { name: "RCGU_PRINTER", nullable: true })
  public rcguPrinter: number | null;

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
    () => MenuSistemaRecurso,
    (menuSistemaRecurso) => menuSistemaRecurso.menuRecursoGrupoUsuarios
  )
  @JoinColumn([{ name: "RCGU_SSRC_ID", referencedColumnName: "id" }])
  public rcguSsrc: MenuSistemaRecurso;

  @ManyToOne(
    () => CmnsGrupoUsuario,
    (cmnsGrupoUsuario) => cmnsGrupoUsuario.menuRecursoGrupoUsuarios
  )
  @JoinColumn([{ name: "RCGU_GRUS_ID", referencedColumnName: "id" }])
  public rcguGrus: CmnsGrupoUsuario;
}
