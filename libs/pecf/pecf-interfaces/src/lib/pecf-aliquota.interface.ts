import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("PK_PECF_ALIQUOTA", ["alqtId"], { unique: true })
@Entity("PECF_ALIQUOTA")
export class PecfAliquota extends BaseEntity {
  @Column("varchar", { primary: true, name: "ALQT_ID", length: 27 })
  public alqtId: string;

  @Column("datetime", { name: "ALQT_LASTUPDATE", nullable: true })
  public alqtLastupdate: LocalDateTime | null;

  public constructor(init?: Partial<PecfAliquota>) {
    super();
    Object.assign(this, init);
  }
}
