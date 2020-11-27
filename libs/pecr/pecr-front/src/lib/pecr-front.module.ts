import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'pecr-afixos', loadChildren: () => import('./pecr-afixos/pecr-afixos.module').then(m => m.PecrAfixosModule) },
      { path: 'pecr-aptidao', loadChildren: () => import('./pecr-aptidao/pecr-aptidao.module').then(m => m.PecrAptidaoModule) },
      { path: 'pecr-capa-movimento-animal', loadChildren: () => import('./pecr-capa-movimento-animal/pecr-capa-movimento-animal.module').then(m => m.PecrCapaMovimentoAnimalModule) },
      { path: 'pecr-categoria', loadChildren: () => import('./pecr-categoria/pecr-categoria.module').then(m => m.PecrCategoriaModule) },
      { path: 'pecr-dados-abcz', loadChildren: () => import('./pecr-dados-abcz/pecr-dados-abcz.module').then(m => m.PecrDadosAbczModule) },
      { path: 'pecr-especie', loadChildren: () => import('./pecr-especie/pecr-especie.module').then(m => m.PecrEspecieModule) },
      { path: 'pecr-especie-pastagem', loadChildren: () => import('./pecr-especie-pastagem/pecr-especie-pastagem.module').then(m => m.PecrEspeciePastagemModule) },
      { path: 'pecr-evento-sanitario', loadChildren: () => import('./pecr-evento-sanitario/pecr-evento-sanitario.module').then(m => m.PecrEventoSanitarioModule) },
      { path: 'pecr-ganho-peso', loadChildren: () => import('./pecr-ganho-peso/pecr-ganho-peso.module').then(m => m.PecrGanhoPesoModule) },
      { path: 'pecr-historico-categoria', loadChildren: () => import('./pecr-historico-categoria/pecr-historico-categoria.module').then(m => m.PecrHistoricoCategoriaModule) },
      { path: 'pecr-historico-cobertura', loadChildren: () => import('./pecr-historico-cobertura/pecr-historico-cobertura.module').then(m => m.PecrHistoricoCoberturaModule) },
      { path: 'pecr-historico-pesagem', loadChildren: () => import('./pecr-historico-pesagem/pecr-historico-pesagem.module').then(m => m.PecrHistoricoPesagemModule) },
      { path: 'pecr-item-movimento-animal', loadChildren: () => import('./pecr-item-movimento-animal/pecr-item-movimento-animal.module').then(m => m.PecrItemMovimentoAnimalModule) },
      { path: 'pecr-lote', loadChildren: () => import('./pecr-lote/pecr-lote.module').then(m => m.PecrLoteModule) },
      { path: 'pecr-lote-animal', loadChildren: () => import('./pecr-lote-animal/pecr-lote-animal.module').then(m => m.PecrLoteAnimalModule) },
      { path: 'pecr-lote-saldo', loadChildren: () => import('./pecr-lote-saldo/pecr-lote-saldo.module').then(m => m.PecrLoteSaldoModule) },
      { path: 'pecr-modulo-criacao', loadChildren: () => import('./pecr-modulo-criacao/pecr-modulo-criacao.module').then(m => m.PecrModuloCriacaoModule) },
      { path: 'pecr-produto-bovino', loadChildren: () => import('./pecr-produto-bovino/pecr-produto-bovino.module').then(m => m.PecrProdutoBovinoModule) },
      { path: 'pecr-produto-pecuaria', loadChildren: () => import('./pecr-produto-pecuaria/pecr-produto-pecuaria.module').then(m => m.PecrProdutoPecuariaModule) },
      { path: 'pecr-raca', loadChildren: () => import('./pecr-raca/pecr-raca.module').then(m => m.PecrRacaModule) },
      { path: 'pecr-tipo-evento-sanitario', loadChildren: () => import('./pecr-tipo-evento-sanitario/pecr-tipo-evento-sanitario.module').then(m => m.PecrTipoEventoSanitarioModule) },
      { path: 'pecr-unidade-criacao', loadChildren: () => import('./pecr-unidade-criacao/pecr-unidade-criacao.module').then(m => m.PecrUnidadeCriacaoModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class PecrFrontModule {}
