import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {SstmParametroCorporacao} from './sstm-parametro-corporacao'
import {SstmParametroEmpresa} from './sstm-parametro-empresa'
import {SstmParametroSistema} from './sstm-parametro-sistema'
import {SstmParametroUnem} from './sstm-parametro-unem'
import {SstmParametroUsuario} from './sstm-parametro-usuario'


@Index("PK_SSTM_PARAMETRO",["prmtId",],{ unique:true })
@Entity("SSTM_PARAMETRO")
export  class SstmParametro extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRMT_ID",length:27 })
public prmtId:string;

@Column("varchar",{ name:"PRMT_NOME",nullable:true,length:64 })
public prmtNome:string | null;

@Column("varchar",{ name:"PRMT_LABEL",nullable:true,length:40 })
public prmtLabel:string | null;

@Column("smallint",{ name:"PRMT_VISIVEL",nullable:true,default: () => "0", })
public prmtVisivel:number | null;

@Column("varchar",{ name:"PRMT_ORDENACAO",nullable:true,length:10 })
public prmtOrdenacao:string | null;

@Column("varchar",{ name:"PRMT_TP_DADO",nullable:true,length:10 })
public prmtTpDado:string | null;

@Column("varchar",{ name:"PRMT_FORMAT",nullable:true,length:25 })
public prmtFormat:string | null;

@Column("varchar",{ name:"PRMT_VLR_DEFAULT",nullable:true,length:128 })
public prmtVlrDefault:string | null;

@Column("varchar",{ name:"PRMT_TP_PARAMETRO",nullable:true,length:5 })
public prmtTpParametro:string | null;

@Column("smallint",{ name:"PRMT_HABILITADO",nullable:true,default: () => "0", })
public prmtHabilitado:number | null;

@Column("datetime",{ name:"PRMT_LASTUPDATE",nullable:true })
public prmtLastupdate:LocalDateTime | null;

@OneToMany(()=>SstmParametroCorporacao,sstmParametroCorporacao=>sstmParametroCorporacao.prcpPrmt)


public sstmParametroCorporacaos:SstmParametroCorporacao[];

@OneToMany(()=>SstmParametroEmpresa,sstmParametroEmpresa=>sstmParametroEmpresa.premPrmt)


public sstmParametroEmpresas:SstmParametroEmpresa[];

@OneToMany(()=>SstmParametroSistema,sstmParametroSistema=>sstmParametroSistema.prssPrmt)


public sstmParametroSistemas:SstmParametroSistema[];

@OneToMany(()=>SstmParametroUnem,sstmParametroUnem=>sstmParametroUnem.pruePrmt)


public sstmParametroUnems:SstmParametroUnem[];

@OneToMany(()=>SstmParametroUsuario,sstmParametroUsuario=>sstmParametroUsuario.prusPrmt)


public sstmParametroUsuarios:SstmParametroUsuario[];

public constructor(init?: Partial<SstmParametro>) {
    super();
    Object.assign(this, init);
}
}
