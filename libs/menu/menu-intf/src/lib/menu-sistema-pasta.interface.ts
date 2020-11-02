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
import { MenuSistemaModulo } from "./menu-sistema-modulo";
import { MenuSistemaRecurso } from "./menu-sistema-recurso";

@Index("FK_PSTA_RS_SSPS", ["sspsPstaId"], {})
@Index("FK_SSMD_RS_SSPS", ["sspsSsmdId"], {})
@Index("PK_MENU_SISTEMA_PASTA", ["sspsId"], { unique: true })
@Entity("MENU_SISTEMA_PASTA")
export class MenuSistemaPasta extends BaseEntity {
  @Column("varchar", { primary: true, name: "SSPS_ID", length: 27 })
  public sspsId: string;

  @Column("varchar", { name: "SSPS_PSTA_ID", nullable: true, length: 27 })
  public sspsPstaId: string | null;

  @Column("varchar", { name: "SSPS_SSMD_ID", nullable: true, length: 27 })
  public sspsSsmdId: string | null;

  @Column("varchar", { name: "SSPS_LASTUPDATE", nullable: true, length: 60 })
  public sspsLastupdate: string | null;

  @ManyToOne(() => MenuPasta, (menuPasta) => menuPasta.menuSistemaPastas)
  @JoinColumn([{ name: "SSPS_PSTA_ID", referencedColumnName: "pstaId" }])
  public sspsPsta: MenuPasta;

  @ManyToOne(
    () => MenuSistemaModulo,
    (menuSistemaModulo) => menuSistemaModulo.menuSistemaPastas
  )
  @JoinColumn([{ name: "SSPS_SSMD_ID", referencedColumnName: "ssmdId" }])
  public sspsSsmd: MenuSistemaModulo;

  @OneToMany(
    () => MenuSistemaRecurso,
    (menuSistemaRecurso) => menuSistemaRecurso.ssrcSsps
  )
  public menuSistemaRecursos: MenuSistemaRecurso[];

  @RelationId((menuSistemaPasta: MenuSistemaPasta) => menuSistemaPasta.sspsPsta)
  public sspsPstaId2: string | null;

  @RelationId((menuSistemaPasta: MenuSistemaPasta) => menuSistemaPasta.sspsSsmd)
  public sspsSsmdId2: string | null;

  public constructor(init?: Partial<MenuSistemaPasta>) {
    super();
    Object.assign(this, init);
  }
}
