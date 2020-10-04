import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from "typeorm";
import { CdstFabricante } from "./cdst-fabricante";
import { EstqMaquinaEquipamento } from "./estq-maquina-equipamento";

@Index("FK_FBCT_RS_FBMT", ["fbmtFbctId"], {})
@Index("PK_ESTQ_FABRICANTE_MOTOR", ["fbmtId"], { unique: true })
@Entity("ESTQ_FABRICANTE_MOTOR")
export class EstqFabricanteMotor extends BaseEntity {
  @Column("varchar", { primary: true, name: "FBMT_ID", length: 27 })
  public fbmtId: string;

  @Column("varchar", { name: "FBMT_FBCT_ID", nullable: true, length: 27 })
  public fbmtFbctId: string | null;

  @Column("datetime", { name: "FBMT_LASTUPDATE", nullable: true })
  public fbmtLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CdstFabricante,
    (cdstFabricante) => cdstFabricante.estqFabricanteMotors
  )
  @JoinColumn([{ name: "FBMT_FBCT_ID", referencedColumnName: "fbctId" }])
  public fbmtFbct: CdstFabricante;

  @OneToMany(
    () => EstqMaquinaEquipamento,
    (estqMaquinaEquipamento) => estqMaquinaEquipamento.mqeqMoto
  )
  public estqMaquinaEquipamentos: EstqMaquinaEquipamento[];

  @RelationId(
    (estqFabricanteMotor: EstqFabricanteMotor) => estqFabricanteMotor.fbmtFbct
  )
  public fbmtFbctId2: string | null;

  public constructor(init?: Partial<EstqFabricanteMotor>) {
    super();
    Object.assign(this, init);
  }
}
