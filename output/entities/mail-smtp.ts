import { Column, Entity, Index } from "typeorm";

@Index("PK_MAIL_SMTP", ["id"], { unique: true })
@Entity("MAIL_SMTP")
export default class MailSmtp {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "SMTP_CODIGO", nullable: true, length: 5 })
  public smtpCodigo?: string | null;

  @Column("nvarchar", { name: "SMTP_NOME", nullable: true, length: 128 })
  public smtpNome?: string | null;

  @Column("nvarchar", { name: "SMTP_HOST", nullable: true, length: 128 })
  public smtpHost?: string | null;

  @Column("int", { name: "SMTP_PORT", nullable: true })
  public smtpPort?: number | null;

  @Column("nvarchar", { name: "SMTP_USER", nullable: true, length: 128 })
  public smtpUser?: string | null;

  @Column("nvarchar", { name: "SMTP_PASSWORD", nullable: true, length: 128 })
  public smtpPassword?: string | null;

  @Column("nvarchar", { name: "SMTP_AUTHTYPE", nullable: true, length: 10 })
  public smtpAuthtype?: string | null;

  @Column("nvarchar", { name: "SMTP_USETLS", nullable: true, length: 20 })
  public smtpUsetls?: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;
}
