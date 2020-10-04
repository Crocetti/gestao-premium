import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaFisica } from "./cmns-pessoa-fisica";

@Index("PK_CMNS_NACIONALIDADE", ["ncnlId"], { unique: true })
@Entity("CMNS_NACIONALIDADE")
export class CmnsNacionalidade extends BaseEntity {
  @Column("varchar", { primary: true, name: "NCNL_ID", length: 27 })
  public ncnlId: string;

  @Column("varchar", { name: "NCNL_CODIGO", nullable: true, length: 3 })
  public ncnlCodigo: string | null;

  @Column("varchar", { name: "NCNL_NOME", nullable: true, length: 64 })
  public ncnlNome: string | null;

  @Column("datetime", { name: "NCNL_LASTUPDATE", nullable: true })
  public ncnlLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaFisica,
    (cmnsPessoaFisica) => cmnsPessoaFisica.psfsNcnl
  )
  public cmnsPessoaFisicas: CmnsPessoaFisica[];

  public constructor(init?: Partial<CmnsNacionalidade>) {
    super();
    Object.assign(this, init);
  }
}
