import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'cdst-classe-produto', loadChildren: () => import('./cdst-classe-produto/cdst-classe-produto.module').then(m => m.CdstClasseProdutoModule) },
        { path: 'cdst-cliente', loadChildren: () => import('./cdst-cliente/cdst-cliente.module').then(m => m.CdstClienteModule) },
        { path: 'cdst-fabricante', loadChildren: () => import('./cdst-fabricante/cdst-fabricante.module').then(m => m.CdstFabricanteModule) },
        { path: 'cdst-fornecedor', loadChildren: () => import('./cdst-fornecedor/cdst-fornecedor.module').then(m => m.CdstFornecedorModule) },
        { path: 'cdst-produto', loadChildren: () => import('./cdst-produto/cdst-produto.module').then(m => m.CdstProdutoModule) },
        { path: 'cdst-produto-composicao', loadChildren: () => import('./cdst-produto-composicao/cdst-produto-composicao.module').then(m => m.CdstProdutoComposicaoModule) },
        { path: 'cdst-produto-equivalente', loadChildren: () => import('./cdst-produto-equivalente/cdst-produto-equivalente.module').then(m => m.CdstProdutoEquivalenteModule) },
        { path: 'cdst-produtor-propriedade', loadChildren: () => import('./cdst-produtor-propriedade/cdst-produtor-propriedade.module').then(m => m.CdstProdutorPropriedadeModule) },
        { path: 'cdst-produtor-rural', loadChildren: () => import('./cdst-produtor-rural/cdst-produtor-rural.module').then(m => m.CdstProdutorRuralModule) },
        { path: 'cdst-propriedade-rural', loadChildren: () => import('./cdst-propriedade-rural/cdst-propriedade-rural.module').then(m => m.CdstPropriedadeRuralModule) },
        { path: 'cdst-transportadora', loadChildren: () => import('./cdst-transportadora/cdst-transportadora.module').then(m => m.CdstTransportadoraModule) },
        { path: 'cdst-unidade-medida', loadChildren: () => import('./cdst-unidade-medida/cdst-unidade-medida.module').then(m => m.CdstUnidadeMedidaModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class CdstFrontModule {}
