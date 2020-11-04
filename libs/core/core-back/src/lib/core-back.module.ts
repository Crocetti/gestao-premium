import { Module } from '@nestjs/common';
import { CoreCorporacaoService } from './core-corporacao/core-corporacao.service';
import { CoreEmpresaService } from './core-empresa/core-empresa.service';
import { CoreUnidadeEmpresarialService } from './core-unidade-empresarial/core-unidade-empresarial.service';
import { CoreUnemUsuarioService } from './core-unem-usuario/core-unem-usuario.service';
import { CoreCorporacaoController } from './core-corporacao/core-corporacao.controller';
import { CoreEmpresaController } from './core-empresa/core-empresa.controller';
import { CoreUnidadeEmpresarialController } from './core-unidade-empresarial/core-unidade-empresarial.controller';
import { CoreUnemUsuarioController } from './core-unem-usuario/core-unem-usuario.controller';

@Module({
  controllers: [CoreCorporacaoController, CoreEmpresaController, CoreUnidadeEmpresarialController, CoreUnemUsuarioController],
  providers: [CoreCorporacaoService, CoreEmpresaService, CoreUnidadeEmpresarialService, CoreUnemUsuarioService],
  exports: [],
})
export class CoreBackModule {}
