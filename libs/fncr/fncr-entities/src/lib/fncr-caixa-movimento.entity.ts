import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { FncrCaixaItem } from "./fncr-caixa-item";
import { FncrCaixa } from "./fncr-caixa";

@Index("PK_FNCR_CAIXA_MOVIMENTO", ["id"], { unique: true })
@Entity("FNCR_CAIXA_MOVIMENTO")
export class FncrCaixaMovimento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CXMV_NUMERO", nullable: true, length: 20 })
  public cxmvNumero: string | null;

  @Column("datetime2", { name: "CXMV_DT_ABERTURA", nullable: true })
  public cxmvDtAbertura: Date | null;

  @Column("datetime2", { name: "CXMV_DT_FECHAMENTO", nullable: true })
  public cxmvDtFechamento: Date | null;

  @Column("money", { name: "CXMV_VLR_CREDITOS", nullable: true })
  public cxmvVlrCreditos: number | null;

  @Column("money", { name: "CXMV_VLR_DEBITOS", nullable: true })
  public cxmvVlrDebitos: number | null;

  @Column("money", { name: "CXMV_SALDO_ABERTURA", nullable: true })
  public cxmvSaldoAbertura: number | null;

  @Column("money", { name: "CXMV_SALDO_FECHAMENTO", nullable: true })
  public cxmvSaldoFechamento: number | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate: string | null;

  @Column("smallint", { name: "AUDT_ACTIVE" })
  public audtActive: number;

  @OneToMany(() => FncrCaixaItem, (fncrCaixaItem) => fncrCaixaItem.cxitCxmv)
  public fncrCaixaItems: FncrCaixaItem[];

  @ManyToOne(() => FncrCaixa, (fncrCaixa) => fncrCaixa.fncrCaixaMovimentos)
  @JoinColumn([{ name: "CXMV_CAIX_ID", referencedColumnName: "id" }])
  public cxmvCaix: FncrCaixa;
}
