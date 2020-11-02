import {BaseEntity,Column,Entity,Index,JoinColumn,ManyToOne,RelationId} from "typeorm";
import {CmnsGrupoUsuario} from './cmns-grupo-usuario'
import {MenuSistemaRecurso} from './menu-sistema-recurso'


@Index("FK_GRUS_RS_RCGU",["rcguGrusId",],{  })
@Index("FK_SSRC_RS_RCGU",["rcguSsrcId",],{  })
@Index("PK_MENU_RECURSO_GRUPO_USUARIO",["rcguId",],{ unique:true })
@Entity("MENU_RECURSO_GRUPO_USUARIO")
export  class MenuRecursoGrupoUsuario extends BaseEntity {

@Column("varchar",{ primary:true,name:"RCGU_ID",length:27 })
public rcguId:string;

@Column("varchar",{ name:"RCGU_SSRC_ID",nullable:true,length:27 })
public rcguSsrcId:string | null;

@Column("varchar",{ name:"RCGU_GRUS_ID",nullable:true,length:27 })
public rcguGrusId:string | null;

@Column("smallint",{ name:"RCGU_INSERT",nullable:true,default: () => "0", })
public rcguInsert:number | null;

@Column("smallint",{ name:"RCGU_DELETE",nullable:true,default: () => "0", })
public rcguDelete:number | null;

@Column("smallint",{ name:"RCGU_UPDATE",nullable:true,default: () => "0", })
public rcguUpdate:number | null;

@Column("smallint",{ name:"RCGU_VISUALIZE",nullable:true,default: () => "0", })
public rcguVisualize:number | null;

@Column("smallint",{ name:"RCGU_PRINTER",nullable:true,default: () => "0", })
public rcguPrinter:number | null;

@Column("datetime",{ name:"RCGU_LASTUPDATE",nullable:true })
public rcguLastupdate:LocalDateTime | null;

@ManyToOne(()=>CmnsGrupoUsuario,cmnsGrupoUsuario=>cmnsGrupoUsuario.menuRecursoGrupoUsuarios)
@JoinColumn([{ name: "RCGU_GRUS_ID", referencedColumnName: "grusId" },
])

public rcguGrus:CmnsGrupoUsuario;

@ManyToOne(()=>MenuSistemaRecurso,menuSistemaRecurso=>menuSistemaRecurso.menuRecursoGrupoUsuarios)
@JoinColumn([{ name: "RCGU_SSRC_ID", referencedColumnName: "ssrcId" },
])

public rcguSsrc:MenuSistemaRecurso;

@RelationId((menuRecursoGrupoUsuario:MenuRecursoGrupoUsuario)=>menuRecursoGrupoUsuario.rcguGrus)
public rcguGrusId2:string | null;

@RelationId((menuRecursoGrupoUsuario:MenuRecursoGrupoUsuario)=>menuRecursoGrupoUsuario.rcguSsrc)
public rcguSsrcId2:string | null;

public constructor(init?: Partial<MenuRecursoGrupoUsuario>) {
    super();
    Object.assign(this, init);
}
}
