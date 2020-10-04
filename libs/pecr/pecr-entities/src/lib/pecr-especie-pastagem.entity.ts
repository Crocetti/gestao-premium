import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {PecrUnidadeCriacao} from './pecr-unidade-criacao'


@Index("PK_PECR_ESPECIE_PASTAGEM",["espsId",],{ unique:true })
@Entity("PECR_ESPECIE_PASTAGEM")
export  class PecrEspeciePastagem extends BaseEntity {

@Column("varchar",{ primary:true,name:"ESPS_ID",length:27 })
public espsId:string;

@Column("varchar",{ name:"ESPS_FORRAGEIRA",nullable:true,length:128 })
public espsForrageira:string | null;

@Column("varchar",{ name:"ESPS_CULTIVAR",nullable:true,length:128 })
public espsCultivar:string | null;

@Column("int",{ name:"ESPS_DESCANSO_MEDIO",nullable:true })
public espsDescansoMedio:number | null;

@Column("numeric",{ name:"ESPS_ALTURA_RESIDUAL",nullable:true,precision:18,scale:4,default: () => "0", })
public espsAlturaResidual:number | null;

@Column("datetime",{ name:"ESPS_LASTUPDATE",nullable:true })
public espsLastupdate:LocalDateTime | null;

@OneToMany(()=>PecrUnidadeCriacao,pecrUnidadeCriacao=>pecrUnidadeCriacao.uncrEsps)


public pecrUnidadeCriacaos:PecrUnidadeCriacao[];

public constructor(init?: Partial<PecrEspeciePastagem>) {
    super();
    Object.assign(this, init);
}
}
