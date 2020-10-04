import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaDocumento } from "./cmns-pessoa-documento";

@Index("PK_CMNS_TIPO_DOCUMENTO", ["tpdcId"], { unique: true })
@Entity("CMNS_TIPO_DOCUMENTO")
export class CmnsTipoDocumento extends BaseEntity {
  @Column("varchar", { primary: true, name: "TPDC_ID", length: 27 })
  public tpdcId: string;

  @Column("varchar", { name: "TPDC_CODIGO", nullable: true, length: 3 })
  public tpdcCodigo: string | null;

  @Column("varchar", { name: "TPDC_NOME", nullable: true, length: 64 })
  public tpdcNome: string | null;

  @Column("varchar", { name: "TPDC_TIPO", nullable: true, length: 15 })
  public tpdcTipo: string | null;

  @Column("datetime", { name: "TPDC_LASTUPDATE", nullable: true })
  public tpdcLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaDocumento,
    (cmnsPessoaDocumento) => cmnsPessoaDocumento.psdcTpdc
  )
  public cmnsPessoaDocumentos: CmnsPessoaDocumento[];

  public constructor(init?: Partial<CmnsTipoDocumento>) {
    super();
    Object.assign(this, init);
  }
}
