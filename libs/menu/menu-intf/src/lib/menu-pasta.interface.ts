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
import { MenuModulo } from "./menu-modulo";
import { MenuRecurso } from "./menu-recurso";
import { MenuSistemaPasta } from "./menu-sistema-pasta";

@Index("FK_MODL_RS_PSTA", ["pstaModlId"], {})
@Index("PK_MENU_PASTA", ["pstaId"], { unique: true })
@Entity("MENU_PASTA")
export class MenuPasta extends BaseEntity {
  @Column("varchar", { primary: true, name: "PSTA_ID", length: 27 })
  public pstaId: string;

  @Column("varchar", { name: "PSTA_MODL_ID", nullable: true, length: 27 })
  public pstaModlId: string | null;

  @Column("varchar", { name: "PSTA_NOME", nullable: true, length: 40 })
  public pstaNome: string | null;

  @Column("varchar", { name: "PSTA_DESCRICAO", nullable: true, length: 128 })
  public pstaDescricao: string | null;

  @Column("varchar", { name: "PSTA_TP_MENU", nullable: true, length: 15 })
  public pstaTpMenu: string | null;

  @Column("image", { name: "PSTA_SMALL_ICON", nullable: true })
  public pstaSmallIcon: Buffer | null;

  @Column("image", { name: "PSTA_NORMAL_ICON", nullable: true })
  public pstaNormalIcon: Buffer | null;

  @Column("image", { name: "PSTA_LARGE_ICON", nullable: true })
  public pstaLargeIcon: Buffer | null;

  @Column("datetime", { name: "PSTA_LASTUPDATE", nullable: true })
  public pstaLastupdate: LocalDateTime | null;

  @ManyToOne(() => MenuModulo, (menuModulo) => menuModulo.menuPastas)
  @JoinColumn([{ name: "PSTA_MODL_ID", referencedColumnName: "modlId" }])
  public pstaModl: MenuModulo;

  @OneToMany(() => MenuRecurso, (menuRecurso) => menuRecurso.rcrsPsta)
  public menuRecursos: MenuRecurso[];

  @OneToMany(
    () => MenuSistemaPasta,
    (menuSistemaPasta) => menuSistemaPasta.sspsPsta
  )
  public menuSistemaPastas: MenuSistemaPasta[];

  @RelationId((menuPasta: MenuPasta) => menuPasta.pstaModl)
  public pstaModlId2: string | null;

  public constructor(init?: Partial<MenuPasta>) {
    super();
    Object.assign(this, init);
  }
}
