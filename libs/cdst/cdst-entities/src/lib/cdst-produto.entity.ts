import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CdstClasseProduto} from './cdst-classe-produto'
import {CdstUnidadeMedida} from './cdst-unidade-medida'
import {CdstProdutoComposicao} from './cdst-produto-composicao'
import {CdstProdutoEquivalente} from './cdst-produto-equivalente'
import {EstqItemMovimento} from './estq-item-movimento'
import {EstqMaquinaEquipamento} from './estq-maquina-equipamento'
import {EstqMercadoria} from './estq-mercadoria'
import {EstqProdutoSaldo} from './estq-produto-saldo'
import {FncrTabelaPrecoItem} from './fncr-tabela-preco-item'
import {PecrEventoSanitario} from './pecr-evento-sanitario'
import {PecrGanhoPesoMedio} from './pecr-ganho-peso-medio'
import {PecrItemMovimentoAnimal} from './pecr-item-movimento-animal'
import {PecrLoteAnimal} from './pecr-lote-animal'
import {PecrLoteSaldo} from './pecr-lote-saldo'
import {PecrProdutoBovino} from './pecr-produto-bovino'
import {PecrProdutoPecuaria} from './pecr-produto-pecuaria'
import {SrvcServico} from './srvc-servico'
import {VeteOrdemDeServico} from './vete-ordem-de-servico'
import {VeteServico} from './vete-servico'
import {VeteServicoComposicao} from './vete-servico-composicao'


@Index("FK_CLPR_RS_PRDT",["prdtClprId",],{  })
@Index("FK_UNID_RS_PRDT",["prdtUnidId",],{  })
@Index("PK_CDST_PRODUTO",["prdtId",],{ unique:true })
@Entity("CDST_PRODUTO")
export  class CdstProduto extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRDT_ID",length:27 })
public prdtId:string;

@Column("varchar",{ name:"PRDT_CLPR_ID",nullable:true,length:27 })
public prdtClprId:string | null;

@Column("varchar",{ name:"PRDT_UNID_ID",nullable:true,length:27 })
public prdtUnidId:string | null;

@Column("varchar",{ name:"PRDT_CODIGO_BARRA",nullable:true,length:20 })
public prdtCodigoBarra:string | null;

@Column("varchar",{ name:"PRDT_NOME",nullable:true,length:64 })
public prdtNome:string | null;

@Column("varchar",{ name:"PRDT_DESCRICAO",nullable:true,length:128 })
public prdtDescricao:string | null;

@Column("smallint",{ name:"PRDT_ATIVO",nullable:true,default: () => "0", })
public prdtAtivo:number | null;

@Column("money",{ name:"PRDT_PRECO_CUSTO",nullable:true,default: () => "0", })
public prdtPrecoCusto:number | null;

@Column("money",{ name:"PRDT_PRECO_VENDA",nullable:true,default: () => "0", })
public prdtPrecoVenda:number | null;

@Column("datetime",{ name:"PRDT_LASTUPDATE",nullable:true })
public prdtLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstClasseProduto,cdstClasseProduto=>cdstClasseProduto.cdstProdutos)
@JoinColumn([{ name: "PRDT_CLPR_ID", referencedColumnName: "clprId" },
])

public prdtClpr:CdstClasseProduto;

@ManyToOne(()=>CdstUnidadeMedida,cdstUnidadeMedida=>cdstUnidadeMedida.cdstProdutos)
@JoinColumn([{ name: "PRDT_UNID_ID", referencedColumnName: "unidId" },
])

public prdtUnid:CdstUnidadeMedida;

@OneToMany(()=>CdstProdutoComposicao,cdstProdutoComposicao=>cdstProdutoComposicao.prcpComp)


public cdstProdutoComposicaos:CdstProdutoComposicao[];

@OneToMany(()=>CdstProdutoComposicao,cdstProdutoComposicao=>cdstProdutoComposicao.prcpPrdt)


public cdstProdutoComposicaos2:CdstProdutoComposicao[];

