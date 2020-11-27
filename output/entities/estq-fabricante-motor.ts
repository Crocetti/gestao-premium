import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CdstFabricante from "./cdst-fabricante";
import EstqMaquinaEquipamento from "./estq-maquina-equipamento";

@Index("PK_ESTQ_FABRICANTE_MOTOR", ["id"], { unique: true })
@Entity("ESTQ_FABRICANTE_MOTOR")
export default class EstqFabricanteMotor {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

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

  @ManyToOne(
    () => CdstFabricante,
    (cdstFabricante) => cdstFabricante.estqFabricanteMotors
  )
  @JoinColumn([{ name: "FBMT_FBCT_ID", referencedColumnName: "id" }])
  public fbmtFbct?: CdstFabricante;

  @OneToMany(
    () => EstqMaquinaEquipamento,
    (estqMaquinaEquipamento) => estqMaquinaEquipamento.mqeqMoto
  )
  public estqMaquinaEquipamentos?: EstqMaquinaEquipamento[];
}
