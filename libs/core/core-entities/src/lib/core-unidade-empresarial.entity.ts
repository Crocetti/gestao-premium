import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsUnemUsuario } from "./cmns-unem-usuario";
import { CoreEmpresa } from "./core-empresa";
import { CmnsPessoa } from "./cmns-pessoa";
import { EstqNumeroDocumento } from "./estq-numero-documento";
import { SstmParametroUnem } from "./sstm-parametro-unem";

@Index("PK_CORE_UNIDADE_EMPRESARIAL", ["id"], { unique: true })
@Entity("CORE_UNIDADE_EMPRESARIAL")
export class CoreUnidadeEmpresarial {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "UNEM_CODIGO", nullable: true, length: 10 })
  public unemCodigo: string | null;

  @Column("nvarchar", { name: "UNEM_SKIN_NAME", nullable: true, length: 40 })
  public unemSkinName: string | null;

  @Column("nvarchar", { name: "UNEM_SENHA", nullable: true, length: 256 })
  public unemSenha: string | null;

  @Column("nvarchar", { name: "UNEM_LOGOMARCA", nullable: true })
  public unemLogomarca: string | null;

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

  @OneToMany(
    () => CmnsUnemUsuario,
    (cmnsUnemUsuario) => cmnsUnemUsuario.ueusUnem
  )
  public cmnsUnemUsuarios: CmnsUnemUsuario[];

  @ManyToOne(
    () => CoreEmpresa,
    (coreEmpresa) => coreEmpresa.coreUnidadeEmpresarials
  )
  @JoinColumn([{ name: "UNEM_EMPR_ID", referencedColumnName: "id" }])
  public unemEmpr: CoreEmpresa;

  @ManyToOne(
    () => CmnsPessoa,
    (cmnsPessoa) => cmnsPessoa.coreUnidadeEmpresarials
  )
  @JoinColumn([{ name: "UNEM_PESS_ID", referencedColumnName: "id" }])
  public unemPess: CmnsPessoa;

  @OneToMany(
    () => EstqNumeroDocumento,
    (estqNumeroDocumento) => estqNumeroDocumento.nrdcUnem
  )
  public estqNumeroDocumentos: EstqNumeroDocumento[];

  @OneToMany(
    () => SstmParametroUnem,
    (sstmParametroUnem) => sstmParametroUnem.prueUnem
  )
  public sstmParametroUnems: SstmParametroUnem[];
}
