import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CoreCorporacao from "./core-corporacao";
import CoreUnidadeEmpresarial from "./core-unidade-empresarial";
import SstmParametroEmpresa from "./sstm-parametro-empresa";

@Index("PK_CORE_EMPRESA", ["id"], { unique: true })
@Entity("CORE_EMPRESA")
export default class CoreEmpresa {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "EMPR_NOME", nullable: true, length: 64 })
  public emprNome?: string | null;

  @Column("nvarchar", { name: "EMPR_SENHA", nullable: true, length: 256 })
  public emprSenha?: string | null;

  @Column("nvarchar", { name: "EMPR_LOGOMARCA", nullable: true })
  public emprLogomarca?: string | null;

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

  @ManyToOne(
    () => CoreCorporacao,
    (coreCorporacao) => coreCorporacao.coreEmpresas
  )
  @JoinColumn([{ name: "EMPR_CPRC_ID", referencedColumnName: "id" }])
  public emprCprc?: CoreCorporacao;

  @OneToMany(
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.unemEmpr
  )
  public coreUnidadeEmpresarials?: CoreUnidadeEmpresarial[];

  @OneToMany(
    () => SstmParametroEmpresa,
    (sstmParametroEmpresa) => sstmParametroEmpresa.premEmpr
  )
  public sstmParametroEmpresas?: SstmParametroEmpresa[];
}
