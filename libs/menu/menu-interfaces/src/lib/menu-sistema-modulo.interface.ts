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
import { SstmSistema } from "./sstm-sistema";
import { MenuSistemaPasta } from "./menu-sistema-pasta";

@Index("FK_MODL_RS_SSMD", ["ssmdModlId"], {})
@Index("FK_SSTM_RS_SSMD", ["ssmdSstmId"], {})
@Index("PK_MENU_SISTEMA_MODULO", ["ssmdId"], { unique: true })
@Entity("MENU_SISTEMA_MODULO")
export class MenuSistemaModulo extends BaseEntity {
  @Column("varchar", { primary: true, name: "SSMD_ID", length: 27 })
  public ssmdId: string;

  @Column("varchar", { name: "SSMD_SSTM_ID", nullable: true, length: 27 })
  public ssmdSstmId: string | null;

  @Column("varchar", { name: "SSMD_MODL_ID", nullable: true, length: 27 })
  public ssmdModlId: string | null;

  @Column("datetime", { name: "SSMD_LASTUPDATE", nullable: true })
  public ssmdLastupdate: LocalDateTime | null;

  @ManyToOne(() => MenuModulo, (menuModulo) => menuModulo.menuSistemaModulos)
  @JoinColumn([{ name: "SSMD_MODL_ID", referencedColumnName: "modlId" }])
  public ssmdModl: MenuModulo;

  @ManyToOne(() => SstmSistema, (sstmSistema) => sstmSistema.menuSistemaModulos)
  @JoinColumn([{ name: "SSMD_SSTM_ID", referencedColumnName: "sstmId" }])
  public ssmdSstm: SstmSistema;

  @OneToMany(
    () => MenuSistemaPasta,
    (menuSistemaPasta) => menuSistemaPasta.sspsSsmd
  )
  public menuSistemaPastas: MenuSistemaPasta[];

  @RelationId(
    (menuSistemaModulo: MenuSistemaModulo) => menuSistemaModulo.ssmdModl
  )
  public ssmdModlId2: string | null;

  @RelationId(
    (menuSistemaModulo: MenuSistemaModulo) => menuSistemaModulo.ssmdSstm
  )
  public ssmdSstmId2: string | null;

  public constructor(init?: Partial<MenuSistemaModulo>) {
    super();
    Object.assign(this, init);
  }
}
