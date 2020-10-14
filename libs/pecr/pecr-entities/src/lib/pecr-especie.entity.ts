import { Column, Entity, Index, OneToMany } from "typeorm";
import { PecrAptidao } from "./pecr-aptidao";
import { PecrRaca } from "./pecr-raca";

@Index("PK_PECR_ESPECIE", ["id"], { unique: true })
@Entity("PECR_ESPECIE")
export class PecrEspecie {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "ESPC_CODIGO", nullable: true, length: 5 })
  public espcCodigo: string | null;

  @Column("nvarchar", { name: "ESPC_NOME", nullable: true, length: 40 })
  public espcNome: string | null;

  @Column("nvarchar", { name: "ESPC_IMAGEM", nullable: true })
  public espcImagem: string | null;

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

  @OneToMany(() => PecrAptidao, (pecrAptidao) => pecrAptidao.aptdEspc)
  public pecrAptidaos: PecrAptidao[];

  @OneToMany(() => PecrRaca, (pecrRaca) => pecrRaca.racaEspc)
  public pecrRacas: PecrRaca[];
}
