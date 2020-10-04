import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {VeteServico} from './vete-servico'
import {CdstProduto} from './cdst-produto'


@Index("FK_PRDT_RS_SVCP",["svcpPrdtId",],{  })
@Index("FK_SERV_RS_SVCP",["svcpServId",],{  })
@Index("PK_VETE_SERVICO_COMPOSICAO",["svcpId",],{ unique:true })
@Entity("VETE_SERVICO_COMPOSICAO")
export  class VeteServicoComposicao extends BaseEntity {

@Column("varchar",{ primary:true,name:"SVCP_ID",length:27 })
public svcpId:string;

@Column("varchar",{ name:"SVCP_SERV_ID",nullable:true,length:27 })
public svcpServId:string | null;

@Column("varchar",{ name:"SVCP_PRDT_ID",nullable:true,length:27 })
public svcpPrdtId:string | null;

@Column("varchar",{ name:"SVCP_TIPO",nullable:true,length:15 })
public svcpTipo:string | null;

@Column("numeric",{ name:"SVCP_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public svcpQuantidade:number | null;

@Column("money",{ name:"SVCP_CUSTO_UNITARIO",nullable:true,default: () => "0", })
public svcpCustoUnitario:number | null;

@Column("money",{ name:"SVCP_CUSTO_TOTAL",nullable:true,default: () => "0", })
public svcpCustoTotal:number | null;

@Column("datetime",{ name:"SVCP_LASTUPDATE",nullable:true })
public svcpLastupdate:LocalDateTime | null;

@ManyToOne(()=>VeteServico,veteServico=>veteServico.veteServicoComposicaos)
@JoinColumn([{ name: "SVCP_SERV_ID", referencedColumnName: "servId" },
])

public svcpServ:VeteServico;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.veteServicoComposicaos)
@JoinColumn([{ name: "SVCP_PRDT_ID", referencedColumnName: "prdtId" },
])

public svcpPrdt:CdstProduto;

@RelationId((veteServicoComposicao:VeteServicoComposicao)=>veteServicoComposicao.svcpServ)
public svcpServId2:string | null;

@RelationId((veteServicoComposicao:VeteServicoComposicao)=>veteServicoComposicao.svcpPrdt)
public svcpPrdtId2:string | null;

public constructor(init?: Partial<VeteServicoComposicao>) {
    super();
    Object.assign(this, init);
}
}
