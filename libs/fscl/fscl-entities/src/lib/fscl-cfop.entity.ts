import { Column, Entity, Index, OneToMany } from "typeorm";
import { FsclDocumentoItem } from "./fscl-documento-item";

@Index("PK_FSCL_CFOP", ["id"], { unique: true })
@Entity("FSCL_CFOP")
export class FsclCfop {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CFOP_CODIGO", nullable: true, length: 10 })
  public cfopCodigo: string | null;

  @Column("nvarchar", { name: "CFOP_DESCRICAO", nullable: true, length: 500 })
  public cfopDescricao: string | null;

  @Column("nvarchar", { name: "CFOP_CLASSIFICACAO", nullable: true })
  public cfopClassificacao: string | null;

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

  @OneToMany(
    () => FsclDocumentoItem,
    (fsclDocumentoItem) => fsclDocumentoItem.dcitCfop
  )
  public fsclDocumentoItems: FsclDocumentoItem[];
}
