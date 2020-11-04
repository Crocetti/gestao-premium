import { Module } from '@nestjs/common';
import { FsclCfopService } from './fscl-cfop/fscl-cfop.service';
import { FsclCstService } from './fscl-cst/fscl-cst.service';
import { FsclDocumentoService } from './fscl-documento/fscl-documento.service';
import { FsclDocumentoPessoaService } from './fscl-documento-pessoa/fscl-documento-pessoa.service';
import { FsclDocumentoItemService } from './fscl-documento-item/fscl-documento-item.service';
import { FsclItemFatoFiscalService } from './fscl-item-fato-fiscal/fscl-item-fato-fiscal.service';
import { FsclNcmsService } from './fscl-ncms/fscl-ncms.service';
import { FsclRegimeTributarioService } from './fscl-regime-tributario/fscl-regime-tributario.service';
import { FsclCfopController } from './fscl-cfop/fscl-cfop.controller';
import { FsclCstController } from './fscl-cst/fscl-cst.controller';
import { FsclDocumentoController } from './fscl-documento/fscl-documento.controller';
import { FsclDocumentoItemController } from './fscl-documento-item/fscl-documento-item.controller';
import { FsclDocumentoPessoaController } from './fscl-documento-pessoa/fscl-documento-pessoa.controller';
import { FsclItemFatoFiscalController } from './fscl-item-fato-fiscal/fscl-item-fato-fiscal.controller';
import { FsclNcmsController } from './fscl-ncms/fscl-ncms.controller';
import { FsclRegimeTributarioController } from './fscl-regime-tributario/fscl-regime-tributario.controller';

@Module({
  controllers: [FsclCfopController, FsclCstController, FsclDocumentoController, FsclDocumentoItemController, FsclDocumentoPessoaController, FsclItemFatoFiscalController, FsclNcmsController, FsclRegimeTributarioController],
  providers: [FsclCfopService, FsclCstService, FsclDocumentoService, FsclDocumentoPessoaService, FsclDocumentoItemService, FsclItemFatoFiscalService, FsclNcmsService, FsclRegimeTributarioService],
  exports: [],
})
export class FsclBackModule {}
