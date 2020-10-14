import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrBancoConta } from "./fncr-banco-conta";
import { FncrHistoricoPadrao } from "./fncr-historico-padrao";

@Index("PK_FNCR_BANCO_MOVIMENTO", ["id"], { unique: true })
@Entity("FNCR_BANCO_MOVIMENTO")
export class FncrBancoMovimento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "BCMV_NUMERO_DOCUMENTO",
    nullable: true,
    length: 20,
  })
  public bcmvNumeroDocumento: string | null;

  @Column("datetime2", { name: "BCMV_DT_LANCAMENTO", nullable: true })
  public bcmvDtLancamento: Date | null;

  @Column("datetime2", { name: "BCMV_DT_MOVIMENTO", nullable: true })
  public bcmvDtMovimento: Date | null;

  @Column("money", { name: "BCMV_VALOR", nullable: true })
  public bcmvValor: number | null;

  @Column("nvarchar", { name: "BCMV_COMPLEMENTO", nullable: true, length: 128 })
  public bcmvComplemento: string | null;

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

  @ManyToOne(
    () => FncrBancoConta,
    (fncrBancoConta) => fncrBancoConta.fncrBancoMovimentos
  )
  @JoinColumn([{ name: "BCMV_BCCT_ID", referencedColumnName: "id" }])
  public bcmvBcct: FncrBancoConta;

  @ManyToOne(
    () => FncrHistoricoPadrao,
    (fncrHistoricoPadrao) => fncrHistoricoPadrao.fncrBancoMovimentos
  )
  @JoinColumn([{ name: "BCMV_HSPD_ID", referencedColumnName: "id" }])
  public bcmvHspd: FncrHistoricoPadrao;
}
