import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {CmnsPessoa} from './cmns-pessoa'
import {EstqCapaMovimento} from './estq-capa-movimento'
import {FncrTitulo} from './fncr-titulo'
import {FsclDocumento} from './fscl-documento'


@Index("FK_PESS_RS_FRNC",["frncPessId",],{  })
@Index("PK_CDST_FORNECEDOR",["frncId",],{ unique:true })
@Entity("CDST_FORNECEDOR")
export  class CdstFornecedor extends BaseEntity {

@Column("varchar",{ primary:true,name:"FRNC_ID",length:27 })
public frncId:string;

@Column("varchar",{ name:"FRNC_PESS_ID",nullable:true,length:27 })
public frncPessId:string | null;

@Column("smallint",{ name:"FRNC_ATIVO",default: () => "0", })
public frncAtivo:number;

@Column("varchar",{ name:"FRNC_OBS",nullable:true,length:5000 })
public frncObs:string | null;

@Column("datetime",{ name:"FRNC_LASTUPDATE",nullable:true })
public frncLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cdstFornecedors)
@JoinColumn([{ name: "FRNC_PESS_ID", referencedColumnName: "pessId" },
])

public frncPess:CmnsPessoa;

@OneToMany(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.cpmvFrnc)


public estqCapaMovimentos:EstqCapaMovimento[];

@OneToMany(()=>FncrTitulo,fncrTitulo=>fncrTitulo.ttlsFrnc)


public fncrTitulos:FncrTitulo[];

@OneToMany(()=>FsclDocumento,fsclDocumento=>fsclDocumento.dcmtFrnc)


public fsclDocumentos:FsclDocumento[];

@RelationId((cdstFornecedor:CdstFornecedor)=>cdstFornecedor.frncPess)
public frncPessId2:string | null;

public constructor(init?: Partial<CdstFornecedor>) {
    super();
    Object.assign(this, init);
}
}
