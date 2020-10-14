import { Column, Entity, Index } from "typeorm";

@Index("PK_MAIL_FTPS", ["id"], { unique: true })
@Entity("MAIL_FTPS")
export class MailFtps {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "FTPS_CODIGO", nullable: true, length: 5 })
  public ftpsCodigo: string | null;

  @Column("nvarchar", { name: "FTPS_NOME", nullable: true, length: 40 })
  public ftpsNome: string | null;

  @Column("nvarchar", { name: "FTPS_HOST", nullable: true, length: 128 })
  public ftpsHost: string | null;

  @Column("int", { name: "FTPS_PORT", nullable: true })
  public ftpsPort: number | null;

  @Column("nvarchar", { name: "FTPS_USERNAME", nullable: true, length: 128 })
  public ftpsUsername: string | null;

  @Column("nvarchar", { name: "FTPS_PASSWORD", nullable: true, length: 128 })
  public ftpsPassword: string | null;

  @Column("bit", { name: "FTPS_PASSIVEMODE", nullable: true })
  public ftpsPassivemode: boolean | null;

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
}
