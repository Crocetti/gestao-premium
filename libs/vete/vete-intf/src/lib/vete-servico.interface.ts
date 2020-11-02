import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {VeteCirurgias} from './vete-cirurgias'
import {VeteConsulta} from './vete-consulta'
import {VeteInternacao} from './vete-internacao'
import {VeteRetorno} from './vete-retorno'
import {VeteRetornoProcedimento} from './vete-retorno-procedimento'
import {CdstProduto} from './cdst-produto'
import {VeteServicoComposicao} from './vete-servico-composicao'


@Index("FK_PRDT_RS_SERV",["servPrdtId",],{  })
@Index("PK_VETE_SERVICO",["servId",],{ unique:true })
@Entity("VETE_SERVICO")
export  class VeteServico extends BaseEntity {

@Column("varchar",{ primary:true,name:"SERV_ID",length:27 })
public servId:string;

@Column("varchar",{ name:"SERV_PRDT_ID",nullable:true,length:27 })
public servPrdtId:string | null;

@Column("varchar",{ name:"SERV_CODIGO",nullable:true,length:40 })
public servCodigo:string | null;

@Column("varchar",{ name:"SERV_CATEGORIA",nullable:true,length:10 })
public servCategoria:string | null;

@Column("money",{ name:"SERV_CUSTO",nullable:true,default: () => "0", })
public servCusto:number | null;

@Column("datetime",{ name:"SERV_LASTUPDATE",nullable:true })
public servLastupdate:LocalDateTime | null;

@OneToMany(()=>VeteCirurgias,veteCirurgias=>veteCirurgias.cgiaServ)


public veteCirurgias:VeteCirurgias[];

@OneToMany(()=>VeteConsulta,veteConsulta=>veteConsulta.consServ)


public veteConsultas:VeteConsulta[];

@OneToMany(()=>VeteInternacao,veteInternacao=>veteInternacao.intrServ)


public veteInternacaos:VeteInternacao[];

@OneToMany(()=>VeteRetorno,veteRetorno=>veteRetorno.rtrnServ)


public veteRetornos:VeteRetorno[];

@OneToMany(()=>VeteRetornoProcedimento,veteRetornoProcedimento=>veteRetornoProcedimento.rtsvServ)


public veteRetornoProcedimentos:VeteRetornoProcedimento[];

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.veteServicos)
@JoinColumn([{ name: "SERV_PRDT_ID", referencedColumnName: "prdtId" },
])

public servPrdt:CdstProduto;

@OneToMany(()=>VeteServicoComposicao,veteServicoComposicao=>veteServicoComposicao.svcpServ)


public veteServicoComposicaos:VeteServicoComposicao[];

@RelationId((veteServico:VeteServico)=>veteServico.servPrdt)
public servPrdtId2:string | null;

public constructor(init?: Partial<VeteServico>) {
    super();
    Object.assign(this, init);
}
}
