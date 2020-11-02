import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SstmSistema } from "./sstm-sistema";
import { MenuModulo } from "./menu-modulo";
import { MenuSistemaPasta } from "./menu-sistema-pasta";

@Index("PK_MENU_SISTEMA_MODULO", ["id"], { unique: true })
@Entity("MENU_SISTEMA_MODULO")
export class MenuSistemaModulo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

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

  @ManyToOne(() => SstmSistema, (sstmSistema) => sstmSistema.menuSistemaModulos)
  @JoinColumn([{ name: "SSMD_SSTM_ID", referencedColumnName: "id" }])
  public ssmdSstm: SstmSistema;

  @ManyToOne(() => MenuModulo, (menuModulo) => menuModulo.menuSistemaModulos)
  @JoinColumn([{ name: "SSMD_MODL_ID", referencedColumnName: "id" }])
  public ssmdModl: MenuModulo;

  @OneToMany(
    () => MenuSistemaPasta,
    (menuSistemaPasta) => menuSistemaPasta.sspsSsmd
  )
  public menuSistemaPastas: MenuSistemaPasta[];
}
