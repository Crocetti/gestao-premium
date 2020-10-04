import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CmnsBairro} from './cmns-bairro'
import {CmnsPessoa} from './cmns-pessoa'
import {CmnsTipoEndereco} from './cmns-tipo-endereco'


@Index("FK_BAIR_RS_PSEN",["psenBairId",],{  })
@Index("FK_PESS_RS_PSEN",["psenPessId",],{  })
@Index("FK_TPEN_RS_PSEN",["psenTpenId",],{  })
@Index("PK_CMNS_PESSOA_ENDERECO",["psenId",],{ unique:true })
@Entity("CMNS_PESSOA_ENDERECO")
export  class CmnsPessoaEndereco extends BaseEntity {

@Column("varchar",{ primary:true,name:"PSEN_ID",length:27 })
public psenId:string;

@Column("varchar",{ name:"PSEN_TPEN_ID",nullable:true,length:27 })
public psenTpenId:string | null;

@Column("varchar",{ name:"PSEN_BAIR_ID",nullable:true,length:27 })
public psenBairId:string | null;

@Column("varchar",{ name:"PSEN_PESS_ID",nullable:true,length:27 })
public psenPessId:string | null;

@Column("varchar",{ name:"PSEN_CEP",nullable:true,length:9 })
public psenCep:string | null;

@Column("varchar",{ name:"PSEN_LOGRADOURO",nullable:true,length:128 })
public psenLogradouro:string | null;

@Column("varchar",{ name:"PSEN_NUMERO",nullable:true,length:20 })
public psenNumero:string | null;

@Column("varchar",{ name:"PSEN_COMPLEMENTO",nullable:true,length:40 })
public psenComplemento:string | null;

@Column("numeric",{ name:"PSEN_DISTANCIA_KM",nullable:true,precision:18,scale:4,default: () => "0", })
public psenDistanciaKm:number | null;

@Column("varchar",{ name:"PSEN_ZONA",nullable:true,length:15 })
public psenZona:string | null;

@Column("datetime",{ name:"PSEN_LASTUPDATE",nullable:true })
public psenLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsBairro,cmnsBairro=>cmnsBairro.cmnsPessoaEnderecos)
@JoinColumn([{ name: "PSEN_BAIR_ID", referencedColumnName: "bairId" },
])

public psenBair:CmnsBairro;

@ManyToOne(()=>CmnsPessoa,cmnsPessoa=>cmnsPessoa.cmnsPessoaEnderecos)
@JoinColumn([{ name: "PSEN_PESS_ID", referencedColumnName: "pessId" },
])

public psenPess:CmnsPessoa;

@ManyToOne(()=>CmnsTipoEndereco,cmnsTipoEndereco=>cmnsTipoEndereco.cmnsPessoaEnderecos)
@JoinColumn([{ name: "PSEN_TPEN_ID", referencedColumnName: "tpenId" },
])

public psenTpen:CmnsTipoEndereco;

@RelationId((cmnsPessoaEndereco:CmnsPessoaEndereco)=>cmnsPessoaEndereco.psenBair)
public psenBairId2:string | null;

@RelationId((cmnsPessoaEndereco:CmnsPessoaEndereco)=>cmnsPessoaEndereco.psenPess)
public psenPessId2:string | null;

@RelationId((cmnsPessoaEndereco:CmnsPessoaEndereco)=>cmnsPessoaEndereco.psenTpen)
public psenTpenId2:string | null;

public constructor(init?: Partial<CmnsPessoaEndereco>) {
    super();
    Object.assign(this, init);
}
}
