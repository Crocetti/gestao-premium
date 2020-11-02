import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CmnsGrupoUsuario, CmnsUsuario } from '@gpremium/cmns-pess-ents';
import { CoreUnidadeEmpresarial } from './core-unidade-empresarial.entity';
import { BasicEntity } from '@gpremium/shared-ent';
import type {
    ICmnsGrupoUsuario,
    ICmnsUsuario,
} from '@gpremium/cmns-pess-intf';
import type {
    ICoreUnidadeEmpresarial,
    ICmnsUnemUsuario,
} from '@gpremium/core-interfaces';

@Index('PK_CMNS_UNEM_USUARIO', ['id'], { unique: true })
@Entity('CMNS_UNEM_USUARIO')
export class CmnsUnemUsuario extends BasicEntity implements ICmnsUnemUsuario {
    @ManyToOne(() => CmnsUsuario)
    @JoinColumn([{ name: 'UEUS_USRS_ID', referencedColumnName: 'id' }])
    public cmnsUsuario: ICmnsUsuario;

    @ManyToOne(() => CmnsGrupoUsuario)
    @JoinColumn([{ name: 'UEUS_GRUS_ID', referencedColumnName: 'id' }])
    public cmnsGrupoUsuario: ICmnsGrupoUsuario;

    @ManyToOne(() => CoreUnidadeEmpresarial)
    @JoinColumn([{ name: 'UEUS_UNEM_ID', referencedColumnName: 'id' }])
    public coreUnidadeEmpresarial: ICoreUnidadeEmpresarial;
}
