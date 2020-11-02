import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {SstmSistemaTabela} from './sstm-sistema-tabela'
import {SstmTabelaScript} from './sstm-tabela-script'


@Index("PK_SSTM_TABELA",["tblsId",],{ unique:true })
@Entity("SSTM_TABELA")
export  class SstmTabela extends BaseEntity {

@Column("varchar",{ primary:true,name:"TBLS_ID",length:27 })
public tblsId:string;

@Column("varchar",{ name:"TBLS_NOME",nullable:true,length:64 })
public tblsNome:string | null;

@Column("varchar",{ name:"TBLS_CAPTION",nullable:true,length:40 })
public tblsCaption:string | null;

@Column("varchar",{ name:"TBLS_MNEMONICO",length:5 })
public tblsMnemonico:string;

@Column("smallint",{ name:"TBLS_EXPORTAVEL",nullable:true,default: () => "0", })
public tblsExportavel:number | null;

@Column("datetime",{ name:"TBLS_LASTUPDATE",nullable:true })
public tblsLastupdate:LocalDateTime | null;

@OneToMany(()=>SstmSistemaTabela,sstmSistemaTabela=>sstmSistemaTabela.sstbTbls)


public sstmSistemaTabelas:SstmSistemaTabela[];

@OneToMany(()=>SstmTabelaScript,sstmTabelaScript=>sstmTabelaScript.tbscTbls)


public sstmTabelaScripts:SstmTabelaScript[];

public constructor(init?: Partial<SstmTabela>) {
    super();
    Object.assign(this, init);
}
}
