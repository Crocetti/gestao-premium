import { ICmnsGrupoUsuario } from '@gpremium/cmns-interfaces';
import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index('PK_CMNS_GRUPO_USUARIO', ['id'], { unique: true })
@Entity('CMNS_GRUPO_USUARIO')
export class CmnsGrupoUsuario extends BasicEntity implements ICmnsGrupoUsuario {

    @Column('nvarchar', { name: 'GRUS_NOME', nullable: true, length: 64 })
    public grusNome: string | null;

    @Column('nvarchar', { name: 'GRUS_SIGLA', nullable: true, length: 5 })
    public grusSigla: string | null;

    @Column('int', { name: 'GRUS_NIVEL', nullable: true })
    public grusNivel?: number | null;

    @Column('money', { name: 'GRUS_DESC_MAX', nullable: true })
    public grusDescMax?: number | null;

}
