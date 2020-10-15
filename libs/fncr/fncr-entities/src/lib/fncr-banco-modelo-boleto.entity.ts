import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { FncrBanco } from "./fncr-banco";

@Index("PK_FNCR_BANCO_MODELO_BOLETO", ["id"], { unique: true })
@Entity("FNCR_BANCO_MODELO_BOLETO")
export class FncrBancoModeloBoleto {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("text", { name: "BCMB_MODELO_DEFAULT", nullable: true })
  public bcmbModeloDefault: string | null;

  @Column("text", { name: "BCMB_MODELO_USADO", nullable: true })
  public bcmbModeloUsado: string | null;

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

  @ManyToOne(() => FncrBanco, (fncrBanco) => fncrBanco.fncrBancoModeloBoletos)
  @JoinColumn([{ name: "BCMB_BANC_ID", referencedColumnName: "id" }])
  public bcmbBanc: FncrBanco;
}
