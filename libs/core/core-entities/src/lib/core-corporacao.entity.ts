import { Column, Entity, Index, OneToMany } from "typeorm";
import { CoreEmpresa } from "./core-empresa";
import { SstmParametroCorporacao } from "./sstm-parametro-corporacao";
import { SstmSistemaCorporacao } from "./sstm-sistema-corporacao";

@Index("PK_CORE_CORPORACAO", ["id"], { unique: true })
@Entity("CORE_CORPORACAO")
export class CoreCorporacao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CPRC_NOME", nullable: true, length: 64 })
  public cprcNome: string | null;

  @Column("nvarchar", { name: "CPRC_SENHA", nullable: true, length: 256 })
  public cprcSenha: string | null;

  @Column("nvarchar", { name: "CPRC_LOGOMARCA", nullable: true })
  public cprcLogomarca: string | null;

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
}
