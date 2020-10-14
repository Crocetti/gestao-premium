import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { EstqFabricanteMotor } from "./estq-fabricante-motor";
import { CdstProduto } from "./cdst-produto";
import { CdstFabricante } from "./cdst-fabricante";
import { SrvcServicoMaqEquip } from "./srvc-servico-maq-equip";

@Index("PK_ESTQ_MAQUINA_EQUIPAMENTO", ["id"], { unique: true })
@Entity("ESTQ_MAQUINA_EQUIPAMENTO")
export class EstqMaquinaEquipamento {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", {
    name: "MQEQ_NR_FABRICANTE",
    nullable: true,
    length: 40,
  })
  public mqeqNrFabricante: string | null;

  @Column("nvarchar", {
    name: "MQEQ_NR_PATRIMONIO",
    nullable: true,
    length: 40,
  })
  public mqeqNrPatrimonio: string | null;

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

  @ManyToOne(
    () => EstqFabricanteMotor,
    (estqFabricanteMotor) => estqFabricanteMotor.estqMaquinaEquipamentos
  )
  @JoinColumn([{ name: "MQEQ_MOTO_ID", referencedColumnName: "id" }])
  public mqeqMoto: EstqFabricanteMotor;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.estqMaquinaEquipamentos
  )
  @JoinColumn([{ name: "MQEQ_PRDT_ID", referencedColumnName: "id" }])
  public mqeqPrdt: CdstProduto;

  @ManyToOne(
    () => CdstFabricante,
    (cdstFabricante) => cdstFabricante.estqMaquinaEquipamentos
  )
  @JoinColumn([{ name: "MQEQ_FBCT_ID", referencedColumnName: "id" }])
  public mqeqFbct: CdstFabricante;

  @OneToMany(
    () => SrvcServicoMaqEquip,
    (srvcServicoMaqEquip) => srvcServicoMaqEquip.srmeMqeq
  )
  public srvcServicoMaqEquips: SrvcServicoMaqEquip[];
}
