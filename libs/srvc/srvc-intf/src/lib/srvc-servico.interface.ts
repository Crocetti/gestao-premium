import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {SrvcOrdemServicoItem} from './srvc-ordem-servico-item'
import {CdstProduto} from './cdst-produto'
import {SrvcServicoComposicao} from './srvc-servico-composicao'
import {SrvcServicoMaqEquip} from './srvc-servico-maq-equip'
import {SrvcServicoPecas} from './srvc-servico-pecas'


@Index("FK_PRDT_RS_SRVC",["srvcPrdtId",],{  })
@Index("PK_SRVC_SERVICO",["srvcId",],{ unique:true })
@Entity("SRVC_SERVICO")
export  class SrvcServico extends BaseEntity {

@Column("varchar",{ primary:true,name:"SRVC_ID",length:27 })
public srvcId:string;

@Column("varchar",{ name:"SRVC_PRDT_ID",nullable:true,length:27 })
public srvcPrdtId:string | null;

@Column("varchar",{ name:"SRVC_CODIGO",length:10 })
public srvcCodigo:string;

@Column("money",{ name:"SRVC_VALOR_UNITARIO",nullable:true,default: () => "0", })
public srvcValorUnitario:number | null;

@Column("datetime",{ name:"SRVC_LASTUPDATE",nullable:true })
public srvcLastupdate:LocalDateTime | null;

@OneToMany(()=>SrvcOrdemServicoItem,srvcOrdemServicoItem=>srvcOrdemServicoItem.ositSrvc)


public srvcOrdemServicoItems:SrvcOrdemServicoItem[];

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.srvcServicos)
@JoinColumn([{ name: "SRVC_PRDT_ID", referencedColumnName: "prdtId" },
])

public srvcPrdt:CdstProduto;

@OneToMany(()=>SrvcServicoComposicao,srvcServicoComposicao=>srvcServicoComposicao.srcmSrvc)


public srvcServicoComposicaos:SrvcServicoComposicao[];

@OneToMany(()=>SrvcServicoMaqEquip,srvcServicoMaqEquip=>srvcServicoMaqEquip.srmeSrvc)


public srvcServicoMaqEquips:SrvcServicoMaqEquip[];

@OneToMany(()=>SrvcServicoPecas,srvcServicoPecas=>srvcServicoPecas.srpcSrvc)


public srvcServicoPecas:SrvcServicoPecas[];

@RelationId((srvcServico:SrvcServico)=>srvcServico.srvcPrdt)
public srvcPrdtId2:string | null;

public constructor(init?: Partial<SrvcServico>) {
    super();
    Object.assign(this, init);
}
}