@OneToMany(()=>CdstProdutoEquivalente,cdstProdutoEquivalente=>cdstProdutoEquivalente.preqEqvt)


public cdstProdutoEquivalentes:CdstProdutoEquivalente[];

@OneToMany(()=>CdstProdutoEquivalente,cdstProdutoEquivalente=>cdstProdutoEquivalente.preqPrdt)


public cdstProdutoEquivalentes2:CdstProdutoEquivalente[];

@OneToMany(()=>EstqItemMovimento,estqItemMovimento=>estqItemMovimento.itmvPrdt)


public estqItemMovimentos:EstqItemMovimento[];

@OneToMany(()=>EstqMaquinaEquipamento,estqMaquinaEquipamento=>estqMaquinaEquipamento.mqeqPrdt)


public estqMaquinaEquipamentos:EstqMaquinaEquipamento[];

@OneToMany(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.mrcdPrdt)


public estqMercadorias:EstqMercadoria[];

@OneToMany(()=>EstqProdutoSaldo,estqProdutoSaldo=>estqProdutoSaldo.prsdPrdt)


public estqProdutoSaldos:EstqProdutoSaldo[];

@OneToMany(()=>FncrTabelaPrecoItem,fncrTabelaPrecoItem=>fncrTabelaPrecoItem.tpitPrdt)


public fncrTabelaPrecoItems:FncrTabelaPrecoItem[];

@OneToMany(()=>PecrEventoSanitario,pecrEventoSanitario=>pecrEventoSanitario.evsnPrdt)


public pecrEventoSanitarios:PecrEventoSanitario[];

@OneToMany(()=>PecrGanhoPesoMedio,pecrGanhoPesoMedio=>pecrGanhoPesoMedio.gpmdPrdt)


public pecrGanhoPesoMedios:PecrGanhoPesoMedio[];

@OneToMany(()=>PecrItemMovimentoAnimal,pecrItemMovimentoAnimal=>pecrItemMovimentoAnimal.imanPrdt)


public pecrItemMovimentoAnimals:PecrItemMovimentoAnimal[];

@OneToMany(()=>PecrLoteAnimal,pecrLoteAnimal=>pecrLoteAnimal.ltanPrdt)


public pecrLoteAnimals:PecrLoteAnimal[];

@OneToMany(()=>PecrLoteSaldo,pecrLoteSaldo=>pecrLoteSaldo.ltsdPrdt)


public pecrLoteSaldos:PecrLoteSaldo[];

@OneToMany(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.prbvPmae)


public pecrProdutoBovinos:PecrProdutoBovino[];

@OneToMany(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.prbvPpai)


public pecrProdutoBovinos2:PecrProdutoBovino[];

@OneToMany(()=>PecrProdutoBovino,pecrProdutoBovino=>pecrProdutoBovino.prbvPrdt)


public pecrProdutoBovinos3:PecrProdutoBovino[];

@OneToMany(()=>PecrProdutoPecuaria,pecrProdutoPecuaria=>pecrProdutoPecuaria.prpePrdt)


public pecrProdutoPecuarias:PecrProdutoPecuaria[];

@OneToMany(()=>SrvcServico,srvcServico=>srvcServico.srvcPrdt)


public srvcServicos:SrvcServico[];

@OneToMany(()=>VeteOrdemDeServico,veteOrdemDeServico=>veteOrdemDeServico.osvtTaxi)


public veteOrdemDeServicos:VeteOrdemDeServico[];

@OneToMany(()=>VeteServico,veteServico=>veteServico.servPrdt)


public veteServicos:VeteServico[];

@OneToMany(()=>VeteServicoComposicao,veteServicoComposicao=>veteServicoComposicao.svcpPrdt)


public veteServicoComposicaos:VeteServicoComposicao[];

@RelationId((cdstProduto:CdstProduto)=>cdstProduto.prdtClpr)
public prdtClprId2:string | null;

@RelationId((cdstProduto:CdstProduto)=>cdstProduto.prdtUnid)
public prdtUnidId2:string | null;

public constructor(init?: Partial<CdstProduto>) {
    super();
    Object.assign(this, init);
}
}
