import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import MenuPasta from "./menu-pasta";
import MenuSistemaModulo from "./menu-sistema-modulo";
import MenuSistemaRecurso from "./menu-sistema-recurso";

@Index("PK_MENU_SISTEMA_PASTA", ["id"], { unique: true })
@Entity("MENU_SISTEMA_PASTA")
export default class MenuSistemaPasta {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

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

  @ManyToOne(() => MenuPasta, (menuPasta) => menuPasta.menuSistemaPastas)
  @JoinColumn([{ name: "SSPS_PSTA_ID", referencedColumnName: "id" }])
  public sspsPsta?: MenuPasta;

  @ManyToOne(
    () => MenuSistemaModulo,
    (menuSistemaModulo) => menuSistemaModulo.menuSistemaPastas
  )
  @JoinColumn([{ name: "SSPS_SSMD_ID", referencedColumnName: "id" }])
  public sspsSsmd?: MenuSistemaModulo;

  @OneToMany(
    () => MenuSistemaRecurso,
    (menuSistemaRecurso) => menuSistemaRecurso.ssrcSsps
  )
  public menuSistemaRecursos?: MenuSistemaRecurso[];
}
