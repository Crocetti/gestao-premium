import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MenuPasta } from "./menu-pasta";
import { MenuSistemaRecurso } from "./menu-sistema-recurso";

@Index("PK_MENU_RECURSO", ["id"], { unique: true })
@Entity("MENU_RECURSO")
export class MenuRecurso {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "RCRS_NOME", length: 64 })
  public rcrsNome: string;

  @Column("nvarchar", { name: "RCRS_DESCRICAO", nullable: true, length: 128 })
  public rcrsDescricao: string | null;

  @Column("nvarchar", { name: "RCRS_URL", nullable: true, length: 256 })
  public rcrsUrl: string | null;

  @Column("nvarchar", { name: "RCRS_CLASSE", nullable: true, length: 64 })
  public rcrsClasse: string | null;

  @Column("nvarchar", { name: "RCRS_PACKAGE", nullable: true, length: 64 })
  public rcrsPackage: string | null;

  @Column("nvarchar", { name: "RCRS_METHOD", nullable: true, length: 64 })
  public rcrsMethod: string | null;

  @Column("nvarchar", { name: "RCRS_PARAMS", nullable: true, length: 256 })
  public rcrsParams: string | null;

  @Column("nvarchar", { name: "RCRS_SMALL_ICON", nullable: true })
  public rcrsSmallIcon: string | null;

  @Column("nvarchar", { name: "RCRS_NORMAL_ICON", nullable: true })
  public rcrsNormalIcon: string | null;

  @Column("nvarchar", { name: "RCRS_LARGE_ICON", nullable: true })
  public rcrsLargeIcon: string | null;

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

  @ManyToOne(() => MenuPasta, (menuPasta) => menuPasta.menuRecursos)
  @JoinColumn([{ name: "RCRS_PSTA_ID", referencedColumnName: "id" }])
  public rcrsPsta: MenuPasta;

  @OneToMany(
    () => MenuSistemaRecurso,
    (menuSistemaRecurso) => menuSistemaRecurso.ssrcRcrs
  )
  public menuSistemaRecursos: MenuSistemaRecurso[];
}
