import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {EstqLoteValidade} from './estq-lote-validade'
import {EstqGrupo} from './estq-grupo'
import {EstqMarca} from './estq-marca'
import {EstqModelo} from './estq-modelo'
import {FsclNcms} from './fscl-ncms'
import {CdstProduto} from './cdst-produto'
import {EstqSubgrupo} from './estq-subgrupo'
import {SrvcServicoPecas} from './srvc-servico-pecas'


@Index("FK_GRPS_RS_MRCD",["mrcdGrpsId",],{  })
@Index("FK_MARC_RS_MRCD",["mrcdMarcId",],{  })
@Index("FK_MODE_RS_MRCD",["mrcdModeId",],{  })
@Index("FK_NCMS_RS_MRCD",["mrcdNcmsId",],{  })
@Index("FK_PRDT_RS_MRCD",["mrcdPrdtId",],{  })
@Index("FK_SBGP_RS_MRCD",["mrcdSbgpId",],{  })
@Index("PK_ESTQ_MERCADORIA",["mrcdId",],{ unique:true })
@Entity("ESTQ_MERCADORIA")
export  class EstqMercadoria extends BaseEntity {

@Column("varchar",{ primary:true,name:"MRCD_ID",length:27 })
public mrcdId:string;

@Column("varchar",{ name:"MRCD_NCMS_ID",nullable:true,length:27 })
public mrcdNcmsId:string | null;

@Column("varchar",{ name:"MRCD_PRDT_ID",nullable:true,length:27 })
public mrcdPrdtId:string | null;

@Column("varchar",{ name:"MRCD_MARC_ID",nullable:true,length:27 })
public mrcdMarcId:string | null;

@Column("varchar",{ name:"MRCD_GRPS_ID",nullable:true,length:27 })
public mrcdGrpsId:string | null;

@Column("varchar",{ name:"MRCD_SBGP_ID",nullable:true,length:27 })
public mrcdSbgpId:string | null;

@Column("varchar",{ name:"MRCD_MODE_ID",nullable:true,length:27 })
public mrcdModeId:string | null;

@Column("varchar",{ name:"MRCD_CODIGO",nullable:true,length:15 })
public mrcdCodigo:string | null;

@Column("varchar",{ name:"MRCD_NOME_REDUZIDO",nullable:true,length:40 })
public mrcdNomeReduzido:string | null;

@Column("varchar",{ name:"MRCD_REFERENCIA",nullable:true,length:40 })
public mrcdReferencia:string | null;

@Column("varchar",{ name:"MRCD_REFERENCIA_AUX",nullable:true,length:40 })
public mrcdReferenciaAux:string | null;

@Column("money",{ name:"MRCD_PRECO_ULT_COMPRA",nullable:true,default: () => "0", })
public mrcdPrecoUltCompra:number | null;

@Column("money",{ name:"MRCD_PRECO_CUSTO",nullable:true,default: () => "0", })
public mrcdPrecoCusto:number | null;

@Column("numeric",{ name:"MRCD_ESTOQUE_MINIMO",nullable:true,precision:18,scale:4,default: () => "0", })
public mrcdEstoqueMinimo:number | null;

@Column("smallint",{ name:"MRCD_ESTOQUE_NEGATIVO",nullable:true,default: () => "0", })
public mrcdEstoqueNegativo:number | null;

@Column("smallint",{ name:"MRCD_ATIVO",nullable:true,default: () => "0", })
public mrcdAtivo:number | null;

@Column("smallint",{ name:"MRCD_CONTROLA_LOTE",nullable:true,default: () => "0", })
public mrcdControlaLote:number | null;

@Column("datetime",{ name:"MRCD_LASTUPDATE",nullable:true })
public mrcdLastupdate:LocalDateTime | null;

@OneToMany(()=>EstqLoteValidade,estqLoteValidade=>estqLoteValidade.ltvlMrcd)


public estqLoteValidades:EstqLoteValidade[];

@ManyToOne(()=>EstqGrupo,estqGrupo=>estqGrupo.estqMercadorias)
@JoinColumn([{ name: "MRCD_GRPS_ID", referencedColumnName: "grpsId" },
])

public mrcdGrps:EstqGrupo;

@ManyToOne(()=>EstqMarca,estqMarca=>estqMarca.estqMercadorias)
@JoinColumn([{ name: "MRCD_MARC_ID", referencedColumnName: "marcId" },
])

public mrcdMarc:EstqMarca;

@ManyToOne(()=>EstqModelo,estqModelo=>estqModelo.estqMercadorias)
@JoinColumn([{ name: "MRCD_MODE_ID", referencedColumnName: "modeId" },
])

public mrcdMode:EstqModelo;

@ManyToOne(()=>FsclNcms,fsclNcms=>fsclNcms.estqMercadorias)
@JoinColumn([{ name: "MRCD_NCMS_ID", referencedColumnName: "ncmsId" },
])

public mrcdNcms:FsclNcms;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.estqMercadorias)
@JoinColumn([{ name: "MRCD_PRDT_ID", referencedColumnName: "prdtId" },
])

public mrcdPrdt:CdstProduto;

@ManyToOne(()=>EstqSubgrupo,estqSubgrupo=>estqSubgrupo.estqMercadorias)
@JoinColumn([{ name: "MRCD_SBGP_ID", referencedColumnName: "sbgpId" },
])

public mrcdSbgp:EstqSubgrupo;

@OneToMany(()=>SrvcServicoPecas,srvcServicoPecas=>srvcServicoPecas.srpcMrcd)


public srvcServicoPecas:SrvcServicoPecas[];

@RelationId((estqMercadoria:EstqMercadoria)=>estqMercadoria.mrcdGrps)
public mrcdGrpsId2:string | null;

@RelationId((estqMercadoria:EstqMercadoria)=>estqMercadoria.mrcdMarc)
public mrcdMarcId2:string | null;

@RelationId((estqMercadoria:EstqMercadoria)=>estqMercadoria.mrcdMode)
public mrcdModeId2:string | null;

@RelationId((estqMercadoria:EstqMercadoria)=>estqMercadoria.mrcdNcms)
public mrcdNcmsId2:string | null;

@RelationId((estqMercadoria:EstqMercadoria)=>estqMercadoria.mrcdPrdt)
public mrcdPrdtId2:string | null;

@RelationId((estqMercadoria:EstqMercadoria)=>estqMercadoria.mrcdSbgp)
public mrcdSbgpId2:string | null;

public constructor(init?: Partial<EstqMercadoria>) {
    super();
    Object.assign(this, init);
}
}
