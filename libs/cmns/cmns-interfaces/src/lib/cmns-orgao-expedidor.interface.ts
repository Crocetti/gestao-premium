import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaDocumento } from "./cmns-pessoa-documento";

@Index("PK_CMNS_ORGAO_EXPEDIDOR", ["orexId"], { unique: true })
@Entity("CMNS_ORGAO_EXPEDIDOR")
export class CmnsOrgaoExpedidor extends BaseEntity {
  @Column("varchar", { primary: true, name: "OREX_ID", length: 27 })
  public orexId: string;

  @Column("varchar", { name: "OREX_CODIGO", nullable: true, length: 3 })
  public orexCodigo: string | null;

  @Column("varchar", { name: "OREX_SIGLA", nullable: true, length: 10 })
  public orexSigla: string | null;

  @Column("varchar", { name: "OREX_NOME", nullable: true, length: 64 })
  public orexNome: string | null;

  @Column("datetime", { name: "OREX_LASTUPDATE", nullable: true })
  public orexLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaDocumento,
    (cmnsPessoaDocumento) => cmnsPessoaDocumento.psdcOrex
  )
  public cmnsPessoaDocumentos: CmnsPessoaDocumento[];

  public constructor(init?: Partial<CmnsOrgaoExpedidor>) {
    super();
    Object.assign(this, init);
  }
}
