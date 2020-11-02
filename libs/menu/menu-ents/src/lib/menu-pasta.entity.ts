import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MenuModulo } from "./menu-modulo";
import { MenuRecurso } from "./menu-recurso";
import { MenuSistemaPasta } from "./menu-sistema-pasta";

@Index("PK_MENU_PASTA", ["id"], { unique: true })
@Entity("MENU_PASTA")
export class MenuPasta {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PSTA_NOME", nullable: true, length: 40 })
  public pstaNome: string | null;

  @Column("nvarchar", { name: "PSTA_DESCRICAO", nullable: true, length: 128 })
  public pstaDescricao: string | null;

  @Column("nvarchar", { name: "PSTA_TP_MENU", nullable: true, length: 15 })
  public pstaTpMenu: string | null;

  @Column("nvarchar", { name: "PSTA_SMALL_ICON", nullable: true })
  public pstaSmallIcon: string | null;

  @Column("nvarchar", { name: "PSTA_NORMAL_ICON", nullable: true })
  public pstaNormalIcon: string | null;

  @Column("nvarchar", { name: "PSTA_LARGE_ICON", nullable: true })
  public pstaLargeIcon: string | null;

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

  @ManyToOne(() => MenuModulo, (menuModulo) => menuModulo.menuPastas)
  @JoinColumn([{ name: "PSTA_MODL_ID", referencedColumnName: "id" }])
  public pstaModl: MenuModulo;

  @OneToMany(() => MenuRecurso, (menuRecurso) => menuRecurso.rcrsPsta)
  public menuRecursos: MenuRecurso[];

  @OneToMany(
    () => MenuSistemaPasta,
    (menuSistemaPasta) => menuSistemaPasta.sspsPsta
  )
  public menuSistemaPastas: MenuSistemaPasta[];
}
