import { BasicEntity } from '@gpremium/shared-ent';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MenuPasta } from './menu-pasta';
import { MenuSistemaModulo } from './menu-sistema-modulo';
import type { IMenuModulo } from '@gpremium/menu-intf';

@Index('PK_MENU_MODULO', ['id'], { unique: true })
@Entity('MENU_MODULO')
export class MenuModulo extends BasicEntity implements IMenuModulo {
    @Column('nvarchar', { name: 'MODL_CODIGO', nullable: true, length: 5})
    public ModlCodigo: string;

    @Column('nvarchar', { name: 'MODL_NOME', nullable: true, length: 40 })
    public modlNome: string;

    @Column('nvarchar', { name: 'MODL_DESCRICAO', nullable: true, length: 128 })
    public modlDescricao: string;

    @Column('nvarchar', { name: 'MODL_SMALL_ICON', nullable: true })
    public modlSmallIcon: string | null;

    @Column('nvarchar', { name: 'MODL_NORMAL_ICON', nullable: true })
    public modlNormalIcon: string | null;

    @Column('nvarchar', { name: 'MODL_LARGE_ICON', nullable: true })
    public modlLargeIcon: string | null;

    @OneToMany(() => MenuPasta, (menuPasta) => menuPasta.pstaModl)
    public menuPastas: MenuPasta[];

    @OneToMany(
        () => MenuSistemaModulo,
        (menuSistemaModulo) => menuSistemaModulo.ssmdModl
    )
    public menuSistemaModulos: MenuSistemaModulo[];
}
