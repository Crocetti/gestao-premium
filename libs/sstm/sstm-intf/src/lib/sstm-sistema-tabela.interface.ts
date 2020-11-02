import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {SstmTabela} from './sstm-tabela'
import {SstmSistema} from './sstm-sistema'


@Index("FK_SSTM_RS_SSTB",["sstbSstmId",],{  })
@Index("FK_TBLS_RS_SSTB",["sstbTblsId",],{  })
@Index("PK_SSTM_SISTEMA_TABELA",["sstbId",],{ unique:true })
@Entity("SSTM_SISTEMA_TABELA")
export  class SstmSistemaTabela extends BaseEntity {

@Column("varchar",{ primary:true,name:"SSTB_ID",length:27 })
public sstbId:string;

@Column("varchar",{ name:"SSTB_SSTM_ID",nullable:true,length:27 })
public sstbSstmId:string | null;

@Column("varchar",{ name:"SSTB_TBLS_ID",nullable:true,length:27 })
public sstbTblsId:string | null;

@Column("varchar",{ name:"SSTB_TP_ID",length:4 })
public sstbTpId:string;

@Column("int",{ name:"SSTB_NEXT_ID" })
public sstbNextId:number;

@Column("smallint",{ name:"SSTB_KEY",default: () => "0", })
public sstbKey:number;

@Column("varchar",{ name:"SSTB_FIELD",nullable:true,length:24 })
public sstbField:string | null;

@Column("datetime",{ name:"SSTB_LASTUPDATE",nullable:true })
public sstbLastupdate:LocalDateTime | null;

@ManyToOne(()=>SstmTabela,sstmTabela=>sstmTabela.sstmSistemaTabelas)
@JoinColumn([{ name: "SSTB_TBLS_ID", referencedColumnName: "tblsId" },
])

public sstbTbls:SstmTabela;

@ManyToOne(()=>SstmSistema,sstmSistema=>sstmSistema.sstmSistemaTabelas)
@JoinColumn([{ name: "SSTB_SSTM_ID", referencedColumnName: "sstmId" },
])

public sstbSstm:SstmSistema;

@RelationId((sstmSistemaTabela:SstmSistemaTabela)=>sstmSistemaTabela.sstbTbls)
public sstbTblsId2:string | null;

@RelationId((sstmSistemaTabela:SstmSistemaTabela)=>sstmSistemaTabela.sstbSstm)
public sstbSstmId2:string | null;

public constructor(init?: Partial<SstmSistemaTabela>) {
    super();
    Object.assign(this, init);
}
}
