import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { FncrBanco } from "./fncr-banco";

@Index("FK_BANC_RS_BCMB", ["bcmbBancId"], {})
@Index("PK_FNCR_BANCO_MODELO_BOLETO", ["bcmbId"], { unique: true })
@Entity("FNCR_BANCO_MODELO_BOLETO")
export class FncrBancoModeloBoleto extends BaseEntity {
  @Column("varchar", { primary: true, name: "BCMB_ID", length: 27 })
  public bcmbId: string;

  @Column("varchar", { name: "BCMB_BANC_ID", nullable: true, length: 27 })
  public bcmbBancId: string | null;

  @Column("text", { name: "BCMB_MODELO_DEFAULT", nullable: true })
  public bcmbModeloDefault: string | null;

  @Column("text", { name: "BCMB_MODELO_USADO", nullable: true })
  public bcmbModeloUsado: string | null;

  @Column("datetime", { name: "BCMB_LASTUPDATE", nullable: true })
  public bcmbLastupdate: LocalDateTime | null;

  @ManyToOne(() => FncrBanco, (fncrBanco) => fncrBanco.fncrBancoModeloBoletos)
  @JoinColumn([{ name: "BCMB_BANC_ID", referencedColumnName: "bancId" }])
  public bcmbBanc: FncrBanco;

  @RelationId(
    (fncrBancoModeloBoleto: FncrBancoModeloBoleto) =>
      fncrBancoModeloBoleto.bcmbBanc
  )
  public bcmbBancId2: string | null;

  public constructor(init?: Partial<FncrBancoModeloBoleto>) {
    super();
    Object.assign(this, init);
  }
}
