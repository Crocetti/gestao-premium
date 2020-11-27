import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import VeteCirurgias from "./vete-cirurgias";
import VeteConsulta from "./vete-consulta";
import VeteInternacao from "./vete-internacao";
import FncrTabelaPreco from "./fncr-tabela-preco";
import FncrFormaVencimento from "./fncr-forma-vencimento";
import EstqCapaMovimento from "./estq-capa-movimento";
import VeteAnimal from "./vete-animal";
import CdstProduto from "./cdst-produto";
import VeteRetorno from "./vete-retorno";

@Index("PK_VETE_ORDEM_DE_SERVICO", ["id"], { unique: true })
@Entity("VETE_ORDEM_DE_SERVICO")
export default class VeteOrdemDeServico {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ID",
    default: () => "newsequentialid()",
  })
  public id?: string;

  @Column("nvarchar", { name: "OSVT_NUMERO", nullable: true, length: 10 })
  public osvtNumero?: string | null;

  @Column("datetime2", { name: "OSVT_DT_ENTRADA", nullable: true })
  public osvtDtEntrada?: Date | null;

  @Column("datetime2", { name: "OSVT_DT_SAIDA", nullable: true })
  public osvtDtSaida?: Date | null;

  @Column("nvarchar", { name: "OSVT_STATUS", nullable: true, length: 25 })
  public osvtStatus?: string | null;

  @Column("nvarchar", { name: "OSVT_TIPO", nullable: true, length: 25 })
  public osvtTipo?: string | null;

  @Column("bit", { name: "OSVT_BUSCAR", nullable: true })
  public osvtBuscar?: boolean | null;

  @Column("bit", { name: "OSVT_ENTREGAR", nullable: true })
  public osvtEntregar?: boolean | null;

  @Column("nvarchar", {
    name: "OSVT_FORMA_PAGAMENTO",
    nullable: true,
    length: 15,
  })
  public osvtFormaPagamento?: string | null;

  @Column("datetime2", { name: "OSVT_LASTUPDATE", nullable: true })
  public osvtLastupdate?: Date | null;

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

  @OneToMany(() => VeteCirurgias, (veteCirurgias) => veteCirurgias.cgiaOsvt)
  public veteCirurgias?: VeteCirurgias[];

  @OneToMany(() => VeteConsulta, (veteConsulta) => veteConsulta.consOsvt)
  public veteConsultas?: VeteConsulta[];

  @OneToMany(() => VeteInternacao, (veteInternacao) => veteInternacao.intrOsvt)
  public veteInternacaos?: VeteInternacao[];

  @ManyToOne(
    () => FncrTabelaPreco,
    (fncrTabelaPreco) => fncrTabelaPreco.veteOrdemDeServicos
  )
  @JoinColumn([{ name: "OSVT_TBPC_ID", referencedColumnName: "id" }])
  public osvtTbpc?: FncrTabelaPreco;

  @ManyToOne(
    () => FncrFormaVencimento,
    (fncrFormaVencimento) => fncrFormaVencimento.veteOrdemDeServicos
  )
  @JoinColumn([{ name: "OSVT_FRVN_ID", referencedColumnName: "id" }])
  public osvtFrvn?: FncrFormaVencimento;

  @ManyToOne(
    () => EstqCapaMovimento,
    (estqCapaMovimento) => estqCapaMovimento.veteOrdemDeServicos
  )
  @JoinColumn([{ name: "OSVT_CPMV_ID", referencedColumnName: "id" }])
  public osvtCpmv?: EstqCapaMovimento;

  @ManyToOne(() => VeteAnimal, (veteAnimal) => veteAnimal.veteOrdemDeServicos)
  @JoinColumn([{ name: "OSVT_ANML_ID", referencedColumnName: "id" }])
  public osvtAnml?: VeteAnimal;

  @ManyToOne(
    () => CdstProduto,
    (cdstProduto) => cdstProduto.veteOrdemDeServicos
  )
  @JoinColumn([{ name: "OSVT_TAXI_ID", referencedColumnName: "id" }])
  public osvtTaxi?: CdstProduto;

  @OneToMany(() => VeteRetorno, (veteRetorno) => veteRetorno.rtrnOsvt)
  public veteRetornos?: VeteRetorno[];
}
