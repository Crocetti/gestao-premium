import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {EstqMercadoria} from './estq-mercadoria'
import {FsclRegimeTributario} from './fscl-regime-tributario'


@Index("PK_FSCL_NCMS",["ncmsId",],{ unique:true })
@Entity("FSCL_NCMS")
export  class FsclNcms extends BaseEntity {

@Column("varchar",{ primary:true,name:"NCMS_ID",length:27 })
public ncmsId:string;

@Column("varchar",{ name:"NCMS_CODIGO",nullable:true,length:10 })
public ncmsCodigo:string | null;

@Column("varchar",{ name:"NCMS_NOME",nullable:true,length:5000 })
public ncmsNome:string | null;

@Column("smallint",{ name:"NCMS_TRIBUTA_PIS",nullable:true,default: () => "0", })
public ncmsTributaPis:number | null;

@Column("smallint",{ name:"NCMS_TRIBUTA_COFINS",nullable:true,default: () => "0", })
public ncmsTributaCofins:number | null;

@Column("smallint",{ name:"NCMS_RETEM_PIS",nullable:true,default: () => "0", })
public ncmsRetemPis:number | null;

@Column("smallint",{ name:"NCMS_RETEM_COFINS",nullable:true,default: () => "0", })
public ncmsRetemCofins:number | null;

@Column("smallint",{ name:"NCMS_RETEM_CSLL",nullable:true,default: () => "0", })
public ncmsRetemCsll:number | null;

@Column("numeric",{ name:"NCMS_ALIQUOTA_IR",nullable:true,precision:18,scale:4 })
public ncmsAliquotaIr:number | null;

@Column("varchar",{ name:"NCMS_CST_IPI",nullable:true,length:3 })
public ncmsCstIpi:string | null;

@Column("numeric",{ name:"NCMS_ALIQUOTA_IPI",nullable:true,precision:18,scale:4 })
public ncmsAliquotaIpi:number | null;

@Column("varchar",{ name:"NCMS_TIPO",nullable:true,length:10 })
public ncmsTipo:string | null;

@Column("varchar",{ name:"NCMS_CST_COFINS_ENTRADA",nullable:true,length:3 })
public ncmsCstCofinsEntrada:string | null;

@Column("numeric",{ name:"NCMS_ALIQ_COFINS_ENTRADA",nullable:true,precision:18,scale:4 })
public ncmsAliqCofinsEntrada:number | null;

@Column("varchar",{ name:"NCMS_CST_COFINS_SAIDA",nullable:true,length:3 })
public ncmsCstCofinsSaida:string | null;

@Column("numeric",{ name:"NCMS_ALIQ_COFINS_SAIDA",nullable:true,precision:18,scale:4 })
public ncmsAliqCofinsSaida:number | null;

@Column("varchar",{ name:"NCMS_CST_PIS_ENTRADA",nullable:true,length:3 })
public ncmsCstPisEntrada:string | null;

@Column("numeric",{ name:"NCMS_ALIQ_PIS_ENTRADA",nullable:true,precision:18,scale:4 })
public ncmsAliqPisEntrada:number | null;

@Column("varchar",{ name:"NCMS_CST_PIS_SSIDA",nullable:true,length:3 })
public ncmsCstPisSsida:string | null;

@Column("numeric",{ name:"NCMS_ALIQ_PIS_SAIDA",nullable:true,precision:18,scale:4 })
public ncmsAliqPisSaida:number | null;

@Column("varchar",{ name:"NCMS_ANP",nullable:true,length:20 })
public ncmsAnp:string | null;

@Column("datetime",{ name:"NCMS_LASTUPDATE",nullable:true })
public ncmsLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqMercadoria,estqMercadoria=>estqMercadoria.mrcdNcms)


public estqMercadorias:EstqMercadoria[];

@OneToMany(()=>FsclRegimeTributario,fsclRegimeTributario=>fsclRegimeTributario.rgtbNcms)


public fsclRegimeTributarios:FsclRegimeTributario[];

public constructor(init?: Partial<FsclNcms>) {
    super();
    Object.assign(this, init);
}
}
