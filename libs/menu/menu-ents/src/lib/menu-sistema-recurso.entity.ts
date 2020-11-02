import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MenuRecursoGrupoUsuario } from "./menu-recurso-grupo-usuario";
import { MenuSistemaPasta } from "./menu-sistema-pasta";
import { MenuRecurso } from "./menu-recurso";

@Index("PK_MENU_SISTEMA_RECURSO", ["id"], { unique: true })
@Entity("MENU_SISTEMA_RECURSO")
export class MenuSistemaRecurso {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("int", { name: "SSRC_NIVEL_ACESSO", nullable: true })
  public ssrcNivelAcesso: number | null;

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

  @OneToMany(
    () => MenuRecursoGrupoUsuario,
    (menuRecursoGrupoUsuario) => menuRecursoGrupoUsuario.rcguSsrc
  )
  public menuRecursoGrupoUsuarios: MenuRecursoGrupoUsuario[];

  @ManyToOne(
    () => MenuSistemaPasta,
    (menuSistemaPasta) => menuSistemaPasta.menuSistemaRecursos
  )
  @JoinColumn([{ name: "SSRC_SSPS_ID", referencedColumnName: "id" }])
  public ssrcSsps: MenuSistemaPasta;

  @ManyToOne(
    () => MenuRecurso,
    (menuRecurso) => menuRecurso.menuSistemaRecursos
  )
  @JoinColumn([{ name: "SSRC_RCRS_ID", referencedColumnName: "id" }])
  public ssrcRcrs: MenuRecurso;
}
