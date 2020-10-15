import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CmnsPessoa } from "./cmns-pessoa";

@Index("PK_CMNS_PESSOA_IMAGEM", ["id"], { unique: true })
@Entity("CMNS_PESSOA_IMAGEM")
export class CmnsPessoaImagem {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "PSIM_TIPO", nullable: true, length: 12 })
  public psimTipo: string | null;

  @Column("nvarchar", { name: "PSIM_IMAGEM", nullable: true })
  public psimImagem: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cmnsPessoaImagems)
  @JoinColumn([{ name: "PSIM_PESS_ID", referencedColumnName: "id" }])
  public psimPess: CmnsPessoa;
}
