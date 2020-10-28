import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CMNS_BASE_ENTITIES } from '@gpremium/cmns-base-ents';
import { CMNS_PESS_ENTITIES } from '@gpremium/cmns-pess-ents';
import { CmnsCargoService } from './cmns-cargo/cmns-cargo.service';
import { CmnsPaisService } from './cmns-pais/cmns-pais.service';
import { CmnsUnidadeFederativaService } from './cmns-unidade-federativa/cmns-unidade-federativa.service';
import { CmnsLocalidadeService } from './cmns-localidade/cmns-localidade.service';
import { CmnsLogradouroService } from './cmns-logradouro/cmns-logradouro.service';
import { CmnsBairroService } from './cmns-bairro/cmns-bairro.service';
import { CmnsNacionalidadeService } from './cmns-nacionalidade/cmns-nacionalidade.service';
import { CmnsOrgaoExpedidorService } from './cmns-orgao-expedidor/cmns-orgao-expedidor.service';
import { CmnsProfissaoService } from './cmns-profissao/cmns-profissao.service';
import { CmnsRamoAtividadeService } from './cmns-ramo-atividade/cmns-ramo-atividade.service';
import { CmnsTipoDocumentoService } from './cmns-tipo-documento/cmns-tipo-documento.service';
import { CmnsTipoEmailService } from './cmns-tipo-email/cmns-tipo-email.service';
import { CmnsTipoEnderecoService } from './cmns-tipo-endereco/cmns-tipo-endereco.service';
import { CmnsTipoTelefoneService } from './cmns-tipo-telefone/cmns-tipo-telefone.service';
import { CmnsGrupoUsuarioService } from './cmns-grupo-usuario/cmns-grupo-usuario.service';
import { CmnsPessoaService } from './cmns-pessoa/cmns-pessoa.service';
import { CmnsPessoaDocumentoService } from './cmns-pessoa-documento/cmns-pessoa-documento.service';
import { CmnsPessoaEmailService } from './cmns-pessoa-email/cmns-pessoa-email.service';
import { CmnsPessoaEnderecoService } from './cmns-pessoa-endereco/cmns-pessoa-endereco.service';
import { CmnsPessoaFisicaService } from './cmns-pessoa-fisica/cmns-pessoa-fisica.service';
import { CmnsPessoaImagemService } from './cmns-pessoa-imagem/cmns-pessoa-imagem.service';
import { CmnsPessoaJuridicaService } from './cmns-pessoa-juridica/cmns-pessoa-juridica.service';
import { CmnsPessoaTelefoneService } from './cmns-pessoa-telefone/cmns-pessoa-telefone.service';
import { CmnsUsuarioService } from './cmns-usuario/cmns-usuario.service';
import { CmnsBairroController } from './cmns-bairro/cmns-bairro.controller';
import { CmnsCargoController } from './cmns-cargo/cmns-cargo.controller';
import { CmnsGrupoUsuarioController } from './cmns-grupo-usuario/cmns-grupo-usuario.controller';
import { CmnsLocalidadeController } from './cmns-localidade/cmns-localidade.controller';
import { CmnsLogradouroController } from './cmns-logradouro/cmns-logradouro.controller';
import { CmnsNacionalidadeController } from './cmns-nacionalidade/cmns-nacionalidade.controller';
import { CmnsOrgaoExpedidorController } from './cmns-orgao-expedidor/cmns-orgao-expedidor.controller';
import { CmnsPaisController } from './cmns-pais/cmns-pais.controller';
import { CmnsPessoaController } from './cmns-pessoa/cmns-pessoa.controller';
import { CmnsPessoaDocumentoController } from './cmns-pessoa-documento/cmns-pessoa-documento.controller';
import { CmnsPessoaEmailController } from './cmns-pessoa-email/cmns-pessoa-email.controller';
import { CmnsPessoaEnderecoController } from './cmns-pessoa-endereco/cmns-pessoa-endereco.controller';
import { CmnsPessoaFisicaController } from './cmns-pessoa-fisica/cmns-pessoa-fisica.controller';
import { CmnsPessoaImagemController } from './cmns-pessoa-imagem/cmns-pessoa-imagem.controller';
import { CmnsPessoaJuridicaController } from './cmns-pessoa-juridica/cmns-pessoa-juridica.controller';
import { CmnsPessoaTelefoneController } from './cmns-pessoa-telefone/cmns-pessoa-telefone.controller';
import { CmnsProfissaoController } from './cmns-profissao/cmns-profissao.controller';
import { CmnsRamoAtividadeController } from './cmns-ramo-atividade/cmns-ramo-atividade.controller';
import { CmnsTipoDocumentoController } from './cmns-tipo-documento/cmns-tipo-documento.controller';
import { CmnsTipoEmailController } from './cmns-tipo-email/cmns-tipo-email.controller';
import { CmnsTipoEnderecoController } from './cmns-tipo-endereco/cmns-tipo-endereco.controller';
import { CmnsTipoTelefoneController } from './cmns-tipo-telefone/cmns-tipo-telefone.controller';
import { CmnsUnidadeFederativaController } from './cmns-unidade-federativa/cmns-unidade-federativa.controller';
import { CmnsUsuarioController } from './cmns-usuario/cmns-usuario.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [...CMNS_BASE_ENTITIES, ...CMNS_PESS_ENTITIES],
            'default'
        ),
    ],
    controllers: [
        CmnsBairroController,
        CmnsCargoController,
        CmnsGrupoUsuarioController,
        CmnsLocalidadeController,
        CmnsLogradouroController,
        CmnsNacionalidadeController,
        CmnsOrgaoExpedidorController,
        CmnsPaisController,
        CmnsPessoaController,
        CmnsPessoaDocumentoController,
        CmnsPessoaEmailController,
        CmnsPessoaEnderecoController,
        CmnsPessoaFisicaController,
        CmnsPessoaImagemController,
        CmnsPessoaJuridicaController,
        CmnsPessoaTelefoneController,
        CmnsProfissaoController,
        CmnsRamoAtividadeController,
        CmnsTipoDocumentoController,
        CmnsTipoEmailController,
        CmnsTipoEnderecoController,
        CmnsTipoTelefoneController,
        CmnsUnidadeFederativaController,
        CmnsUsuarioController,
    ],
    providers: [
        CmnsCargoService,
        CmnsPaisService,
        CmnsUnidadeFederativaService,
        CmnsLocalidadeService,
        CmnsLogradouroService,
        CmnsBairroService,
        CmnsNacionalidadeService,
        CmnsOrgaoExpedidorService,
        CmnsProfissaoService,
        CmnsRamoAtividadeService,
        CmnsTipoDocumentoService,
        CmnsTipoEmailService,
        CmnsTipoEnderecoService,
        CmnsTipoTelefoneService,
        CmnsGrupoUsuarioService,
        CmnsPessoaService,
        CmnsPessoaDocumentoService,
        CmnsPessoaEmailService,
        CmnsPessoaEnderecoService,
        CmnsPessoaFisicaService,
        CmnsPessoaImagemService,
        CmnsPessoaJuridicaService,
        CmnsPessoaTelefoneService,
        CmnsUsuarioService,
    ],
    exports: [
        CmnsCargoService,
        CmnsPaisService,
        CmnsUnidadeFederativaService,
        CmnsLocalidadeService,
        CmnsLogradouroService,
        CmnsBairroService,
        CmnsNacionalidadeService,
        CmnsOrgaoExpedidorService,
        CmnsProfissaoService,
        CmnsRamoAtividadeService,
        CmnsTipoDocumentoService,
        CmnsTipoEmailService,
        CmnsTipoEnderecoService,
        CmnsTipoTelefoneService,
        CmnsGrupoUsuarioService,
        CmnsPessoaService,
        CmnsPessoaDocumentoService,
        CmnsPessoaEmailService,
        CmnsPessoaEnderecoService,
        CmnsPessoaFisicaService,
        CmnsPessoaImagemService,
        CmnsPessoaJuridicaService,
        CmnsPessoaTelefoneService,
        CmnsUsuarioService,
    ],
})
export class CmnsBackModule {}
