import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import CmnsPessoa from "./cmns-pessoa";
import EstqFabricanteMotor from "./estq-fabricante-motor";
import EstqMaquinaEquipamento from "./estq-maquina-equipamento";

@Index("PK_CDST_FABRICANTE", ["id"], { unique: true })
@Entity("CDST_FABRICANTE")
export default class CdstFabricante {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "FBCT_OBS", nullable: true })
  public fbctObs?: string | null;

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

  @ManyToOne(() => CmnsPessoa, (cmnsPessoa) => cmnsPessoa.cdstFabricantes)
  @JoinColumn([{ name: "FBCT_PESS_ID", referencedColumnName: "id" }])
  public fbctPess?: CmnsPessoa;

  @OneToMany(
    () => EstqFabricanteMotor,
    (estqFabricanteMotor) => estqFabricanteMotor.fbmtFbct
  )
  public estqFabricanteMotors?: EstqFabricanteMotor[];

  @OneToMany(
    () => EstqMaquinaEquipamento,
    (estqMaquinaEquipamento) => estqMaquinaEquipamento.mqeqFbct
  )
  public estqMaquinaEquipamentos?: EstqMaquinaEquipamento[];
}
