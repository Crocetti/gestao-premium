import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CoreEmpresa } from "./core-empresa";
import { SstmParametroCorporacao } from "./sstm-parametro-corporacao";
import { SstmSistemaCorporacao } from "./sstm-sistema-corporacao";

@Index("PK_CORE_CORPORACAO", ["cprcId"], { unique: true })
@Entity("CORE_CORPORACAO")
export class CoreCorporacao extends BaseEntity {
  @Column("varchar", { primary: true, name: "CPRC_ID", length: 27 })
  public cprcId: string;

  @Column("varchar", { name: "CPRC_NOME", nullable: true, length: 64 })
  public cprcNome: string | null;

  @Column("varchar", { name: "CPRC_SENHA", nullable: true, length: 256 })
  public cprcSenha: string | null;

  @Column("image", { name: "CPRC_LOGOMARCA", nullable: true })
  public cprcLogomarca: Buffer | null;

  @Column("datetime", { name: "CPRC_LASTUPDATE", nullable: true })
  public cprcLastupdate: LocalDateTime | null;

  @OneToMany(() => CoreEmpresa, (coreEmpresa) => coreEmpresa.emprCprc)
  public coreEmpresas: CoreEmpresa[];

  @OneToMany(
    () => SstmParametroCorporacao,
    (sstmParametroCorporacao) => sstmParametroCorporacao.prcpCprc
  )
  public sstmParametroCorporacaos: SstmParametroCorporacao[];

  @OneToMany(
    () => SstmSistemaCorporacao,
    (sstmSistemaCorporacao) => sstmSistemaCorporacao.sscpCprc
  )
  public sstmSistemaCorporacaos: SstmSistemaCorporacao[];

  public constructor(init?: Partial<CoreCorporacao>) {
    super();
    Object.assign(this, init);
  }
}
