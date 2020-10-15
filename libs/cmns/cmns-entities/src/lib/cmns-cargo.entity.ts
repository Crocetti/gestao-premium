import { Column, Entity, Index, OneToMany } from "typeorm";
import { CmnsPessoaFisica } from "./cmns-pessoa-fisica";
import { SrvcServicoComposicao } from "./srvc-servico-composicao";

@Index("PK_CMNS_CARGO", ["id"], { unique: true })
@Entity("CMNS_CARGO")
export class CmnsCargo {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "CARG_CODIGO", nullable: true, length: 3 })
  public cargCodigo: string | null;

  @Column("nvarchar", { name: "CARG_NOME", nullable: true, length: 64 })
  public cargNome: string | null;

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
}
