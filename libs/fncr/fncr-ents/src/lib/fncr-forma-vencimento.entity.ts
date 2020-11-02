import { Column, Entity, Index, OneToMany } from "typeorm";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { FncrTitulo } from "./fncr-titulo";
import { FsclDocumento } from "./fscl-documento";
import { VeteOrdemDeServico } from "./vete-ordem-de-servico";

@Index("PK_FNCR_FORMA_VENCIMENTO", ["id"], { unique: true })
@Entity("FNCR_FORMA_VENCIMENTO")
export class FncrFormaVencimento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "FRVN_TIPO", nullable: true, length: 10 })
  public frvnTipo: string | null;

  @Column("nvarchar", { name: "FRVN_CODIGO", nullable: true, length: 5 })
  public frvnCodigo: string | null;

  @Column("nvarchar", { name: "FRVN_NOME", nullable: true, length: 64 })
  public frvnNome: string | null;

  @Column("smallint", { name: "FRVN_DIA_FIXO", nullable: true })
  public frvnDiaFixo: number | null;

  @Column("smallint", { name: "FRVN_ENTRADA", nullable: true })
  public frvnEntrada: number | null;

  @Column("smallint", { name: "FRVN_COBRA_JUROS", nullable: true })
  public frvnCobraJuros: number | null;

  @Column("int", { name: "FRVN_PARCELAS", nullable: true })
  public frvnParcelas: number | null;

  @Column("int", { name: "FRVN_DIA_VENCIMENTO", nullable: true })
  public frvnDiaVencimento: number | null;

  @Column("int", { name: "FRVN_INTERVALO", nullable: true })
  public frvnIntervalo: number | null;

  @Column("numeric", {
    name: "FRVN_TAXA_JUROS",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  public frvnTaxaJuros: number | null;

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
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvFrvn
  )
  public estqCapaMovimentos: EstqCapaMovimento[];

  @OneToMany(() => FncrTitulo, (fncrTitulo) => fncrTitulo.ttlsFrvn)
  public fncrTitulos: FncrTitulo[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtFrvn)
  public fsclDocumentos: FsclDocumento[];

  @OneToMany(
    () => VeteOrdemDeServico,
    (veteOrdemDeServico) => veteOrdemDeServico.osvtFrvn
  )
  public veteOrdemDeServicos: VeteOrdemDeServico[];
}
