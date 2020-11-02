import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { EstqCapaMovimento } from "./estq-capa-movimento";
import { FncrBancoMovimento } from "./fncr-banco-movimento";
import { FncrCaixaItem } from "./fncr-caixa-item";
import { FncrParcelaBaixa } from "./fncr-parcela-baixa";
import { FsclDocumento } from "./fscl-documento";

@Index("PK_FNCR_HISTORICO_PADRAO", ["hspdId"], { unique: true })
@Entity("FNCR_HISTORICO_PADRAO")
export class FncrHistoricoPadrao extends BaseEntity {
  @Column("varchar", { primary: true, name: "HSPD_ID", length: 27 })
  public hspdId: string;

  @Column("varchar", { name: "HSPD_CODIGO", nullable: true, length: 3 })
  public hspdCodigo: string | null;

  @Column("varchar", { name: "HSPD_NOME", nullable: true, length: 64 })
  public hspdNome: string | null;

  @Column("varchar", { name: "HSPD_TP_HISTORICO", nullable: true, length: 15 })
  public hspdTpHistorico: string | null;

  @Column("datetime", { name: "HSPD_LASTUPDATE", nullable: true })
  public hspdLastupdate: LocalDateTime | null;

  @OneToMany(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.cpmvHspd
  )
  public estqCapaMovimentos: EstqCapaMovimento[];

  @OneToMany(
    () => FncrBancoMovimento,
    (fncrBancoMovimento) => fncrBancoMovimento.bcmvHspd
  )
  public fncrBancoMovimentos: FncrBancoMovimento[];

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitHspd)
  public fncrCaixaItems: FncrCaixaItem[];

  @OneToMany(
    () => FncrParcelaBaixa,
    (fncrParcelaBaixa) => fncrParcelaBaixa.prbxHspd
  )
  public fncrParcelaBaixas: FncrParcelaBaixa[];

  @OneToMany(() => FsclDocumento, (fsclDocumento) => fsclDocumento.dcmtHspd)
  public fsclDocumentos: FsclDocumento[];

  public constructor(init?: Partial<FncrHistoricoPadrao>) {
    super();
    Object.assign(this, init);
  }
}
