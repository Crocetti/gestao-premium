import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'vete-animal', loadChildren: () => import('./vete-animal/vete-animal.module').then(m => m.VeteAnimalModule) },
      { path: 'vete-animal-foto', loadChildren: () => import('./vete-animal-foto/vete-animal-foto.module').then(m => m.VeteAnimalFotoModule) },
      { path: 'vete-cirurgias', loadChildren: () => import('./vete-cirurgias/vete-cirurgias.module').then(m => m.VeteCirurgiasModule) },
      { path: 'vete-consulta', loadChildren: () => import('./vete-consulta/vete-consulta.module').then(m => m.VeteConsultaModule) },
      { path: 'vete-internacao', loadChildren: () => import('./vete-internacao/vete-internacao.module').then(m => m.VeteInternacaoModule) },
      { path: 'vete-ordem-de-servico', loadChildren: () => import('./vete-ordem-de-servico/vete-ordem-de-servico.module').then(m => m.VeteOrdemDeServicoModule) },
      { path: 'vete-pelagem', loadChildren: () => import('./vete-pelagem/vete-pelagem.module').then(m => m.VetePelagemModule) },
      { path: 'vete-porte', loadChildren: () => import('./vete-porte/vete-porte.module').then(m => m.VetePorteModule) },
      { path: 'vete-retorno', loadChildren: () => import('./vete-retorno/vete-retorno.module').then(m => m.VeteRetornoModule) },
      { path: 'vete-retorno-procedimento', loadChildren: () => import('./vete-retorno-procedimento/vete-retorno-procedimento.module').then(m => m.VeteRetornoProcedimentoModule) },
      { path: 'vete-servico', loadChildren: () => import('./vete-servico/vete-servico.module').then(m => m.VeteServicoModule) },
      { path: 'vete-servico-composicao', loadChildren: () => import('./vete-servico-composicao/vete-servico-composicao.module').then(m => m.VeteServicoComposicaoModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class VeteFrontModule {}
