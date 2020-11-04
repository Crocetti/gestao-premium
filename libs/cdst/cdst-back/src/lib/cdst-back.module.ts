import { Module } from '@nestjs/common';
import { CdstClasseProdutoService } from './cdst-classe-produto/cdst-classe-produto.service';
import { CdstClienteService } from './cdst-cliente/cdst-cliente.service';
import { CdstFabricanteService } from './cdst-fabricante/cdst-fabricante.service';
import { CdstFornecedorService } from './cdst-fornecedor/cdst-fornecedor.service';
import { CdstProdutoComposicaoService } from './cdst-produto-composicao/cdst-produto-composicao.service';
import { CdstProdutoEquivalenteService } from './cdst-produto-equivalente/cdst-produto-equivalente.service';
import { CdstProdutoService } from './cdst-produto/cdst-produto.service';
import { CdstProdutorRuralService } from './cdst-produtor-rural/cdst-produtor-rural.service';
import { CdstProdutorPropriedadeService } from './cdst-produtor-propriedade/cdst-produtor-propriedade.service';
import { CdstPropriedadeRuralService } from './cdst-propriedade-rural/cdst-propriedade-rural.service';
import { CdstTransportadoraService } from './cdst-transportadora/cdst-transportadora.service';
import { CdstUnidadeMedidaService } from './cdst-unidade-medida/cdst-unidade-medida.service';
import { CdstClasseProdutoController } from './cdst-classe-produto/cdst-classe-produto.controller';
import { CdstFabricanteController } from './cdst-fabricante/cdst-fabricante.controller';
import { CdstFornecedorController } from './cdst-fornecedor/cdst-fornecedor.controller';
import { CdstProdutoController } from './cdst-produto/cdst-produto.controller';
import { CdstProdutoComposicaoController } from './cdst-produto-composicao/cdst-produto-composicao.controller';
import { CdstProdutoEquivalenteController } from './cdst-produto-equivalente/cdst-produto-equivalente.controller';
import { CdstProdutorRuralController } from './cdst-produtor-rural/cdst-produtor-rural.controller';
import { CdstPropriedadeRuralController } from './cdst-propriedade-rural/cdst-propriedade-rural.controller';
import { CdstProdutorPropriedadeController } from './cdst-produtor-propriedade/cdst-produtor-propriedade.controller';
import { CdstTransportadoraController } from './cdst-transportadora/cdst-transportadora.controller';
import { CdstUnidadeMedidaController } from './cdst-unidade-medida/cdst-unidade-medida.controller';
import { CdstClienteController } from './cdst-cliente/cdst-cliente.controller';

@Module({
    controllers: [
        CdstClasseProdutoController,
        CdstFabricanteController,
        CdstFornecedorController,
        CdstProdutoController,
        CdstProdutoComposicaoController,
        CdstProdutoEquivalenteController,
        CdstProdutorRuralController,
        CdstPropriedadeRuralController,
        CdstProdutorPropriedadeController,
        CdstTransportadoraController,
        CdstUnidadeMedidaController,
        CdstClienteController,
    ],
    providers: [
        CdstClasseProdutoService,
        CdstClienteService,
        CdstFabricanteService,
        CdstFornecedorService,
        CdstProdutoComposicaoService,
        CdstProdutoEquivalenteService,
        CdstProdutoService,
        CdstProdutorRuralService,
        CdstProdutorPropriedadeService,
        CdstPropriedadeRuralService,
        CdstTransportadoraService,
        CdstUnidadeMedidaService,
    ],
    exports: [],
})
export class CdstBackModule {}
