import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {EstqCapaMovimento} from './estq-capa-movimento'
import {FncrTitulo} from './fncr-titulo'
import {FsclDocumento} from './fscl-documento'
import {VeteOrdemDeServico} from './vete-ordem-de-servico'


@Index("PK_FNCR_FORMA_VENCIMENTO",["frvnId",],{ unique:true })
@Entity("FNCR_FORMA_VENCIMENTO")
export  class FncrFormaVencimento extends BaseEntity {

@Column("varchar",{ primary:true,name:"FRVN_ID",length:27 })
public frvnId:string;

@Column("varchar",{ name:"FRVN_TIPO",nullable:true,length:10 })
public frvnTipo:string | null;

@Column("varchar",{ name:"FRVN_CODIGO",nullable:true,length:5 })
public frvnCodigo:string | null;

@Column("varchar",{ name:"FRVN_NOME",nullable:true,length:64 })
public frvnNome:string | null;

@Column("smallint",{ name:"FRVN_DIA_FIXO",nullable:true,default: () => "0", })
public frvnDiaFixo:number | null;

@Column("smallint",{ name:"FRVN_ENTRADA",nullable:true,default: () => "0", })
public frvnEntrada:number | null;

@Column("smallint",{ name:"FRVN_COBRA_JUROS",nullable:true,default: () => "0", })
public frvnCobraJuros:number | null;

@Column("int",{ name:"FRVN_PARCELAS",nullable:true })
public frvnParcelas:number | null;

@Column("int",{ name:"FRVN_DIA_VENCIMENTO",nullable:true })
public frvnDiaVencimento:number | null;

@Column("int",{ name:"FRVN_INTERVALO",nullable:true })
public frvnIntervalo:number | null;

@Column("numeric",{ name:"FRVN_TAXA_JUROS",nullable:true,precision:18,scale:4 })
public frvnTaxaJuros:number | null;

@Column("datetime",{ name:"FRVN_LASTUPDATE",nullable:true })
public frvnLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqCapaMovimento,estqCapaMovimento=>estqCapaMovimento.cpmvFrvn)


public estqCapaMovimentos:EstqCapaMovimento[];

@OneToMany(()=>FncrTitulo,fncrTitulo=>fncrTitulo.ttlsFrvn)


public fncrTitulos:FncrTitulo[];

@OneToMany(()=>FsclDocumento,fsclDocumento=>fsclDocumento.dcmtFrvn)


public fsclDocumentos:FsclDocumento[];

@OneToMany(()=>VeteOrdemDeServico,veteOrdemDeServico=>veteOrdemDeServico.osvtFrvn)


public veteOrdemDeServicos:VeteOrdemDeServico[];

public constructor(init?: Partial<FncrFormaVencimento>) {
    super();
    Object.assign(this, init);
}
}
