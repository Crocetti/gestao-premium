import {BaseEntity,Column,Entity,Index,OneToMany} from "typeorm";
import {CmnsUnemUsuario} from './cmns-unem-usuario'
import {MenuRecursoGrupoUsuario} from './menu-recurso-grupo-usuario'


@Index("PK_CMNS_GRUPO_USUARIO",["grusId",],{ unique:true })
@Entity("CMNS_GRUPO_USUARIO")
export  class CmnsGrupoUsuario extends BaseEntity {

@Column("varchar",{ primary:true,name:"GRUS_ID",length:27 })
public grusId:string;

@Column("varchar",{ name:"GRUS_NOME",nullable:true,length:64 })
public grusNome:string | null;

@Column("varchar",{ name:"GRUS_SIGLA",nullable:true,length:5 })
public grusSigla:string | null;

@Column("int",{ name:"GRUS_NIVEL",nullable:true })
public grusNivel:number | null;

@Column("money",{ name:"GRUS_DESC_MAX",nullable:true,default: () => "0", })
public grusDescMax:number | null;

@Column("datetime",{ name:"GRUS_LASTUPDATE",nullable:true })
public grusLastupdate:LocalDateTime | null;

@OneToMany(()=>CmnsUnemUsuario,cmnsUnemUsuario=>cmnsUnemUsuario.ueusGrus)


public cmnsUnemUsuarios:CmnsUnemUsuario[];

@OneToMany(()=>MenuRecursoGrupoUsuario,menuRecursoGrupoUsuario=>menuRecursoGrupoUsuario.rcguGrus)


public menuRecursoGrupoUsuarios:MenuRecursoGrupoUsuario[];

public constructor(init?: Partial<CmnsGrupoUsuario>) {
    super();
    Object.assign(this, init);
}
}
