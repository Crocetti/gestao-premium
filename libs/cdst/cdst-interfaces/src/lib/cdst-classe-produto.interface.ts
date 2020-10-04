import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {CdstProduto} from './cdst-produto'
import {PecrAfixos} from './pecr-afixos'


@Index("PK_CDST_CLASSE_PRODUTO",["clprId",],{ unique:true })
@Entity("CDST_CLASSE_PRODUTO")
export  class CdstClasseProduto extends BaseEntity {

@Column("varchar",{ primary:true,name:"CLPR_ID",length:27 })
public clprId:string;

@Column("varchar",{ name:"CLPR_CODIGO",length:10 })
public clprCodigo:string;

@Column("varchar",{ name:"CLPR_NOME",length:64 })
public clprNome:string;

@Column("smallint",{ name:"CLPR_PATRIMONIO",nullable:true,default: () => "0", })
public clprPatrimonio:number | null;

@Column("smallint",{ name:"CLPR_ATIVO",nullable:true,default: () => "0", })
public clprAtivo:number | null;

@Column("varchar",{ name:"CLPR_TIPO",nullable:true,length:20 })
public clprTipo:string | null;

@Column("datetime",{ name:"CLPR_LASTUPDATE",nullable:true })
public clprLastupdate:LocalDateTime | null;

@OneToMany(()=>CdstProduto,cdstProduto=>cdstProduto.prdtClpr)
public cdstProdutos:CdstProduto[];

@OneToMany(()=>PecrAfixos,pecrAfixos=>pecrAfixos.afxsClpr)
public pecrAfixos:PecrAfixos[];

public constructor(init?: Partial<CdstClasseProduto>) {
    super();
    Object.assign(this, init);
}
}
