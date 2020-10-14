import { Column, Entity, Index, OneToMany } from "typeorm";
import { EstqMercadoria } from "./estq-mercadoria";

@Index("PK_ESTQ_SUBGRUPO", ["id"], { unique: true })
@Entity("ESTQ_SUBGRUPO")
export class EstqSubgrupo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "SBGP_CODIGO", nullable: true, length: 5 })
  public sbgpCodigo: string | null;

  @Column("nvarchar", { name: "SBGP_NOME", nullable: true, length: 40 })
  public sbgpNome: string | null;

  @Column("nvarchar", { name: "SBGP_DESCRICAO", nullable: true, length: 128 })
  public sbgpDescricao: string | null;

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

  @OneToMany(() => EstqMercadoria, (estqMercadoria) => estqMercadoria.mrcdSbgp)
  public estqMercadorias: EstqMercadoria[];
}
