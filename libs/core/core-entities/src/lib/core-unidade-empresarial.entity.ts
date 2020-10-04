import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CmnsUnemUsuario} from './cmns-unem-usuario'
import {CoreEmpresa} from './core-empresa'
import {CmnsPessoa} from './cmns-pessoa'
import {EstqNumeroDocumento} from './estq-numero-documento'
import {SstmParametroUnem} from './sstm-parametro-unem'


@Index("FK_EMPR_RS_UNEM",["unemEmprId",],{  })
@Index("FK_PESS_RS_UNEM",["unemPessId",],{  })
@Index("PK_CORE_UNIDADE_EMPRESARIAL",["unemId",],{ unique:true })
@Entity("CORE_UNIDADE_EMPRESARIAL")
export  class CoreUnidadeEmpresarial extends BaseEntity {

@Column("varchar",{ primary:true,name:"UNEM_ID",length:27 })
public unemId:string;

@Column("varchar",{ name:"UNEM_EMPR_ID",nullable:true,length:27 })
public unemEmprId:string | null;

@Column("varchar",{ name:"UNEM_PESS_ID",nullable:true,length:27 })
public unemPessId:string | null;

@Column("varchar",{ name:"UNEM_CODIGO",nullable:true,length:10 })
public unemCodigo:string | null;

@Column("smallint",{ name:"UNEM_ATIVO",nullable:true,default: () => "0", })
public unemAtivo:number | null;

@Column("varchar",{ name:"UNEM_SKIN_NAME",nullable:true,length:40 })
public unemSkinName:string | null;

@Column("varchar",{ name:"UNEM_SENHA",nullable:true,length:256 })
public unemSenha:string | null;

@Column("image",{ name:"UNEM_LOGOMARCA",nullable:true })
public unemLogomarca:Buffer | null;

@Column("datetime",{ name:"UNEM_LASTUPDATE",nullable:true })
public unemLastupdate:LocalDateTime | null;

@OneToMany(()=>CmnsUnemUsuario,cmnsUnemUsuario=>cmnsUnemUsuario.ueusUnem)


public cmnsUnemUsuarios:CmnsUnemUsuario[];

@ManyToOne(()=>CoreEmpresa,coreEmpresa=>coreEmpresa.coreUnidadeEmpresarials)
@JoinColumn([{ name: "UNEM_EMPR_ID", referencedColumnName: "emprId" },
])

public unemEmpr:CoreEmpresa;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.coreUnidadeEmpresarials)
@JoinColumn([{ name: "UNEM_PESS_ID", referencedColumnName: "pessId" },
])

public unemPess:CmnsPessoa;

@OneToMany(()=>EstqNumeroDocumento,estqNumeroDocumento=>estqNumeroDocumento.nrdcUnem)


public estqNumeroDocumentos:EstqNumeroDocumento[];

@OneToMany(()=>SstmParametroUnem,sstmParametroUnem=>sstmParametroUnem.prueUnem)


public sstmParametroUnems:SstmParametroUnem[];

@RelationId((coreUnidadeEmpresarial:CoreUnidadeEmpresarial)=>coreUnidadeEmpresarial.unemEmpr)
public unemEmprId2:string | null;

@RelationId((coreUnidadeEmpresarial:CoreUnidadeEmpresarial)=>coreUnidadeEmpresarial.unemPess)
public unemPessId2:string | null;

public constructor(init?: Partial<CoreUnidadeEmpresarial>) {
    super();
    Object.assign(this, init);
}
}
