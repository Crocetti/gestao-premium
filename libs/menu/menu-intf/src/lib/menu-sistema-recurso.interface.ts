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
import { MenuRecursoGrupoUsuario } from "./menu-recurso-grupo-usuario";
import { MenuRecurso } from "./menu-recurso";
import { MenuSistemaPasta } from "./menu-sistema-pasta";

@Index("FK_RCRS_RS_SSRC", ["ssrcRcrsId"], {})
@Index("FK_SSPS_RS_SSRC", ["ssrcSspsId"], {})
@Index("PK_MENU_SISTEMA_RECURSO", ["ssrcId"], { unique: true })
@Entity("MENU_SISTEMA_RECURSO")
export class MenuSistemaRecurso extends BaseEntity {
  @Column("varchar", { primary: true, name: "SSRC_ID", length: 27 })
  public ssrcId: string;

  @Column("varchar", { name: "SSRC_SSPS_ID", nullable: true, length: 27 })
  public ssrcSspsId: string | null;

  @Column("varchar", { name: "SSRC_RCRS_ID", nullable: true, length: 27 })
  public ssrcRcrsId: string | null;

  @Column("int", { name: "SSRC_NIVEL_ACESSO", nullable: true })
  public ssrcNivelAcesso: number | null;

  @Column("datetime", { name: "SSRC_LASTUPDATE", nullable: true })
  public ssrcLastupdate: LocalDateTime | null;

  @OneToMany(
    () => MenuRecursoGrupoUsuario,
    (menuRecursoGrupoUsuario) => menuRecursoGrupoUsuario.rcguSsrc
  )
  public menuRecursoGrupoUsuarios: MenuRecursoGrupoUsuario[];

  @ManyToOne(
    () => MenuRecurso,
    (menuRecurso) => menuRecurso.menuSistemaRecursos
  )
  @JoinColumn([{ name: "SSRC_RCRS_ID", referencedColumnName: "rcrsId" }])
  public ssrcRcrs: MenuRecurso;

  @ManyToOne(
    () => MenuSistemaPasta,
    (menuSistemaPasta) => menuSistemaPasta.menuSistemaRecursos
  )
  @JoinColumn([{ name: "SSRC_SSPS_ID", referencedColumnName: "sspsId" }])
  public ssrcSsps: MenuSistemaPasta;

  @RelationId(
    (menuSistemaRecurso: MenuSistemaRecurso) => menuSistemaRecurso.ssrcRcrs
  )
  public ssrcRcrsId2: string | null;

  @RelationId(
    (menuSistemaRecurso: MenuSistemaRecurso) => menuSistemaRecurso.ssrcSsps
  )
  public ssrcSspsId2: string | null;

  public constructor(init?: Partial<MenuSistemaRecurso>) {
    super();
    Object.assign(this, init);
  }
}
