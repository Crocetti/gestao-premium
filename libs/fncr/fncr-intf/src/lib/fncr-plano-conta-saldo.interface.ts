import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {FncrPlanoConta} from './fncr-plano-conta'


@Index("FK_PLCT_RS_PCSD",["pcsdPlctId",],{  })
@Index("PK_FNCR_PLANO_CONTA_SALDO",["pcsdId",],{ unique:true })
@Entity("FNCR_PLANO_CONTA_SALDO")
export  class FncrPlanoContaSaldo extends BaseEntity {

@Column("varchar",{ primary:true,name:"PCSD_ID",length:27 })
public pcsdId:string;

@Column("varchar",{ name:"PCSD_PLCT_ID",nullable:true,length:27 })
public pcsdPlctId:string | null;

@Column("datetime",{ name:"PCSD_PERIODO",nullable:true })
public pcsdPeriodo:LocalDateTime | null;

@Column("money",{ name:"PCSD_INICIAL",nullable:true,default: () => "0", })
public pcsdInicial:number | null;

@Column("money",{ name:"PCSD_ENTRADAS",nullable:true,default: () => "0", })
public pcsdEntradas:number | null;

@Column("money",{ name:"PCSD_SAIDAS",nullable:true,default: () => "0", })
public pcsdSaidas:number | null;

@Column("money",{ name:"PCSD_FINAL",nullable:true,default: () => "0", })
public pcsdFinal:number | null;

@Column("datetime",{ name:"PCSD_LASTUPDATE",nullable:true })
public pcsdLastupdate:LocalDateTime | null;

@ManyToOne(()=>FncrPlanoConta,fncrPlanoConta=>fncrPlanoConta.fncrPlanoContaSaldos)
@JoinColumn([{ name: "PCSD_PLCT_ID", referencedColumnName: "plctId" },
])

public pcsdPlct:FncrPlanoConta;

@RelationId((fncrPlanoContaSaldo:FncrPlanoContaSaldo)=>fncrPlanoContaSaldo.pcsdPlct)
public pcsdPlctId2:string | null;

public constructor(init?: Partial<FncrPlanoContaSaldo>) {
    super();
    Object.assign(this, init);
}
}
