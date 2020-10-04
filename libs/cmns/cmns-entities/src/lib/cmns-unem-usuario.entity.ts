import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsGrupoUsuario } from "./cmns-grupo-usuario";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";
import { CmnsUsuario } from "./cmns-usuario";

@Index("FK_GRUS_RS_UEUS", ["ueusGrusId"], {})
@Index("FK_UNEM_RS_UEUS", ["ueusUnemId"], {})
@Index("FK_USRS_RS_UEUS", ["ueusUsrsId"], {})
@Index("PK_CMNS_UNEM_USUARIO", ["ueusId"], { unique: true })
@Entity("CMNS_UNEM_USUARIO")
export class CmnsUnemUsuario extends BaseEntity {
  @Column("varchar", { primary: true, name: "UEUS_ID", length: 27 })
  public ueusId: string;

  @Column("varchar", { name: "UEUS_USRS_ID", nullable: true, length: 27 })
  public ueusUsrsId: string | null;

  @Column("varchar", { name: "UEUS_GRUS_ID", nullable: true, length: 27 })
  public ueusGrusId: string | null;

  @Column("varchar", { name: "UEUS_UNEM_ID", nullable: true, length: 27 })
  public ueusUnemId: string | null;

  @Column("datetime", { name: "UEUS_LASTUPDATE", nullable: true })
  public ueusLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CmnsGrupoUsuario,
    (cmnsGrupoUsuario) => cmnsGrupoUsuario.cmnsUnemUsuarios
  )
  @JoinColumn([{ name: "UEUS_GRUS_ID", referencedColumnName: "grusId" }])
  public ueusGrus: CmnsGrupoUsuario;

  @ManyToOne(
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.cmnsUnemUsuarios
  )
  @JoinColumn([{ name: "UEUS_UNEM_ID", referencedColumnName: "unemId" }])
  public ueusUnem: CoreUnidadeEmpresarial;

  @ManyToOne(() => CmnsUsuario, (cmnsUsuario) => cmnsUsuario.cmnsUnemUsuarios)
  @JoinColumn([{ name: "UEUS_USRS_ID", referencedColumnName: "usrsId" }])
  public ueusUsrs: CmnsUsuario;

  @RelationId((cmnsUnemUsuario: CmnsUnemUsuario) => cmnsUnemUsuario.ueusGrus)
  public ueusGrusId2: string | null;

  @RelationId((cmnsUnemUsuario: CmnsUnemUsuario) => cmnsUnemUsuario.ueusUnem)
  public ueusUnemId2: string | null;

  @RelationId((cmnsUnemUsuario: CmnsUnemUsuario) => cmnsUnemUsuario.ueusUsrs)
  public ueusUsrsId2: string | null;

  public constructor(init?: Partial<CmnsUnemUsuario>) {
    super();
    Object.assign(this, init);
  }
}
