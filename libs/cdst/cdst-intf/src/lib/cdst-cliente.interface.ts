import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CmnsPessoa} from './cmns-pessoa'
import {EstqCapaMovimento} from './estq-capa-movimento'
import {FncrTitulo} from './fncr-titulo'
import {FsclDocumento} from './fscl-documento'


@Index("FK_PESS_RS_CLNT",["clntPessId",],{  })
@Index("PK_CDST_CLIENTE",["clntId",],{ unique:true })
@Entity("CDST_CLIENTE")
export  class CdstCliente extends BaseEntity {

@Column("varchar",{ primary:true,name:"CLNT_ID",length:27 })
public clntId:string;

@Column("varchar",{ name:"CLNT_PESS_ID",nullable:true,length:27 })
public clntPessId:string | null;

@Column("varchar",{ name:"CLNT_POTENCIAL",nullable:true,length:15 })
public clntPotencial:string | null;

@Column("money",{ name:"CLNT_CAPITAL_SOCIAL",nullable:true,default: () => "0", })
public clntCapitalSocial:number | null;

@Column("money",{ name:"CLNT_LIMITE_CREDITO",nullable:true,default: () => "0", })
public clntLimiteCredito:number | null;

@Column("varchar",{ name:"CLNT_STATUS",length:15 })
public clntStatus:string;

@Column("smallint",{ name:"CLNT_ATIVO",default: () => "0", })
public clntAtivo:number;

@Column("varchar",{ name:"CLNT_OBS",nullable:true,length:5000 })
public clntObs:string | null;

@Column("datetime",{ name:"CLNT_LASTUPDATE",nullable:true })
public clntLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cdstClientes)
@JoinColumn([{ name: "CLNT_PESS_ID", referencedColumnName: "pessId" },
])

public clntPess:CmnsPessoa;

@OneToMany(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.cpmvClnt)


public estqCapaMovimentos:EstqCapaMovimento[];

@OneToMany(()=>FncrTitulo,fncrTitulo=>fncrTitulo.ttlsClnt)


public fncrTitulos:FncrTitulo[];

@OneToMany(()=>FsclDocumento,fsclDocumento=>fsclDocumento.dcmtClnt)


public fsclDocumentos:FsclDocumento[];

@RelationId((cdstCliente:CdstCliente)=>cdstCliente.clntPess)
public clntPessId2:string | null;

public constructor(init?: Partial<CdstCliente>) {
    super();
    Object.assign(this, init);
}
}
