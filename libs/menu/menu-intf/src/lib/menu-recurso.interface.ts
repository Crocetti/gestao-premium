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
import { MenuPasta } from "./menu-pasta";
import { MenuSistemaRecurso } from "./menu-sistema-recurso";

@Index("FK_PSTA_RS_RCRS", ["rcrsPstaId"], {})
@Index("PK_MENU_RECURSO", ["rcrsId"], { unique: true })
@Entity("MENU_RECURSO")
export class MenuRecurso extends BaseEntity {
  @Column("varchar", { primary: true, name: "RCRS_ID", length: 27 })
  public rcrsId: string;

  @Column("varchar", { name: "RCRS_PSTA_ID", nullable: true, length: 27 })
  public rcrsPstaId: string | null;

  @Column("varchar", { name: "RCRS_NOME", length: 64 })
  public rcrsNome: string;

  @Column("varchar", { name: "RCRS_DESCRICAO", nullable: true, length: 128 })
  public rcrsDescricao: string | null;

  @Column("varchar", { name: "RCRS_URL", nullable: true, length: 256 })
  public rcrsUrl: string | null;

  @Column("varchar", { name: "RCRS_CLASSE", nullable: true, length: 64 })
  public rcrsClasse: string | null;

  @Column("varchar", { name: "RCRS_PACKAGE", nullable: true, length: 64 })
  public rcrsPackage: string | null;

  @Column("varchar", { name: "RCRS_METHOD", nullable: true, length: 64 })
  public rcrsMethod: string | null;

  @Column("varchar", { name: "RCRS_PARAMS", nullable: true, length: 256 })
  public rcrsParams: string | null;

  @Column("image", { name: "RCRS_SMALL_ICON", nullable: true })
  public rcrsSmallIcon: Buffer | null;

  @Column("image", { name: "RCRS_NORMAL_ICON", nullable: true })
  public rcrsNormalIcon: Buffer | null;

  @Column("image", { name: "RCRS_LARGE_ICON", nullable: true })
  public rcrsLargeIcon: Buffer | null;

  @Column("datetime", { name: "RCRS_LASTUPDATE_", nullable: true })
  public rcrsLastupdate: LocalDateTime | null;

  @ManyToOne(() => MenuPasta, (menuPasta) => menuPasta.menuRecursos)
  @JoinColumn([{ name: "RCRS_PSTA_ID", referencedColumnName: "pstaId" }])
  public rcrsPsta: MenuPasta;

  @OneToMany(
    () => MenuSistemaRecurso,
    (menuSistemaRecurso) => menuSistemaRecurso.ssrcRcrs
  )
  public menuSistemaRecursos: MenuSistemaRecurso[];

  @RelationId((menuRecurso: MenuRecurso) => menuRecurso.rcrsPsta)
  public rcrsPstaId2: string | null;

  public constructor(init?: Partial<MenuRecurso>) {
    super();
    Object.assign(this, init);
  }
}
