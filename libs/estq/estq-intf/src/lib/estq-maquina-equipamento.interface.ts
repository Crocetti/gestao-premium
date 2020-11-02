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
import { EstqFabricanteMotor } from "./estq-fabricante-motor";
import { CdstProduto } from "./cdst-produto";
import { SrvcServicoMaqEquip } from "./srvc-servico-maq-equip";

@Index("FK_FBCT_RS_MQEQ", ["mqeqFbctId"], {})
@Index("FK_MOTO_RS_MQEQ", ["mqeqMotoId"], {})
@Index("FK_PRDT_RS_MQEQ", ["mqeqPrdtId"], {})
@Index("PK_ESTQ_MAQUINA_EQUIPAMENTO", ["mqeqId"], { unique: true })
@Entity("ESTQ_MAQUINA_EQUIPAMENTO")
export class EstqMaquinaEquipamento extends BaseEntity {
  @Column("varchar", { primary: true, name: "MQEQ_ID", length: 27 })
  public mqeqId: string;

  @Column("varchar", { name: "MQEQ_MOTO_ID", nullable: true, length: 27 })
  public mqeqMotoId: string | null;

  @Column("varchar", { name: "MQEQ_PRDT_ID", nullable: true, length: 27 })
  public mqeqPrdtId: string | null;

  @Column("varchar", { name: "MQEQ_FBCT_ID", nullable: true, length: 27 })
  public mqeqFbctId: string | null;

  @Column("varchar", { name: "MQEQ_NR_FABRICANTE", nullable: true, length: 40 })
  public mqeqNrFabricante: string | null;

  @Column("varchar", { name: "MQEQ_NR_PATRIMONIO", nullable: true, length: 40 })
  public mqeqNrPatrimonio: string | null;

  @Column("datetime", { name: "MQEQ_LASTUPDATE", nullable: true })
  public mqeqLastupdate: LocalDateTime | null;

  @ManyToOne(
    () => CdstFabricante,
    (cdstFabricante) => cdstFabricante.estqMaquinaEquipamentos
  )
  @JoinColumn([{ name: "MQEQ_FBCT_ID", referencedColumnName: "fbctId" }])
  public mqeqFbct: CdstFabricante;

  @ManyToOne(
    () => EstqFabricanteMotor,
    (estqFabricanteMotor) => estqFabricanteMotor.estqMaquinaEquipamentos
  )
  @JoinColumn([{ name: "MQEQ_MOTO_ID", referencedColumnName: "fbmtId" }])
  public mqeqMoto: EstqFabricanteMotor;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.estqMaquinaEquipamentos
  )
  @JoinColumn([{ name: "MQEQ_PRDT_ID", referencedColumnName: "prdtId" }])
  public mqeqPrdt: CdstProduto;

  @OneToMany(
    () => SrvcServicoMaqEquip,
    (srvcServicoMaqEquip) => srvcServicoMaqEquip.srmeMqeq
  )
  public srvcServicoMaqEquips: SrvcServicoMaqEquip[];

  @RelationId(
    (estqMaquinaEquipamento: EstqMaquinaEquipamento) =>
      estqMaquinaEquipamento.mqeqFbct
  )
  public mqeqFbctId2: string | null;

  @RelationId(
    (estqMaquinaEquipamento: EstqMaquinaEquipamento) =>
      estqMaquinaEquipamento.mqeqMoto
  )
  public mqeqMotoId2: string | null;

  @RelationId(
    (estqMaquinaEquipamento: EstqMaquinaEquipamento) =>
      estqMaquinaEquipamento.mqeqPrdt
  )
  public mqeqPrdtId2: string | null;

  public constructor(init?: Partial<EstqMaquinaEquipamento>) {
    super();
    Object.assign(this, init);
  }
}
