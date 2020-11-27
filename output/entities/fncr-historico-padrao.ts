import { Column, Entity, Index, OneToMany } from "typeorm";
import EstqCapaMovimento from "./estq-capa-movimento";
import FncrBancoMovimento from "./fncr-banco-movimento";
import FncrCaixaItem from "./fncr-caixa-item";
import FncrParcelaBaixa from "./fncr-parcela-baixa";
import FsclDocumento from "./fscl-documento";

@Index("PK_FNCR_HISTORICO_PADRAO", ["id"], { unique: true })
@Entity("FNCR_HISTORICO_PADRAO")
export default class FncrHistoricoPadrao {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "HSPD_CODIGO", nullable: true, length: 3 })
  public hspdCodigo?: string | null;

  @Column("nvarchar", { name: "HSPD_NOME", nullable: true, length: 64 })
  public hspdNome?: string | null;

  @Column("nvarchar", { name: "HSPD_TP_HISTORICO", nullable: true, length: 15 })
  public hspdTpHistorico?: string | null;

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
    (estqCapaMovimento) => estqCapaMovimento.cpmvHspd
  )
  public estqCapaMovimentos?: EstqCapaMovimento[];

  @OneToMany(
    () => FncrBancoMovimento,
    (fncrBancoMovimento) => fncrBancoMovimento.bcmvHspd
  )
  public fncrBancoMovimentos?: FncrBancoMovimento[];

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitHspd)
  public fncrCaixaItems?: FncrCaixaItem[];

  @OneToMany(
    () => FncrParcelaBaixa,
    (fncrParcelaBaixa) => fncrParcelaBaixa.prbxHspd
  )
  public fncrParcelaBaixas?: FncrParcelaBaixa[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtHspd)
  public fsclDocumentos?: FsclDocumento[];
}
