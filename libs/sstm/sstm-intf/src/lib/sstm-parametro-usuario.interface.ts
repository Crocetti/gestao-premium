import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SstmParametro} from './sstm-parametro'
import {CmnsUsuario} from './cmns-usuario'


@Index("FK_PRMT_RS_PRUS",["prusPrmtId",],{  })
@Index("FK_USRS_RS_PRUS",["prusUsrsId",],{  })
@Index("PK_SSTM_PARAMETRO_USUARIO",["prusId",],{ unique:true })
@Entity("SSTM_PARAMETRO_USUARIO")
export  class SstmParametroUsuario extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRUS_ID",length:27 })
public prusId:string;

@Column("varchar",{ name:"PRUS_PRMT_ID",nullable:true,length:27 })
public prusPrmtId:string | null;

@Column("varchar",{ name:"PRUS_USRS_ID",nullable:true,length:27 })
public prusUsrsId:string | null;

@Column("varchar",{ name:"PRUS_DEFAULT",nullable:true,length:128 })
public prusDefault:string | null;

@Column("varchar",{ name:"PRUS_VALUE",nullable:true,length:128 })
public prusValue:string | null;

@Column("smallint",{ name:"PRUS_HABILITADO",nullable:true,default: () => "0", })
public prusHabilitado:number | null;

@Column("datetime",{ name:"PRUS_LASTUPDATE",nullable:true })
public prusLastupdate:LocalDateTime | null;

@ManyToOne(()=>SstmParametro,sstmParametro=>sstmParametro.sstmParametroUsuarios)
@JoinColumn([{ name: "PRUS_PRMT_ID", referencedColumnName: "prmtId" },
])

public prusPrmt:SstmParametro;

@ManyToOne(()=>CmnsUsuario,cmnsUsuario=>cmnsUsuario.sstmParametroUsuarios)
@JoinColumn([{ name: "PRUS_USRS_ID", referencedColumnName: "usrsId" },
])

public prusUsrs:CmnsUsuario;

@RelationId((sstmParametroUsuario:SstmParametroUsuario)=>sstmParametroUsuario.prusPrmt)
public prusPrmtId2:string | null;

@RelationId((sstmParametroUsuario:SstmParametroUsuario)=>sstmParametroUsuario.prusUsrs)
public prusUsrsId2:string | null;

public constructor(init?: Partial<SstmParametroUsuario>) {
    super();
    Object.assign(this, init);
}
}
