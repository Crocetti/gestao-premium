import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import FncrBancoConta from "./fncr-banco-conta";
import CmnsPessoa from "./cmns-pessoa";
import FncrCaixaMovimento from "./fncr-caixa-movimento";

@Index("PK_FNCR_CAIXA", ["id"], { unique: true })
@Entity("FNCR_CAIXA")
export default class FncrCaixa {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "CAIX_CODIGO", nullable: true, length: 5 })
  public caixCodigo?: string | null;

  @Column("nvarchar", { name: "CAIX_NOME", nullable: true, length: 40 })
  public caixNome?: string | null;

  @Column("datetime2", { name: "AUDT_DT_CREATE" })
  public audtDtCreate?: Date;

  @Column("datetime2", { name: "AUDT_DT_UPDATE", nullable: true })
  public audtDtUpdate?: Date | null;

  @Column("uniqueidentifier", { name: "AUDT_USRS_CREATE" })
  public audtUsrsCreate?: string;

  @Column("uniqueidentifier", { name: "AUDT_USRS_UPDATE", nullable: true })
  public audtUsrsUpdate?: string | null;

  @Column("bit", { name: "AUDT_ACTIVE" })
  public audtActive?: boolean;

  @OneToMany(() => FncrBancoConta, (fncrBancoConta) => fncrBancoConta.bancCaix)
  public fncrBancoContas?: FncrBancoConta[];

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.fncrCaixas)
  @JoinColumn([{ name: "CAIX_PESS_ID", referencedColumnName: "id" }])
  public caixPess?: CmnsPessoa;

  @OneToMany(
    () => FncrCaixaMovimento,
    (fncrCaixaMovimento) => fncrCaixaMovimento.cxmvCaix
  )
  public fncrCaixaMovimentos?: FncrCaixaMovimento[];
}
