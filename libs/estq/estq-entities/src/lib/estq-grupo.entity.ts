import { Column, Entity, Index, OneToMany } from "typeorm";
import { EstqMercadoria } from "./estq-mercadoria";

@Index("PK_ESTQ_GRUPO", ["id"], { unique: true })
@Entity("ESTQ_GRUPO")
export class EstqGrupo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "GRPS_CODIGO", nullable: true, length: 5 })
  public grpsCodigo: string | null;

  @Column("nvarchar", { name: "GRPS_NOME", nullable: true, length: 40 })
  public grpsNome: string | null;

  @Column("nvarchar", { name: "GRPS_DESCRICAO", nullable: true, length: 128 })
  public grpsDescricao: string | null;

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

  @OneToMany(() => EstqMercadoria, (estqMercadoria) => estqMercadoria.mrcdGrps)
  public estqMercadorias: EstqMercadoria[];
}
