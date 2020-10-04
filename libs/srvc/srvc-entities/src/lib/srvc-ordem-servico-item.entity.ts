import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SrvcServico} from './srvc-servico'
import {SrvcOrdemServico} from './srvc-ordem-servico'


@Index("FK_ODSV_RS_OSIT",["ositOdsvId",],{  })
@Index("FK_SRVC_RS_OSIT",["ositSrvcId",],{  })
@Index("PK_SRVC_ORDEM_SERVICO_ITEM",["ositId",],{ unique:true })
@Entity("SRVC_ORDEM_SERVICO_ITEM")
export  class SrvcOrdemServicoItem extends BaseEntity {

@Column("varchar",{ primary:true,name:"OSIT_ID",length:27 })
public ositId:string;

@Column("varchar",{ name:"OSIT_SRVC_ID",nullable:true,length:27 })
public ositSrvcId:string | null;

@Column("varchar",{ name:"OSIT_ODSV_ID",nullable:true,length:27 })
public ositOdsvId:string | null;

@Column("varchar",{ name:"OSIT_NUMERO",length:3 })
public ositNumero:string;

@Column("numeric",{ name:"OSIT_QUANTIDADE",nullable:true,precision:18,scale:4,default: () => "0", })
public ositQuantidade:number | null;

@Column("money",{ name:"OSIT_VALOR_UNITARIO",nullable:true,default: () => "0", })
public ositValorUnitario:number | null;

@Column("datetime",{ name:"OSIT_LASTUPDATE",nullable:true })
public ositLastupdate:LocalDateTime | null;

@ManyToOne(()=>SrvcServico,srvcServico=>srvcServico.srvcOrdemServicoItems)
@JoinColumn([{ name: "OSIT_SRVC_ID", referencedColumnName: "srvcId" },
])

public ositSrvc:SrvcServico;

@ManyToOne(()=>SrvcOrdemServico,srvcOrdemServico=>srvcOrdemServico.srvcOrdemServicoItems)
@JoinColumn([{ name: "OSIT_ODSV_ID", referencedColumnName: "odsvId" },
])

public ositOdsv:SrvcOrdemServico;

@RelationId((srvcOrdemServicoItem:SrvcOrdemServicoItem)=>srvcOrdemServicoItem.ositSrvc)
public ositSrvcId2:string | null;

@RelationId((srvcOrdemServicoItem:SrvcOrdemServicoItem)=>srvcOrdemServicoItem.ositOdsv)
public ositOdsvId2:string | null;

public constructor(init?: Partial<SrvcOrdemServicoItem>) {
    super();
    Object.assign(this, init);
}
}
