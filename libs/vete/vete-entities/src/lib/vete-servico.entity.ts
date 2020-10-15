import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { VeteCirurgias } from "./vete-cirurgias";
import { VeteConsulta } from "./vete-consulta";
import { VeteInternacao } from "./vete-internacao";
import { VeteRetorno } from "./vete-retorno";
import { VeteRetornoProcedimento } from "./vete-retorno-procedimento";
import { CdstProduto } from "./cdst-produto";
import { VeteServicoComposicao } from "./vete-servico-composicao";

@Index("PK_VETE_SERVICO", ["id"], { unique: true })
@Entity("VETE_SERVICO")
export class VeteServico {
  @Column("uniqueidentifier", { primary: true, name: "ID" })
  public id: string;

  @Column("nvarchar", { name: "SERV_CODIGO", nullable: true, length: 40 })
  public servCodigo: string | null;

  @Column("nvarchar", { name: "SERV_CATEGORIA", nullable: true, length: 10 })
  public servCategoria: string | null;

  @Column("money", { name: "SERV_CUSTO", nullable: true })
  public servCusto: number | null;

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

  @OneToMany(() => VeteCirurgias, (veteCirurgias) => veteCirurgias.cgiaServ)
  public veteCirurgias: VeteCirurgias[];

  @OneToMany(() => VeteConsulta, (veteConsulta) => veteConsulta.consServ)
  public veteConsultas: VeteConsulta[];

  @OneToMany(() => VeteInternacao, (veteInternacao) => veteInternacao.intrServ)
  public veteInternacaos: VeteInternacao[];

  @OneToMany(() => VeteRetorno, (veteRetorno) => veteRetorno.rtrnServ)
  public veteRetornos: VeteRetorno[];

  @OneToMany(
    () => VeteRetornoProcedimento,
    (veteRetornoProcedimento) => veteRetornoProcedimento.rtsvServ
  )
  public veteRetornoProcedimentos: VeteRetornoProcedimento[];

  @ManyToOne(() => CdstProduto, (cdstProduto) => cdstProduto.veteServicos)
  @JoinColumn([{ name: "SERV_PRDT_ID", referencedColumnName: "id" }])
  public servPrdt: CdstProduto;

  @OneToMany(
    () => VeteServicoComposicao,
    (veteServicoComposicao) => veteServicoComposicao.svcpServ
  )
  public veteServicoComposicaos: VeteServicoComposicao[];
}
