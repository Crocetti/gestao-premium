import { Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsUnemUsuario } from "./cmns-unem-usuario";
import { MenuRecursoGrupoUsuario } from "./menu-recurso-grupo-usuario";

@Index("PK_CMNS_GRUPO_USUARIO", ["id"], { unique: true })
@Entity("CMNS_GRUPO_USUARIO")
export class CmnsGrupoUsuario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "GRUS_NOME", nullable: true, length: 64 })
  public grusNome: string | null;

  @Column("nvarchar", { name: "GRUS_SIGLA", nullable: true, length: 5 })
  public grusSigla: string | null;

  @Column("int", { name: "GRUS_NIVEL", nullable: true })
  public grusNivel: number | null;

  @Column("money", { name: "GRUS_DESC_MAX", nullable: true })
  public grusDescMax: number | null;

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

  @OneToMany(
    () => CmnsUnemUsuario,
    (cmnsUnemUsuario) => cmnsUnemUsuario.ueusGrus
  )
  public cmnsUnemUsuarios: CmnsUnemUsuario[];

  @OneToMany(
    () => MenuRecursoGrupoUsuario,
    (menuRecursoGrupoUsuario) => menuRecursoGrupoUsuario.rcguGrus
  )
  public menuRecursoGrupoUsuarios: MenuRecursoGrupoUsuario[];
}
