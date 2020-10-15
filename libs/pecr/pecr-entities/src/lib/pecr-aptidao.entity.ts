import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PecrEspecie } from "./pecr-especie";
import { PecrLote } from "./pecr-lote";

@Index("PK_PECR_APTIDAO", ["id"], { unique: true })
@Entity("PECR_APTIDAO")
export class PecrAptidao {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "APTD_NOME", nullable: true, length: 24 })
  public aptdNome: string | null;

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

  @ManyToOne(() => PecrEspecie, (pecrEspecie) => pecrEspecie.pecrAptidaos)
  @JoinColumn([{ name: "APTD_ESPC_ID", referencedColumnName: "id" }])
  public aptdEspc: PecrEspecie;

  @OneToMany(() => PecrLote, (pecrLote) => pecrLote.loteAptd)
  public pecrLotes: PecrLote[];
}
