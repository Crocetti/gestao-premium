import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { SstmParametro } from "./sstm-parametro";
import { CmnsUsuario } from "./cmns-usuario";

@Index("PK_SSTM_PARAMETRO_USUARIO", ["id"], { unique: true })
@Entity("SSTM_PARAMETRO_USUARIO")
export class SstmParametroUsuario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PRUS_DEFAULT", nullable: true, length: 128 })
  public prusDefault: string | null;

  @Column("nvarchar", { name: "PRUS_VALUE", nullable: true, length: 128 })
  public prusValue: string | null;

  @Column("smallint", { name: "PRUS_HABILITADO", nullable: true })
  public prusHabilitado: number | null;

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

  @ManyToOne(
    () => SstmParametro,
    (sstmParametro) => sstmParametro.sstmParametroUsuarios
  )
  @JoinColumn([{ name: "PRUS_PRMT_ID", referencedColumnName: "id" }])
  public prusPrmt: SstmParametro;

  @ManyToOne(
    () => CmnsUsuario,
    (cmnsUsuario) => cmnsUsuario.sstmParametroUsuarios
  )
  @JoinColumn([{ name: "PRUS_USRS_ID", referencedColumnName: "id" }])
  public prusUsrs: CmnsUsuario;
}
