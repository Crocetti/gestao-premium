import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaFisica } from "./cmns-pessoa-fisica";
import { SrvcServicoComposicao } from "./srvc-servico-composicao";

@Index("PK_CMNS_CARGO", ["cargId"], { unique: true })
@Entity("CMNS_CARGO")
export class CmnsCargo extends BaseEntity {
  @Column("varchar", { primary: true, name: "CARG_ID", length: 27 })
  public cargId: string;

  @Column("varchar", { name: "CARG_CODIGO", nullable: true, length: 3 })
  public cargCodigo: string | null;

  @Column("varchar", { name: "CARG_NOME", nullable: true, length: 64 })
  public cargNome: string | null;

  @Column("datetime", { name: "CARG_LASTUPDATE", nullable: true })
  public cargLastupdate: LocalDateTime | null;

  @OneToMany(
    () => CmnsPessoaFisica,
    (cmnsPessoaFisica) => cmnsPessoaFisica.psfsCarg
  )
  public cmnsPessoaFisicas: CmnsPessoaFisica[];

  @OneToMany(
    () => SrvcServicoComposicao,
    (srvcServicoComposicao) => srvcServicoComposicao.srcmCarg
  )
  public srvcServicoComposicaos: SrvcServicoComposicao[];

  public constructor(init?: Partial<CmnsCargo>) {
    super();
    Object.assign(this, init);
  }
}
