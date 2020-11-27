import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CmnsPessoa from "./cmns-pessoa";
import EstqCapaMovimento from "./estq-capa-movimento";
import FncrTitulo from "./fncr-titulo";
import FsclDocumento from "./fscl-documento";

@Index("PK_CDST_CLIENTE", ["id"], { unique: true })
@Entity("CDST_CLIENTE")
export default class CdstCliente {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "CLNT_POTENCIAL", nullable: true, length: 15 })
  public clntPotencial?: string | null;

  @Column("money", { name: "CLNT_CAPITAL_SOCIAL", nullable: true })
  public clntCapitalSocial?: number | null;

  @Column("money", { name: "CLNT_LIMITE_CREDITO", nullable: true })
  public clntLimiteCredito?: number | null;

  @Column("nvarchar", { name: "CLNT_STATUS", length: 15 })
  public clntStatus?: string;

  @Column("nvarchar", { name: "CLNT_OBS", nullable: true })
  public clntObs?: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cdstClientes)
  @JoinColumn([{ name: "CLNT_PESS_ID", referencedColumnName: "id" }])
  public clntPess?: CmnsPessoa;

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvClnt
  )
  public estqCapaMovimentos?: EstqCapaMovimento[];

  @OneToMany(() => FncrTitulo, (fncrTitulo) => fncrTitulo.ttlsClnt)
  public fncrTitulos?: FncrTitulo[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtClnt)
  public fsclDocumentos?: FsclDocumento[];
}
