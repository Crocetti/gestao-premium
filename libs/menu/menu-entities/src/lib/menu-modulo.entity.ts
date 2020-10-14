import { Column, Entity, Index, OneToMany } from "typeorm";
import { MenuPasta } from "./menu-pasta";
import { MenuSistemaModulo } from "./menu-sistema-modulo";

@Index("PK_MENU_MODULO", ["id"], { unique: true })
@Entity("MENU_MODULO")
export class MenuModulo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "MODL_NOME", nullable: true, length: 40 })
  public modlNome: string | null;

  @Column("nvarchar", { name: "MODL_DESCRICAO", nullable: true, length: 128 })
  public modlDescricao: string | null;

  @Column("nvarchar", { name: "MODL_SMALL_ICON", nullable: true })
  public modlSmallIcon: string | null;

  @Column("nvarchar", { name: "MODL_NORMAL_ICON", nullable: true })
  public modlNormalIcon: string | null;

  @Column("nvarchar", { name: "MODL_LARGE_ICON", nullable: true })
  public modlLargeIcon: string | null;

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

  @OneToMany(() => MenuPasta, (menuPasta) => menuPasta.pstaModl)
  public menuPastas: MenuPasta[];

  @OneToMany(
    () => MenuSistemaModulo,
    (menuSistemaModulo) => menuSistemaModulo.ssmdModl
  )
  public menuSistemaModulos: MenuSistemaModulo[];
}
