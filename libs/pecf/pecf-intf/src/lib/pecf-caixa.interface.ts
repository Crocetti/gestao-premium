import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("FK_PESS_RS_PECX", ["pecxPessId"], {})
@Index("PK_PECF_CAIXA", ["pecxId"], { unique: true })
@Entity("PECF_CAIXA")
export class PecfCaixa extends BaseEntity {
  @Column("varchar", { primary: true, name: "PECX_ID", length: 27 })
  public pecxId: string;

  @Column("varchar", { name: "PECX_PESS_ID", nullable: true, length: 27 })
  public pecxPessId: string | null;

  @Column("varchar", { name: "PECX_CODIGO", nullable: true, length: 3 })
  public pecxCodigo: string | null;

  @Column("datetime", { name: "PECX_LASTUPDATE", nullable: true })
  public pecxLastupdate: LocalDateTime | null;

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.pecfCaixas)
  @JoinColumn([{ name: "PECX_PESS_ID", referencedColumnName: "pessId" }])
  public pecxPess: CmnsPessoa;

  @RelationId((pecfCaixa: PecfCaixa) => pecfCaixa.pecxPess)
  public pecxPessId2: string | null;

  public constructor(init?: Partial<PecfCaixa>) {
    super();
    Object.assign(this, init);
  }
}
