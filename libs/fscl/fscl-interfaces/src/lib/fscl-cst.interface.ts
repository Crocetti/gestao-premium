import {BaseEntity,Column,Entity,Index} from "typeorm";


@Index("PK_FSCL_CST",["fcstId",],{ unique:true })
@Entity("FSCL_CST")
export  class FsclCst extends BaseEntity {

@Column("varchar",{ primary:true,name:"FCST_ID",length:27 })
public fcstId:string;

@Column("varchar",{ name:"FCST_CODIGO",nullable:true,length:3 })
public fcstCodigo:string | null;

@Column("varchar",{ name:"FCST_DESCRICAO",nullable:true,length:40 })
public fcstDescricao:string | null;

@Column("smallint",{ name:"FCST_IPI",nullable:true,default: () => "0", })
public fcstIpi:number | null;

@Column("varchar",{ name:"FCST_TIPO",nullable:true,length:10 })
public fcstTipo:string | null;

@Column("datetime",{ name:"FCST_LASTUPDATE",nullable:true })
public fcstLastupdate:LocalDateTime | null;

public constructor(init?: Partial<FsclCst>) {
    super();
    Object.assign(this, init);
}
}
