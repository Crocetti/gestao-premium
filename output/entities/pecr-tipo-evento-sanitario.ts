import { Column, Entity, Index, OneToMany } from "typeorm";
import PecrEventoSanitario from "./pecr-evento-sanitario";

@Index("PK_PECR_TIPO_EVENTO_SANITARIO", ["id"], { unique: true })
@Entity("PECR_TIPO_EVENTO_SANITARIO")
export default class PecrTipoEventoSanitario {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "TPES_CODIGO", nullable: true, length: 3 })
  public tpesCodigo?: string | null;

  @Column("nvarchar", { name: "TPES_TIPO", nullable: true, length: 20 })
  public tpesTipo?: string | null;

  @Column("nvarchar", { name: "TPES_NOME", nullable: true, length: 40 })
  public tpesNome?: string | null;

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

  @OneToMany(
    () => PecrEventoSanitario,
    (pecrEventoSanitario) => pecrEventoSanitario.evsnTpes
  )
  public pecrEventoSanitarios?: PecrEventoSanitario[];
}
