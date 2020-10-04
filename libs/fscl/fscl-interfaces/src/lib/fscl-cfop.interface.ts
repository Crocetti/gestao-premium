import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { FsclDocumentoItem } from "./fscl-documento-item";

@Index("PK_FSCL_CFOP", ["cfopId"], { unique: true })
@Entity("FSCL_CFOP")
export class FsclCfop extends BaseEntity {
  @Column("varchar", { primary: true, name: "CFOP_ID", length: 27 })
  public cfopId: string;

  @Column("varchar", { name: "CFOP_CODIGO", nullable: true, length: 10 })
  public cfopCodigo: string | null;

  @Column("varchar", { name: "CFOP_DESCRICAO", nullable: true, length: 500 })
  public cfopDescricao: string | null;

  @Column("varchar", {
    name: "CFOP_CLASSIFICACAO",
    nullable: true,
    length: 5000,
  })
  public cfopClassificacao: string | null;

  @Column("datetime", { name: "CFOP_LASTUPDATE", nullable: true })
  public cfopLastupdate: LocalDateTime | null;

  @OneToMany(
    () => FsclDocumentoItem,
    (fsclDocumentoItem) => fsclDocumentoItem.dcitCfop
  )
  public fsclDocumentoItems: FsclDocumentoItem[];

  public constructor(init?: Partial<FsclCfop>) {
    super();
    Object.assign(this, init);
  }
}
