import { Module } from '@nestjs/common';
import { SstmDatabaseService } from './sstm-database/sstm-database.service';
import { SstmObjetoService } from './sstm-objeto/sstm-objeto.service';
import { SstmObjetoVersaoService } from './sstm-objeto-versao/sstm-objeto-versao.service';
import { SstmParametroCorporacaoService } from './sstm-parametro-corporacao/sstm-parametro-corporacao.service';
import { SstmParametroEmpresaService } from './sstm-parametro-empresa/sstm-parametro-empresa.service';
import { SstmParametroSistemaService } from './sstm-parametro-sistema/sstm-parametro-sistema.service';
import { SstmParametroUnemService } from './sstm-parametro-unem/sstm-parametro-unem.service';
import { SstmParametroUsuarioService } from './sstm-parametro-usuario/sstm-parametro-usuario.service';
import { SstmParametroService } from './sstm-parametro/sstm-parametro.service';
import { SstmScriptsService } from './sstm-scripts/sstm-scripts.service';
import { SstmSistemaService } from './sstm-sistema/sstm-sistema.service';
import { SstmSistemaversaoObjetoversaoService } from './sstm-sistemaversao-objetoversao/sstm-sistemaversao-objetoversao.service';
import { SstmSistemaVersaoService } from './sstm-sistema-versao/sstm-sistema-versao.service';
import { SstmSistemaTabelaService } from './sstm-sistema-tabela/sstm-sistema-tabela.service';
import { SstmSistemaCorporacaoService } from './sstm-sistema-corporacao/sstm-sistema-corporacao.service';
import { SstmDatabaseController } from './sstm-database/sstm-database.controller';
import { SstmObjetoController } from './sstm-objeto/sstm-objeto.controller';
import { SstmObjetoVersaoController } from './sstm-objeto-versao/sstm-objeto-versao.controller';
import { SstmParametroController } from './sstm-parametro/sstm-parametro.controller';
import { SstmParametroCorporacaoController } from './sstm-parametro-corporacao/sstm-parametro-corporacao.controller';
import { SstmParametroEmpresaController } from './sstm-parametro-empresa/sstm-parametro-empresa.controller';
import { SstmParametroSistemaController } from './sstm-parametro-sistema/sstm-parametro-sistema.controller';
import { SstmParametroUnemController } from './sstm-parametro-unem/sstm-parametro-unem.controller';
import { SstmParametroUsuarioController } from './sstm-parametro-usuario/sstm-parametro-usuario.controller';
import { SstmScriptsController } from './sstm-scripts/sstm-scripts.controller';
import { SstmSistemaController } from './sstm-sistema/sstm-sistema.controller';
import { SstmSistemaCorporacaoController } from './sstm-sistema-corporacao/sstm-sistema-corporacao.controller';
import { SstmSistemaTabelaController } from './sstm-sistema-tabela/sstm-sistema-tabela.controller';
import { SstmSistemaVersaoController } from './sstm-sistema-versao/sstm-sistema-versao.controller';
import { SstmSistemaversaoObjetoversaoController } from './sstm-sistemaversao-objetoversao/sstm-sistemaversao-objetoversao.controller';

@Module({
  controllers: [SstmDatabaseController, SstmObjetoController, SstmObjetoVersaoController, SstmParametroController, SstmParametroCorporacaoController, SstmParametroEmpresaController, SstmParametroSistemaController, SstmParametroUnemController, SstmParametroUsuarioController, SstmScriptsController, SstmSistemaController, SstmSistemaCorporacaoController, SstmSistemaTabelaController, SstmSistemaVersaoController, SstmSistemaversaoObjetoversaoController],
  providers: [SstmDatabaseService, SstmObjetoService, SstmObjetoVersaoService, SstmParametroCorporacaoService, SstmParametroEmpresaService, SstmParametroSistemaService, SstmParametroUnemService, SstmParametroUsuarioService, SstmParametroService, SstmScriptsService, SstmSistemaService, SstmSistemaversaoObjetoversaoService, SstmSistemaVersaoService, SstmSistemaTabelaService, SstmSistemaCorporacaoService],
  exports: [],
})
export class SstmBackModule {}
