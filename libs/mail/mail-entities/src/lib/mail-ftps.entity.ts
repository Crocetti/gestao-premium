import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("PK_MAIL_FTPS", ["ftpsId"], { unique: true })
@Entity("MAIL_FTPS")
export class MailFtps extends BaseEntity {
  @Column("varchar", { primary: true, name: "FTPS_ID", length: 27 })
  public ftpsId: string;

  @Column("varchar", { name: "FTPS_CODIGO", nullable: true, length: 5 })
  public ftpsCodigo: string | null;

  @Column("varchar", { name: "FTPS_NOME", nullable: true, length: 40 })
  public ftpsNome: string | null;

  @Column("varchar", { name: "FTPS_HOST", nullable: true, length: 128 })
  public ftpsHost: string | null;

  @Column("int", { name: "FTPS_PORT", nullable: true })
  public ftpsPort: number | null;

  @Column("varchar", { name: "FTPS_USERNAME", nullable: true, length: 128 })
  public ftpsUsername: string | null;

  @Column("varchar", { name: "FTPS_PASSWORD", nullable: true, length: 128 })
  public ftpsPassword: string | null;

  @Column("bit", { name: "FTPS_PASSIVEMODE", nullable: true })
  public ftpsPassivemode: boolean | null;

  @Column("datetime", { name: "FTPS_LASTUPDATE", nullable: true })
  public ftpsLastupdate: LocalDateTime | null;

  public constructor(init?: Partial<MailFtps>) {
    super();
    Object.assign(this, init);
  }
}
