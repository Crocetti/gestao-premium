import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CdstPropriedadeRural} from './cdst-propriedade-rural'
import {PecrUnidadeCriacao} from './pecr-unidade-criacao'


@Index("FK_PPRR_RS_MDCR",["mdcrPprrId",],{  })
@Index("PK_PECR_MODULO_CRIACAO",["mdcrId",],{ unique:true })
@Entity("PECR_MODULO_CRIACAO")
export  class PecrModuloCriacao extends BaseEntity {

@Column("varchar",{ primary:true,name:"MDCR_ID",length:27 })
public mdcrId:string;

@Column("varchar",{ name:"MDCR_PPRR_ID",nullable:true,length:27 })
public mdcrPprrId:string | null;

@Column("varchar",{ name:"MDCR_CODIGO",nullable:true,length:10 })
public mdcrCodigo:string | null;

@Column("varchar",{ name:"MDCR_NOME",nullable:true,length:64 })
public mdcrNome:string | null;

@Column("numeric",{ name:"MDCR_AREA_TOTAL",nullable:true,precision:18,scale:4,default: () => "0", })
public mdcrAreaTotal:number | null;

@Column("numeric",{ name:"MDCR_AREA_RESERVA",nullable:true,precision:18,scale:4,default: () => "0", })
public mdcrAreaReserva:number | null;

@Column("numeric",{ name:"MDCR_LATITUDE",nullable:true,precision:18,scale:6 })
public mdcrLatitude:number | null;

@Column("numeric",{ name:"MDCR_LONGITUDE",nullable:true,precision:18,scale:6 })
public mdcrLongitude:number | null;

@Column("datetime",{ name:"MDCR_LASTUPDATE",nullable:true })
public mdcrLastupdate:LocalDateTime | null;

@ManyToOne(()=>CdstPropriedadeRural,cdstPropriedadeRural=>cdstPropriedadeRural.pecrModuloCriacaos)
@JoinColumn([{ name: "MDCR_PPRR_ID", referencedColumnName: "pprrId" },
])

public mdcrPprr:CdstPropriedadeRural;

@OneToMany(()=>PecrUnidadeCriacao,pecrUnidadeCriacao=>pecrUnidadeCriacao.uncrMdcr)


public pecrUnidadeCriacaos:PecrUnidadeCriacao[];

@RelationId((pecrModuloCriacao:PecrModuloCriacao)=>pecrModuloCriacao.mdcrPprr)
public mdcrPprrId2:string | null;

public constructor(init?: Partial<PecrModuloCriacao>) {
    super();
    Object.assign(this, init);
}
}
