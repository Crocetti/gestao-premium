import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("PK_PECF_CONFIGURACAO", ["cfgrId"], { unique: true })
@Entity("PECF_CONFIGURACAO")
export class PecfConfiguracao extends BaseEntity {
  @Column("varchar", { primary: true, name: "CFGR_ID", length: 27 })
  public cfgrId: string;

  @Column("datetime", { name: "CFGR_LASTUPDATE", nullable: true })
  public cfgrLastupdate: LocalDateTime | null;

  public constructor(init?: Partial<PecfConfiguracao>) {
    super();
    Object.assign(this, init);
  }
}
