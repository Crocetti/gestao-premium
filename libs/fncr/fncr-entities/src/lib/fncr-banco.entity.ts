import { Column, Entity, Index, OneToMany } from "typeorm";
import { FncrBancoConta } from "./fncr-banco-conta";
import { FncrBancoModeloBoleto } from "./fncr-banco-modelo-boleto";

@Index("PK_FNCR_BANCO", ["id"], { unique: true })
@Entity("FNCR_BANCO")
export class FncrBanco {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "BANC_CODIGO", nullable: true, length: 3 })
  public bancCodigo: string | null;

  @Column("nvarchar", { name: "BANC_NOME", nullable: true, length: 128 })
  public bancNome: string | null;

  @Column("nvarchar", { name: "BANC_APELIDO", nullable: true, length: 25 })
  public bancApelido: string | null;

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

  @OneToMany(() => FncrBancoConta, (fncrBancoConta) => fncrBancoConta.bcctBanc)
  public fncrBancoContas: FncrBancoConta[];

  @OneToMany(
    () => FncrBancoModeloBoleto,
    (fncrBancoModeloBoleto) => fncrBancoModeloBoleto.bcmbBanc
  )
  public fncrBancoModeloBoletos: FncrBancoModeloBoleto[];
}
