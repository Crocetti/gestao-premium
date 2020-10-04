import { BaseEntity, Column, Entity, Index, OneToMany } from "typeorm";
import { PecrAptidao } from "./pecr-aptidao";
import { PecrRaca } from "./pecr-raca";

@Index("PK_PECR_ESPECIE", ["espcId"], { unique: true })
@Entity("PECR_ESPECIE")
export class PecrEspecie extends BaseEntity {
  @Column("varchar", { primary: true, name: "ESPC_ID", length: 27 })
  public espcId: string;

  @Column("varchar", { name: "ESPC_CODIGO", nullable: true, length: 5 })
  public espcCodigo: string | null;

  @Column("varchar", { name: "ESPC_NOME", nullable: true, length: 40 })
  public espcNome: string | null;

  @Column("image", { name: "ESPC_IMAGEM", nullable: true })
  public espcImagem: Buffer | null;

  @Column("datetime", { name: "ESPC_LASTUPDATE", nullable: true })
  public espcLastupdate: LocalDateTime | null;

  @OneToMany(() => PecrAptidao, (pecrAptidao) => pecrAptidao.aptdEspc)
  public pecrAptidaos: PecrAptidao[];

  @OneToMany(() => PecrRaca, (pecrRaca) => pecrRaca.racaEspc)
  public pecrRacas: PecrRaca[];

  public constructor(init?: Partial<PecrEspecie>) {
    super();
    Object.assign(this, init);
  }
}
