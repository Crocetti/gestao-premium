import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,RelationId} from "typeorm";
import {PecrDadosAbcz} from './pecr-dados-abcz'
import {PecrEventoSanitario} from './pecr-evento-sanitario'
import {PecrHistoricoCategoria} from './pecr-historico-categoria'
import {PecrHistoricoCobertura} from './pecr-historico-cobertura'
import {PecrHistoricoPesagem} from './pecr-historico-pesagem'
import {CdstProdutorRural} from './cdst-produtor-rural'
import {VetePelagem} from './vete-pelagem'
import {CdstProduto} from './cdst-produto'
import {CdstPropriedadeRural} from './cdst-propriedade-rural'
import {PecrRaca} from './pecr-raca'


@Index("FK_CRDR_RS_PRBV",["prbvCrdrId",],{  })
@Index("FK_PDRR_RS_PRBV",["prbvPdrrId",],{  })
@Index("FK_PLGM_RS_PRBV",["prbvPlgmId",],{  })
@Index("FK_PMAE_RS_PRBV",["prbvPmaeId",],{  })
@Index("FK_PPAI_RS_PRBV",["prbvPpaiId",],{  })
@Index("FK_PPRR_RS_PRBV",["prbvPprrId",],{  })
@Index("FK_PRDT_RS_PRBV",["prbvPrdtId",],{  })
@Index("FK_RACA_RS_PRBV",["prbvRacaId",],{  })
@Index("PK_PECR_PRODUTO_BOVINO",["prbvId",],{ unique:true })
@Entity("PECR_PRODUTO_BOVINO")
export  class PecrProdutoBovino extends BaseEntity {

@Column("varchar",{ primary:true,name:"PRBV_ID",length:27 })
public prbvId:string;

@Column("varchar",{ name:"PRBV_PPRR_ID",nullable:true,length:27 })
public prbvPprrId:string | null;

@Column("varchar",{ name:"PRBV_RACA_ID",nullable:true,length:27 })
public prbvRacaId:string | null;

@Column("varchar",{ name:"PRBV_PLGM_ID",nullable:true,length:27 })
public prbvPlgmId:string | null;

@Column("varchar",{ name:"PRBV_PPAI_ID",nullable:true,length:27 })
public prbvPpaiId:string | null;

@Column("varchar",{ name:"PRBV_PRDT_ID",nullable:true,length:27 })
public prbvPrdtId:string | null;

@Column("varchar",{ name:"PRBV_PMAE_ID",nullable:true,length:27 })
public prbvPmaeId:string | null;

@Column("varchar",{ name:"PRBV_CRDR_ID",nullable:true,length:27 })
public prbvCrdrId:string | null;

@Column("varchar",{ name:"PRBV_PDRR_ID",nullable:true,length:27 })
public prbvPdrrId:string | null;

@Column("varchar",{ name:"PRBV_NR_FAZENDA",nullable:true,length:15 })
public prbvNrFazenda:string | null;

@Column("varchar",{ name:"PRBV_NR_SISBOV_MANEJO",nullable:true,length:15 })
public prbvNrSisbovManejo:string | null;

@Column("varchar",{ name:"PRBV_SEXO",nullable:true,length:10 })
public prbvSexo:string | null;

@Column("datetime",{ name:"PRBV_DT_NASCIMENTO",nullable:true })
public prbvDtNascimento:LocalDateTime | null;

@Column("datetime",{ name:"PRBV_DT_MORTE",nullable:true })
public prbvDtMorte:LocalDateTime | null;

@Column("numeric",{ name:"PRBV_PESO_NASCIMENTO",nullable:true,precision:18,scale:4,default: () => "0", })
public prbvPesoNascimento:number | null;

@Column("numeric",{ name:"PRBV_PESO_DESMAMA",nullable:true,precision:18,scale:4,default: () => "0", })
public prbvPesoDesmama:number | null;

@Column("varchar",{ name:"PRBV_ORIGEM",nullable:true,length:10 })
public prbvOrigem:string | null;

@Column("varchar",{ name:"PRBV_TIPO",nullable:true,length:15 })
public prbvTipo:string | null;

@Column("datetime",{ name:"PRBVLASTUPDATE",nullable:true })
public prbvlastupdate:LocalDateTime | null;

@OneToMany(()=>PecrDadosAbcz,pecrDadosAbcz=>pecrDadosAbcz.abczPrbv)


public pecrDadosAbczs:PecrDadosAbcz[];

@OneToMany(()=>PecrEventoSanitario,pecrEventoSanitario=>pecrEventoSanitario.evsnPrbv)


public pecrEventoSanitarios:PecrEventoSanitario[];

@OneToMany(()=>PecrHistoricoCategoria,pecrHistoricoCategoria=>pecrHistoricoCategoria.hsctPrbv)


public pecrHistoricoCategorias:PecrHistoricoCategoria[];

@OneToMany(()=>PecrHistoricoCobertura,pecrHistoricoCobertura=>pecrHistoricoCobertura.hscbTref)


public pecrHistoricoCoberturas:PecrHistoricoCobertura[];

@OneToMany(()=>PecrHistoricoCobertura,pecrHistoricoCobertura=>pecrHistoricoCobertura.hscbPrbv)


public pecrHistoricoCoberturas2:PecrHistoricoCobertura[];

@OneToMany(()=>PecrHistoricoCobertura,pecrHistoricoCobertura=>pecrHistoricoCobertura.hscbDoad)


public pecrHistoricoCoberturas3:PecrHistoricoCobertura[];

@OneToMany(()=>PecrHistoricoCobertura,pecrHistoricoCobertura=>pecrHistoricoCobertura.hscbTrpv)


public pecrHistoricoCoberturas4:PecrHistoricoCobertura[];

@OneToMany(()=>PecrHistoricoPesagem,pecrHistoricoPesagem=>pecrHistoricoPesagem.hspsPrbv)


public pecrHistoricoPesagems:PecrHistoricoPesagem[];

@ManyToOne(()=>CdstProdutorRural,cdstProdutorRural=>cdstProdutorRural.pecrProdutoBovinos)
@JoinColumn([{ name: "PRBV_CRDR_ID", referencedColumnName: "pdrrId" },
])

public prbvCrdr:CdstProdutorRural;

@ManyToOne(()=>VetePelagem,vetePelagem=>vetePelagem.pecrProdutoBovinos)
@JoinColumn([{ name: "PRBV_PLGM_ID", referencedColumnName: "plgmId" },
])

public prbvPlgm:VetePelagem;

@ManyToOne(()=>CdstProdutorRural,cdstProdutorRural=>cdstProdutorRural.pecrProdutoBovinos2)
@JoinColumn([{ name: "PRBV_PDRR_ID", referencedColumnName: "pdrrId" },
])

public prbvPdrr:CdstProdutorRural;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.pecrProdutoBovinos)
@JoinColumn([{ name: "PRBV_PMAE_ID", referencedColumnName: "prdtId" },
])

