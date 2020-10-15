import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { CmnsBairro } from "./cmns-bairro";
import { CmnsUnidadeFederativa } from "./cmns-unidade-federativa";

@Index("PK_CMNS_LOCALIDADE", ["id"], { unique: true })
@Entity("CMNS_LOCALIDADE")
export class CmnsLocalidade {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "LCLD_NR_IBGE", nullable: true, length: 12 })
  public lcldNrIbge: string | null;

  @Column("nvarchar", { name: "LCLD_NOME", nullable: true, length: 128 })
  public lcldNome: string | null;

  @Column("nvarchar", { name: "LCLD_CEP", nullable: true, length: 9 })
  public lcldCep: string | null;

  @Column("nvarchar", { name: "LCLD_NOME_ABREV", nullable: true, length: 40 })
  public lcldNomeAbrev: string | null;

  @Column("nvarchar", { name: "LCLD_CEP_INICIAL", nullable: true, length: 9 })
  public lcldCepInicial: string | null;

  @Column("nvarchar", { name: "LCLD_CEP_FINAL", nullable: true, length: 9 })
  public lcldCepFinal: string | null;

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

  @OneToMany(() => CmnsBairro, (cmnsBairro) => cmnsBairro.bairLcld)
  public cmnsBairros: CmnsBairro[];

  @ManyToOne(
    () => CmnsUnidadeFederativa,
    (cmnsUnidadeFederativa) => cmnsUnidadeFederativa.cmnsLocalidades
  )
  @JoinColumn([{ name: "LCLD_UNFD_ID", referencedColumnName: "id" }])
  public lcldUnfd: CmnsUnidadeFederativa;
}
