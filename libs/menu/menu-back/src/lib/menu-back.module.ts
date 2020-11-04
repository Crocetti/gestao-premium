import { Module } from '@nestjs/common';
import { MenuModuloService } from './menu-modulo/menu-modulo.service';
import { MenuPastaService } from './menu-pasta/menu-pasta.service';
import { MenuRecursoService } from './menu-recurso/menu-recurso.service';
import { MenuRecursoGrupoUsuarioService } from './menu-recurso-grupo-usuario/menu-recurso-grupo-usuario.service';
import { MenuSistemaModuloService } from './menu-sistema-modulo/menu-sistema-modulo.service';
import { MenuSistemaPastaService } from './menu-sistema-pasta/menu-sistema-pasta.service';
import { MenuSistemaRecursoService } from './menu-sistema-recurso/menu-sistema-recurso.service';
import { MenuModuloController } from './menu-modulo/menu-modulo.controller';
import { MenuPastaController } from './menu-pasta/menu-pasta.controller';
import { MenuRecursoController } from './menu-recurso/menu-recurso.controller';
import { MenuRecursoGrupoUsuarioController } from './menu-recurso-grupo-usuario/menu-recurso-grupo-usuario.controller';
import { MenuSistemaModuloController } from './menu-sistema-modulo/menu-sistema-modulo.controller';
import { MenuSistemaPastaController } from './menu-sistema-pasta/menu-sistema-pasta.controller';
import { MenuSistemaRecursoController } from './menu-sistema-recurso/menu-sistema-recurso.controller';

@Module({
  controllers: [MenuModuloController, MenuPastaController, MenuRecursoController, MenuRecursoGrupoUsuarioController, MenuSistemaModuloController, MenuSistemaPastaController, MenuSistemaRecursoController],
  providers: [MenuModuloService, MenuPastaService, MenuRecursoService, MenuRecursoGrupoUsuarioService, MenuSistemaModuloService, MenuSistemaPastaService, MenuSistemaRecursoService],
  exports: [],
})
export class MenuBackModule {}
