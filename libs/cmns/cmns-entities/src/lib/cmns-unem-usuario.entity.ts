import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsUsuario } from "./cmns-usuario";
import { CmnsGrupoUsuario } from "./cmns-grupo-usuario";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";

@Index("PK_CMNS_UNEM_USUARIO", ["id"], { unique: true })
@Entity("CMNS_UNEM_USUARIO")
export class CmnsUnemUsuario {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

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

  @ManyToOne(() => CmnsUsuario, (cmnsUsuario) => cmnsUsuario.cmnsUnemUsuarios)
  @JoinColumn([{ name: "UEUS_USRS_ID", referencedColumnName: "id" }])
  public ueusUsrs: CmnsUsuario;

  @ManyToOne(
    () => CmnsGrupoUsuario,
    (cmnsGrupoUsuario) => cmnsGrupoUsuario.cmnsUnemUsuarios
  )
  @JoinColumn([{ name: "UEUS_GRUS_ID", referencedColumnName: "id" }])
  public ueusGrus: CmnsGrupoUsuario;

  @ManyToOne(
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.cmnsUnemUsuarios
  )
  @JoinColumn([{ name: "UEUS_UNEM_ID", referencedColumnName: "id" }])
  public ueusUnem: CoreUnidadeEmpresarial;
}
