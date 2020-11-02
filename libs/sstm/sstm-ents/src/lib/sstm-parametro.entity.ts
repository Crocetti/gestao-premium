import { Column, Entity, Index, OneToMany } from "typeorm";
import { SstmParametroCorporacao } from "./sstm-parametro-corporacao";
import { SstmParametroEmpresa } from "./sstm-parametro-empresa";
import { SstmParametroSistema } from "./sstm-parametro-sistema";
import { SstmParametroUnem } from "./sstm-parametro-unem";
import { SstmParametroUsuario } from "./sstm-parametro-usuario";

@Index("PK_SSTM_PARAMETRO", ["id"], { unique: true })
@Entity("SSTM_PARAMETRO")
export class SstmParametro {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PRMT_NOME", nullable: true, length: 64 })
  public prmtNome: string | null;

  @Column("nvarchar", { name: "PRMT_LABEL", nullable: true, length: 40 })
  public prmtLabel: string | null;

  @Column("smallint", { name: "PRMT_VISIVEL", nullable: true })
  public prmtVisivel: number | null;

  @Column("nvarchar", { name: "PRMT_ORDENACAO", nullable: true, length: 10 })
  public prmtOrdenacao: string | null;

  @Column("nvarchar", { name: "PRMT_TP_DADO", nullable: true, length: 10 })
  public prmtTpDado: string | null;

  @Column("nvarchar", { name: "PRMT_FORMAT", nullable: true, length: 25 })
  public prmtFormat: string | null;

  @Column("nvarchar", { name: "PRMT_VLR_DEFAULT", nullable: true, length: 128 })
  public prmtVlrDefault: string | null;

  @Column("nvarchar", { name: "PRMT_TP_PARAMETRO", nullable: true, length: 5 })
  public prmtTpParametro: string | null;

  @Column("smallint", { name: "PRMT_HABILITADO", nullable: true })
  public prmtHabilitado: number | null;

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
    () => SstmParametroCorporacao,
    (sstmParametroCorporacao) => sstmParametroCorporacao.prcpPrmt
  )
  public sstmParametroCorporacaos: SstmParametroCorporacao[];

  @OneToMany(
    () => SstmParametroEmpresa,
    (sstmParametroEmpresa) => sstmParametroEmpresa.premPrmt
  )
  public sstmParametroEmpresas: SstmParametroEmpresa[];

  @OneToMany(
    () => SstmParametroSistema,
    (sstmParametroSistema) => sstmParametroSistema.prssPrmt
  )
  public sstmParametroSistemas: SstmParametroSistema[];

  @OneToMany(
    () => SstmParametroUnem,
    (sstmParametroUnem) => sstmParametroUnem.pruePrmt
  )
  public sstmParametroUnems: SstmParametroUnem[];

  @OneToMany(
    () => SstmParametroUsuario,
    (sstmParametroUsuario) => sstmParametroUsuario.prusPrmt
  )
  public sstmParametroUsuarios: SstmParametroUsuario[];
}
