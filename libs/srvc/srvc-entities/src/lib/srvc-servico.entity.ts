import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SrvcOrdemServicoItem } from "./srvc-ordem-servico-item";
import { CdstProduto } from "./cdst-produto";
import { SrvcServicoComposicao } from "./srvc-servico-composicao";
import { SrvcServicoMaqEquip } from "./srvc-servico-maq-equip";
import { SrvcServicoPecas } from "./srvc-servico-pecas";

@Index("PK_SRVC_SERVICO", ["id"], { unique: true })
@Entity("SRVC_SERVICO")
export class SrvcServico {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "SRVC_CODIGO", length: 10 })
  public srvcCodigo: string;

  @Column("money", { name: "SRVC_VALOR_UNITARIO", nullable: true })
  public srvcValorUnitario: number | null;

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

  @OneToMany(
    () => SrvcOrdemServicoItem,
    (srvcOrdemServicoItem) => srvcOrdemServicoItem.ositSrvc
  )
  public srvcOrdemServicoItems: SrvcOrdemServicoItem[];

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.srvcServicos)
  @JoinColumn([{ name: "SRVC_PRDT_ID", referencedColumnName: "id" }])
  public srvcPrdt: CdstProduto;

  @OneToMany(
    () => SrvcServicoComposicao,
    (srvcServicoComposicao) => srvcServicoComposicao.srcmSrvc
  )
  public srvcServicoComposicaos: SrvcServicoComposicao[];

  @OneToMany(
    () => SrvcServicoMaqEquip,
    (srvcServicoMaqEquip) => srvcServicoMaqEquip.srmeSrvc
  )
  public srvcServicoMaqEquips: SrvcServicoMaqEquip[];

  @OneToMany(
    () => SrvcServicoPecas,
    (srvcServicoPecas) => srvcServicoPecas.srpcSrvc
  )
  public srvcServicoPecas: SrvcServicoPecas[];
}
