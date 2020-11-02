import { BaseEntity, Column, Entity, Index } from "typeorm";

@Index("PK_MAIL_SMTP", ["smtpId"], { unique: true })
@Entity("MAIL_SMTP")
export class MailSmtp extends BaseEntity {
  @Column("varchar", { primary: true, name: "SMTP_ID", length: 27 })
  public smtpId: string;

  @Column("varchar", { name: "SMTP_CODIGO", nullable: true, length: 5 })
  public smtpCodigo: string | null;

  @Column("varchar", { name: "SMTP_NOME", nullable: true, length: 128 })
  public smtpNome: string | null;

  @Column("varchar", { name: "SMTP_HOST", nullable: true, length: 128 })
  public smtpHost: string | null;

  @Column("int", { name: "SMTP_PORT", nullable: true })
  public smtpPort: number | null;

  @Column("varchar", { name: "SMTP_USER", nullable: true, length: 128 })
  public smtpUser: string | null;

  @Column("varchar", { name: "SMTP_PASSWORD", nullable: true, length: 128 })
  public smtpPassword: string | null;

  @Column("varchar", { name: "SMTP_AUTHTYPE", nullable: true, length: 10 })
  public smtpAuthtype: string | null;

  @Column("varchar", { name: "SMTP_USETLS", nullable: true, length: 20 })
  public smtpUsetls: string | null;

  @Column("datetime", { name: "SMTP_LASTUPDATE", nullable: true })
  public smtpLastupdate: LocalDateTime | null;

  public constructor(init?: Partial<MailSmtp>) {
    super();
    Object.assign(this, init);
  }
}
