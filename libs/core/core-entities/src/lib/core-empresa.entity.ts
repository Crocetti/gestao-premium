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
import { CoreCorporacao } from "./core-corporacao";
import { CoreUnidadeEmpresarial } from "./core-unidade-empresarial";
import { SstmParametroEmpresa } from "./sstm-parametro-empresa";

@Index("FK_CPRC_RS_EMPR", ["emprCprcId"], {})
@Index("PK_CORE_EMPRESA", ["emprId"], { unique: true })
@Entity("CORE_EMPRESA")
export class CoreEmpresa extends BaseEntity {
  @Column("varchar", { primary: true, name: "EMPR_ID", length: 27 })
  public emprId: string;

  @Column("varchar", { name: "EMPR_CPRC_ID", nullable: true, length: 27 })
  public emprCprcId: string | null;

  @Column("varchar", { name: "EMPR_NOME", nullable: true, length: 64 })
  public emprNome: string | null;

  @Column("varchar", { name: "EMPR_SENHA", nullable: true, length: 256 })
  public emprSenha: string | null;

  @Column("image", { name: "EMPR_LOGOMARCA", nullable: true })
  public emprLogomarca: Buffer | null;

  @Column("datetime", { name: "EMPR_LASTUPDATE", nullable: true })
  public emprLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CoreCorporacao,
    (coreCorporacao) => coreCorporacao.coreEmpresas
  )
  @JoinColumn([{ name: "EMPR_CPRC_ID", referencedColumnName: "cprcId" }])
  public emprCprc: CoreCorporacao;

  @OneToMany(
    () => CoreUnidadeEmpresarial,
    (coreUnidadeEmpresarial) => coreUnidadeEmpresarial.unemEmpr
  )
  public coreUnidadeEmpresarials: CoreUnidadeEmpresarial[];

  @OneToMany(
    () => SstmParametroEmpresa,
    (sstmParametroEmpresa) => sstmParametroEmpresa.premEmpr
  )
  public sstmParametroEmpresas: SstmParametroEmpresa[];

  @RelationId((coreEmpresa: CoreEmpresa) => coreEmpresa.emprCprc)
  public emprCprcId2: string | null;

  public constructor(init?: Partial<CoreEmpresa>) {
    super();
    Object.assign(this, init);
  }
}
