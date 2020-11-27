import { Column, Entity, Index, OneToMany } from "typeorm";
import EstqCapaMovimento from "./estq-capa-movimento";
import FncrTitulo from "./fncr-titulo";
import FsclDocumento from "./fscl-documento";
import VeteOrdemDeServico from "./vete-ordem-de-servico";

@Index("PK_FNCR_FORMA_VENCIMENTO", ["id"], { unique: true })
@Entity("FNCR_FORMA_VENCIMENTO")
export default class FncrFormaVencimento {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "FRVN_TIPO", nullable: true, length: 10 })
  public frvnTipo?: string | null;

  @Column("nvarchar", { name: "FRVN_CODIGO", nullable: true, length: 5 })
  public frvnCodigo?: string | null;

  @Column("nvarchar", { name: "FRVN_NOME", nullable: true, length: 64 })
  public frvnNome?: string | null;

  @Column("bit", { name: "FRVN_DIA_FIXO", nullable: true })
  public frvnDiaFixo?: boolean | null;

  @Column("bit", { name: "FRVN_ENTRADA", nullable: true })
  public frvnEntrada?: boolean | null;

  @Column("bit", { name: "FRVN_COBRA_JUROS", nullable: true })
  public frvnCobraJuros?: boolean | null;

  @Column("int", { name: "FRVN_PARCELAS", nullable: true })
  public frvnParcelas?: number | null;

  @Column("int", { name: "FRVN_DIA_VENCIMENTO", nullable: true })
  public frvnDiaVencimento?: number | null;

  @Column("int", { name: "FRVN_INTERVALO", nullable: true })
  public frvnIntervalo?: number | null;

  @Column("numeric", {
    name: "FRVN_TAXA_JUROS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public frvnTaxaJuros?: number | null;

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

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvFrvn
  )
  public estqCapaMovimentos?: EstqCapaMovimento[];

  @OneToMany(() => FncrTitulo, (fncrTitulo) => fncrTitulo.ttlsFrvn)
  public fncrTitulos?: FncrTitulo[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtFrvn)
  public fsclDocumentos?: FsclDocumento[];

  @OneToMany(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.osvtFrvn
  )
  public veteOrdemDeServicos?: VeteOrdemDeServico[];
}
