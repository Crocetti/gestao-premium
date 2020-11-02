import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { MenuPasta } from "./menu-pasta";
import { MenuSistemaModulo } from "./menu-sistema-modulo";

@Index("PK_MENU_MODULO", ["modlId"], { unique: true })
@Entity("MENU_MODULO")
export class MenuModulo extends BaseEntity {
  @Column("varchar", { primary: true, name: "MODL_ID", length: 27 })
  public modlId: string;

  @Column("varchar", { name: "MODL_NOME", nullable: true, length: 40 })
  public modlNome: string | null;

  @Column("varchar", { name: "MODL_DESCRICAO", nullable: true, length: 128 })
  public modlDescricao: string | null;

  @Column("image", { name: "MODL_SMALL_ICON", nullable: true })
  public modlSmallIcon: Buffer | null;

  @Column("image", { name: "MODL_NORMAL_ICON", nullable: true })
  public modlNormalIcon: Buffer | null;

  @Column("image", { name: "MODL_LARGE_ICON", nullable: true })
  public modlLargeIcon: Buffer | null;

  @Column("datetime", { name: "MODL_LASTUPDATE", nullable: true })
  public modlLastupdate: LocalDateTime | null;

  @OneToMany(() => MenuPasta, (menuPasta) => menuPasta.pstaModl)
  public menuPastas: MenuPasta[];

  @OneToMany(
    () => MenuSistemaModulo,
    (menuSistemaModulo) => menuSistemaModulo.ssmdModl
  )
  public menuSistemaModulos: MenuSistemaModulo[];

  public constructor(init?: Partial<MenuModulo>) {
    super();
    Object.assign(this, init);
  }
}
