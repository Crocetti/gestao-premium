import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: 'cmns-bairro', loadChildren: () => import('./cmns-bairro/cmns-bairro.module').then(m => m.CmnsBairroModule) },
      { path: 'cmns-cargo', loadChildren: () => import('./cmns-cargo/cmns-cargo.module').then(m => m.CmnsCargoModule) },
      { path: 'cmns-grupo-usuario', loadChildren: () => import('./cmns-grupo-usuario/cmns-grupo-usuario.module').then(m => m.CmnsGrupoUsuarioModule) },
      { path: 'cmns-localidade', loadChildren: () => import('./cmns-localidade/cmns-localidade.module').then(m => m.CmnsLocalidadeModule) },
      { path: 'cmns-logradouro', loadChildren: () => import('./cmns-logradouro/cmns-logradouro.module').then(m => m.CmnsLogradouroModule) },
      { path: 'cmns-nacionalidade', loadChildren: () => import('./cmns-nacionalidade/cmns-nacionalidade.module').then(m => m.CmnsNacionalidadeModule) },
      { path: 'cmns-orgao-expedidor', loadChildren: () => import('./cmns-orgao-expedidor/cmns-orgao-expedidor.module').then(m => m.CmnsOrgaoExpedidorModule) },
      { path: 'cmns-pais', loadChildren: () => import('./cmns-pais/cmns-pais.module').then(m => m.CmnsPaisModule) },
      { path: 'cmns-pessoa', loadChildren: () => import('./cmns-pessoa/cmns-pessoa.module').then(m => m.CmnsPessoaModule) },
      { path: 'cmns-pessoa-documento', loadChildren: () => import('./cmns-pessoa-documento/cmns-pessoa-documento.module').then(m => m.CmnsPessoaDocumentoModule) },
      { path: 'cmns-pessoa-email', loadChildren: () => import('./cmns-pessoa-email/cmns-pessoa-email.module').then(m => m.CmnsPessoaEmailModule) },
      { path: 'cmns-pessoa-endereco', loadChildren: () => import('./cmns-pessoa-endereco/cmns-pessoa-endereco.module').then(m => m.CmnsPessoaEnderecoModule) },
      { path: 'cmns-pessoa-fisica', loadChildren: () => import('./cmns-pessoa-fisica/cmns-pessoa-fisica.module').then(m => m.CmnsPessoaFisicaModule) },
      { path: 'cmns-pessoa-imagem', loadChildren: () => import('./cmns-pessoa-imagem/cmns-pessoa-imagem.module').then(m => m.CmnsPessoaImagemModule) },
      { path: 'cmns-pessoa-juridica', loadChildren: () => import('./cmns-pessoa-juridica/cmns-pessoa-juridica.module').then(m => m.CmnsPessoaJuridicaModule) },
      { path: 'cmns-pessoa-telefone', loadChildren: () => import('./cmns-pessoa-telefone/cmns-pessoa-telefone.module').then(m => m.CmnsPessoaTelefoneModule) },
      { path: 'cmns-profissao', loadChildren: () => import('./cmns-profissao/cmns-profissao.module').then(m => m.CmnsProfissaoModule) },
      { path: 'cmns-ramo-atividade', loadChildren: () => import('./cmns-ramo-atividade/cmns-ramo-atividade.module').then(m => m.CmnsRamoAtividadeModule) },
      { path: 'cmns-tipo-documento', loadChildren: () => import('./cmns-tipo-documento/cmns-tipo-documento.module').then(m => m.CmnsTipoDocumentoModule) },
      { path: 'cmns-tipo-email', loadChildren: () => import('./cmns-tipo-email/cmns-tipo-email.module').then(m => m.CmnsTipoEmailModule) },
      { path: 'cmns-tipo-endereco', loadChildren: () => import('./cmns-tipo-endereco/cmns-tipo-endereco.module').then(m => m.CmnsTipoEnderecoModule) },
      { path: 'cmns-tipo-telefone', loadChildren: () => import('./cmns-tipo-telefone/cmns-tipo-telefone.module').then(m => m.CmnsTipoTelefoneModule) },
      { path: 'cmns-unidade-federativa', loadChildren: () => import('./cmns-unidade-federativa/cmns-unidade-federativa.module').then(m => m.CmnsUnidadeFederativaModule) },
      { path: 'cmns-usuario', loadChildren: () => import('./cmns-usuario/cmns-usuario.module').then(m => m.CmnsUsuarioModule) }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class CmnsFrontModule {}