public prbvPmae:CdstProduto;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.pecrProdutoBovinos2)
@JoinColumn([{ name: "PRBV_PPAI_ID", referencedColumnName: "prdtId" },
])

public prbvPpai:CdstProduto;

@ManyToOne(()=>CdstPropriedadeRural,cdstPropriedadeRural=>cdstPropriedadeRural.pecrProdutoBovinos)
@JoinColumn([{ name: "PRBV_PPRR_ID", referencedColumnName: "pprrId" },
])

public prbvPprr:CdstPropriedadeRural;

@ManyToOne(()=>CdstProduto,cdstProduto=>cdstProduto.pecrProdutoBovinos3)
@JoinColumn([{ name: "PRBV_PRDT_ID", referencedColumnName: "prdtId" },
])

public prbvPrdt:CdstProduto;

@ManyToOne(()=>PecrRaca,pecrRaca=>pecrRaca.pecrProdutoBovinos)
@JoinColumn([{ name: "PRBV_RACA_ID", referencedColumnName: "racaId" },
])

public prbvRaca:PecrRaca;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvCrdr)
public prbvCrdrId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvPlgm)
public prbvPlgmId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvPdrr)
public prbvPdrrId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvPmae)
public prbvPmaeId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvPpai)
public prbvPpaiId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvPprr)
public prbvPprrId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvPrdt)
public prbvPrdtId2:string | null;

@RelationId((pecrProdutoBovino:PecrProdutoBovino)=>pecrProdutoBovino.prbvRaca)
public prbvRacaId2:string | null;

public constructor(init?: Partial<PecrProdutoBovino>) {
    super();
    Object.assign(this, init);
}
}
