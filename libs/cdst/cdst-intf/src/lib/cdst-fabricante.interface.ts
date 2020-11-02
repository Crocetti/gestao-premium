import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CmnsPessoa} from './cmns-pessoa'
import {EstqFabricanteMotor} from './estq-fabricante-motor'
import {EstqMaquinaEquipamento} from './estq-maquina-equipamento'


@Index("FK_PESS_RS_FBCT",["fbctPessId",],{  })
@Index("PK_CDST_FABRICANTE",["fbctId",],{ unique:true })
@Entity("CDST_FABRICANTE")
export  class CdstFabricante extends BaseEntity {

@Column("varchar",{ primary:true,name:"FBCT_ID",length:27 })
public fbctId:string;

@Column("varchar",{ name:"FBCT_PESS_ID",nullable:true,length:27 })
public fbctPessId:string | null;

@Column("smallint",{ name:"FBCT_ATIVO",default: () => "0", })
public fbctAtivo:number;

@Column("varchar",{ name:"FBCT_OBS",nullable:true,length:5000 })
public fbctObs:string | null;

@Column("datetime",{ name:"FBCT_LASTUPDATE",nullable:true })
public fbctLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cdstFabricantes)
@JoinColumn([{ name: "FBCT_PESS_ID", referencedColumnName: "pessId" },
])

public fbctPess:CmnsPessoa;

@OneToMany(()=>EstqFabricanteMotor,estqFabricanteMotor=>estqFabricanteMotor.fbmtFbct)


public estqFabricanteMotors:EstqFabricanteMotor[];

@OneToMany(()=>EstqMaquinaEquipamento,estqMaquinaEquipamento=>estqMaquinaEquipamento.mqeqFbct)


public estqMaquinaEquipamentos:EstqMaquinaEquipamento[];

@RelationId((cdstFabricante:CdstFabricante)=>cdstFabricante.fbctPess)
public fbctPessId2:string | null;

public constructor(init?: Partial<CdstFabricante>) {
    super();
    Object.assign(this, init);
}
}
