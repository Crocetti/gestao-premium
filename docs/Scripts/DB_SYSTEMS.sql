USE [master]
GO


/****** Object:  Database [SYSTEMS]    Script Date: 13/10/2020 21:17:42 ******/
CREATE DATABASE [NEW_SYSTEMS]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'New_Systems_Data', FILENAME = N'D:\Databases\New_Systems.mdf' , SIZE = 219008KB , MAXSIZE = UNLIMITED, FILEGROWTH = 10%)
 LOG ON 
( NAME = N'New_Systems_Log', FILENAME = N'D:\Databases\New_Systems_1.ldf' , SIZE = 1303552KB , MAXSIZE = 2048GB , FILEGROWTH = 1024KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

USE [NEW_SYSTEMS]
GO
/****** Object:  Rule [R_CLASSE_PRODUTOR]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_CLASSE_PRODUTOR] 
AS
@column in ('Proprietário','Arrendatário','Locador Pastos','Espólio','Posse','Outros')
GO
/****** Object:  Rule [R_DECISION]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_DECISION] 
AS
@column in (0,1)
GO
/****** Object:  Rule [R_ESPECIE_MONETARIA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_ESPECIE_MONETARIA] 
AS
@column in ('Dinheiro','Cheque','Cartão Crédito','Cartão Debito','Vale','Carteira','Boleto','Fatura','Duplicata','Pacote','InternetBank','Outros')
GO
/****** Object:  Rule [R_FSCL_CST_TIPO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_FSCL_CST_TIPO] 
AS
@column in ('Entrada','Saída')
GO
/****** Object:  Rule [R_FSCL_RFTRIBUTARIO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_FSCL_RFTRIBUTARIO] 
AS
@column in ('Icms Normal','Substituição Tributária','Retido Estadual','Serviço')
GO
/****** Object:  Rule [R_FSCL_TIPO_PESSOA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_FSCL_TIPO_PESSOA] 
AS
@column in ('Emitente','Destinatário','Transportador')
GO
/****** Object:  Rule [R_GRANDEZA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_GRANDEZA] 
AS
@column in ('Aceleração','Ângulo','Área','Capacitância','Comprimento','Corrente Elétrica','Dif. Potencial','Energia','Fluxo Luminoso','Frequência','Iluminamento','Indutância','Informática','Intens. Energética','Intens. Luminosa','Massa','Potência','Pressão','Qtd. Matéria','Qtd. Objetos','Temperatura','Tempo','Volume','Velocidade')
GO
/****** Object:  Rule [R_LOCAL_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_LOCAL_CONTA] 
AS
@column in ('Contábil','Financeira','Centro Custo','Centro Negócio')
GO
/****** Object:  Rule [R_MESES_DO_ANO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_MESES_DO_ANO] 
AS
@column in ('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')
GO
/****** Object:  Rule [R_NCMS_TIPO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_NCMS_TIPO] 
AS
@column in ('Analítico','Sintético')
GO
/****** Object:  Rule [R_NIVELGRUPO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_NIVELGRUPO] 
AS
@column in (0,1,2,3,4,5)
GO
/****** Object:  Rule [R_OBJECT_TYPE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_OBJECT_TYPE] 
AS
@column in ('Executavel','Pacote','Biblioteca','Menu')
GO
/****** Object:  Rule [R_PECR_METODO_DIAGNOSTICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_PECR_METODO_DIAGNOSTICO] 
AS
@column in ('Toque Manual','Ultra Som','Outros')
GO
/****** Object:  Rule [R_PECR_TP_COBERTURA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_PECR_TP_COBERTURA] 
AS
@column in ('Outras','Natural a Campo','Natural Controlada','Inseminação Artificial','Fertilização In Vitro','Transferência Embrião')

GO
/****** Object:  Rule [R_PECR_TP_DIAGNOSTICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_PECR_TP_DIAGNOSTICO] 
AS
@column in ('Positivo','Negativo','Inconclusivo')
GO
/****** Object:  Rule [R_PECUARIA_SEXO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_PECUARIA_SEXO] 
AS
@column in ('Nenhum','Ambos','Macho','Femea')
GO
/****** Object:  Rule [R_POTENCIAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_POTENCIAL] 
AS
@column in ('Excelente','Bom','Médio','Ruim','Péssimo')
GO
/****** Object:  Rule [R_RCHM_EVENTO_FCHS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_RCHM_EVENTO_FCHS] 
AS
@column in ('Adminissão','Demissão','Férias Ini','Férias Fim','Avastamento Ini','Avastamento Fim')
GO
/****** Object:  Rule [R_RCHM_TIPO_FCNR]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_RCHM_TIPO_FCNR] 
AS
@column in ('Alocado','Registrado','Temporário','Terceirizado')
GO
/****** Object:  Rule [R_SITUACAO_LOCALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_SITUACAO_LOCALIDADE] 
AS
@column in ('0','1','2')
GO
/****** Object:  Rule [R_SITUACAO_PARCELA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_SITUACAO_PARCELA] 
AS
@column in ('Lançada','Aberta','Baixa Parcial','Baixa Total','Cancelada','Estornada')
GO
/****** Object:  Rule [R_SITUACAO_PROPRIEDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_SITUACAO_PROPRIEDADE] 
AS
@column in ('Propriedade','Arrendamento','Locação','Espólio','Posse','Outros')
GO
/****** Object:  Rule [R_STATUS_CLIENTE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_STATUS_CLIENTE] 
AS
@column in ('Análise','Liberado','Rejeitado','Suspenso')
GO
/****** Object:  Rule [R_STATUS_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_STATUS_DOCUMENTO] 
AS
@column in ('Lançado','Confirmado','Estornado')
GO
/****** Object:  Rule [R_TP_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_ANIMAL] 
AS
@column in ('Comum','Genealogia','Matriz','Doadora','Receptora','Reprodutor')
GO
/****** Object:  Rule [R_TP_AUTHENTICATION]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_AUTHENTICATION] 
AS
@column in ('None','Default','SASL')
GO
/****** Object:  Rule [R_TP_CLASSE_TITULO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_CLASSE_TITULO] 
AS
@column in ('Pagar','Receber')
GO
/****** Object:  Rule [R_TP_CLASSIFICACAO_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_CLASSIFICACAO_CONTA] 
AS
@column in ('Conta Corrente','Conta Poupança','Conta Investimento','Conta Salário','Conta FGTS')
GO
/****** Object:  Rule [R_TP_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_CONTA] 
AS
@column in ('Analítica','Sintética')
GO
/****** Object:  Rule [R_TP_CONTROLE_PARASITA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_CONTROLE_PARASITA] 
AS
@column in ('Nenhum','Vermífugos','Bernicida','Mosquicida','Carrapaticida','Sarnicida','Outros')
GO
/****** Object:  Rule [R_TP_CONTROLE_PECUARIA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_CONTROLE_PECUARIA] 
AS
@column in ('Lote','Individual')
GO
/****** Object:  Rule [R_TP_DADO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_DADO] 
AS
@column in ('String','Integer','Float','Boolean','Date','DateTime')
GO
/****** Object:  Rule [R_TP_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_DOCUMENTO] 
AS
@column in ('Pedido','Nota Fiscal','Cupom Fiscal','Ordem Serviço','Ordem Transferência','Ordem Movimento','Romaneio','Frete','Inventário','NFe','NFSe')
GO
/****** Object:  Rule [R_TP_ESCOLARIDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_ESCOLARIDADE] 
AS
@column in ('Não Informado', 'Analfabeto','Fundamental Incompleto','Fundamental Completo','Médio Incompleto','Médio Completo','Superior Incompleto','Superior Completo','Pós-Graduação','Mestrado','Doutorado','PhD')

GO
/****** Object:  Rule [R_TP_ESTADO_CIVIL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_ESTADO_CIVIL] 
AS
@column in ('Não Informado', 'Solteiro','Casado','Viúvo','Divorciado','Amaziado','Separado Jud.','União Estável','Outros')
GO
/****** Object:  Rule [R_TP_EVENTO_SANITARIO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_EVENTO_SANITARIO] 
AS
@column in ('Nenhum','Vacinação','Controle Parasitas','Outros')
GO
/****** Object:  Rule [R_TP_FATO_FISCAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_FATO_FISCAL] 
AS
@column in ('ICMS Origem','ICMS Destino','ICMS','ICMS Retido','IPI','ISS','ISS Retido','PIS','PIS Retido','CONFINS','CONFINS Retido','CSLL','IR','IR Retido')
GO
/****** Object:  Rule [R_TP_FORMA_VENCIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_FORMA_VENCIMENTO] 
AS
@column in ('A Pagar','A Receber')
GO
/****** Object:  Rule [R_TP_FRETE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_FRETE] 
AS
@column in ('1 - Emitente','2 - Destinatário','9 - Sem Frete')
GO
/****** Object:  Rule [R_TP_HISTORICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_HISTORICO] 
AS
@column in ('Caixa','Banco','Parcela','Estoque','Nota Fiscal')
GO
/****** Object:  Rule [R_TP_ID]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_ID] 
AS
@column in ('NONE','SSTM','CPRC','EMPR','UNEM','SSCP','SSEM','SSUE')
GO
/****** Object:  Rule [R_TP_IMAGEM]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_IMAGEM] 
AS
@column in ('Fotografia','Logomarca','Icone','Marca')
GO
/****** Object:  Rule [R_TP_LANCAMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_LANCAMENTO] 
AS
@column in ('Débito','Crédito','Misto')
GO
/****** Object:  Rule [R_TP_LOCALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_LOCALIDADE] 
AS
@column in ('D','M','P','R')
GO
/****** Object:  Rule [R_TP_MENU]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_MENU] 
AS
@column in ('Horizontal','Vertical','Large Button','Small Button')
GO
/****** Object:  Rule [R_TP_MOVIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_MOVIMENTO] 
AS
@column in ('Entrada','Saída')
GO
/****** Object:  Rule [R_TP_MOVIMENTO_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_MOVIMENTO_ANIMAL] 
AS
@column in ('Entrada','Mudança Era','Morte','Transferência','Saída')
GO
/****** Object:  Rule [R_TP_ORCAMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_ORCAMENTO] 
AS
@column in ('Previsto','Realizado')
GO
/****** Object:  Rule [R_TP_ORIGEM_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_ORIGEM_ANIMAL] 
AS
@column in ('Interno','Externo','Importado')
GO
/****** Object:  Rule [R_TP_PARAMETRO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_PARAMETRO] 
AS
@column in ('SSTM','CPRC','EMPR','UNEM','USRS')
GO
/****** Object:  Rule [R_TP_PESSOA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_PESSOA] 
AS
@column in ('Física','Jurídica')
GO
/****** Object:  Rule [R_TP_PRODUTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_PRODUTO] 
AS
@column in ('Mercadoria','Serviço','Bovino','Equino','Pet','Aquicultura','Pecuária','Outros')
GO
/****** Object:  Rule [R_TP_PROPRIEDADE_RURAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_PROPRIEDADE_RURAL] 
AS
@column in ('Rastreada','Não Rastreada')
GO
/****** Object:  Rule [R_TP_SCRIPT_TABLE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_SCRIPT_TABLE] 
AS
@column in ('Create','Alter','Add','Drop')
GO
/****** Object:  Rule [R_TP_SEXO_HUMANO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_SEXO_HUMANO] 
AS
@column in ('Não Informado', 'Masculino','Feminino')

GO
/****** Object:  Rule [R_TP_TIPO_DOC]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_TIPO_DOC] 
AS
@column in ('Identificação','Escolaridade','Regulação')
GO
/****** Object:  Rule [R_TP_TITULO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_TITULO] 
AS
@column in ('Boleto','Fatura','Cheque','Cartão Crédito','Cartão Débito','Nota Promissória','Carteira','Outros')
GO
/****** Object:  Rule [R_TP_TRANSACAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_TRANSACAO] 
AS
@column in ('Inventário','Baixa','Cautela','Troca','Devolução','Estorno','Transferência','Estoque Inicial','Venda','Compra','Mudança de Era','Produção','Perdas','Rotação Unidade','Consumo','Ajuste')
GO
/****** Object:  Rule [R_TP_UNIDADE_ERA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_UNIDADE_ERA] 
AS
@column in ('Dias','Semanas','Meses','Anos','Decadas')
GO
/****** Object:  Rule [R_TP_UNIDADE_MEDIDA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_UNIDADE_MEDIDA] 
AS
@column in ('Padrão','Fração','Multiplo')
GO
/****** Object:  Rule [R_TP_UNIDADE_PESO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_UNIDADE_PESO] 
AS
@column in ('Arroba','Miligramas','Gramas','Quilogramas','Tonelada')
GO
/****** Object:  Rule [R_TP_USE_TLS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_USE_TLS] 
AS
@column in ('No TLS Support','Use Explicit TLS','Use Implicit TLS','Use Require TLS')
GO
/****** Object:  Rule [R_TP_VACINACAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_TP_VACINACAO] 
AS
@column in ('Nenhuma','Febre Aftosa','Clostridioses','Brucelose','Raiva','Botulismo','Leptospirose','Outras')
GO
/****** Object:  Rule [R_VETE_CATEGORIA_SERVICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_VETE_CATEGORIA_SERVICO] 
AS
@column in ('Simples','Composto')
GO
/****** Object:  Rule [R_VETE_STAUS_OS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_VETE_STAUS_OS] 
AS
@column in ('Aberta','Orçamento','Aguardando Aprovação','Aprovada','Cancelada','Liberada','Aguardando Entrega','Processada')
GO
/****** Object:  Rule [R_VETE_TIPO_COMPOSICAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_VETE_TIPO_COMPOSICAO] 
AS
@column in ('Mercadoria','Serviço')
GO
/****** Object:  Rule [R_VETE_TIPO_OS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_VETE_TIPO_OS] 
AS
@column in ('Venda','Consumo','Banho e Tosa','Consulta','Cirurgia','Hospedage','Medicação','Uso de Plano ','Internação')
GO
/****** Object:  Rule [R_VETI_PORTE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_VETI_PORTE] 
AS
@column in ('Mini','Pequena','Média','Grande','Gigante')
GO
/****** Object:  Rule [R_ZONA_MUNICIPAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE RULE [dbo].[R_ZONA_MUNICIPAL] 
AS
@column in ('Urbana','Suburbana','Rural')
GO
/****** Object:  UserDefinedDataType [dbo].[ALIAS_025]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[ALIAS_025] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[ALIAS_040]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[ALIAS_040] FROM [nvarchar](40) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[ALIAS_25]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[ALIAS_25] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[APTIDAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[APTIDAO] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[BOOL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[BOOL] FROM [bit] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CEP]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CEP] FROM [nvarchar](9) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CLASSE_PRODUTOR]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CLASSE_PRODUTOR] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_003]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_003] FROM [nvarchar](3) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_005]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_005] FROM [nvarchar](5) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_010]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_010] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_015]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_015] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_020]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_020] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_025]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_025] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_040]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_040] FROM [nvarchar](40) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_128]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_128] FROM [nvarchar](128) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_256]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_256] FROM [nvarchar](256) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CODE_IBGE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CODE_IBGE] FROM [nvarchar](12) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[COORDENADAS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[COORDENADAS] FROM [numeric](18, 6) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CPF_CNPJ]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CPF_CNPJ] FROM [nvarchar](18) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[CURRENCY]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[CURRENCY] FROM [money] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[DATABASE_NAME]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[DATABASE_NAME] FROM [nvarchar](60) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[DATE_AND_TIME]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[DATE_AND_TIME] FROM [datetime2] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[DATE_ONLY]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[DATE_ONLY] FROM [datetime2] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[DECISION]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[DECISION] FROM [bit] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[DESCRIPTION]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[DESCRIPTION] FROM [nvarchar](500) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[DISTANCIA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[DISTANCIA] FROM [numeric](18, 3) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[ESPECIE_MONETARIA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[ESPECIE_MONETARIA] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[FSCL_CST_TIPO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[FSCL_CST_TIPO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[FSCL_RFTRIBUTARIO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[FSCL_RFTRIBUTARIO] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[FSCL_TIPO_PESSOA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[FSCL_TIPO_PESSOA] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[GRANDEZA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[GRANDEZA] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[IDENTIFY]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[IDENTIFY] FROM UNIQUEIDENTIFIER NULL
GO
/****** Object:  UserDefinedDataType [dbo].[IMAGEM]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[IMAGEM] FROM [nvarchar](MAX) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[LOCAL_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[LOCAL_CONTA] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[MEASURE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[MEASURE] FROM [numeric](18, 4) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[MESES_DO_ANO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[MESES_DO_ANO] FROM [nvarchar](12) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NAME_024]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NAME_024] FROM [nvarchar](24) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NAME_040]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NAME_040] FROM [nvarchar](40) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NAME_064]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NAME_064] FROM [nvarchar](64) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NAME_128]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NAME_128] FROM [nvarchar](128) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NAME_256]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NAME_256] FROM [nvarchar](256) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NCMS_TIPO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NCMS_TIPO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NIVELGRUPO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[NIVELGRUPO] FROM [int] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[OBJECT_TYPE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[OBJECT_TYPE] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[OBS_500]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[OBS_500] FROM [nvarchar](500) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[OBS_4000]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[OBS_4000] FROM [nvarchar](MAX) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[OBS_MAX]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[OBS_MAX] FROM [nvarchar](MAX) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[PECR_METODO_DIAGNOSTICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[PECR_METODO_DIAGNOSTICO] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[PECR_TP_COBERTURA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[PECR_TP_COBERTURA] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[PECR_TP_DIAGNOSTICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[PECR_TP_DIAGNOSTICO] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[PECUARIA_SEXO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[PECUARIA_SEXO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[PERCENT]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[PERCENT] FROM [numeric](18, 4) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[POTENCIAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[POTENCIAL] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[RCHM_EVENTO_FCHS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[RCHM_EVENTO_FCHS] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[RCHM_TIPO_FCNR]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[RCHM_TIPO_FCNR] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[SITUACAO_LOCALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[SITUACAO_LOCALIDADE] FROM [char](1) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[SITUACAO_PARCELA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[SITUACAO_PARCELA] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[SITUACAO_PROPRIEDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[SITUACAO_PROPRIEDADE] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[SKIN]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[SKIN] FROM [nvarchar](64) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[STATUS_CLIENTE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[STATUS_CLIENTE] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[STATUS_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[STATUS_DOCUMENTO] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TEXTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TEXTO] FROM [text] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_ANIMAL] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_AUTHENTICATION]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_AUTHENTICATION] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_CLASSE_TITULO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_CLASSE_TITULO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_CLASSIFICACAO_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_CLASSIFICACAO_CONTA] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_CONTA] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_CONTROLE_PARASITA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_CONTROLE_PARASITA] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_CONTROLE_PECUARIA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_CONTROLE_PECUARIA] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_DADO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_DADO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_DOCUMENTO] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_ESCOLARIDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_ESCOLARIDADE] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_ESTADO_CIVIL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_ESTADO_CIVIL] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_EVENTO_SANITARIO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_EVENTO_SANITARIO] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_FATO_FISCAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_FATO_FISCAL] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_FORMA_VENCIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_FORMA_VENCIMENTO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_FRETE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_FRETE] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_HISTORICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_HISTORICO] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_ID]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_ID] FROM [nvarchar](4) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_IMAGEM]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_IMAGEM] FROM [nvarchar](12) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_LANCAMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_LANCAMENTO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_LOCALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_LOCALIDADE] FROM [char](1) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_MENU]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_MENU] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_MOVIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_MOVIMENTO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_MOVIMENTO_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_MOVIMENTO_ANIMAL] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_ORCAMENTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_ORCAMENTO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_ORIGEM_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_ORIGEM_ANIMAL] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_PARAMETRO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_PARAMETRO] FROM [nvarchar](5) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_PESSOA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_PESSOA] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_PRODUTO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_PRODUTO] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_PROPRIEDADE_RURAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_PROPRIEDADE_RURAL] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_SCRIPT_TABLE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_SCRIPT_TABLE] FROM [nvarchar](40) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_SEXO_HUMANO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_SEXO_HUMANO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_TIPO_DOC]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_TIPO_DOC] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_TITULO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_TITULO] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_TRANSACAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_TRANSACAO] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_UNIDADE_ERA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_UNIDADE_ERA] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_UNIDADE_MEDIDA]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_UNIDADE_MEDIDA] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_UNIDADE_PESO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_UNIDADE_PESO] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_USE_TLS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_USE_TLS] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[TP_VACINACAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[TP_VACINACAO] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[UNIT]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[UNIT] FROM [int] NULL
GO
/****** Object:  UserDefinedDataType [dbo].[VERSION]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[VERSION] FROM [nvarchar](20) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[VETE_CATEGORIA_SERVICO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[VETE_CATEGORIA_SERVICO] FROM [nvarchar](10) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[VETE_STAUS_OS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[VETE_STAUS_OS] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[VETE_TIPO_COMPOSICAO]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[VETE_TIPO_COMPOSICAO] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[VETE_TIPO_OS]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[VETE_TIPO_OS] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[VETI_PORTE]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[VETI_PORTE] FROM [nvarchar](15) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[ZONA_MUNICIPAL]    Script Date: 03/10/2020 20:47:19 ******/
CREATE TYPE [dbo].[ZONA_MUNICIPAL] FROM [nvarchar](15) NULL
GO
/****** Object:  Table [dbo].[CDST_CLASSE_PRODUTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_CLASSE_PRODUTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID() ,
	[CLPR_CODIGO] [dbo].[CODE_010] NOT NULL,
	[CLPR_NOME] [dbo].[NAME_064] NOT NULL,
	[CLPR_PATRIMONIO] [dbo].[DECISION] NULL,
	[CLPR_TIPO] [dbo].[TP_PRODUTO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_CLASSE_PRODUTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_CLIENTE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_CLIENTE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[CLNT_PESS_ID] [dbo].[IDENTIFY] NULL,
	[CLNT_POTENCIAL] [dbo].[POTENCIAL] NULL,
	[CLNT_CAPITAL_SOCIAL] [dbo].[CURRENCY] NULL,
	[CLNT_LIMITE_CREDITO] [dbo].[CURRENCY] NULL,
	[CLNT_STATUS] [dbo].[STATUS_CLIENTE] NOT NULL,
	[CLNT_OBS] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_CLIENTE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_FABRICANTE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_FABRICANTE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[FBCT_PESS_ID] [dbo].[IDENTIFY] NULL,
	[FBCT_OBS] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_FABRICANTE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_FORNECEDOR]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_FORNECEDOR](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[FRNC_PESS_ID] [dbo].[IDENTIFY] NULL,
	[FRNC_OBS] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_FORNECEDOR] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_PRODUTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_PRODUTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PRDT_CLPR_ID] [dbo].[IDENTIFY] NULL,
	[PRDT_UNID_ID] [dbo].[IDENTIFY] NULL,
	[PRDT_CODIGO_BARRA] [dbo].[CODE_020] NULL,
	[PRDT_NOME] [dbo].[NAME_064] NULL,
	[PRDT_DESCRICAO] [dbo].[NAME_128] NULL,
	[PRDT_PRECO_CUSTO] [dbo].[CURRENCY] NULL,
	[PRDT_PRECO_VENDA] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_PRODUTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_PRODUTO_COMPOSICAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_PRODUTO_COMPOSICAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PRCP_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[PRCP_COMP_ID] [dbo].[IDENTIFY] NULL,
	[PRCP_UNID_ID] [dbo].[IDENTIFY] NULL,
	[PDCP_QUANTIDADE] [dbo].[MEASURE] NULL,
	[PDCP_VER_NA_OS] [dbo].[DECISION] NULL,
	[PDCP_COMPOE_PRECO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_PRODUTO_COMPOSICAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_PRODUTO_EQUIVALENTE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_PRODUTO_EQUIVALENTE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PREQ_EQVT_ID] [dbo].[IDENTIFY] NULL,
	[PREQ_PRDT_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_PRODUTO_EQUIVALENTE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_PRODUTOR_PROPRIEDADE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_PRODUTOR_PROPRIEDADE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PDPP_PPRR_ID] [dbo].[IDENTIFY] NULL,
	[PDPP_PDRR_ID] [dbo].[IDENTIFY] NULL,
	[PDPP_CLASSIFICACAO] [dbo].[CLASSE_PRODUTOR] NULL,
	[PDPP_RESPONSAVEL] [dbo].[DECISION] NULL,
	[PDPP_INSC_ESTADUAL] [dbo].[CODE_025] NULL,
	[PDPP_TIPO] [dbo].[TP_PROPRIEDADE_RURAL] NULL,
	[PDPP_SITUACAO] [dbo].[SITUACAO_PROPRIEDADE] NULL,
	[PDPP_AREA_OCUPADA] [dbo].[MEASURE] NULL,
	[PDPP_AREA_PASTAGENS] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_PRODUTOR_PROPRIEDADE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_PRODUTOR_RURAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_PRODUTOR_RURAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PDRR_PESS_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_PRODUTOR_RURAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_PROPRIEDADE_RURAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_PROPRIEDADE_RURAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PPRR_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PPRR_NOME] [dbo].[NAME_128] NULL,
	[PPRR_INCRA] [dbo].[CODE_020] NULL,
	[PPRR_NIRF] [dbo].[CODE_020] NULL,
	[PPRR_CPOESAE] [dbo].[CODE_020] NULL,
	[PPRR_AREA] [dbo].[MEASURE] NULL,
	[PPRR_LATITUDE_SEDE] [dbo].[COORDENADAS] NOT NULL,
	[PPRR_LONGITUDE_SEDE] [dbo].[COORDENADAS] NULL,
	[PPRR_VIA_ACESSO] [dbo].[OBS_500] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_PROPRIEDADE_RURAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_TRANSPORTADORA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_TRANSPORTADORA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[TRNS_PESS_ID] [dbo].[IDENTIFY] NULL,
	[TRNS_OBS] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_TRANSPORTADORA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CDST_UNIDADE_MEDIDA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CDST_UNIDADE_MEDIDA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[UNID_SIGLA] [dbo].[CODE_005] NULL,
	[UNID_NOME] [dbo].[NAME_064] NULL,
	[UNID_GRANDEZA] [dbo].[GRANDEZA] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CDST_UNIDADE_MEDIDA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_BAIRRO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_BAIRRO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[BAIR_LCLD_ID] [dbo].[IDENTIFY] NULL,
	[BAIR_NOME] [dbo].[NAME_128] NULL,
	[BAIR_NOME_ABREVIADO] [dbo].[NAME_040] NULL,
	[BAIR_CEP_INICIAL] [dbo].[CEP] NULL,
	[BAIR_CEP_FINAL] [dbo].[CEP] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_BAIRRO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_CARGO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_CARGO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[CARG_CODIGO] [dbo].[CODE_003] NULL,
	[CARG_NOME] [dbo].[NAME_064] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_CARGO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_GRUPO_USUARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_GRUPO_USUARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[GRUS_NOME] [dbo].[NAME_064] NULL,
	[GRUS_SIGLA] [dbo].[CODE_005] NULL,
	[GRUS_NIVEL] [dbo].[NIVELGRUPO] NULL,
	[GRUS_DESC_MAX] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_GRUPO_USUARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_LOCALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_LOCALIDADE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[LCLD_UNFD_ID] [dbo].[IDENTIFY] NULL,
	[LCLD_NR_IBGE] [dbo].[CODE_IBGE] NULL,
	[LCLD_NOME] [dbo].[NAME_128] NULL,
	[LCLD_CEP] [dbo].[CEP] NULL,
	[LCLD_NOME_ABREV] [dbo].[ALIAS_040] NULL,
	[LCLD_CEP_INICIAL] [dbo].[CEP] NULL,
	[LCLD_CEP_FINAL] [dbo].[CEP] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_LOCALIDADE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_LOGRADOURO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_LOGRADOURO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[LGRD_BAIR_ID] [dbo].[IDENTIFY] NULL,
	[LGRD_NOME] [dbo].[NAME_256] NULL,
	[LGRD_NOME_ABREV] [dbo].[ALIAS_040] NULL,
	[LGRD_CEP] [dbo].[CEP] NULL,
	[LGRD_ZONA] [dbo].[ZONA_MUNICIPAL] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_LOGRADOURO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_NACIONALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_NACIONALIDADE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[NCNL_CODIGO] [dbo].[CODE_003] NULL,
	[NCNL_NOME] [dbo].[NAME_064] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_NACIONALIDADE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_ORGAO_EXPEDIDOR]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_ORGAO_EXPEDIDOR](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[OREX_CODIGO] [dbo].[CODE_003] NULL,
	[OREX_SIGLA] [dbo].[CODE_010] NULL,
	[OREX_NOME] [dbo].[NAME_064] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_ORGAO_EXPEDIDOR] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PAIS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PAIS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PAIS_NOME] [dbo].[NAME_064] NULL,
	[PAIS_SIGLA] [dbo].[CODE_003] NULL,
	[PAIS_NOME_ABREVIADO] [dbo].[ALIAS_040] NULL,
	[PAIS_CODIGO] [dbo].[CODE_010] NULL,
	[PAIS_CEP_INICIAL] [dbo].[CEP] NULL,
	[PAIS_CEP_FINAL] [dbo].[CEP] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PAIS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PESS_CODIGO] [dbo].[CODE_010] NULL,
	[PESS_CPF_CNPJ] [dbo].[CPF_CNPJ] NULL,
	[PESS_NOME] [dbo].[NAME_128] NULL,
	[PESS_FISICA_JURIDICA] [dbo].[TP_PESSOA] NULL,
	[PESS_OBSERVACAO] [dbo].[OBS_4000] NULL,
	[PESS_URL] [dbo].[NAME_256] NULL,
	[PESS_RELACIONAMENTO] [dbo].[CODE_256] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PESSOA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_DOCUMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSDC_OREX_ID] [dbo].[IDENTIFY] NULL,
	[PSDC_TPDC_ID] [dbo].[IDENTIFY] NULL,
	[PSDC_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSDC_NR_DOCUMENTO] [dbo].[CODE_020] NULL,
	[PSDC_DT_EMISSAO] [dbo].[DATE_ONLY] NOT NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PESSOA_DOCUMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_EMAIL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_EMAIL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSEM_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSEM_TPEM_ID] [dbo].[IDENTIFY] NULL,
	[PSEM_ENDERECO] [dbo].[NAME_256] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PESSOA_EMAIL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_ENDERECO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_ENDERECO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSEN_TPEN_ID] [dbo].[IDENTIFY] NULL,
	[PSEN_BAIR_ID] [dbo].[IDENTIFY] NULL,
	[PSEN_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSEN_CEP] [dbo].[CEP] NULL,
	[PSEN_LOGRADOURO] [dbo].[NAME_128] NULL,
	[PSEN_NUMERO] [dbo].[CODE_020] NULL,
	[PSEN_COMPLEMENTO] [dbo].[NAME_040] NULL,
	[PSEN_DISTANCIA_KM] [dbo].[MEASURE] NULL,
	[PSEN_ZONA] [dbo].[ZONA_MUNICIPAL] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PESSOA_ENDERECO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_FISICA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_FISICA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSFS_NCNL_ID] [dbo].[IDENTIFY] NULL,
	[PSFS_CARG_ID] [dbo].[IDENTIFY] NULL,
	[PSFS_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSFS_PROF_ID] [dbo].[IDENTIFY] NULL,
	[PSFS_NOME_MAE] [dbo].[NAME_064] NULL,
	[PSFS_NOME_PAI] [dbo].[NAME_064] NULL,
	[PSFS_DT_NASCIMENTO] [dbo].[DATE_AND_TIME] NULL,
	[PSFS_SEXO] [dbo].[TP_SEXO_HUMANO] NULL,
	[PSFS_ESTADO_CIVIL] [dbo].[TP_ESTADO_CIVIL] NULL,
	[PSFS_ESCOLARIDADE] [dbo].[TP_ESCOLARIDADE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
    CONSTRAINT [PK_CMNS_PESSOA_FISICA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_IMAGEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_IMAGEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSIM_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSIM_TIPO] [dbo].[TP_IMAGEM] NULL,
	[PSIM_IMAGEM] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
    CONSTRAINT [PK_CMNS_PESSOA_IMAGEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_JURIDICA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_JURIDICA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSJR_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSJR_RMAT_ID] [dbo].[IDENTIFY] NULL,
	[PSJR_RAZAO_SOCIAL] [dbo].[NAME_128] NULL,
	[PSJR_INSC_ESTADUAL] [dbo].[CODE_025] NULL,
	[PSJR_INSC_ESTADUAL_SUBT] [dbo].[CODE_025] NULL,
	[PSJR_INSC_MUNICIPAL] [dbo].[CODE_020] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PESSOA_JURIDICA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PESSOA_TELEFONE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PESSOA_TELEFONE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PSTL_TPTL_ID] [dbo].[IDENTIFY] NULL,
	[PSTL_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PSTL_NUMERO] [dbo].[CODE_020] NULL,
	[PSTL_RAMAL] [dbo].[CODE_010] NULL,
	[PSTL_OBSERVACAO] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PESSOA_TELEFONE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_PROFISSAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_PROFISSAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PROF_PROF_ID] [dbo].[IDENTIFY] NULL,
	[PROF_CODIGO] [dbo].[CODE_005] NULL,
	[PROF_NOME] [dbo].[NAME_064] NULL,
	[PROF_CODIGO_IRPF] [dbo].[CODE_005] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_PROFISSAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_RAMO_ATIVIDADE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_RAMO_ATIVIDADE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[RMAT_RMAT_ID] [dbo].[IDENTIFY] NULL,
	[RMAT_NOME] [dbo].[NAME_256] NULL,
	[RMAT_CODIGO_RF] [dbo].[CODE_010] NULL,
	[RMAT_RETEM_CONFINS] [dbo].[DECISION] NULL,
	[RMAT_RETEM_PIS] [dbo].[DECISION] NULL,
	[RMAT_RETEM_CSLL] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_RAMO_ATIVIDADE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_TIPO_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_TIPO_DOCUMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[TPDC_CODIGO] [dbo].[CODE_003] NULL,
	[TPDC_NOME] [dbo].[NAME_064] NULL,
	[TPDC_TIPO] [dbo].[TP_TIPO_DOC] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_TIPO_DOCUMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_TIPO_EMAIL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_TIPO_EMAIL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[TPEM_CODIGO] [dbo].[CODE_003] NULL,
	[TPEM_NOME] [dbo].[NAME_064] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_TIPO_EMAIL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_TIPO_ENDERECO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_TIPO_ENDERECO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[TPEN_CODIGO] [dbo].[CODE_003] NULL,
	[TPEN_NOME] [dbo].[NAME_064] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_TIPO_ENDERECO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_TIPO_TELEFONE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_TIPO_TELEFONE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[TPTL_CODIGO] [dbo].[CODE_003] NULL,
	[TPTL_NOME] [dbo].[NAME_064] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_TIPO_TELEFONE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_UNEM_USUARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_UNEM_USUARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[UEUS_USRS_ID] [dbo].[IDENTIFY] NULL,
	[UEUS_GRUS_ID] [dbo].[IDENTIFY] NULL,
	[UEUS_UNEM_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_UNEM_USUARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_UNIDADE_FEDERATIVA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_UNIDADE_FEDERATIVA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[UNFD_PAIS_ID] [dbo].[IDENTIFY] NULL,
	[UNFD_NOME] [dbo].[NAME_064] NULL,
	[UNFD_SIGLA] [dbo].[CODE_003] NULL,
	[UNFD_PREPOSICAO] [dbo].[CODE_003] NULL,
	[UNFD_NR_IBGE] [dbo].[CODE_IBGE] NULL,
	[UNFD_CEP_INICIAL] [dbo].[CEP] NULL,
	[UNFD_CEP_FINAL] [dbo].[CEP] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_UNIDADE_FEDERATIVA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CMNS_USUARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CMNS_USUARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[USRS_PSEM_ID] [dbo].[IDENTIFY] NULL,
	[USRS_PESS_ID] [dbo].[IDENTIFY] NULL,
	[USRS_NOME_LOGIN] [dbo].[NAME_040] NULL,
	[USRS_SENHA] [dbo].[NAME_256] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CMNS_USUARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CORE_CORPORACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CORE_CORPORACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[CPRC_NOME] [dbo].[NAME_064] NULL,
	[CPRC_SENHA] [dbo].[NAME_256] NULL,
	[CPRC_LOGOMARCA] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CORE_CORPORACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CORE_EMPRESA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CORE_EMPRESA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[EMPR_CPRC_ID] [dbo].[IDENTIFY] NULL,
	[EMPR_NOME] [dbo].[NAME_064] NULL,
	[EMPR_SENHA] [dbo].[NAME_256] NULL,
	[EMPR_LOGOMARCA] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CORE_EMPRESA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CORE_UNIDADE_EMPRESARIAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CORE_UNIDADE_EMPRESARIAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[UNEM_EMPR_ID] [dbo].[IDENTIFY] NULL,
	[UNEM_PESS_ID] [dbo].[IDENTIFY] NULL,
	[UNEM_CODIGO] [dbo].[CODE_010] NULL,
	[UNEM_SKIN_NAME] [dbo].[NAME_040] NULL,
	[UNEM_SENHA] [dbo].[NAME_256] NULL,
	[UNEM_LOGOMARCA] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_CORE_UNIDADE_EMPRESARIAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_CAPA_MOVIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_CAPA_MOVIMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[CPMV_CLNT_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_HSPD_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_FRVN_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_FRNC_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_CPMV_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_USRS_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_VEND_ID] [dbo].[IDENTIFY] NULL,
	[CPMV_NR_DOCUMENTO] [dbo].[CODE_015] NULL,
	[CPMV_TP_DOCUMENTO] [dbo].[TP_DOCUMENTO] NULL,
	[CPMV_DT_EMISSAO] [dbo].[DATE_ONLY] NULL,
	[CPMV_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[CPMV_TP_MOVIMENTO] [dbo].[TP_MOVIMENTO] NULL,
	[CPMV_TP_TRANSACAO] [dbo].[TP_TRANSACAO] NULL,
	[CPMV_DT_SAIDA] [dbo].[DATE_AND_TIME] NULL,
	[CPMV_NATUREZA_OPERACAO] [dbo].[NAME_040] NULL,
	[CPMV_CHAVE_ACESSO] [dbo].[CODE_128] NULL,
	[CPMV_PROTOCOLO_USO] [dbo].[NAME_040] NULL,
	[CPMV_PCT_DESC_SERVICO] [dbo].[PERCENT] NULL,
	[CPMV_VLR_DESC_SERVICO] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_SUB_TOTAL] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_BASE_ICMS] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_ICMS] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_BASE_ICMS_SUBST] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_ICMS_SUBST] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_PRODUTOS] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_FRETE] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_SEGURO] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_DESCONTO] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_OUTRAS_DESPESAS] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_IPI] [dbo].[CURRENCY] NULL,
	[CPMV_VLR_DOCUMENTO] [dbo].[CURRENCY] NULL,
	[CPMV_QTD_ITENS] [dbo].[MEASURE] NULL,
	[CPMV_STATUS] [dbo].[STATUS_DOCUMENTO] NULL,
	[CPMV_FORMA_PAGAMENTO] [dbo].[ESPECIE_MONETARIA] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_CAPA_MOVIMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_FABRICANTE_MOTOR]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_FABRICANTE_MOTOR](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[FBMT_FBCT_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_FABRICANTE_MOTOR] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_GRUPO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_GRUPO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[GRPS_CODIGO] [dbo].[CODE_005] NULL,
	[GRPS_NOME] [dbo].[NAME_040] NULL,
	[GRPS_DESCRICAO] [dbo].[NAME_128] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_GRUPO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_ITEM_MOVIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_ITEM_MOVIMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[ITMV_CTCT_ID] [dbo].[IDENTIFY] NULL,
	[ITMV_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[ITMV_FNCR_ID] [dbo].[IDENTIFY] NULL,
	[ITMV_UNID_ID] [dbo].[IDENTIFY] NULL,
	[ITMV_CPMV_ID] [dbo].[IDENTIFY] NULL,
	[ITMV_LTVL_ID] [dbo].[IDENTIFY] NULL,
	[ITMV_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[ITMV_DT_MOVIMENTO] [dbo].[DATE_AND_TIME] NULL,
	[ITMV_PRDT_CODIGO] [dbo].[CODE_020] NULL,
	[ITMV_PRDT_NOME] [dbo].[NAME_064] NULL,
	[ITMV_CST] [dbo].[CODE_005] NULL,
	[ITMV_CFOP] [dbo].[CODE_005] NULL,
	[ITMV_VLR_BASE_ICMS] [dbo].[CURRENCY] NULL,
	[ITMV_VLR_ICMS] [dbo].[CURRENCY] NULL,
	[ITMV_ALIQUOTA] [dbo].[PERCENT] NULL,
	[ITMV_UNID_SIGLA] [dbo].[CODE_005] NULL,
	[ITMV_QUANTIDADE] [dbo].[MEASURE] NULL,
	[ITMV_VALOR_UNITARIO] [dbo].[CURRENCY] NULL,
	[ITMV_DESCONTO] [dbo].[PERCENT] NULL,
	[ITMV_VLR_TOTAL] [dbo].[CURRENCY] NULL,
	[ITMV_TP_DOCUMENTO] [dbo].[TP_DOCUMENTO] NULL,
	[ITMV_TP_MOVIMENTO] [dbo].[TP_MOVIMENTO] NULL,
	[ITMV_TRANSACAO] [dbo].[TP_TRANSACAO] NULL,
	[ITMV_OBSERVACAO] [dbo].[NAME_256] NULL,
	[ITMV_STATUS] [dbo].[STATUS_DOCUMENTO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_ITEM_MOVIMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_LOTE_VALIDADE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_LOTE_VALIDADE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[LTVL_MRCD_ID] [dbo].[IDENTIFY] NULL,
	[LTVL_CODIGO] [dbo].[CODE_015] NULL,
	[LTVL_DT_FABRICACAO] [dbo].[DATE_AND_TIME] NULL,
	[LTVL_DT_VENCIMENTO] [dbo].[DATE_ONLY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_LOTE_VALIDADE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_MAQUINA_EQUIPAMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[MQEQ_MOTO_ID] [dbo].[IDENTIFY] NULL,
	[MQEQ_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[MQEQ_FBCT_ID] [dbo].[IDENTIFY] NULL,
	[MQEQ_NR_FABRICANTE] [dbo].[CODE_040] NULL,
	[MQEQ_NR_PATRIMONIO] [dbo].[CODE_040] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_MAQUINA_EQUIPAMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_MARCA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_MARCA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[MARC_CODIGO] [dbo].[CODE_005] NULL,
	[MARC_NOME] [dbo].[NAME_040] NULL,
	[MARC_DESCRICAO] [dbo].[NAME_128] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_MARCA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_MERCADORIA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_MERCADORIA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[MRCD_NCMS_ID] [dbo].[IDENTIFY] NULL,
	[MRCD_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[MRCD_MARC_ID] [dbo].[IDENTIFY] NULL,
	[MRCD_GRPS_ID] [dbo].[IDENTIFY] NULL,
	[MRCD_SBGP_ID] [dbo].[IDENTIFY] NULL,
	[MRCD_MODE_ID] [dbo].[IDENTIFY] NULL,
	[MRCD_CODIGO] [dbo].[CODE_015] NULL,
	[MRCD_NOME_REDUZIDO] [dbo].[NAME_040] NULL,
	[MRCD_REFERENCIA] [dbo].[CODE_040] NULL,
	[MRCD_REFERENCIA_AUX] [dbo].[CODE_040] NULL,
	[MRCD_PRECO_ULT_COMPRA] [dbo].[CURRENCY] NULL,
	[MRCD_PRECO_CUSTO] [dbo].[CURRENCY] NULL,
	[MRCD_ESTOQUE_MINIMO] [dbo].[MEASURE] NULL,
	[MRCD_ESTOQUE_NEGATIVO] [dbo].[DECISION] NULL,
	[MRCD_CONTROLA_LOTE] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_MERCADORIA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_MODELO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_MODELO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[MODE_CODIGO] [dbo].[CODE_005] NULL,
	[MODE_NOME] [dbo].[NAME_040] NULL,
	[MODE_DESCRICAO] [dbo].[NAME_128] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_MODELO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_NUMERO_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_NUMERO_DOCUMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[NRDC_UNEM_ID] [dbo].[IDENTIFY] NULL,
	[NRDC_TP_DOCUMENTO] [dbo].[TP_DOCUMENTO] NULL,
	[NRDC_TP_MOVIMENTO] [dbo].[TP_MOVIMENTO] NULL,
	[NRDC_PRX_NUMERO] [dbo].[UNIT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_NUMERO_DOCUMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_PRODUTO_SALDO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_PRODUTO_SALDO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[PRSD_LTVL_ID] [dbo].[IDENTIFY] NULL,
	[PRSD_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[PRSD_MES_REFERENCIA] [dbo].[DATE_ONLY] NULL,
	[PRSD_SALDO_INICIAL] [dbo].[MEASURE] NULL,
	[PRSD_QTD_ENTRADAS] [dbo].[MEASURE] NULL,
	[PRSD_QTD_SAIDAS] [dbo].[MEASURE] NULL,
	[PRSD_EM_CAUTELA] [dbo].[MEASURE] NULL,
	[PRSD_SALDO_FINAL] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_PRODUTO_SALDO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_SALDO_CENTRO_CUSTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_SALDO_CENTRO_CUSTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[SDCC_PRSD_ID] [dbo].[IDENTIFY] NULL,
	[SDCC_CTCT_ID] [dbo].[IDENTIFY] NULL,
	[SDCC_MES_REFERENCIA] [dbo].[DATE_ONLY] NULL,
	[SDCC_INICIAL] [dbo].[MEASURE] NULL,
	[SDCC_ENTRADAS] [dbo].[MEASURE] NULL,
	[SDCC_SAIDAS] [dbo].[MEASURE] NULL,
	[SDCC_CAUTELA] [dbo].[MEASURE] NULL,
	[SDCC_RESERVA] [dbo].[MEASURE] NULL,
	[SDCC_FINAL] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_SALDO_CENTRO_CUSTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ESTQ_SUBGRUPO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ESTQ_SUBGRUPO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(),
	[SBGP_CODIGO] [dbo].[CODE_005] NULL,
	[SBGP_NOME] [dbo].[NAME_040] NULL,
	[SBGP_DESCRICAO] [dbo].[NAME_128] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_ESTQ_SUBGRUPO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_BANCO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_BANCO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[BANC_CODIGO] [dbo].[CODE_003] NULL,
	[BANC_NOME] [dbo].[NAME_128] NULL,
	[BANC_APELIDO] [dbo].[CODE_025] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_BANCO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_BANCO_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_BANCO_CONTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[BANC_CAIX_ID] [dbo].[IDENTIFY] NULL,
	[BCCT_BANC_ID] [dbo].[IDENTIFY] NULL,
	[BCCT_NR_AGENCIA] [dbo].[CODE_010] NULL,
	[BCCT_NR_CONTA] [dbo].[CODE_010] NULL,
	[BCCT_DT_ABERTURA] [dbo].[DATE_ONLY] NULL,
	[BCCT_CLASSIFICACAO] [dbo].[TP_CLASSIFICACAO_CONTA] NULL,
	[BCCT_LIMITE_ESPECIAL] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_BANCO_CONTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_BANCO_CONTA_SALDO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_BANCO_CONTA_SALDO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[BCCS_BCCT_ID] [dbo].[IDENTIFY] NULL,
	[BCCS_REFERENCIA] [dbo].[DATE_ONLY] NULL,
	[BCCS_VALOR] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_BANCO_CONTA_SALDO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_BANCO_MODELO_BOLETO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_BANCO_MODELO_BOLETO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[BCMB_BANC_ID] [dbo].[IDENTIFY] NULL,
	[BCMB_MODELO_DEFAULT] [dbo].[TEXTO] NULL,
	[BCMB_MODELO_USADO] [dbo].[TEXTO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_BANCO_MODELO_BOLETO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_BANCO_MOVIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_BANCO_MOVIMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[BCMV_BCCT_ID] [dbo].[IDENTIFY] NULL,
	[BCMV_HSPD_ID] [dbo].[IDENTIFY] NULL,
	[BCMV_NUMERO_DOCUMENTO] [dbo].[CODE_020] NULL,
	[BCMV_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[BCMV_DT_MOVIMENTO] [dbo].[DATE_ONLY] NULL,
	[BCMV_VALOR] [dbo].[CURRENCY] NULL,
	[BCMV_COMPLEMENTO] [dbo].[NAME_128] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_BANCO_MOVIMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_CAIXA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_CAIXA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CAIX_PESS_ID] [dbo].[IDENTIFY] NULL,
	[CAIX_CODIGO] [dbo].[CODE_005] NULL,
	[CAIX_NOME] [dbo].[NAME_040] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_CAIXA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_CAIXA_ITEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_CAIXA_ITEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CXIT_HSPD_ID] [dbo].[IDENTIFY] NULL,
	[CXIT_PESS_ID] [dbo].[IDENTIFY] NULL,
	[CXIT_CTCT_ID] [dbo].[IDENTIFY] NULL,
	[CXIT_CXIT_ID] [dbo].[IDENTIFY] NULL,
	[CXIT_FNCR_ID] [dbo].[IDENTIFY] NULL,
	[CXIT_CXMV_ID] [dbo].[IDENTIFY] NULL,
	[CXIT_NR_DOCUMENTO] [dbo].[CODE_020] NULL,
	[CXIT_TP_LANCAMENTO] [dbo].[TP_LANCAMENTO] NULL,
	[CXIT_STATUS] [dbo].[STATUS_DOCUMENTO] NULL,
	[CXIT_ESPECIE] [dbo].[ESPECIE_MONETARIA] NULL,
	[CXIT_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[CXIT_VLR_LANCAMENTO] [dbo].[CURRENCY] NULL,
	[CXIT_DT_MOVIMENTO] [dbo].[DATE_ONLY] NULL,
	[CXIT_MES_REFERENCIA] [dbo].[DATE_ONLY] NULL,
	[CXIT_DT_CONCILIACAO] [dbo].[DATE_ONLY] NULL,
	[CXIT_VLR_CONCILIADO] [dbo].[CURRENCY] NULL,
	[CXIT_HISTORICO_COMPLEMENTAR] [dbo].[NAME_128] NULL,
	[CXIT_MD5] [dbo].[CODE_128] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_CAIXA_ITEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_CAIXA_MOVIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_CAIXA_MOVIMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CXMV_CAIX_ID] [dbo].[IDENTIFY] NULL,
	[CXMV_NUMERO] [dbo].[CODE_020] NULL,
	[CXMV_DT_ABERTURA] [dbo].[DATE_AND_TIME] NULL,
	[CXMV_DT_FECHAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[CXMV_VLR_CREDITOS] [dbo].[CURRENCY] NULL,
	[CXMV_VLR_DEBITOS] [dbo].[CURRENCY] NULL,
	[CXMV_SALDO_ABERTURA] [dbo].[CURRENCY] NULL,
	[CXMV_SALDO_FECHAMENTO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_CAIXA_MOVIMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_COMPOSICAO_PLANO_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_COMPOSICAO_PLANO_CONTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CMPC_LOCAL_CONTA] [dbo].[LOCAL_CONTA] NULL,
	[CMPC_NIVEIS] [dbo].[UNIT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_COMPOSICAO_PLANO_CONTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_FORMA_VENCIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_FORMA_VENCIMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[FRVN_TIPO] [dbo].[TP_FORMA_VENCIMENTO] NULL,
	[FRVN_CODIGO] [dbo].[CODE_005] NULL,
	[FRVN_NOME] [dbo].[NAME_064] NULL,
	[FRVN_DIA_FIXO] [dbo].[DECISION] NULL,
	[FRVN_ENTRADA] [dbo].[DECISION] NULL,
	[FRVN_COBRA_JUROS] [dbo].[DECISION] NULL,
	[FRVN_PARCELAS] [dbo].[UNIT] NULL,
	[FRVN_DIA_VENCIMENTO] [dbo].[UNIT] NULL,
	[FRVN_INTERVALO] [dbo].[UNIT] NULL,
	[FRVN_TAXA_JUROS] [dbo].[PERCENT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_FORMA_VENCIMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_HISTORICO_PADRAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_HISTORICO_PADRAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[HSPD_CODIGO] [dbo].[CODE_003] NULL,
	[HSPD_NOME] [dbo].[NAME_064] NULL,
	[HSPD_TP_HISTORICO] [dbo].[TP_HISTORICO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_HISTORICO_PADRAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_NIVEL_PLANO_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_NIVEL_PLANO_CONTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[NVPC_CMPC_ID] [dbo].[IDENTIFY] NULL,
	[NVPC_NIVEL] [dbo].[UNIT] NULL,
	[NVPC_CASAS] [dbo].[UNIT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_NIVEL_PLANO_CONTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_NOTA_FISCAL_TITULO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_NOTA_FISCAL_TITULO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CMTT_TTLS_ID] [dbo].[IDENTIFY] NULL,
	[NFTT_NTFS_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_NOTA_FISCAL_TITULO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_PARCELA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_PARCELA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRCL_TTLS_ID] [dbo].[IDENTIFY] NULL,
	[PRCL_NUMERO] [dbo].[CODE_020] NULL,
	[PRCL_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[PRCL_DT_EMISSAO] [dbo].[DATE_ONLY] NULL,
	[PRCL_DT_VENCIMENTO] [dbo].[DATE_ONLY] NULL,
	[PRCL_DT_BAIXA] [dbo].[DATE_AND_TIME] NULL,
	[PRCL_VLR_PARCELA] [dbo].[CURRENCY] NULL,
	[PRCL_VLR_DESCONTOS] [dbo].[CURRENCY] NULL,
	[PRCL_VLR_ACRESCIMO] [dbo].[CURRENCY] NULL,
	[PRCL_VLR_DESPESAS] [dbo].[CURRENCY] NULL,
	[PRCL_VLR_JUROS] [dbo].[CURRENCY] NULL,
	[PRCL_VLR_MULTA] [dbo].[CURRENCY] NULL,
	[PRCL_VLR_SALDO] [dbo].[CURRENCY] NULL,
	[PRCL_COMPLEMENTO] [dbo].[NAME_128] NULL,
	[PRCL_SITUACAO] [dbo].[SITUACAO_PARCELA] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_PARCELA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_PARCELA_BAIXA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_PARCELA_BAIXA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRBX_HSPD_ID] [dbo].[IDENTIFY] NULL,
	[PRBX_CXIT_ID] [dbo].[IDENTIFY] NULL,
	[PRBX_PRCL_ID] [dbo].[IDENTIFY] NULL,
	[PRBX_FORMA_PAGAMENTO] [dbo].[ESPECIE_MONETARIA] NULL,
	[PRBX_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[PRBX_DT_PAGAMENTO] [dbo].[DATE_ONLY] NULL,
	[PRBX_VLR_PAGAMENTO] [dbo].[CURRENCY] NULL,
	[PRBX_VLR_DEVIDO] [dbo].[CURRENCY] NULL,
	[PRBX_VLR_DESCONTOS] [dbo].[CURRENCY] NULL,
	[PRBX_VLR_ACRECIMOS] [dbo].[CURRENCY] NULL,
	[PRBX_VLR_DESPESAS] [dbo].[CURRENCY] NULL,
	[PRBX_VLR_JUROS] [dbo].[CURRENCY] NULL,
	[PRBX_VLR_MULTA] [dbo].[CURRENCY] NULL,
	[PRBX_QUITA_PARCELA] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_PARCELA_BAIXA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_PLANO_CONTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_PLANO_CONTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PLCT_PLCT_ID] [dbo].[IDENTIFY] NULL,
	[PLCT_CONTA] [dbo].[NAME_024] NULL,
	[PLCT_NOME] [dbo].[NAME_128] NULL,
	[PLCT_REDUZIDA] [dbo].[CODE_010] NULL,
	[PLCT_TP_LANCAMENTO] [dbo].[TP_LANCAMENTO] NULL,
	[PLCT_TP_CONTA] [dbo].[TP_CONTA] NULL,
	[PLCT_LOCAL_CONTA] [dbo].[LOCAL_CONTA] NOT NULL,
	[PLCT_NIVEL] [dbo].[UNIT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_PLANO_CONTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_PLANO_CONTA_SALDO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_PLANO_CONTA_SALDO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PCSD_PLCT_ID] [dbo].[IDENTIFY] NULL,
	[PCSD_PERIODO] [dbo].[DATE_ONLY] NULL,
	[PCSD_INICIAL] [dbo].[CURRENCY] NULL,
	[PCSD_ENTRADAS] [dbo].[CURRENCY] NULL,
	[PCSD_SAIDAS] [dbo].[CURRENCY] NULL,
	[PCSD_FINAL] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_PLANO_CONTA_SALDO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_PLANO_ORCAMENTARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PLOR_CTCT_ID] [dbo].[IDENTIFY] NULL,
	[PLOR_CXIT_ID] [dbo].[IDENTIFY] NULL,
	[PLOR_FNCR_ID] [dbo].[IDENTIFY] NULL,
	[PLOR_REFERENCIA] [dbo].[DATE_AND_TIME] NULL,
	[PLOR_VALOR] [dbo].[CURRENCY] NULL,
	[PLOR_TIPO] [dbo].[TP_ORCAMENTO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_PLANO_ORCAMENTARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_TABELA_PRECO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_TABELA_PRECO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[TBPC_CODIGO] [dbo].[CODE_005] NULL,
	[TBPC_NOME] [dbo].[NAME_040] NULL,
	[TBPC_DT_INICIAL] [dbo].[DATE_ONLY] NULL,
	[TBPC_DT_FINAL] [dbo].[DATE_ONLY] NULL,
	[TBPC_MARKUP] [dbo].[PERCENT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_TABELA_PRECO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_TABELA_PRECO_ITEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_TABELA_PRECO_ITEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[TPIT_TBPC_ID] [dbo].[IDENTIFY] NULL,
	[TPIT_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[TPIT_CUSTO_VENDA] [dbo].[CURRENCY] NULL,
	[TPIT_PRECO_VENDA] [dbo].[CURRENCY] NULL,
	[TPIT_MARKUP] [dbo].[PERCENT] NULL,
	[TPIT_TIPOPRODUTO] [dbo].[TP_PRODUTO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_TABELA_PRECO_ITEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_TITULO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_TITULO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[TTLS_FRVN_ID] [dbo].[IDENTIFY] NULL,
	[TTLS_FRNC_ID] [dbo].[IDENTIFY] NULL,
	[TTLS_CXIT_ID] [dbo].[IDENTIFY] NULL,
	[TTLS_FNCR_ID] [dbo].[IDENTIFY] NULL,
	[TTLS_CLNT_ID] [dbo].[IDENTIFY] NULL,
	[TTLS_NR_DOCUMENTO] [dbo].[CODE_025] NULL,
	[TTLS_DT_EMISSAO] [dbo].[DATE_AND_TIME] NULL,
	[TTLS_VLR_DOCUMENTO] [dbo].[CURRENCY] NULL,
	[TTLS_QTD_PARCELAS] [dbo].[UNIT] NOT NULL,
	[TTLS_TIPO] [dbo].[TP_TITULO] NULL,
	[TTLS_CLASSIFICACAO] [dbo].[TP_CLASSE_TITULO] NULL,
	[TTLS_TAXA_JUROS] [dbo].[PERCENT] NULL,
	[TTLS_MULTA] [dbo].[PERCENT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_TITULO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FNCR_TITULO_CENTRO_CUSTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FNCR_TITULO_CENTRO_CUSTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRPC_CTCT_ID] [dbo].[IDENTIFY] NULL,
	[TTCC_TTLS_ID] [dbo].[IDENTIFY] NULL,
	[TTCC_PERCENTUAL] [dbo].[PERCENT] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FNCR_TITULO_CENTRO_CUSTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_CFOP]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_CFOP](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CFOP_CODIGO] [dbo].[CODE_010] NULL,
	[CFOP_DESCRICAO] [dbo].[DESCRIPTION] NULL,
	[CFOP_CLASSIFICACAO] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_CFOP] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_CST]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_CST](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[FCST_CODIGO] [dbo].[CODE_003] NULL,
	[FCST_DESCRICAO] [dbo].[NAME_040] NULL,
	[FCST_IPI] [dbo].[DECISION] NULL,
	[FCST_TIPO] [dbo].[FSCL_CST_TIPO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_CST] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_DOCUMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_DOCUMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[DCMT_CPMV_ID] [dbo].[IDENTIFY] NULL,
	[DCMT_CLNT_ID] [dbo].[IDENTIFY] NULL,
	[DCMT_HSPD_ID] [dbo].[IDENTIFY] NULL,
	[DCMT_FRNC_ID] [dbo].[IDENTIFY] NULL,
	[DCMT_TRNS_ID] [dbo].[IDENTIFY] NULL,
	[DCMT_FRVN_ID] [dbo].[IDENTIFY] NULL,
	[DCMT_NUMERO] [dbo].[CODE_015] NULL,
	[DCMT_NFE] [dbo].[CODE_128] NULL,
	[DCMT_DT_EMISSAO] [dbo].[DATE_AND_TIME] NULL,
	[DCMT_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[DCMT_TP_DOCUMENTO] [dbo].[TP_DOCUMENTO] NULL,
	[DCMT_TP_MOVIMENTO] [dbo].[TP_MOVIMENTO] NULL,
	[DCMT_TP_TRANSACAO] [dbo].[TP_TRANSACAO] NULL,
	[DCMT_STATUS] [dbo].[STATUS_DOCUMENTO] NULL,
	[DCMT_QTD_ITENS] [dbo].[UNIT] NULL,
	[DCMT_VLR_TOTAL] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_CONTABIL] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_ICMS] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_ICMS] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_ICMS_SUBS] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_ICMS_SUBS] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_COFINS] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_COFINS] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_COFINS_RET] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_COFINS_RET] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_PIS] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_PIS] [dbo].[CURRENCY] NULL,
	[DCMT_BASE_PIS_RET] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_PIS_RET] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_IPI] [dbo].[CURRENCY] NULL,
	[DCMT_TIPO_FRETE] [dbo].[TP_FRETE] NULL,
	[DCMT_VLR_FRETE] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_SEGURO] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_DESPESAS] [dbo].[CURRENCY] NULL,
	[DCMT_VLR_DESCONTOS] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_DOCUMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_DOCUMENTO_ITEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_DOCUMENTO_ITEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[DCIT_CFOP_ID] [dbo].[IDENTIFY] NULL,
	[DCIT_DCMT_ID] [dbo].[IDENTIFY] NULL,
	[DCIT_ITMV_ID] [dbo].[IDENTIFY] NULL,
	[DCIT_DT_LANCAMENTO] [dbo].[DATE_ONLY] NULL,
	[DCIT_DT_MOVIMENTO] [dbo].[DATE_ONLY] NULL,
	[DCIT_PRDT_NOME] [dbo].[NAME_064] NULL,
	[DCIT_PRDT_CODIGO_BARRA] [dbo].[CODE_020] NULL,
	[DCIT_PRDT_REFERENCIA] [dbo].[CODE_040] NULL,
	[DCIT_UNID_SIGLA] [dbo].[CODE_005] NULL,
	[DCIT_QUANTIDADE] [dbo].[MEASURE] NULL,
	[DCIT_PRECO_UNITARIO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_DOCUMENTO_ITEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_DOCUMENTO_PESSOA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_DOCUMENTO_PESSOA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[DCPS_DCMT_ID] [dbo].[IDENTIFY] NULL,
	[DCPS_TIPO] [dbo].[FSCL_TIPO_PESSOA] NULL,
	[DCPS_RAZAO_SOCIAL] [dbo].[NAME_128] NULL,
	[DCPS_APELIDO] [dbo].[NAME_128] NULL,
	[DCPS_ENDE_CEP] [dbo].[CEP] NULL,
	[DCPS_ENDE_LOGRADOURO] [dbo].[CODE_128] NULL,
	[DCPS_ENDE_NUMERO] [dbo].[CODE_015] NULL,
	[DCPS_ENDE_COMPLEMENTO] [dbo].[CODE_128] NULL,
	[DCPS_ENDE_BAIRRO] [dbo].[CODE_040] NULL,
	[DCPS_ENDE_CIDADE] [dbo].[CODE_128] NULL,
	[DCPS_ENDE_UF] [dbo].[CODE_003] NULL,
	[DCPS_TELEFONE] [dbo].[CODE_015] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_DOCUMENTO_PESSOA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_ITEM_FATO_FISCAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_ITEM_FATO_FISCAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ITFF_DCIT_ID] [dbo].[IDENTIFY] NULL,
	[ITFF_TP_FATO_FISCAL] [dbo].[TP_FATO_FISCAL] NULL,
	[ITFF_BASE_CALCULO] [dbo].[CURRENCY] NULL,
	[ITFF_ALIQUOTA] [dbo].[PERCENT] NULL,
	[ITFF_VALOR] [dbo].[CURRENCY] NULL,
	[ITFF_CST] [dbo].[CODE_003] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_ITEM_FATO_FISCAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_NCMS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_NCMS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[NCMS_CODIGO] [dbo].[CODE_010] NULL,
	[NCMS_NOME] [dbo].[OBS_4000] NULL,
	[NCMS_TRIBUTA_PIS] [dbo].[DECISION] NULL,
	[NCMS_TRIBUTA_COFINS] [dbo].[DECISION] NULL,
	[NCMS_RETEM_PIS] [dbo].[DECISION] NULL,
	[NCMS_RETEM_COFINS] [dbo].[DECISION] NULL,
	[NCMS_RETEM_CSLL] [dbo].[DECISION] NULL,
	[NCMS_ALIQUOTA_IR] [dbo].[PERCENT] NULL,
	[NCMS_CST_IPI] [dbo].[CODE_003] NULL,
	[NCMS_ALIQUOTA_IPI] [dbo].[PERCENT] NULL,
	[NCMS_TIPO] [dbo].[NCMS_TIPO] NULL,
	[NCMS_CST_COFINS_ENTRADA] [dbo].[CODE_003] NULL,
	[NCMS_ALIQ_COFINS_ENTRADA] [dbo].[PERCENT] NULL,
	[NCMS_CST_COFINS_SAIDA] [dbo].[CODE_003] NULL,
	[NCMS_ALIQ_COFINS_SAIDA] [dbo].[PERCENT] NULL,
	[NCMS_CST_PIS_ENTRADA] [dbo].[CODE_003] NULL,
	[NCMS_ALIQ_PIS_ENTRADA] [dbo].[PERCENT] NULL,
	[NCMS_CST_PIS_SSIDA] [dbo].[CODE_003] NULL,
	[NCMS_ALIQ_PIS_SAIDA] [dbo].[PERCENT] NULL,
	[NCMS_ANP] [dbo].[CODE_020] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_NCMS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FSCL_REGIME_TRIBUTARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FSCL_REGIME_TRIBUTARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[RGTB_UNFD_ID] [dbo].[IDENTIFY] NULL,
	[RGTB_NCMS_ID] [dbo].[IDENTIFY] NULL,
	[RGTB_REGIME_FISCAL_TRIBUTARIO] [dbo].[FSCL_RFTRIBUTARIO] NULL,
	[RGTB_IVA] [dbo].[PERCENT] NULL,
	[RGTB_ICMS] [dbo].[PERCENT] NULL,
	[RGTB_REDUCAO_ICMS] [dbo].[PERCENT] NULL,
	[RGTB_REDUCAO_ICMS_ST] [dbo].[PERCENT] NULL,
	[RGTB_PAUTA] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_FSCL_REGIME_TRIBUTARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MAIL_FTPS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MAIL_FTPS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[FTPS_CODIGO] [dbo].[CODE_005] NULL,
	[FTPS_NOME] [dbo].[NAME_040] NULL,
	[FTPS_HOST] [dbo].[NAME_128] NULL,
	[FTPS_PORT] [dbo].[UNIT] NULL,
	[FTPS_USERNAME] [dbo].[NAME_128] NULL,
	[FTPS_PASSWORD] [dbo].[NAME_128] NULL,
	[FTPS_PASSIVEMODE] [dbo].[BOOL] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MAIL_FTPS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MAIL_SMTP]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MAIL_SMTP](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SMTP_CODIGO] [dbo].[CODE_005] NULL,
	[SMTP_NOME] [dbo].[NAME_128] NULL,
	[SMTP_HOST] [dbo].[NAME_128] NULL,
	[SMTP_PORT] [dbo].[UNIT] NULL,
	[SMTP_USER] [dbo].[NAME_128] NULL,
	[SMTP_PASSWORD] [dbo].[NAME_128] NULL,
	[SMTP_AUTHTYPE] [dbo].[TP_AUTHENTICATION] NULL,
	[SMTP_USETLS] [dbo].[TP_USE_TLS] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MAIL_SMTP] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_MODULO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_MODULO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[MODL_NOME] [dbo].[NAME_040] NULL,
	[MODL_DESCRICAO] [dbo].[NAME_128] NULL,
	[MODL_SMALL_ICON] [dbo].[IMAGEM] NULL,
	[MODL_NORMAL_ICON] [dbo].[IMAGEM] NULL,
	[MODL_LARGE_ICON] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_MODULO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_PASTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_PASTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PSTA_MODL_ID] [dbo].[IDENTIFY] NULL,
	[PSTA_NOME] [dbo].[NAME_040] NULL,
	[PSTA_DESCRICAO] [dbo].[NAME_128] NULL,
	[PSTA_TP_MENU] [dbo].[TP_MENU] NULL,
	[PSTA_SMALL_ICON] [dbo].[IMAGEM] NULL,
	[PSTA_NORMAL_ICON] [dbo].[IMAGEM] NULL,
	[PSTA_LARGE_ICON] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_PASTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_RECURSO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_RECURSO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[RCRS_PSTA_ID] [dbo].[IDENTIFY] NULL,
	[RCRS_NOME] [dbo].[NAME_064] NOT NULL,
	[RCRS_DESCRICAO] [dbo].[NAME_128] NULL,
	[RCRS_URL] [dbo].[NAME_256] NULL,
	[RCRS_CLASSE] [dbo].[NAME_064] NULL,
	[RCRS_PACKAGE] [dbo].[NAME_064] NULL,
	[RCRS_METHOD] [dbo].[NAME_064] NULL,
	[RCRS_PARAMS] [dbo].[CODE_256] NULL,
	[RCRS_SMALL_ICON] [dbo].[IMAGEM] NULL,
	[RCRS_NORMAL_ICON] [dbo].[IMAGEM] NULL,
	[RCRS_LARGE_ICON] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_RECURSO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_RECURSO_GRUPO_USUARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_RECURSO_GRUPO_USUARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[RCGU_SSRC_ID] [dbo].[IDENTIFY] NULL,
	[RCGU_GRUS_ID] [dbo].[IDENTIFY] NULL,
	[RCGU_INSERT] [dbo].[DECISION] NULL,
	[RCGU_DELETE] [dbo].[DECISION] NULL,
	[RCGU_UPDATE] [dbo].[DECISION] NULL,
	[RCGU_VISUALIZE] [dbo].[DECISION] NULL,
	[RCGU_PRINTER] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_RECURSO_GRUPO_USUARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_SISTEMA_MODULO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_SISTEMA_MODULO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSMD_SSTM_ID] [dbo].[IDENTIFY] NULL,
	[SSMD_MODL_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_SISTEMA_MODULO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_SISTEMA_PASTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_SISTEMA_PASTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSPS_PSTA_ID] [dbo].[IDENTIFY] NULL,
	[SSPS_SSMD_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_SISTEMA_PASTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MENU_SISTEMA_RECURSO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MENU_SISTEMA_RECURSO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSRC_SSPS_ID] [dbo].[IDENTIFY] NULL,
	[SSRC_RCRS_ID] [dbo].[IDENTIFY] NULL,
	[SSRC_NIVEL_ACESSO] [dbo].[NIVELGRUPO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_MENU_SISTEMA_RECURSO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECF_ALIQUOTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECF_ALIQUOTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECF_ALIQUOTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECF_CAIXA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECF_CAIXA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PECX_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PECX_CODIGO] [dbo].[CODE_003] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECF_CAIXA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECF_CONFIGURACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECF_CONFIGURACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECF_CONFIGURACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECF_CONTADOR]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECF_CONTADOR](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CTDR_PESS_ID] [dbo].[IDENTIFY] NULL,
	[PECT_CRC] [dbo].[CODE_015] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECF_CONTADOR] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_AFIXOS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_AFIXOS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[AFXS_CLPR_ID] [dbo].[IDENTIFY] NULL,
	[AFXS_PDRR_ID] [dbo].[IDENTIFY] NULL,
	[AFXS_RACA_ID] [dbo].[IDENTIFY] NULL,
	[AFXS_PREFIXO_MACHO] [dbo].[CODE_010] NULL,
	[AFXS_PREFIXO_FEMEA] [dbo].[CODE_010] NULL,
	[AFXS_SUFIXO_MACHO] [dbo].[CODE_010] NULL,
	[AFXS_SUFIXO_FEMEA] [dbo].[CODE_010] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_AFIXOS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_APTIDAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_APTIDAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[APTD_ESPC_ID] [dbo].[IDENTIFY] NULL,
	[APTD_NOME] [dbo].[NAME_024] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_APTIDAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_CAPA_MOVIMENTO_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_CAPA_MOVIMENTO_ANIMAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CMAN_LOTE_ID] [dbo].[IDENTIFY] NULL,
	[CMAN_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[CMAN_DT_MOVIMENTO] [dbo].[DATE_ONLY] NULL,
	[CMAN_TP_DOCUMENTO] [dbo].[TP_DOCUMENTO] NULL,
	[CMAN_TP_MOVIMENTO] [dbo].[TP_MOVIMENTO] NULL,
	[CMAN_TP_TRANSACAO] [dbo].[TP_TRANSACAO] NULL,
	[CMAN_QTD_ITENS] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_CAPA_MOVIMENTO_ANIMAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_CATEGORIA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_CATEGORIA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CTGR_PESO_ID] [dbo].[IDENTIFY] NULL,
	[CTGR_IDAD_ID] [dbo].[IDENTIFY] NULL,
	[CTGR_RACA_ID] [dbo].[IDENTIFY] NULL,
	[CTGR_CODIGO] [dbo].[CODE_010] NULL,
	[CTGR_NOME] [dbo].[NAME_040] NULL,
	[CTGR_SEXO] [dbo].[PECUARIA_SEXO] NULL,
	[CTGR_IDADE_MINIMA] [dbo].[MEASURE] NULL,
	[CTGR_IDADE_MAXIMA] [dbo].[MEASURE] NULL,
	[CTGR_PESO_MINIMO] [dbo].[MEASURE] NULL,
	[CTGR_PESO_MAXIMO] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_CATEGORIA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_DADOS_ABCZ]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_DADOS_ABCZ](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ABCZ_PRBV_ID] [dbo].[IDENTIFY] NULL,
	[ABCZ_RGN] [dbo].[CODE_010] NULL,
	[ABCZ_RGD] [dbo].[CODE_010] NULL,
	[ABCZ_SERIE] [dbo].[CODE_005] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_DADOS_ABCZ] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_ESPECIE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_ESPECIE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ESPC_CODIGO] [dbo].[CODE_005] NULL,
	[ESPC_NOME] [dbo].[NAME_040] NULL,
	[ESPC_IMAGEM] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_ESPECIE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_ESPECIE_PASTAGEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_ESPECIE_PASTAGEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ESPS_FORRAGEIRA] [dbo].[NAME_128] NULL,
	[ESPS_CULTIVAR] [dbo].[NAME_128] NULL,
	[ESPS_DESCANSO_MEDIO] [dbo].[UNIT] NULL,
	[ESPS_ALTURA_RESIDUAL] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_ESPECIE_PASTAGEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_EVENTO_SANITARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_EVENTO_SANITARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[EVSN_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[EVSN_TPES_ID] [dbo].[IDENTIFY] NULL,
	[EVSN_PRBV_ID] [dbo].[IDENTIFY] NULL,
	[EVSN_DT_EVENTO] [dbo].[DATE_ONLY] NULL,
	[EVSN_OBSERVACAO] [dbo].[OBS_500] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_EVENTO_SANITARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_GANHO_PESO_MEDIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_GANHO_PESO_MEDIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[GPMD_PESO_ID] [dbo].[IDENTIFY] NULL,
	[GPMD_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[GPMD_CTGR_ID] [dbo].[IDENTIFY] NULL,
	[GPMD_MES] [dbo].[MESES_DO_ANO] NULL,
	[GPMD_PESO] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_GANHO_PESO_MEDIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_HISTORICO_CATEGORIA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_HISTORICO_CATEGORIA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[HSCT_PRBV_ID] [dbo].[IDENTIFY] NULL,
	[HSCT_CTGR_ID] [dbo].[IDENTIFY] NULL,
	[HSCT_DT_ENTRADA] [dbo].[DATE_ONLY] NULL,
	[HSCT_DT_SAIDA] [dbo].[DATE_ONLY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_HISTORICO_CATEGORIA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_HISTORICO_COBERTURA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_HISTORICO_COBERTURA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[HSCB_PRBV_ID] [dbo].[IDENTIFY] NULL,
	[HSCB_DOAD_ID] [dbo].[IDENTIFY] NULL,
	[HSCB_TREF_ID] [dbo].[IDENTIFY] NULL,
	[HSCB_TRPV_ID] [dbo].[IDENTIFY] NULL,
	[HSCB_CODIGO] [dbo].[CODE_015] NULL,
	[HSCB_DT_PREVISTA] [dbo].[DATE_AND_TIME] NULL,
	[HSCB_TP_PREVISTO] [dbo].[PECR_TP_COBERTURA] NULL,
	[HSCB_DT_REALIZADA] [dbo].[DATE_AND_TIME] NULL,
	[HSCB_TP_REALIZADO] [dbo].[PECR_TP_COBERTURA] NULL,
	[HSCB_DT_DIAGNOSTICO] [dbo].[DATE_AND_TIME] NULL,
	[HSCB_TP_DIAGNOSTICO] [dbo].[PECR_TP_DIAGNOSTICO] NULL,
	[HSCB_MTD_DIAGNOSTICO] [dbo].[PECR_METODO_DIAGNOSTICO] NULL,
	[HSCB_DT_PREV_PARTO] [dbo].[DATE_AND_TIME] NULL,
	[HSCB_DT_EFETIVA_PARTO] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_HISTORICO_COBERTURA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_HISTORICO_PESAGEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_HISTORICO_PESAGEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[HSPS_PRBV_ID] [dbo].[IDENTIFY] NULL,
	[HSPS_DT_PESAGEM] [dbo].[DATE_ONLY] NULL,
	[HSPS_PESO] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_HISTORICO_PESAGEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[IMAN_CMAN_ID] [dbo].[IDENTIFY] NULL,
	[IMAN_UNID_ID] [dbo].[IDENTIFY] NULL,
	[IMAN_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[IMAN_UNCR_ID] [dbo].[IDENTIFY] NULL,
	[IMAN_IDADE] [dbo].[UNIT] NOT NULL,
	[IMAN_PESO_MEDIO] [dbo].[MEASURE] NULL,
	[IMAN_QUANTIDADE] [dbo].[MEASURE] NULL,
	[IMAN_MOTIVO] [dbo].[OBS_500] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_ITEM_MOVIMENTO_ANIMAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_LOTE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_LOTE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[LOTE_RACA_ID] [dbo].[IDENTIFY] NULL,
	[LOTE_APTD_ID] [dbo].[IDENTIFY] NULL,
	[LOTE_CODIGO] [dbo].[CODE_010] NULL,
	[LOTE_NOME] [dbo].[NAME_040] NULL,
	[LOTE_ORIGEM] [dbo].[TP_ORIGEM_ANIMAL] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_LOTE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_LOTE_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_LOTE_ANIMAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[LTAN_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[LTAN_LOTE_ID] [dbo].[IDENTIFY] NULL,
	[LTAN_DT_ENTRADA] [dbo].[DATE_AND_TIME] NULL,
	[LTAN_DT_SAIDA] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_LOTE_ANIMAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_LOTE_SALDO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_LOTE_SALDO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[LTSD_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[LTSD_LOTE_ID] [dbo].[IDENTIFY] NULL,
	[LTSD_DT_REFERENCIA] [dbo].[DATE_ONLY] NOT NULL,
	[LTSD_QTD_ENTRADA] [dbo].[MEASURE] NULL,
	[LTSD_QTD_SAIDA] [dbo].[MEASURE] NULL,
	[LTSD_QTD_RESERVA] [dbo].[MEASURE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_LOTE_SALDO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_MODULO_CRIACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_MODULO_CRIACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[MDCR_PPRR_ID] [dbo].[IDENTIFY] NULL,
	[MDCR_CODIGO] [dbo].[CODE_010] NULL,
	[MDCR_NOME] [dbo].[NAME_064] NULL,
	[MDCR_AREA_TOTAL] [dbo].[MEASURE] NULL,
	[MDCR_AREA_RESERVA] [dbo].[MEASURE] NULL,
	[MDCR_LATITUDE] [dbo].[COORDENADAS] NULL,
	[MDCR_LONGITUDE] [dbo].[COORDENADAS] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_MODULO_CRIACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_PRODUTO_BOVINO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_PRODUTO_BOVINO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRBV_PPRR_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_RACA_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_PLGM_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_PPAI_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_PMAE_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_CRDR_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_PDRR_ID] [dbo].[IDENTIFY] NULL,
	[PRBV_NR_FAZENDA] [dbo].[CODE_015] NULL,
	[PRBV_NR_SISBOV_MANEJO] [dbo].[CODE_015] NULL,
	[PRBV_SEXO] [dbo].[PECUARIA_SEXO] NULL,
	[PRBV_DT_NASCIMENTO] [dbo].[DATE_ONLY] NULL,
	[PRBV_DT_MORTE] [dbo].[DATE_ONLY] NULL,
	[PRBV_PESO_NASCIMENTO] [dbo].[MEASURE] NULL,
	[PRBV_PESO_DESMAMA] [dbo].[MEASURE] NULL,
	[PRBV_ORIGEM] [dbo].[TP_ORIGEM_ANIMAL] NULL,
	[PRBV_TIPO] [dbo].[TP_ANIMAL] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_PRODUTO_BOVINO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_PRODUTO_PECUARIA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_PRODUTO_PECUARIA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRPE_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[PRPE_CTGR_ID] [dbo].[IDENTIFY] NULL,
	[PRPE_PPRR_ID] [dbo].[IDENTIFY] NULL,
	[PRPE_CODIGO] [dbo].[CODE_015] NULL,
	[PRPE_TP_CONTROLE] [dbo].[TP_CONTROLE_PECUARIA] NULL,
	[PRPE_TP_ORIGEM] [dbo].[TP_ORIGEM_ANIMAL] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_PRODUTO_PECUARIA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_RACA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_RACA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[RACA_ESPC_ID] [dbo].[IDENTIFY] NULL,
	[RACA_PLGM_ID] [dbo].[IDENTIFY] NULL,
	[RACA_PRTE_ID] [dbo].[IDENTIFY] NULL,
	[RACA_CODIGO] [dbo].[CODE_010] NULL,
	[RACA_NOME] [dbo].[NAME_040] NULL,
	[RACA_IMAGEM] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_RACA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_TIPO_EVENTO_SANITARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_TIPO_EVENTO_SANITARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[TPES_CODIGO] [dbo].[CODE_003] NULL,
	[TPES_TIPO] [dbo].[TP_EVENTO_SANITARIO] NULL,
	[TPES_NOME] [dbo].[NAME_040] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_TIPO_EVENTO_SANITARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PECR_UNIDADE_CRIACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PECR_UNIDADE_CRIACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[UNCR_ESPS_ID] [dbo].[IDENTIFY] NULL,
	[UNCR_MDCR_ID] [dbo].[IDENTIFY] NULL,
	[UNCR_CODIGO] [dbo].[CODE_005] NULL,
	[UNCR_NOME] [dbo].[NAME_040] NULL,
	[UNCR_AREA_UTIL] [dbo].[MEASURE] NULL,
	[UNCR_AREA_PERCENTUAL] [dbo].[PERCENT] NULL,
	[UNCR_LATITUDE] [dbo].[COORDENADAS] NULL,
	[UNCR_LONGITUDE] [dbo].[COORDENADAS] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_PECR_UNIDADE_CRIACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RCHM_FUNCIONARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RCHM_FUNCIONARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[FCNR_PESS_ID] [dbo].[IDENTIFY] NULL,
	[FCNR_MATRICULA] [dbo].[CODE_020] NULL,
	[FCNR_DT_ADMISSAO] [dbo].[DATE_ONLY] NULL,
	[FCNR_DT_DEMISSAO] [dbo].[DATE_ONLY] NULL,
	[FCNR_PRIMEIRO_EMPREGO] [dbo].[DECISION] NULL,
	[FCNR_NR_PIS] [dbo].[CODE_025] NULL,
	[FCNR_DT_PIS] [dbo].[DATE_ONLY] NULL,
	[FCNR_CONTRATO_EXPERIENCIA] [dbo].[DECISION] NULL,
	[FCNR_CONTRATO_DIAS] [dbo].[UNIT] NULL,
	[FCNR_TIPO] [dbo].[RCHM_TIPO_FCNR] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_RCHM_FUNCIONARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RCHM_FUNCIONARIO_HISTORICO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RCHM_FUNCIONARIO_HISTORICO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[FCHS_FCNR_ID] [dbo].[IDENTIFY] NULL,
	[FCHS_DATA] [dbo].[DATE_ONLY] NULL,
	[FCHS_EVENTO] [dbo].[RCHM_EVENTO_FCHS] NULL,
	[FCHS_DESCRICAO] [dbo].[OBS_500] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_RCHM_FUNCIONARIO_HISTORICO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRVC_ORDEM_SERVICO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRVC_ORDEM_SERVICO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ODSV_NUMERO] [dbo].[CODE_020] NULL,
	[ODSV_DT_LANCAMENTO] [dbo].[DATE_AND_TIME] NULL,
	[ODSV_DT_EMISSAO] [dbo].[DATE_ONLY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SRVC_ORDEM_SERVICO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRVC_ORDEM_SERVICO_ITEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRVC_ORDEM_SERVICO_ITEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[OSIT_SRVC_ID] [dbo].[IDENTIFY] NULL,
	[OSIT_ODSV_ID] [dbo].[IDENTIFY] NULL,
	[OSIT_NUMERO] [dbo].[CODE_003] NOT NULL,
	[OSIT_QUANTIDADE] [dbo].[MEASURE] NULL,
	[OSIT_VALOR_UNITARIO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SRVC_ORDEM_SERVICO_ITEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRVC_SERVICO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRVC_SERVICO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SRVC_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[SRVC_CODIGO] [dbo].[CODE_010] NOT NULL,
	[SRVC_VALOR_UNITARIO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SRVC_SERVICO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRVC_SERVICO_COMPOSICAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRVC_SERVICO_COMPOSICAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SRCM_SRVC_ID] [dbo].[IDENTIFY] NULL,
	[SRCM_CARG_ID] [dbo].[IDENTIFY] NULL,
	[SRCM_UNID_ID] [dbo].[IDENTIFY] NULL,
	[SRCM_QUANTIDADE] [dbo].[MEASURE] NULL,
	[SRCM_VALOR_UNITARIO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SRVC_SERVICO_COMPOSICAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRVC_SERVICO_MAQ_EQUIP]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SRME_SRVC_ID] [dbo].[IDENTIFY] NULL,
	[SRME_MQEQ_ID] [dbo].[IDENTIFY] NULL,
	[SRME_UNID_ID] [dbo].[IDENTIFY] NULL,
	[SRME_QUANTIDADE] [dbo].[MEASURE] NULL,
	[SRME_VALOR_UNITARIO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SRVC_SERVICO_MAQ_EQUIP] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SRVC_SERVICO_PECAS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SRVC_SERVICO_PECAS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SRPC_MRCD_ID] [dbo].[IDENTIFY] NULL,
	[SRPC_UNID_ID] [dbo].[IDENTIFY] NULL,
	[SRPC_SRVC_ID] [dbo].[IDENTIFY] NULL,
	[SRPC_QUANTIDADE] [dbo].[MEASURE] NULL,
	[SRPC_VALOR_UNITARIO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SRVC_SERVICO_PECAS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_DATABASE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_DATABASE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[DTBS_NOME] [dbo].[NAME_040] NULL,
	[DTBS_VERSAO] [dbo].[VERSION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_DATABASE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_OBJETO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_OBJETO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[OBJT_NAME] [dbo].[NAME_064] NULL,
	[OBJT_FILE] [dbo].[NAME_128] NULL,
	[OBJT_PATH] [dbo].[NAME_256] NULL,
	[OBJT_TYPE] [dbo].[OBJECT_TYPE] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_OBJETO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_OBJETO_VERSAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_OBJETO_VERSAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[OBBN_OBJT_ID] [dbo].[IDENTIFY] NULL,
	[OBVS_VERSION] [dbo].[VERSION] NULL,
	[OBVS_CHECKSUM] [dbo].[CODE_128] NULL,
	[OBVS_BINARY] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_OBJETO_VERSAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_PARAMETRO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_PARAMETRO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRMT_NOME] [dbo].[NAME_064] NULL,
	[PRMT_LABEL] [dbo].[NAME_040] NULL,
	[PRMT_VISIVEL] [dbo].[DECISION] NULL,
	[PRMT_ORDENACAO] [dbo].[CODE_010] NULL,
	[PRMT_TP_DADO] [dbo].[TP_DADO] NULL,
	[PRMT_FORMAT] [dbo].[CODE_025] NULL,
	[PRMT_VLR_DEFAULT] [dbo].[CODE_128] NULL,
	[PRMT_TP_PARAMETRO] [dbo].[TP_PARAMETRO] NULL,
	[PRMT_HABILITADO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_PARAMETRO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_PARAMETRO_CORPORACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_PARAMETRO_CORPORACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRCP_PRMT_ID] [dbo].[IDENTIFY] NULL,
	[PRCP_CPRC_ID] [dbo].[IDENTIFY] NULL,
	[PRCP_DEFAULT] [dbo].[CODE_128] NOT NULL,
	[PRCP_VALUE] [dbo].[CODE_128] NULL,
	[PRCP_HABILITADO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_PARAMETRO_CORPORACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_PARAMETRO_EMPRESA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_PARAMETRO_EMPRESA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PREM_EMPR_ID] [dbo].[IDENTIFY] NULL,
	[PREM_PRMT_ID] [dbo].[IDENTIFY] NULL,
	[PREM_DEFAULT] [dbo].[CODE_128] NULL,
	[PREM_VALUE] [dbo].[CODE_128] NULL,
	[PREM_HABILITADO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_PARAMETRO_EMPRESA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_PARAMETRO_SISTEMA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_PARAMETRO_SISTEMA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRSS_SSTM_ID] [dbo].[IDENTIFY] NULL,
	[PRSS_PRMT_ID] [dbo].[IDENTIFY] NULL,
	[PRSS_DEFAULT] [dbo].[CODE_128] NULL,
	[PRSS_VALUE] [dbo].[CODE_128] NULL,
	[PRSS_HABILITADO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_PARAMETRO_SISTEMA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_PARAMETRO_UNEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_PARAMETRO_UNEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRUE_UNEM_ID] [dbo].[IDENTIFY] NULL,
	[PRUE_PRMT_ID] [dbo].[IDENTIFY] NULL,
	[PRUE_DEFAULT] [dbo].[CODE_128] NULL,
	[PRUE_VALUE] [dbo].[CODE_128] NULL,
	[PRUE_HABILITADO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_PARAMETRO_UNEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_PARAMETRO_USUARIO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_PARAMETRO_USUARIO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRUS_PRMT_ID] [dbo].[IDENTIFY] NULL,
	[PRUS_USRS_ID] [dbo].[IDENTIFY] NULL,
	[PRUS_DEFAULT] [dbo].[CODE_128] NULL,
	[PRUS_VALUE] [dbo].[CODE_128] NULL,
	[PRUS_HABILITADO] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_PARAMETRO_USUARIO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_SCRIPTS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_SCRIPTS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SCPT_SSVS_ID] [dbo].[IDENTIFY] NULL,
	[SCPT_NAME] [dbo].[NAME_064] NULL,
	[SCPT_SCRIPT] [dbo].[TEXTO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_SCRIPTS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_SISTEMA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_SISTEMA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSTM_NAME] [dbo].[NAME_064] NULL,
	[SSTM_ICONE] [dbo].[IMAGEM] NULL,
	[SSTM_LOGO] [dbo].[IMAGEM] NULL,
	[SSTM_SKIN] [dbo].[SKIN] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_SISTEMA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_SISTEMA_CORPORACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_SISTEMA_CORPORACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSCP_SSTM_ID] [dbo].[IDENTIFY] NULL,
	[SSCP_CPRC_ID] [dbo].[IDENTIFY] NULL,
	[SSCP_LOCAL_DATABASE] [dbo].[DATABASE_NAME] NULL,
	[SSCP_REMOTE_DATABASE] [dbo].[DATABASE_NAME] NULL,
	[SSCP_SYSTEM_DATABASE] [dbo].[DATABASE_NAME] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_SISTEMA_CORPORACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_SISTEMA_TABELA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_SISTEMA_TABELA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSTB_SSTM_ID] [dbo].[IDENTIFY] NULL,
	[SSTB_TBLS_ID] [dbo].[IDENTIFY] NULL,
	[SSTB_TP_ID] [dbo].[TP_ID] NOT NULL,
	[SSTB_NEXT_ID] [dbo].[UNIT] NOT NULL,
	[SSTB_KEY] [dbo].[DECISION] NOT NULL,
	[SSTB_FIELD] [dbo].[NAME_024] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_SISTEMA_TABELA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_SISTEMA_VERSAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_SISTEMA_VERSAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SSVS_SSTM_ID] [dbo].[IDENTIFY] NULL,
	[SSVS_VERSION_SYSTEM] [dbo].[VERSION] NULL,
	[SSVS_VERSION_DATABASE] [dbo].[VERSION] NULL,
	[SSVS_DT_VERSION] [dbo].[DATE_ONLY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_SISTEMA_VERSAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_SISTEMAVERSAO_OBJETOVERSAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_SISTEMAVERSAO_OBJETOVERSAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SVOV_OBVS_ID] [dbo].[IDENTIFY] NULL,
	[SVOV_SSVS_ID] [dbo].[IDENTIFY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_SISTEMAVERSAO_OBJETOVE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_TABELA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_TABELA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[TBLS_NOME] [dbo].[NAME_064] NULL,
	[TBLS_CAPTION] [dbo].[NAME_040] NULL,
	[TBLS_MNEMONICO] [dbo].[CODE_005] NOT NULL,
	[TBLS_EXPORTAVEL] [dbo].[DECISION] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_TABELA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SSTM_TABELA_SCRIPT]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SSTM_TABELA_SCRIPT](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[TBSC_DTBS_ID] [dbo].[IDENTIFY] NULL,
	[TBSC_TBLS_ID] [dbo].[IDENTIFY] NULL,
	[TBSC_NOME] [dbo].[NAME_040] NULL,
	[TBSC_VERSAO] [dbo].[VERSION] NULL,
	[TBSC_TP_SCRIPT_TABLE] [dbo].[TP_SCRIPT_TABLE] NULL,
	[TBSC_SCRIPT] [dbo].[OBS_MAX] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_SSTM_TABELA_SCRIPT] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_ANIMAL]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_ANIMAL](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ANML_PESS_ID] [dbo].[IDENTIFY] NULL,
	[ANML_RACA_ID] [dbo].[IDENTIFY] NULL,
	[ANML_CODIGO] [dbo].[CODE_015] NULL,
	[ANML_NOME] [dbo].[NAME_040] NULL,
	[ANML_DT_NASCIMENTO] [dbo].[DATE_ONLY] NULL,
	[ANML_COR_PELAGEM] [dbo].[NAME_024] NULL,
	[ANML_SEXO] [dbo].[PECUARIA_SEXO] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_ANIMAL] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_ANIMAL_FOTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_ANIMAL_FOTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[ANFT_ANML_ID] [dbo].[IDENTIFY] NULL,
	[ANFT_CODE] [dbo].[CODE_005] NULL,
	[ANFT_DATA] [dbo].[DATE_ONLY] NULL,
	[ANFT_FOTO] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_ANIMAL_FOTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_CIRURGIAS]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_CIRURGIAS](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CGIA_SERV_ID] [dbo].[IDENTIFY] NULL,
	[CGIA_VETE_ID] [dbo].[IDENTIFY] NULL,
	[CGIA_ANST_ID] [dbo].[IDENTIFY] NULL,
	[CGIA_ANML_ID] [dbo].[IDENTIFY] NULL,
	[CGIA_OSVT_ID] [dbo].[IDENTIFY] NULL,
	[CGIA_DT_AGENDADA] [dbo].[DATE_AND_TIME] NULL,
	[CGIA_DT_OCORRENCIA] [dbo].[DATE_AND_TIME] NULL,
	[CGIA_PROCEDIMENTO_DESC] [dbo].[OBS_4000] NULL,
	[CGIA_PROCEDIMENTO_COMPL] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_CIRURGIAS] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_CONSULTA]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_CONSULTA](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[CONS_OSVT_ID] [dbo].[IDENTIFY] NULL,
	[CONS_SERV_ID] [dbo].[IDENTIFY] NULL,
	[CONS_ANML_ID] [dbo].[IDENTIFY] NULL,
	[CONS_FCNR_ID] [dbo].[IDENTIFY] NULL,
	[CONS_ANAMNESIA] [dbo].[OBS_4000] NULL,
	[CONS_EXAME_FISICO] [dbo].[OBS_4000] NULL,
	[CONS_RECEITUARIO] [dbo].[OBS_4000] NULL,
	[CONS_DT_AGENDADA] [dbo].[DATE_AND_TIME] NULL,
	[CONS_DT_EVENTO] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_CONSULTA] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_INTERNACAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_INTERNACAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[INTR_VETE_ID] [dbo].[IDENTIFY] NULL,
	[INTR_SERV_ID] [dbo].[IDENTIFY] NULL,
	[INTR_ANML_ID] [dbo].[IDENTIFY] NULL,
	[INTR_OSVT_ID] [dbo].[IDENTIFY] NULL,
	[INTR_DT_ENTRADA] [dbo].[DATE_AND_TIME] NULL,
	[INTR_DT_SAIDA] [dbo].[DATE_AND_TIME] NULL,
	[INTR_SUSPEITA_CLINICA] [dbo].[OBS_4000] NULL,
	[INTR_SINTOMAS] [dbo].[OBS_4000] NULL,
	[INTR_DADOS] [dbo].[OBS_4000] NULL,
	[INTR_TERMO_RESP] [dbo].[IMAGEM] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_INTERNACAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_ORDEM_DE_SERVICO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_ORDEM_DE_SERVICO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[OSVT_TBPC_ID] [dbo].[IDENTIFY] NULL,
	[OSVT_FRVN_ID] [dbo].[IDENTIFY] NULL,
	[OSVT_CPMV_ID] [dbo].[IDENTIFY] NULL,
	[OSVT_ANML_ID] [dbo].[IDENTIFY] NULL,
	[OSVT_TAXI_ID] [dbo].[IDENTIFY] NULL,
	[OSVT_NUMERO] [dbo].[CODE_010] NULL,
	[OSVT_DT_ENTRADA] [dbo].[DATE_AND_TIME] NULL,
	[OSVT_DT_SAIDA] [dbo].[DATE_AND_TIME] NULL,
	[OSVT_STATUS] [dbo].[VETE_STAUS_OS] NULL,
	[OSVT_TIPO] [dbo].[VETE_TIPO_OS] NULL,
	[OSVT_BUSCAR] [dbo].[DECISION] NULL,
	[OSVT_ENTREGAR] [dbo].[DECISION] NULL,
	[OSVT_FORMA_PAGAMENTO] [dbo].[ESPECIE_MONETARIA] NULL,
	[OSVT_LASTUPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_ORDEM_DE_SERVICO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_PELAGEM]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_PELAGEM](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PLGM_CODIGO] [dbo].[CODE_010] NULL,
	[PLGM_NOME] [dbo].[NAME_024] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_PELAGEM] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_PORTE]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_PORTE](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[PRTE_CODIGO] [dbo].[CODE_010] NULL,
	[PRTE_NOME] [dbo].[NAME_024] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_PORTE] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_RETORNO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_RETORNO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[RTRN_VTAT_ID] [dbo].[IDENTIFY] NULL,
	[RTRN_SERV_ID] [dbo].[IDENTIFY] NULL,
	[RTRN_ANML_ID] [dbo].[IDENTIFY] NULL,
	[RTRN_OSVT_ID] [dbo].[IDENTIFY] NULL,
	[RTRN_VTAG_ID] [dbo].[IDENTIFY] NULL,
	[RTRN_DT_AGENDADA] [dbo].[DATE_AND_TIME] NULL,
	[RTRN_DT_EFETIVADA] [dbo].[DATE_AND_TIME] NULL,
	[RTRN_MOTIVOS] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_RETORNO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_RETORNO_PROCEDIMENTO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_RETORNO_PROCEDIMENTO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[RTSV_SERV_ID] [dbo].[IDENTIFY] NULL,
	[RTSV_RTRN_ID] [dbo].[IDENTIFY] NULL,
	[RTSV_OBSERVACAO] [dbo].[OBS_4000] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_RETORNO_PROCEDIMENTO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_SERVICO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_SERVICO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SERV_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[SERV_CODIGO] [dbo].[CODE_040] NULL,
	[SERV_CATEGORIA] [dbo].[VETE_CATEGORIA_SERVICO] NULL,
	[SERV_CUSTO] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_SERVICO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VETE_SERVICO_COMPOSICAO]    Script Date: 03/10/2020 20:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VETE_SERVICO_COMPOSICAO](
	[ID] [dbo].[IDENTIFY] NOT NULL DEFAULT NEWSEQUENTIALID(), 
	[SVCP_SERV_ID] [dbo].[IDENTIFY] NULL,
	[SVCP_PRDT_ID] [dbo].[IDENTIFY] NULL,
	[SVCP_TIPO] [dbo].[VETE_TIPO_COMPOSICAO] NULL,
	[SVCP_QUANTIDADE] [dbo].[MEASURE] NULL,
	[SVCP_CUSTO_UNITARIO] [dbo].[CURRENCY] NULL,
	[SVCP_CUSTO_TOTAL] [dbo].[CURRENCY] NULL,
    [AUDT_DT_CREATE] [dbo].[DATE_AND_TIME] NOT NULL,
    [AUDT_DT_UPDATE] [dbo].[DATE_AND_TIME] NULL,
    [AUDT_USRS_CREATE] [dbo].[IDENTIFY] NOT NULL,
    [AUDT_USRS_UPDATE] [dbo].[IDENTIFY] NULL,
    [AUDT_ACTIVE] [dbo].[DECISION] NOT NULL,
 CONSTRAINT [PK_VETE_SERVICO_COMPOSICAO] PRIMARY KEY NONCLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CDST_CLIENTE]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_CLNT] FOREIGN KEY([CLNT_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CDST_CLIENTE] CHECK CONSTRAINT [FK_PESS_RS_CLNT]
GO
ALTER TABLE [dbo].[CDST_FABRICANTE]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_FBCT] FOREIGN KEY([FBCT_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CDST_FABRICANTE] CHECK CONSTRAINT [FK_PESS_RS_FBCT]
GO
ALTER TABLE [dbo].[CDST_FORNECEDOR]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_FRNC] FOREIGN KEY([FRNC_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CDST_FORNECEDOR] CHECK CONSTRAINT [FK_PESS_RS_FRNC]
GO
ALTER TABLE [dbo].[CDST_PRODUTO]  WITH CHECK ADD  CONSTRAINT [FK_CLPR_RS_PRDT] FOREIGN KEY([PRDT_CLPR_ID])
REFERENCES [dbo].[CDST_CLASSE_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO] CHECK CONSTRAINT [FK_CLPR_RS_PRDT]
GO
ALTER TABLE [dbo].[CDST_PRODUTO]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_PRDT] FOREIGN KEY([PRDT_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO] CHECK CONSTRAINT [FK_UNID_RS_PRDT]
GO
ALTER TABLE [dbo].[CDST_PRODUTO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_COMP_RS_PRCP] FOREIGN KEY([PRCP_COMP_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO_COMPOSICAO] CHECK CONSTRAINT [FK_COMP_RS_PRCP]
GO
ALTER TABLE [dbo].[CDST_PRODUTO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_PRCP] FOREIGN KEY([PRCP_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO_COMPOSICAO] CHECK CONSTRAINT [FK_PRDT_RS_PRCP]
GO
ALTER TABLE [dbo].[CDST_PRODUTO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_PRCP] FOREIGN KEY([PRCP_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO_COMPOSICAO] CHECK CONSTRAINT [FK_UNID_RS_PRCP]
GO
ALTER TABLE [dbo].[CDST_PRODUTO_EQUIVALENTE]  WITH CHECK ADD  CONSTRAINT [FK_EQVT_RS_PREQ] FOREIGN KEY([PREQ_EQVT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO_EQUIVALENTE] CHECK CONSTRAINT [FK_EQVT_RS_PREQ]
GO
ALTER TABLE [dbo].[CDST_PRODUTO_EQUIVALENTE]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_PREQ] FOREIGN KEY([PREQ_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTO_EQUIVALENTE] CHECK CONSTRAINT [FK_PRDT_RS_PREQ]
GO
ALTER TABLE [dbo].[CDST_PRODUTOR_PROPRIEDADE]  WITH CHECK ADD  CONSTRAINT [FK_PDRR_RS_PDPP] FOREIGN KEY([PDPP_PDRR_ID])
REFERENCES [dbo].[CDST_PRODUTOR_RURAL] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTOR_PROPRIEDADE] CHECK CONSTRAINT [FK_PDRR_RS_PDPP]
GO
ALTER TABLE [dbo].[CDST_PRODUTOR_PROPRIEDADE]  WITH CHECK ADD  CONSTRAINT [FK_PPRR_RS_PDPP] FOREIGN KEY([PDPP_PPRR_ID])
REFERENCES [dbo].[CDST_PROPRIEDADE_RURAL] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTOR_PROPRIEDADE] CHECK CONSTRAINT [FK_PPRR_RS_PDPP]
GO
ALTER TABLE [dbo].[CDST_PRODUTOR_RURAL]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PDRR] FOREIGN KEY([PDRR_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CDST_PRODUTOR_RURAL] CHECK CONSTRAINT [FK_PESS_RS_PDRR]
GO
ALTER TABLE [dbo].[CDST_PROPRIEDADE_RURAL]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PPRR] FOREIGN KEY([PPRR_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CDST_PROPRIEDADE_RURAL] CHECK CONSTRAINT [FK_PESS_RS_PPRR]
GO
ALTER TABLE [dbo].[CDST_TRANSPORTADORA]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_TRNS] FOREIGN KEY([TRNS_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CDST_TRANSPORTADORA] CHECK CONSTRAINT [FK_PESS_RS_TRNS]
GO
ALTER TABLE [dbo].[CMNS_BAIRRO]  WITH CHECK ADD  CONSTRAINT [FK_LCLD_RS_BAIR] FOREIGN KEY([BAIR_LCLD_ID])
REFERENCES [dbo].[CMNS_LOCALIDADE] ([ID])
GO
ALTER TABLE [dbo].[CMNS_BAIRRO] CHECK CONSTRAINT [FK_LCLD_RS_BAIR]
GO
ALTER TABLE [dbo].[CMNS_LOCALIDADE]  WITH CHECK ADD  CONSTRAINT [FK_UNFD_RS_LCLD] FOREIGN KEY([LCLD_UNFD_ID])
REFERENCES [dbo].[CMNS_UNIDADE_FEDERATIVA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_LOCALIDADE] CHECK CONSTRAINT [FK_UNFD_RS_LCLD]
GO
ALTER TABLE [dbo].[CMNS_LOGRADOURO]  WITH CHECK ADD  CONSTRAINT [FK_BAIR_RS_LGRD] FOREIGN KEY([LGRD_BAIR_ID])
REFERENCES [dbo].[CMNS_BAIRRO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_LOGRADOURO] CHECK CONSTRAINT [FK_BAIR_RS_LGRD]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_OREX_RS_PSDC] FOREIGN KEY([PSDC_OREX_ID])
REFERENCES [dbo].[CMNS_ORGAO_EXPEDIDOR] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_DOCUMENTO] CHECK CONSTRAINT [FK_OREX_RS_PSDC]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSDC] FOREIGN KEY([PSDC_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_DOCUMENTO] CHECK CONSTRAINT [FK_PESS_RS_PSDC]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_TPDC_RS_PSDC] FOREIGN KEY([PSDC_TPDC_ID])
REFERENCES [dbo].[CMNS_TIPO_DOCUMENTO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_DOCUMENTO] CHECK CONSTRAINT [FK_TPDC_RS_PSDC]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_EMAIL]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSEM] FOREIGN KEY([PSEM_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_EMAIL] CHECK CONSTRAINT [FK_PESS_RS_PSEM]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_EMAIL]  WITH CHECK ADD  CONSTRAINT [FK_TPEM_RS_PSEM] FOREIGN KEY([PSEM_TPEM_ID])
REFERENCES [dbo].[CMNS_TIPO_EMAIL] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_EMAIL] CHECK CONSTRAINT [FK_TPEM_RS_PSEM]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_ENDERECO]  WITH CHECK ADD  CONSTRAINT [FK_BAIR_RS_PSEN] FOREIGN KEY([PSEN_BAIR_ID])
REFERENCES [dbo].[CMNS_BAIRRO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_ENDERECO] CHECK CONSTRAINT [FK_BAIR_RS_PSEN]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_ENDERECO]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSEN] FOREIGN KEY([PSEN_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_ENDERECO] CHECK CONSTRAINT [FK_PESS_RS_PSEN]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_ENDERECO]  WITH CHECK ADD  CONSTRAINT [FK_TPEN_RS_PSEN] FOREIGN KEY([PSEN_TPEN_ID])
REFERENCES [dbo].[CMNS_TIPO_ENDERECO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_ENDERECO] CHECK CONSTRAINT [FK_TPEN_RS_PSEN]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA]  WITH CHECK ADD  CONSTRAINT [FK_CARG_RS_PSFS] FOREIGN KEY([PSFS_CARG_ID])
REFERENCES [dbo].[CMNS_CARGO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA] CHECK CONSTRAINT [FK_CARG_RS_PSFS]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA]  WITH CHECK ADD  CONSTRAINT [FK_NCNL_RS_PSFS] FOREIGN KEY([PSFS_NCNL_ID])
REFERENCES [dbo].[CMNS_NACIONALIDADE] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA] CHECK CONSTRAINT [FK_NCNL_RS_PSFS]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSFS] FOREIGN KEY([PSFS_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA] CHECK CONSTRAINT [FK_PESS_RS_PSFS]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA]  WITH CHECK ADD  CONSTRAINT [FK_PROF_RS_PSFS] FOREIGN KEY([PSFS_PROF_ID])
REFERENCES [dbo].[CMNS_PROFISSAO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_FISICA] CHECK CONSTRAINT [FK_PROF_RS_PSFS]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_IMAGEM]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSIM] FOREIGN KEY([PSIM_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_IMAGEM] CHECK CONSTRAINT [FK_PESS_RS_PSIM]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_JURIDICA]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSJR] FOREIGN KEY([PSJR_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_JURIDICA] CHECK CONSTRAINT [FK_PESS_RS_PSJR]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_JURIDICA]  WITH CHECK ADD  CONSTRAINT [FK_RMAT_RS_PSJR] FOREIGN KEY([PSJR_RMAT_ID])
REFERENCES [dbo].[CMNS_RAMO_ATIVIDADE] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_JURIDICA] CHECK CONSTRAINT [FK_RMAT_RS_PSJR]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_TELEFONE]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PSTL] FOREIGN KEY([PSTL_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_TELEFONE] CHECK CONSTRAINT [FK_PESS_RS_PSTL]
GO
ALTER TABLE [dbo].[CMNS_PESSOA_TELEFONE]  WITH CHECK ADD  CONSTRAINT [FK_TPTL_RS_PSTL] FOREIGN KEY([PSTL_TPTL_ID])
REFERENCES [dbo].[CMNS_TIPO_TELEFONE] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PESSOA_TELEFONE] CHECK CONSTRAINT [FK_TPTL_RS_PSTL]
GO
ALTER TABLE [dbo].[CMNS_PROFISSAO]  WITH CHECK ADD  CONSTRAINT [FK_PROF_RS_PROF] FOREIGN KEY([PROF_PROF_ID])
REFERENCES [dbo].[CMNS_PROFISSAO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_PROFISSAO] CHECK CONSTRAINT [FK_PROF_RS_PROF]
GO
ALTER TABLE [dbo].[CMNS_RAMO_ATIVIDADE]  WITH CHECK ADD  CONSTRAINT [FK_RMAT_RS_RMAT] FOREIGN KEY([RMAT_RMAT_ID])
REFERENCES [dbo].[CMNS_RAMO_ATIVIDADE] ([ID])
GO
ALTER TABLE [dbo].[CMNS_RAMO_ATIVIDADE] CHECK CONSTRAINT [FK_RMAT_RS_RMAT]
GO
ALTER TABLE [dbo].[CMNS_UNEM_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_GRUS_RS_UEUS] FOREIGN KEY([UEUS_GRUS_ID])
REFERENCES [dbo].[CMNS_GRUPO_USUARIO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_UNEM_USUARIO] CHECK CONSTRAINT [FK_GRUS_RS_UEUS]
GO
ALTER TABLE [dbo].[CMNS_UNEM_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_UNEM_RS_UEUS] FOREIGN KEY([UEUS_UNEM_ID])
REFERENCES [dbo].[CORE_UNIDADE_EMPRESARIAL] ([ID])
GO
ALTER TABLE [dbo].[CMNS_UNEM_USUARIO] CHECK CONSTRAINT [FK_UNEM_RS_UEUS]
GO
ALTER TABLE [dbo].[CMNS_UNEM_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_USRS_RS_UEUS] FOREIGN KEY([UEUS_USRS_ID])
REFERENCES [dbo].[CMNS_USUARIO] ([ID])
GO
ALTER TABLE [dbo].[CMNS_UNEM_USUARIO] CHECK CONSTRAINT [FK_USRS_RS_UEUS]
GO
ALTER TABLE [dbo].[CMNS_UNIDADE_FEDERATIVA]  WITH CHECK ADD  CONSTRAINT [FK_PAIS_RS_UNFD] FOREIGN KEY([UNFD_PAIS_ID])
REFERENCES [dbo].[CMNS_PAIS] ([ID])
GO
ALTER TABLE [dbo].[CMNS_UNIDADE_FEDERATIVA] CHECK CONSTRAINT [FK_PAIS_RS_UNFD]
GO
ALTER TABLE [dbo].[CMNS_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_USRS] FOREIGN KEY([USRS_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CMNS_USUARIO] CHECK CONSTRAINT [FK_PESS_RS_USRS]
GO
ALTER TABLE [dbo].[CMNS_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_PSEM_RS_USRS] FOREIGN KEY([USRS_PSEM_ID])
REFERENCES [dbo].[CMNS_PESSOA_EMAIL] ([ID])
GO
ALTER TABLE [dbo].[CMNS_USUARIO] CHECK CONSTRAINT [FK_PSEM_RS_USRS]
GO
ALTER TABLE [dbo].[CORE_EMPRESA]  WITH CHECK ADD  CONSTRAINT [FK_CPRC_RS_EMPR] FOREIGN KEY([EMPR_CPRC_ID])
REFERENCES [dbo].[CORE_CORPORACAO] ([ID])
GO
ALTER TABLE [dbo].[CORE_EMPRESA] CHECK CONSTRAINT [FK_CPRC_RS_EMPR]
GO
ALTER TABLE [dbo].[CORE_UNIDADE_EMPRESARIAL]  WITH CHECK ADD  CONSTRAINT [FK_EMPR_RS_UNEM] FOREIGN KEY([UNEM_EMPR_ID])
REFERENCES [dbo].[CORE_EMPRESA] ([ID])
GO
ALTER TABLE [dbo].[CORE_UNIDADE_EMPRESARIAL] CHECK CONSTRAINT [FK_EMPR_RS_UNEM]
GO
ALTER TABLE [dbo].[CORE_UNIDADE_EMPRESARIAL]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_UNEM] FOREIGN KEY([UNEM_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[CORE_UNIDADE_EMPRESARIAL] CHECK CONSTRAINT [FK_PESS_RS_UNEM]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CLNT_RS_CPMV] FOREIGN KEY([CPMV_CLNT_ID])
REFERENCES [dbo].[CDST_CLIENTE] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_CLNT_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CPMV_RS_CPMV] FOREIGN KEY([CPMV_CPMV_ID])
REFERENCES [dbo].[ESTQ_CAPA_MOVIMENTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_CPMV_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_FRNC_RS_CPMV] FOREIGN KEY([CPMV_FRNC_ID])
REFERENCES [dbo].[CDST_FORNECEDOR] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_FRNC_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_FRVN_RS_CPMV] FOREIGN KEY([CPMV_FRVN_ID])
REFERENCES [dbo].[FNCR_FORMA_VENCIMENTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_FRVN_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_HSPD_RS_CPMV] FOREIGN KEY([CPMV_HSPD_ID])
REFERENCES [dbo].[FNCR_HISTORICO_PADRAO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_HSPD_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_USRS_RS_CPMV] FOREIGN KEY([CPMV_USRS_ID])
REFERENCES [dbo].[CMNS_USUARIO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_USRS_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_VEND_RS_CPMV] FOREIGN KEY([CPMV_VEND_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_CAPA_MOVIMENTO] CHECK CONSTRAINT [FK_VEND_RS_CPMV]
GO
ALTER TABLE [dbo].[ESTQ_FABRICANTE_MOTOR]  WITH CHECK ADD  CONSTRAINT [FK_FBCT_RS_FBMT] FOREIGN KEY([FBMT_FBCT_ID])
REFERENCES [dbo].[CDST_FABRICANTE] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_FABRICANTE_MOTOR] CHECK CONSTRAINT [FK_FBCT_RS_FBMT]
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CPMV_RS_ITMV] FOREIGN KEY([ITMV_CPMV_ID])
REFERENCES [dbo].[ESTQ_CAPA_MOVIMENTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO] CHECK CONSTRAINT [FK_CPMV_RS_ITMV]
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CTCT_RS_ITMV] FOREIGN KEY([ITMV_CTCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO] CHECK CONSTRAINT [FK_CTCT_RS_ITMV]
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_FNCR_RS_ITMV] FOREIGN KEY([ITMV_FNCR_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO] CHECK CONSTRAINT [FK_FNCR_RS_ITMV]
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_LTVL_RS_ITMV] FOREIGN KEY([ITMV_LTVL_ID])
REFERENCES [dbo].[ESTQ_LOTE_VALIDADE] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO] CHECK CONSTRAINT [FK_LTVL_RS_ITMV]
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_ITMV] FOREIGN KEY([ITMV_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO] CHECK CONSTRAINT [FK_PRDT_RS_ITMV]
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_ITMV] FOREIGN KEY([ITMV_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_ITEM_MOVIMENTO] CHECK CONSTRAINT [FK_UNID_RS_ITMV]
GO
ALTER TABLE [dbo].[ESTQ_LOTE_VALIDADE]  WITH CHECK ADD  CONSTRAINT [FK_MRCD_RS_LTVL] FOREIGN KEY([LTVL_MRCD_ID])
REFERENCES [dbo].[ESTQ_MERCADORIA] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_LOTE_VALIDADE] CHECK CONSTRAINT [FK_MRCD_RS_LTVL]
GO
ALTER TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO]  WITH CHECK ADD  CONSTRAINT [FK_FBCT_RS_MQEQ] FOREIGN KEY([MQEQ_FBCT_ID])
REFERENCES [dbo].[CDST_FABRICANTE] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO] CHECK CONSTRAINT [FK_FBCT_RS_MQEQ]
GO
ALTER TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO]  WITH CHECK ADD  CONSTRAINT [FK_MOTO_RS_MQEQ] FOREIGN KEY([MQEQ_MOTO_ID])
REFERENCES [dbo].[ESTQ_FABRICANTE_MOTOR] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO] CHECK CONSTRAINT [FK_MOTO_RS_MQEQ]
GO
ALTER TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_MQEQ] FOREIGN KEY([MQEQ_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MAQUINA_EQUIPAMENTO] CHECK CONSTRAINT [FK_PRDT_RS_MQEQ]
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA]  WITH CHECK ADD  CONSTRAINT [FK_GRPS_RS_MRCD] FOREIGN KEY([MRCD_GRPS_ID])
REFERENCES [dbo].[ESTQ_GRUPO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA] CHECK CONSTRAINT [FK_GRPS_RS_MRCD]
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA]  WITH CHECK ADD  CONSTRAINT [FK_MARC_RS_MRCD] FOREIGN KEY([MRCD_MARC_ID])
REFERENCES [dbo].[ESTQ_MARCA] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA] CHECK CONSTRAINT [FK_MARC_RS_MRCD]
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA]  WITH CHECK ADD  CONSTRAINT [FK_MODE_RS_MRCD] FOREIGN KEY([MRCD_MODE_ID])
REFERENCES [dbo].[ESTQ_MODELO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA] CHECK CONSTRAINT [FK_MODE_RS_MRCD]
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA]  WITH CHECK ADD  CONSTRAINT [FK_NCMS_RS_MRCD] FOREIGN KEY([MRCD_NCMS_ID])
REFERENCES [dbo].[FSCL_NCMS] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA] CHECK CONSTRAINT [FK_NCMS_RS_MRCD]
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_MRCD] FOREIGN KEY([MRCD_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA] CHECK CONSTRAINT [FK_PRDT_RS_MRCD]
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA]  WITH CHECK ADD  CONSTRAINT [FK_SBGP_RS_MRCD] FOREIGN KEY([MRCD_SBGP_ID])
REFERENCES [dbo].[ESTQ_SUBGRUPO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_MERCADORIA] CHECK CONSTRAINT [FK_SBGP_RS_MRCD]
GO
ALTER TABLE [dbo].[ESTQ_NUMERO_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_UNEM_RS_NRDC] FOREIGN KEY([NRDC_UNEM_ID])
REFERENCES [dbo].[CORE_UNIDADE_EMPRESARIAL] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_NUMERO_DOCUMENTO] CHECK CONSTRAINT [FK_UNEM_RS_NRDC]
GO
ALTER TABLE [dbo].[ESTQ_PRODUTO_SALDO]  WITH CHECK ADD  CONSTRAINT [FK_LTVL_RS_PRSD] FOREIGN KEY([PRSD_LTVL_ID])
REFERENCES [dbo].[ESTQ_LOTE_VALIDADE] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_PRODUTO_SALDO] CHECK CONSTRAINT [FK_LTVL_RS_PRSD]
GO
ALTER TABLE [dbo].[ESTQ_PRODUTO_SALDO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_PRSD] FOREIGN KEY([PRSD_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_PRODUTO_SALDO] CHECK CONSTRAINT [FK_PRDT_RS_PRSD]
GO
ALTER TABLE [dbo].[ESTQ_SALDO_CENTRO_CUSTO]  WITH CHECK ADD  CONSTRAINT [FK_CTCT_RS_SDCC] FOREIGN KEY([SDCC_CTCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_SALDO_CENTRO_CUSTO] CHECK CONSTRAINT [FK_CTCT_RS_SDCC]
GO
ALTER TABLE [dbo].[ESTQ_SALDO_CENTRO_CUSTO]  WITH CHECK ADD  CONSTRAINT [FK_PRSD_RS_SDCC] FOREIGN KEY([SDCC_PRSD_ID])
REFERENCES [dbo].[ESTQ_PRODUTO_SALDO] ([ID])
GO
ALTER TABLE [dbo].[ESTQ_SALDO_CENTRO_CUSTO] CHECK CONSTRAINT [FK_PRSD_RS_SDCC]
GO
ALTER TABLE [dbo].[FNCR_BANCO_CONTA]  WITH CHECK ADD  CONSTRAINT [FK_BANC_RS_BCCT] FOREIGN KEY([BCCT_BANC_ID])
REFERENCES [dbo].[FNCR_BANCO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_BANCO_CONTA] CHECK CONSTRAINT [FK_BANC_RS_BCCT]
GO
ALTER TABLE [dbo].[FNCR_BANCO_CONTA]  WITH CHECK ADD  CONSTRAINT [FK_CAIX_RS_BANC] FOREIGN KEY([BANC_CAIX_ID])
REFERENCES [dbo].[FNCR_CAIXA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_BANCO_CONTA] CHECK CONSTRAINT [FK_CAIX_RS_BANC]
GO
ALTER TABLE [dbo].[FNCR_BANCO_CONTA_SALDO]  WITH CHECK ADD  CONSTRAINT [FK_BCCT_RS_BCCS] FOREIGN KEY([BCCS_BCCT_ID])
REFERENCES [dbo].[FNCR_BANCO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_BANCO_CONTA_SALDO] CHECK CONSTRAINT [FK_BCCT_RS_BCCS]
GO
ALTER TABLE [dbo].[FNCR_BANCO_MODELO_BOLETO]  WITH CHECK ADD  CONSTRAINT [FK_BANC_RS_BCMB] FOREIGN KEY([BCMB_BANC_ID])
REFERENCES [dbo].[FNCR_BANCO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_BANCO_MODELO_BOLETO] CHECK CONSTRAINT [FK_BANC_RS_BCMB]
GO
ALTER TABLE [dbo].[FNCR_BANCO_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_BCCT_RS_BCMV] FOREIGN KEY([BCMV_BCCT_ID])
REFERENCES [dbo].[FNCR_BANCO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_BANCO_MOVIMENTO] CHECK CONSTRAINT [FK_BCCT_RS_BCMV]
GO
ALTER TABLE [dbo].[FNCR_BANCO_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_HSPD_RS_BCMV] FOREIGN KEY([BCMV_HSPD_ID])
REFERENCES [dbo].[FNCR_HISTORICO_PADRAO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_BANCO_MOVIMENTO] CHECK CONSTRAINT [FK_HSPD_RS_BCMV]
GO
ALTER TABLE [dbo].[FNCR_CAIXA]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_CAIX] FOREIGN KEY([CAIX_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA] CHECK CONSTRAINT [FK_PESS_RS_CAIX]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_CTCT_RS_CXIT] FOREIGN KEY([CXIT_CTCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM] CHECK CONSTRAINT [FK_CTCT_RS_CXIT]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_CXIT_RS_CXIT] FOREIGN KEY([CXIT_CXIT_ID])
REFERENCES [dbo].[FNCR_CAIXA_ITEM] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM] CHECK CONSTRAINT [FK_CXIT_RS_CXIT]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_CXMV_RS_CXIT] FOREIGN KEY([CXIT_CXMV_ID])
REFERENCES [dbo].[FNCR_CAIXA_MOVIMENTO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM] CHECK CONSTRAINT [FK_CXMV_RS_CXIT]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_FNCR_RS_CXIT] FOREIGN KEY([CXIT_FNCR_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM] CHECK CONSTRAINT [FK_FNCR_RS_CXIT]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_HSPD_RS_CXIT] FOREIGN KEY([CXIT_HSPD_ID])
REFERENCES [dbo].[FNCR_HISTORICO_PADRAO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM] CHECK CONSTRAINT [FK_HSPD_RS_CXIT]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_CXIT] FOREIGN KEY([CXIT_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_ITEM] CHECK CONSTRAINT [FK_PESS_RS_CXIT]
GO
ALTER TABLE [dbo].[FNCR_CAIXA_MOVIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CAIX_RS_CXMV] FOREIGN KEY([CXMV_CAIX_ID])
REFERENCES [dbo].[FNCR_CAIXA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_CAIXA_MOVIMENTO] CHECK CONSTRAINT [FK_CAIX_RS_CXMV]
GO
ALTER TABLE [dbo].[FNCR_NIVEL_PLANO_CONTA]  WITH CHECK ADD  CONSTRAINT [FK_CMPC_RS_NVPC] FOREIGN KEY([NVPC_CMPC_ID])
REFERENCES [dbo].[FNCR_COMPOSICAO_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_NIVEL_PLANO_CONTA] CHECK CONSTRAINT [FK_CMPC_RS_NVPC]
GO
ALTER TABLE [dbo].[FNCR_NOTA_FISCAL_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_NTFS_RS_NFTT] FOREIGN KEY([NFTT_NTFS_ID])
REFERENCES [dbo].[FSCL_DOCUMENTO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_NOTA_FISCAL_TITULO] CHECK CONSTRAINT [FK_NTFS_RS_NFTT]
GO
ALTER TABLE [dbo].[FNCR_NOTA_FISCAL_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_TTLS_RS_CMTT] FOREIGN KEY([CMTT_TTLS_ID])
REFERENCES [dbo].[FNCR_TITULO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_NOTA_FISCAL_TITULO] CHECK CONSTRAINT [FK_TTLS_RS_CMTT]
GO
ALTER TABLE [dbo].[FNCR_PARCELA]  WITH CHECK ADD  CONSTRAINT [FK_TTLS_RS_PRCL] FOREIGN KEY([PRCL_TTLS_ID])
REFERENCES [dbo].[FNCR_TITULO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PARCELA] CHECK CONSTRAINT [FK_TTLS_RS_PRCL]
GO
ALTER TABLE [dbo].[FNCR_PARCELA_BAIXA]  WITH CHECK ADD  CONSTRAINT [FK_CXIT_RS_PRBX] FOREIGN KEY([PRBX_CXIT_ID])
REFERENCES [dbo].[FNCR_CAIXA_ITEM] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PARCELA_BAIXA] CHECK CONSTRAINT [FK_CXIT_RS_PRBX]
GO
ALTER TABLE [dbo].[FNCR_PARCELA_BAIXA]  WITH CHECK ADD  CONSTRAINT [FK_HSPD_RS_PRBX] FOREIGN KEY([PRBX_HSPD_ID])
REFERENCES [dbo].[FNCR_HISTORICO_PADRAO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PARCELA_BAIXA] CHECK CONSTRAINT [FK_HSPD_RS_PRBX]
GO
ALTER TABLE [dbo].[FNCR_PARCELA_BAIXA]  WITH CHECK ADD  CONSTRAINT [FK_PRCL_RS_PRBX] FOREIGN KEY([PRBX_PRCL_ID])
REFERENCES [dbo].[FNCR_PARCELA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PARCELA_BAIXA] CHECK CONSTRAINT [FK_PRCL_RS_PRBX]
GO
ALTER TABLE [dbo].[FNCR_PLANO_CONTA]  WITH CHECK ADD  CONSTRAINT [FK_PLCT_RS_PLCT] FOREIGN KEY([PLCT_PLCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PLANO_CONTA] CHECK CONSTRAINT [FK_PLCT_RS_PLCT]
GO
ALTER TABLE [dbo].[FNCR_PLANO_CONTA_SALDO]  WITH CHECK ADD  CONSTRAINT [FK_PLCT_RS_PCSD] FOREIGN KEY([PCSD_PLCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PLANO_CONTA_SALDO] CHECK CONSTRAINT [FK_PLCT_RS_PCSD]
GO
ALTER TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO]  WITH CHECK ADD  CONSTRAINT [FK_CTCT_RS_PLOR] FOREIGN KEY([PLOR_CTCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO] CHECK CONSTRAINT [FK_CTCT_RS_PLOR]
GO
ALTER TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO]  WITH CHECK ADD  CONSTRAINT [FK_CXIT_RS_PLOR] FOREIGN KEY([PLOR_CXIT_ID])
REFERENCES [dbo].[FNCR_CAIXA_ITEM] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO] CHECK CONSTRAINT [FK_CXIT_RS_PLOR]
GO
ALTER TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO]  WITH CHECK ADD  CONSTRAINT [FK_FNCR_RS_PLOR] FOREIGN KEY([PLOR_FNCR_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_PLANO_ORCAMENTARIO] CHECK CONSTRAINT [FK_FNCR_RS_PLOR]
GO
ALTER TABLE [dbo].[FNCR_TABELA_PRECO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_TPIT] FOREIGN KEY([TPIT_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TABELA_PRECO_ITEM] CHECK CONSTRAINT [FK_PRDT_RS_TPIT]
GO
ALTER TABLE [dbo].[FNCR_TABELA_PRECO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_TBPC_RS_TPIT] FOREIGN KEY([TPIT_TBPC_ID])
REFERENCES [dbo].[FNCR_TABELA_PRECO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TABELA_PRECO_ITEM] CHECK CONSTRAINT [FK_TBPC_RS_TPIT]
GO
ALTER TABLE [dbo].[FNCR_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_CLNT_RS_TTLS] FOREIGN KEY([TTLS_CLNT_ID])
REFERENCES [dbo].[CDST_CLIENTE] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO] CHECK CONSTRAINT [FK_CLNT_RS_TTLS]
GO
ALTER TABLE [dbo].[FNCR_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_CXIT_RS_TTLS] FOREIGN KEY([TTLS_CXIT_ID])
REFERENCES [dbo].[FNCR_CAIXA_ITEM] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO] CHECK CONSTRAINT [FK_CXIT_RS_TTLS]
GO
ALTER TABLE [dbo].[FNCR_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_FNCR_RS_TTLS] FOREIGN KEY([TTLS_FNCR_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO] CHECK CONSTRAINT [FK_FNCR_RS_TTLS]
GO
ALTER TABLE [dbo].[FNCR_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_FRNC_RS_TTLS] FOREIGN KEY([TTLS_FRNC_ID])
REFERENCES [dbo].[CDST_FORNECEDOR] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO] CHECK CONSTRAINT [FK_FRNC_RS_TTLS]
GO
ALTER TABLE [dbo].[FNCR_TITULO]  WITH CHECK ADD  CONSTRAINT [FK_FRVN_RS_TTLS] FOREIGN KEY([TTLS_FRVN_ID])
REFERENCES [dbo].[FNCR_FORMA_VENCIMENTO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO] CHECK CONSTRAINT [FK_FRVN_RS_TTLS]
GO
ALTER TABLE [dbo].[FNCR_TITULO_CENTRO_CUSTO]  WITH CHECK ADD  CONSTRAINT [FK_CTCT_RS_PRPC] FOREIGN KEY([PRPC_CTCT_ID])
REFERENCES [dbo].[FNCR_PLANO_CONTA] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO_CENTRO_CUSTO] CHECK CONSTRAINT [FK_CTCT_RS_PRPC]
GO
ALTER TABLE [dbo].[FNCR_TITULO_CENTRO_CUSTO]  WITH CHECK ADD  CONSTRAINT [FK_TTLS_RS_TTCC] FOREIGN KEY([TTCC_TTLS_ID])
REFERENCES [dbo].[FNCR_TITULO] ([ID])
GO
ALTER TABLE [dbo].[FNCR_TITULO_CENTRO_CUSTO] CHECK CONSTRAINT [FK_TTLS_RS_TTCC]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CLNT_RS_DCMT] FOREIGN KEY([DCMT_CLNT_ID])
REFERENCES [dbo].[CDST_CLIENTE] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO] CHECK CONSTRAINT [FK_CLNT_RS_DCMT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_CPMV_RS_DCMT] FOREIGN KEY([DCMT_CPMV_ID])
REFERENCES [dbo].[ESTQ_CAPA_MOVIMENTO] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO] CHECK CONSTRAINT [FK_CPMV_RS_DCMT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_FRNC_RS_DCMT] FOREIGN KEY([DCMT_FRNC_ID])
REFERENCES [dbo].[CDST_FORNECEDOR] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO] CHECK CONSTRAINT [FK_FRNC_RS_DCMT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_FRVN_RS_DCMT] FOREIGN KEY([DCMT_FRVN_ID])
REFERENCES [dbo].[FNCR_FORMA_VENCIMENTO] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO] CHECK CONSTRAINT [FK_FRVN_RS_DCMT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_HSPD_RS_DCMT] FOREIGN KEY([DCMT_HSPD_ID])
REFERENCES [dbo].[FNCR_HISTORICO_PADRAO] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO] CHECK CONSTRAINT [FK_HSPD_RS_DCMT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO]  WITH CHECK ADD  CONSTRAINT [FK_TRNS_RS_DCMT] FOREIGN KEY([DCMT_TRNS_ID])
REFERENCES [dbo].[CDST_TRANSPORTADORA] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO] CHECK CONSTRAINT [FK_TRNS_RS_DCMT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_CFOP_RS_DCIT] FOREIGN KEY([DCIT_CFOP_ID])
REFERENCES [dbo].[FSCL_CFOP] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_ITEM] CHECK CONSTRAINT [FK_CFOP_RS_DCIT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_DCMT_RS_DCIT] FOREIGN KEY([DCIT_DCMT_ID])
REFERENCES [dbo].[FSCL_DOCUMENTO] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_ITEM] CHECK CONSTRAINT [FK_DCMT_RS_DCIT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_ITMV_RS_DCIT] FOREIGN KEY([DCIT_ITMV_ID])
REFERENCES [dbo].[ESTQ_ITEM_MOVIMENTO] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_ITEM] CHECK CONSTRAINT [FK_ITMV_RS_DCIT]
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_PESSOA]  WITH CHECK ADD  CONSTRAINT [FK_DCMT_RS_DCPS] FOREIGN KEY([DCPS_DCMT_ID])
REFERENCES [dbo].[FSCL_DOCUMENTO] ([ID])
GO
ALTER TABLE [dbo].[FSCL_DOCUMENTO_PESSOA] CHECK CONSTRAINT [FK_DCMT_RS_DCPS]
GO
ALTER TABLE [dbo].[FSCL_ITEM_FATO_FISCAL]  WITH CHECK ADD  CONSTRAINT [FK_DCIT_RS_ITFF] FOREIGN KEY([ITFF_DCIT_ID])
REFERENCES [dbo].[FSCL_DOCUMENTO_ITEM] ([ID])
GO
ALTER TABLE [dbo].[FSCL_ITEM_FATO_FISCAL] CHECK CONSTRAINT [FK_DCIT_RS_ITFF]
GO
ALTER TABLE [dbo].[FSCL_REGIME_TRIBUTARIO]  WITH CHECK ADD  CONSTRAINT [FK_NCMS_RS_RGTB] FOREIGN KEY([RGTB_NCMS_ID])
REFERENCES [dbo].[FSCL_NCMS] ([ID])
GO
ALTER TABLE [dbo].[FSCL_REGIME_TRIBUTARIO] CHECK CONSTRAINT [FK_NCMS_RS_RGTB]
GO
ALTER TABLE [dbo].[FSCL_REGIME_TRIBUTARIO]  WITH CHECK ADD  CONSTRAINT [FK_UNFD_RS_RGTB] FOREIGN KEY([RGTB_UNFD_ID])
REFERENCES [dbo].[CMNS_UNIDADE_FEDERATIVA] ([ID])
GO
ALTER TABLE [dbo].[FSCL_REGIME_TRIBUTARIO] CHECK CONSTRAINT [FK_UNFD_RS_RGTB]
GO
ALTER TABLE [dbo].[MENU_PASTA]  WITH CHECK ADD  CONSTRAINT [FK_MODL_RS_PSTA] FOREIGN KEY([PSTA_MODL_ID])
REFERENCES [dbo].[MENU_MODULO] ([ID])
GO
ALTER TABLE [dbo].[MENU_PASTA] CHECK CONSTRAINT [FK_MODL_RS_PSTA]
GO
ALTER TABLE [dbo].[MENU_RECURSO]  WITH CHECK ADD  CONSTRAINT [FK_PSTA_RS_RCRS] FOREIGN KEY([RCRS_PSTA_ID])
REFERENCES [dbo].[MENU_PASTA] ([ID])
GO
ALTER TABLE [dbo].[MENU_RECURSO] CHECK CONSTRAINT [FK_PSTA_RS_RCRS]
GO
ALTER TABLE [dbo].[MENU_RECURSO_GRUPO_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_GRUS_RS_RCGU] FOREIGN KEY([RCGU_GRUS_ID])
REFERENCES [dbo].[CMNS_GRUPO_USUARIO] ([ID])
GO
ALTER TABLE [dbo].[MENU_RECURSO_GRUPO_USUARIO] CHECK CONSTRAINT [FK_GRUS_RS_RCGU]
GO
ALTER TABLE [dbo].[MENU_RECURSO_GRUPO_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_SSRC_RS_RCGU] FOREIGN KEY([RCGU_SSRC_ID])
REFERENCES [dbo].[MENU_SISTEMA_RECURSO] ([ID])
GO
ALTER TABLE [dbo].[MENU_RECURSO_GRUPO_USUARIO] CHECK CONSTRAINT [FK_SSRC_RS_RCGU]
GO
ALTER TABLE [dbo].[MENU_SISTEMA_MODULO]  WITH CHECK ADD  CONSTRAINT [FK_MODL_RS_SSMD] FOREIGN KEY([SSMD_MODL_ID])
REFERENCES [dbo].[MENU_MODULO] ([ID])
GO
ALTER TABLE [dbo].[MENU_SISTEMA_MODULO] CHECK CONSTRAINT [FK_MODL_RS_SSMD]
GO
ALTER TABLE [dbo].[MENU_SISTEMA_MODULO]  WITH CHECK ADD  CONSTRAINT [FK_SSTM_RS_SSMD] FOREIGN KEY([SSMD_SSTM_ID])
REFERENCES [dbo].[SSTM_SISTEMA] ([ID])
GO
ALTER TABLE [dbo].[MENU_SISTEMA_MODULO] CHECK CONSTRAINT [FK_SSTM_RS_SSMD]
GO
ALTER TABLE [dbo].[MENU_SISTEMA_PASTA]  WITH CHECK ADD  CONSTRAINT [FK_PSTA_RS_SSPS] FOREIGN KEY([SSPS_PSTA_ID])
REFERENCES [dbo].[MENU_PASTA] ([ID])
GO
ALTER TABLE [dbo].[MENU_SISTEMA_PASTA] CHECK CONSTRAINT [FK_PSTA_RS_SSPS]
GO
ALTER TABLE [dbo].[MENU_SISTEMA_PASTA]  WITH CHECK ADD  CONSTRAINT [FK_SSMD_RS_SSPS] FOREIGN KEY([SSPS_SSMD_ID])
REFERENCES [dbo].[MENU_SISTEMA_MODULO] ([ID])
GO
ALTER TABLE [dbo].[MENU_SISTEMA_PASTA] CHECK CONSTRAINT [FK_SSMD_RS_SSPS]
GO
ALTER TABLE [dbo].[MENU_SISTEMA_RECURSO]  WITH CHECK ADD  CONSTRAINT [FK_RCRS_RS_SSRC] FOREIGN KEY([SSRC_RCRS_ID])
REFERENCES [dbo].[MENU_RECURSO] ([ID])
GO
ALTER TABLE [dbo].[MENU_SISTEMA_RECURSO] CHECK CONSTRAINT [FK_RCRS_RS_SSRC]
GO
ALTER TABLE [dbo].[MENU_SISTEMA_RECURSO]  WITH CHECK ADD  CONSTRAINT [FK_SSPS_RS_SSRC] FOREIGN KEY([SSRC_SSPS_ID])
REFERENCES [dbo].[MENU_SISTEMA_PASTA] ([ID])
GO
ALTER TABLE [dbo].[MENU_SISTEMA_RECURSO] CHECK CONSTRAINT [FK_SSPS_RS_SSRC]
GO
ALTER TABLE [dbo].[PECF_CAIXA]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_PECX] FOREIGN KEY([PECX_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[PECF_CAIXA] CHECK CONSTRAINT [FK_PESS_RS_PECX]
GO
ALTER TABLE [dbo].[PECF_CONTADOR]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_CTDR] FOREIGN KEY([CTDR_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[PECF_CONTADOR] CHECK CONSTRAINT [FK_PESS_RS_CTDR]
GO
ALTER TABLE [dbo].[PECR_AFIXOS]  WITH CHECK ADD  CONSTRAINT [FK_CLPR_RS_AFXS] FOREIGN KEY([AFXS_CLPR_ID])
REFERENCES [dbo].[CDST_CLASSE_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_AFIXOS] CHECK CONSTRAINT [FK_CLPR_RS_AFXS]
GO
ALTER TABLE [dbo].[PECR_AFIXOS]  WITH CHECK ADD  CONSTRAINT [FK_PDRR_RS_AFXS] FOREIGN KEY([AFXS_PDRR_ID])
REFERENCES [dbo].[CDST_PRODUTOR_RURAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_AFIXOS] CHECK CONSTRAINT [FK_PDRR_RS_AFXS]
GO
ALTER TABLE [dbo].[PECR_AFIXOS]  WITH CHECK ADD  CONSTRAINT [FK_RACA_RS_AFXS] FOREIGN KEY([AFXS_RACA_ID])
REFERENCES [dbo].[PECR_RACA] ([ID])
GO
ALTER TABLE [dbo].[PECR_AFIXOS] CHECK CONSTRAINT [FK_RACA_RS_AFXS]
GO
ALTER TABLE [dbo].[PECR_APTIDAO]  WITH CHECK ADD  CONSTRAINT [FK_ESPC_RS_APTD] FOREIGN KEY([APTD_ESPC_ID])
REFERENCES [dbo].[PECR_ESPECIE] ([ID])
GO
ALTER TABLE [dbo].[PECR_APTIDAO] CHECK CONSTRAINT [FK_ESPC_RS_APTD]
GO
ALTER TABLE [dbo].[PECR_CAPA_MOVIMENTO_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_LOTE_RS_CMAN] FOREIGN KEY([CMAN_LOTE_ID])
REFERENCES [dbo].[PECR_LOTE] ([ID])
GO
ALTER TABLE [dbo].[PECR_CAPA_MOVIMENTO_ANIMAL] CHECK CONSTRAINT [FK_LOTE_RS_CMAN]
GO
ALTER TABLE [dbo].[PECR_CATEGORIA]  WITH CHECK ADD  CONSTRAINT [FK_IDAD_RS_CTGR] FOREIGN KEY([CTGR_IDAD_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[PECR_CATEGORIA] CHECK CONSTRAINT [FK_IDAD_RS_CTGR]
GO
ALTER TABLE [dbo].[PECR_CATEGORIA]  WITH CHECK ADD  CONSTRAINT [FK_PESO_RS_CTGR] FOREIGN KEY([CTGR_PESO_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[PECR_CATEGORIA] CHECK CONSTRAINT [FK_PESO_RS_CTGR]
GO
ALTER TABLE [dbo].[PECR_CATEGORIA]  WITH CHECK ADD  CONSTRAINT [FK_RACA_RS_CTGR] FOREIGN KEY([CTGR_RACA_ID])
REFERENCES [dbo].[PECR_RACA] ([ID])
GO
ALTER TABLE [dbo].[PECR_CATEGORIA] CHECK CONSTRAINT [FK_RACA_RS_CTGR]
GO
ALTER TABLE [dbo].[PECR_DADOS_ABCZ]  WITH CHECK ADD  CONSTRAINT [FK_PRBV_RS_ABCZ] FOREIGN KEY([ABCZ_PRBV_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_DADOS_ABCZ] CHECK CONSTRAINT [FK_PRBV_RS_ABCZ]
GO
ALTER TABLE [dbo].[PECR_EVENTO_SANITARIO]  WITH CHECK ADD  CONSTRAINT [FK_PRBV_RS_EVSN] FOREIGN KEY([EVSN_PRBV_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_EVENTO_SANITARIO] CHECK CONSTRAINT [FK_PRBV_RS_EVSN]
GO
ALTER TABLE [dbo].[PECR_EVENTO_SANITARIO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_EVSN] FOREIGN KEY([EVSN_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_EVENTO_SANITARIO] CHECK CONSTRAINT [FK_PRDT_RS_EVSN]
GO
ALTER TABLE [dbo].[PECR_EVENTO_SANITARIO]  WITH CHECK ADD  CONSTRAINT [FK_TPES_RS_EVSN] FOREIGN KEY([EVSN_TPES_ID])
REFERENCES [dbo].[PECR_TIPO_EVENTO_SANITARIO] ([ID])
GO
ALTER TABLE [dbo].[PECR_EVENTO_SANITARIO] CHECK CONSTRAINT [FK_TPES_RS_EVSN]
GO
ALTER TABLE [dbo].[PECR_GANHO_PESO_MEDIO]  WITH CHECK ADD  CONSTRAINT [FK_CTGR_RS_GPMD] FOREIGN KEY([GPMD_CTGR_ID])
REFERENCES [dbo].[PECR_CATEGORIA] ([ID])
GO
ALTER TABLE [dbo].[PECR_GANHO_PESO_MEDIO] CHECK CONSTRAINT [FK_CTGR_RS_GPMD]
GO
ALTER TABLE [dbo].[PECR_GANHO_PESO_MEDIO]  WITH CHECK ADD  CONSTRAINT [FK_PESO_RS_GPMD] FOREIGN KEY([GPMD_PESO_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[PECR_GANHO_PESO_MEDIO] CHECK CONSTRAINT [FK_PESO_RS_GPMD]
GO
ALTER TABLE [dbo].[PECR_GANHO_PESO_MEDIO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_GPMD] FOREIGN KEY([GPMD_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_GANHO_PESO_MEDIO] CHECK CONSTRAINT [FK_PRDT_RS_GPMD]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_CATEGORIA]  WITH CHECK ADD  CONSTRAINT [FK_CTGR_RS_HSCT] FOREIGN KEY([HSCT_CTGR_ID])
REFERENCES [dbo].[PECR_CATEGORIA] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_CATEGORIA] CHECK CONSTRAINT [FK_CTGR_RS_HSCT]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_CATEGORIA]  WITH CHECK ADD  CONSTRAINT [FK_PRBV_RS_HSCT] FOREIGN KEY([HSCT_PRBV_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_CATEGORIA] CHECK CONSTRAINT [FK_PRBV_RS_HSCT]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA]  WITH CHECK ADD  CONSTRAINT [FK_DOAD_RS_HSCB] FOREIGN KEY([HSCB_DOAD_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA] CHECK CONSTRAINT [FK_DOAD_RS_HSCB]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA]  WITH CHECK ADD  CONSTRAINT [FK_PRBV_RS_HSCB] FOREIGN KEY([HSCB_PRBV_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA] CHECK CONSTRAINT [FK_PRBV_RS_HSCB]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA]  WITH CHECK ADD  CONSTRAINT [FK_TREF_RS_HSCB] FOREIGN KEY([HSCB_TREF_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA] CHECK CONSTRAINT [FK_TREF_RS_HSCB]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA]  WITH CHECK ADD  CONSTRAINT [FK_TRPV_RS_HSCB] FOREIGN KEY([HSCB_TRPV_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_COBERTURA] CHECK CONSTRAINT [FK_TRPV_RS_HSCB]
GO
ALTER TABLE [dbo].[PECR_HISTORICO_PESAGEM]  WITH CHECK ADD  CONSTRAINT [FK_PRBV_RS_HSPS] FOREIGN KEY([HSPS_PRBV_ID])
REFERENCES [dbo].[PECR_PRODUTO_BOVINO] ([ID])
GO
ALTER TABLE [dbo].[PECR_HISTORICO_PESAGEM] CHECK CONSTRAINT [FK_PRBV_RS_HSPS]
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_CMAN_RS_IMAN] FOREIGN KEY([IMAN_CMAN_ID])
REFERENCES [dbo].[PECR_CAPA_MOVIMENTO_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL] CHECK CONSTRAINT [FK_CMAN_RS_IMAN]
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_IMAN] FOREIGN KEY([IMAN_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL] CHECK CONSTRAINT [FK_PRDT_RS_IMAN]
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_UNCR_RS_IMAN] FOREIGN KEY([IMAN_UNCR_ID])
REFERENCES [dbo].[PECR_UNIDADE_CRIACAO] ([ID])
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL] CHECK CONSTRAINT [FK_UNCR_RS_IMAN]
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_IMAN] FOREIGN KEY([IMAN_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[PECR_ITEM_MOVIMENTO_ANIMAL] CHECK CONSTRAINT [FK_UNID_RS_IMAN]
GO
ALTER TABLE [dbo].[PECR_LOTE]  WITH CHECK ADD  CONSTRAINT [FK_APTD_RS_LOTE] FOREIGN KEY([LOTE_APTD_ID])
REFERENCES [dbo].[PECR_APTIDAO] ([ID])
GO
ALTER TABLE [dbo].[PECR_LOTE] CHECK CONSTRAINT [FK_APTD_RS_LOTE]
GO
ALTER TABLE [dbo].[PECR_LOTE]  WITH CHECK ADD  CONSTRAINT [FK_RACA_RS_LOTE] FOREIGN KEY([LOTE_RACA_ID])
REFERENCES [dbo].[PECR_RACA] ([ID])
GO
ALTER TABLE [dbo].[PECR_LOTE] CHECK CONSTRAINT [FK_RACA_RS_LOTE]
GO
ALTER TABLE [dbo].[PECR_LOTE_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_LOTE_RS_LTAN] FOREIGN KEY([LTAN_LOTE_ID])
REFERENCES [dbo].[PECR_LOTE] ([ID])
GO
ALTER TABLE [dbo].[PECR_LOTE_ANIMAL] CHECK CONSTRAINT [FK_LOTE_RS_LTAN]
GO
ALTER TABLE [dbo].[PECR_LOTE_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_LTAN] FOREIGN KEY([LTAN_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_LOTE_ANIMAL] CHECK CONSTRAINT [FK_PRDT_RS_LTAN]
GO
ALTER TABLE [dbo].[PECR_LOTE_SALDO]  WITH CHECK ADD  CONSTRAINT [FK_LOTE_RS_LTSD] FOREIGN KEY([LTSD_LOTE_ID])
REFERENCES [dbo].[PECR_LOTE] ([ID])
GO
ALTER TABLE [dbo].[PECR_LOTE_SALDO] CHECK CONSTRAINT [FK_LOTE_RS_LTSD]
GO
ALTER TABLE [dbo].[PECR_LOTE_SALDO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_LTSD] FOREIGN KEY([LTSD_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_LOTE_SALDO] CHECK CONSTRAINT [FK_PRDT_RS_LTSD]
GO
ALTER TABLE [dbo].[PECR_MODULO_CRIACAO]  WITH CHECK ADD  CONSTRAINT [FK_PPRR_RS_MDCR] FOREIGN KEY([MDCR_PPRR_ID])
REFERENCES [dbo].[CDST_PROPRIEDADE_RURAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_MODULO_CRIACAO] CHECK CONSTRAINT [FK_PPRR_RS_MDCR]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_CRDR_RS_PRBV] FOREIGN KEY([PRBV_CRDR_ID])
REFERENCES [dbo].[CDST_PRODUTOR_RURAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_CRDR_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_PDRR_RS_PRBV] FOREIGN KEY([PRBV_PDRR_ID])
REFERENCES [dbo].[CDST_PRODUTOR_RURAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_PDRR_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_PLGM_RS_PRBV] FOREIGN KEY([PRBV_PLGM_ID])
REFERENCES [dbo].[VETE_PELAGEM] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_PLGM_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_PMAE_RS_PRBV] FOREIGN KEY([PRBV_PMAE_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_PMAE_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_PPAI_RS_PRBV] FOREIGN KEY([PRBV_PPAI_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_PPAI_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_PPRR_RS_PRBV] FOREIGN KEY([PRBV_PPRR_ID])
REFERENCES [dbo].[CDST_PROPRIEDADE_RURAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_PPRR_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_PRBV] FOREIGN KEY([PRBV_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_PRDT_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO]  WITH CHECK ADD  CONSTRAINT [FK_RACA_RS_PRBV] FOREIGN KEY([PRBV_RACA_ID])
REFERENCES [dbo].[PECR_RACA] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_BOVINO] CHECK CONSTRAINT [FK_RACA_RS_PRBV]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_PECUARIA]  WITH CHECK ADD  CONSTRAINT [FK_CTGR_RS_PRPE] FOREIGN KEY([PRPE_CTGR_ID])
REFERENCES [dbo].[PECR_CATEGORIA] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_PECUARIA] CHECK CONSTRAINT [FK_CTGR_RS_PRPE]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_PECUARIA]  WITH CHECK ADD  CONSTRAINT [FK_PPRR_RS_PRPE] FOREIGN KEY([PRPE_PPRR_ID])
REFERENCES [dbo].[CDST_PROPRIEDADE_RURAL] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_PECUARIA] CHECK CONSTRAINT [FK_PPRR_RS_PRPE]
GO
ALTER TABLE [dbo].[PECR_PRODUTO_PECUARIA]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_PRPE] FOREIGN KEY([PRPE_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[PECR_PRODUTO_PECUARIA] CHECK CONSTRAINT [FK_PRDT_RS_PRPE]
GO
ALTER TABLE [dbo].[PECR_RACA]  WITH CHECK ADD  CONSTRAINT [FK_ESPC_RS_RACA] FOREIGN KEY([RACA_ESPC_ID])
REFERENCES [dbo].[PECR_ESPECIE] ([ID])
GO
ALTER TABLE [dbo].[PECR_RACA] CHECK CONSTRAINT [FK_ESPC_RS_RACA]
GO
ALTER TABLE [dbo].[PECR_RACA]  WITH CHECK ADD  CONSTRAINT [FK_PLGM_RS_RACA] FOREIGN KEY([RACA_PLGM_ID])
REFERENCES [dbo].[VETE_PELAGEM] ([ID])
GO
ALTER TABLE [dbo].[PECR_RACA] CHECK CONSTRAINT [FK_PLGM_RS_RACA]
GO
ALTER TABLE [dbo].[PECR_RACA]  WITH CHECK ADD  CONSTRAINT [FK_PRTE_RS_RACA] FOREIGN KEY([RACA_PRTE_ID])
REFERENCES [dbo].[VETE_PORTE] ([ID])
GO
ALTER TABLE [dbo].[PECR_RACA] CHECK CONSTRAINT [FK_PRTE_RS_RACA]
GO
ALTER TABLE [dbo].[PECR_UNIDADE_CRIACAO]  WITH CHECK ADD  CONSTRAINT [FK_ESPS_RS_UNCR] FOREIGN KEY([UNCR_ESPS_ID])
REFERENCES [dbo].[PECR_ESPECIE_PASTAGEM] ([ID])
GO
ALTER TABLE [dbo].[PECR_UNIDADE_CRIACAO] CHECK CONSTRAINT [FK_ESPS_RS_UNCR]
GO
ALTER TABLE [dbo].[PECR_UNIDADE_CRIACAO]  WITH CHECK ADD  CONSTRAINT [FK_MDCR_RS_UNCR] FOREIGN KEY([UNCR_MDCR_ID])
REFERENCES [dbo].[PECR_MODULO_CRIACAO] ([ID])
GO
ALTER TABLE [dbo].[PECR_UNIDADE_CRIACAO] CHECK CONSTRAINT [FK_MDCR_RS_UNCR]
GO
ALTER TABLE [dbo].[RCHM_FUNCIONARIO]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_FCNR] FOREIGN KEY([FCNR_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[RCHM_FUNCIONARIO] CHECK CONSTRAINT [FK_PESS_RS_FCNR]
GO
ALTER TABLE [dbo].[RCHM_FUNCIONARIO_HISTORICO]  WITH CHECK ADD  CONSTRAINT [FK_FCNR_RS_FCHS] FOREIGN KEY([FCHS_FCNR_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[RCHM_FUNCIONARIO_HISTORICO] CHECK CONSTRAINT [FK_FCNR_RS_FCHS]
GO
ALTER TABLE [dbo].[SRVC_ORDEM_SERVICO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_ODSV_RS_OSIT] FOREIGN KEY([OSIT_ODSV_ID])
REFERENCES [dbo].[SRVC_ORDEM_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_ORDEM_SERVICO_ITEM] CHECK CONSTRAINT [FK_ODSV_RS_OSIT]
GO
ALTER TABLE [dbo].[SRVC_ORDEM_SERVICO_ITEM]  WITH CHECK ADD  CONSTRAINT [FK_SRVC_RS_OSIT] FOREIGN KEY([OSIT_SRVC_ID])
REFERENCES [dbo].[SRVC_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_ORDEM_SERVICO_ITEM] CHECK CONSTRAINT [FK_SRVC_RS_OSIT]
GO
ALTER TABLE [dbo].[SRVC_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_SRVC] FOREIGN KEY([SRVC_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO] CHECK CONSTRAINT [FK_PRDT_RS_SRVC]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_CARG_RS_SRCM] FOREIGN KEY([SRCM_CARG_ID])
REFERENCES [dbo].[CMNS_CARGO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_COMPOSICAO] CHECK CONSTRAINT [FK_CARG_RS_SRCM]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_SRVC_RS_SRCM] FOREIGN KEY([SRCM_SRVC_ID])
REFERENCES [dbo].[SRVC_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_COMPOSICAO] CHECK CONSTRAINT [FK_SRVC_RS_SRCM]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_SRCM] FOREIGN KEY([SRCM_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_COMPOSICAO] CHECK CONSTRAINT [FK_UNID_RS_SRCM]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP]  WITH CHECK ADD  CONSTRAINT [FK_MQEQ_RS_SRME] FOREIGN KEY([SRME_MQEQ_ID])
REFERENCES [dbo].[ESTQ_MAQUINA_EQUIPAMENTO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP] CHECK CONSTRAINT [FK_MQEQ_RS_SRME]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP]  WITH CHECK ADD  CONSTRAINT [FK_SRVC_RS_SRME] FOREIGN KEY([SRME_SRVC_ID])
REFERENCES [dbo].[SRVC_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP] CHECK CONSTRAINT [FK_SRVC_RS_SRME]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_SRME] FOREIGN KEY([SRME_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_MAQ_EQUIP] CHECK CONSTRAINT [FK_UNID_RS_SRME]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_PECAS]  WITH CHECK ADD  CONSTRAINT [FK_MRCD_RS_SRPC] FOREIGN KEY([SRPC_MRCD_ID])
REFERENCES [dbo].[ESTQ_MERCADORIA] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_PECAS] CHECK CONSTRAINT [FK_MRCD_RS_SRPC]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_PECAS]  WITH CHECK ADD  CONSTRAINT [FK_SRVC_RS_SRPC] FOREIGN KEY([SRPC_SRVC_ID])
REFERENCES [dbo].[SRVC_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_PECAS] CHECK CONSTRAINT [FK_SRVC_RS_SRPC]
GO
ALTER TABLE [dbo].[SRVC_SERVICO_PECAS]  WITH CHECK ADD  CONSTRAINT [FK_UNID_RS_SRPC] FOREIGN KEY([SRPC_UNID_ID])
REFERENCES [dbo].[CDST_UNIDADE_MEDIDA] ([ID])
GO
ALTER TABLE [dbo].[SRVC_SERVICO_PECAS] CHECK CONSTRAINT [FK_UNID_RS_SRPC]
GO
ALTER TABLE [dbo].[SSTM_OBJETO_VERSAO]  WITH CHECK ADD  CONSTRAINT [FK_OBJT_RS_OBBN] FOREIGN KEY([OBBN_OBJT_ID])
REFERENCES [dbo].[SSTM_OBJETO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_OBJETO_VERSAO] CHECK CONSTRAINT [FK_OBJT_RS_OBBN]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_CORPORACAO]  WITH CHECK ADD  CONSTRAINT [FK_CPRC_RS_PRCP] FOREIGN KEY([PRCP_CPRC_ID])
REFERENCES [dbo].[CORE_CORPORACAO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_CORPORACAO] CHECK CONSTRAINT [FK_CPRC_RS_PRCP]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_CORPORACAO]  WITH CHECK ADD  CONSTRAINT [FK_PRMT_RS_PRCP] FOREIGN KEY([PRCP_PRMT_ID])
REFERENCES [dbo].[SSTM_PARAMETRO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_CORPORACAO] CHECK CONSTRAINT [FK_PRMT_RS_PRCP]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_EMPRESA]  WITH CHECK ADD  CONSTRAINT [FK_EMPR_RS_PREM] FOREIGN KEY([PREM_EMPR_ID])
REFERENCES [dbo].[CORE_EMPRESA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_EMPRESA] CHECK CONSTRAINT [FK_EMPR_RS_PREM]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_EMPRESA]  WITH CHECK ADD  CONSTRAINT [FK_PRMT_RS_PREM] FOREIGN KEY([PREM_PRMT_ID])
REFERENCES [dbo].[SSTM_PARAMETRO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_EMPRESA] CHECK CONSTRAINT [FK_PRMT_RS_PREM]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_SISTEMA]  WITH CHECK ADD  CONSTRAINT [FK_PRMT_RS_PRSS] FOREIGN KEY([PRSS_PRMT_ID])
REFERENCES [dbo].[SSTM_PARAMETRO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_SISTEMA] CHECK CONSTRAINT [FK_PRMT_RS_PRSS]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_SISTEMA]  WITH CHECK ADD  CONSTRAINT [FK_SSTM_RS_PRSS] FOREIGN KEY([PRSS_SSTM_ID])
REFERENCES [dbo].[SSTM_SISTEMA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_SISTEMA] CHECK CONSTRAINT [FK_SSTM_RS_PRSS]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_UNEM]  WITH CHECK ADD  CONSTRAINT [FK_PRMT_RS_PRUE] FOREIGN KEY([PRUE_PRMT_ID])
REFERENCES [dbo].[SSTM_PARAMETRO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_UNEM] CHECK CONSTRAINT [FK_PRMT_RS_PRUE]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_UNEM]  WITH CHECK ADD  CONSTRAINT [FK_UNEM_RS_PRUE] FOREIGN KEY([PRUE_UNEM_ID])
REFERENCES [dbo].[CORE_UNIDADE_EMPRESARIAL] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_UNEM] CHECK CONSTRAINT [FK_UNEM_RS_PRUE]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_PRMT_RS_PRUS] FOREIGN KEY([PRUS_PRMT_ID])
REFERENCES [dbo].[SSTM_PARAMETRO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_USUARIO] CHECK CONSTRAINT [FK_PRMT_RS_PRUS]
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_USUARIO]  WITH CHECK ADD  CONSTRAINT [FK_USRS_RS_PRUS] FOREIGN KEY([PRUS_USRS_ID])
REFERENCES [dbo].[CMNS_USUARIO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_PARAMETRO_USUARIO] CHECK CONSTRAINT [FK_USRS_RS_PRUS]
GO
ALTER TABLE [dbo].[SSTM_SCRIPTS]  WITH CHECK ADD  CONSTRAINT [FK_SSVS_RS_SCPT] FOREIGN KEY([SCPT_SSVS_ID])
REFERENCES [dbo].[SSTM_SISTEMA_VERSAO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SCRIPTS] CHECK CONSTRAINT [FK_SSVS_RS_SCPT]
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_CORPORACAO]  WITH CHECK ADD  CONSTRAINT [FK_CPRC_RS_SSCP] FOREIGN KEY([SSCP_CPRC_ID])
REFERENCES [dbo].[CORE_CORPORACAO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_CORPORACAO] CHECK CONSTRAINT [FK_CPRC_RS_SSCP]
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_CORPORACAO]  WITH CHECK ADD  CONSTRAINT [FK_SSTM_RS_SSCP] FOREIGN KEY([SSCP_SSTM_ID])
REFERENCES [dbo].[SSTM_SISTEMA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_CORPORACAO] CHECK CONSTRAINT [FK_SSTM_RS_SSCP]
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_TABELA]  WITH CHECK ADD  CONSTRAINT [FK_SSTM_RS_SSTB] FOREIGN KEY([SSTB_SSTM_ID])
REFERENCES [dbo].[SSTM_SISTEMA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_TABELA] CHECK CONSTRAINT [FK_SSTM_RS_SSTB]
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_TABELA]  WITH CHECK ADD  CONSTRAINT [FK_TBLS_RS_SSTB] FOREIGN KEY([SSTB_TBLS_ID])
REFERENCES [dbo].[SSTM_TABELA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_TABELA] CHECK CONSTRAINT [FK_TBLS_RS_SSTB]
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_VERSAO]  WITH CHECK ADD  CONSTRAINT [FK_SSTM_RS_SSVS] FOREIGN KEY([SSVS_SSTM_ID])
REFERENCES [dbo].[SSTM_SISTEMA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMA_VERSAO] CHECK CONSTRAINT [FK_SSTM_RS_SSVS]
GO
ALTER TABLE [dbo].[SSTM_SISTEMAVERSAO_OBJETOVERSAO]  WITH CHECK ADD  CONSTRAINT [FK_OBVS_RS_SVOV] FOREIGN KEY([SVOV_OBVS_ID])
REFERENCES [dbo].[SSTM_OBJETO_VERSAO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMAVERSAO_OBJETOVERSAO] CHECK CONSTRAINT [FK_OBVS_RS_SVOV]
GO
ALTER TABLE [dbo].[SSTM_SISTEMAVERSAO_OBJETOVERSAO]  WITH CHECK ADD  CONSTRAINT [FK_SSVS_RS_SVOV] FOREIGN KEY([SVOV_SSVS_ID])
REFERENCES [dbo].[SSTM_SISTEMA_VERSAO] ([ID])
GO
ALTER TABLE [dbo].[SSTM_SISTEMAVERSAO_OBJETOVERSAO] CHECK CONSTRAINT [FK_SSVS_RS_SVOV]
GO
ALTER TABLE [dbo].[SSTM_TABELA_SCRIPT]  WITH CHECK ADD  CONSTRAINT [FK_DTBS_RS_TBSC] FOREIGN KEY([TBSC_DTBS_ID])
REFERENCES [dbo].[SSTM_DATABASE] ([ID])
GO
ALTER TABLE [dbo].[SSTM_TABELA_SCRIPT] CHECK CONSTRAINT [FK_DTBS_RS_TBSC]
GO
ALTER TABLE [dbo].[SSTM_TABELA_SCRIPT]  WITH CHECK ADD  CONSTRAINT [FK_TBLS_RS_TBSC] FOREIGN KEY([TBSC_TBLS_ID])
REFERENCES [dbo].[SSTM_TABELA] ([ID])
GO
ALTER TABLE [dbo].[SSTM_TABELA_SCRIPT] CHECK CONSTRAINT [FK_TBLS_RS_TBSC]
GO
ALTER TABLE [dbo].[VETE_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_PESS_RS_ANML] FOREIGN KEY([ANML_PESS_ID])
REFERENCES [dbo].[CMNS_PESSOA] ([ID])
GO
ALTER TABLE [dbo].[VETE_ANIMAL] CHECK CONSTRAINT [FK_PESS_RS_ANML]
GO
ALTER TABLE [dbo].[VETE_ANIMAL]  WITH CHECK ADD  CONSTRAINT [FK_RACA_RS_ANML] FOREIGN KEY([ANML_RACA_ID])
REFERENCES [dbo].[PECR_RACA] ([ID])
GO
ALTER TABLE [dbo].[VETE_ANIMAL] CHECK CONSTRAINT [FK_RACA_RS_ANML]
GO
ALTER TABLE [dbo].[VETE_ANIMAL_FOTO]  WITH CHECK ADD  CONSTRAINT [FK_ANML_RS_ANFT] FOREIGN KEY([ANFT_ANML_ID])
REFERENCES [dbo].[VETE_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[VETE_ANIMAL_FOTO] CHECK CONSTRAINT [FK_ANML_RS_ANFT]
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS]  WITH CHECK ADD  CONSTRAINT [FK_ANML_RS_CGIA] FOREIGN KEY([CGIA_ANML_ID])
REFERENCES [dbo].[VETE_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS] CHECK CONSTRAINT [FK_ANML_RS_CGIA]
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS]  WITH CHECK ADD  CONSTRAINT [FK_ANST_RS_CGIA] FOREIGN KEY([CGIA_ANST_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS] CHECK CONSTRAINT [FK_ANST_RS_CGIA]
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS]  WITH CHECK ADD  CONSTRAINT [FK_OSVT_RS_CGIA] FOREIGN KEY([CGIA_OSVT_ID])
REFERENCES [dbo].[VETE_ORDEM_DE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS] CHECK CONSTRAINT [FK_OSVT_RS_CGIA]
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS]  WITH CHECK ADD  CONSTRAINT [FK_SERV_RS_CGIA] FOREIGN KEY([CGIA_SERV_ID])
REFERENCES [dbo].[VETE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS] CHECK CONSTRAINT [FK_SERV_RS_CGIA]
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS]  WITH CHECK ADD  CONSTRAINT [FK_VETE_RS_CGIA] FOREIGN KEY([CGIA_VETE_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CIRURGIAS] CHECK CONSTRAINT [FK_VETE_RS_CGIA]
GO
ALTER TABLE [dbo].[VETE_CONSULTA]  WITH CHECK ADD  CONSTRAINT [FK_ANML_RS_CONS] FOREIGN KEY([CONS_ANML_ID])
REFERENCES [dbo].[VETE_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[VETE_CONSULTA] CHECK CONSTRAINT [FK_ANML_RS_CONS]
GO
ALTER TABLE [dbo].[VETE_CONSULTA]  WITH CHECK ADD  CONSTRAINT [FK_FCNR_RS_CONS] FOREIGN KEY([CONS_FCNR_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CONSULTA] CHECK CONSTRAINT [FK_FCNR_RS_CONS]
GO
ALTER TABLE [dbo].[VETE_CONSULTA]  WITH CHECK ADD  CONSTRAINT [FK_OSVT_RS_CONS] FOREIGN KEY([CONS_OSVT_ID])
REFERENCES [dbo].[VETE_ORDEM_DE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CONSULTA] CHECK CONSTRAINT [FK_OSVT_RS_CONS]
GO
ALTER TABLE [dbo].[VETE_CONSULTA]  WITH CHECK ADD  CONSTRAINT [FK_SERV_RS_CONS] FOREIGN KEY([CONS_SERV_ID])
REFERENCES [dbo].[VETE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_CONSULTA] CHECK CONSTRAINT [FK_SERV_RS_CONS]
GO
ALTER TABLE [dbo].[VETE_INTERNACAO]  WITH CHECK ADD  CONSTRAINT [FK_ANML_RS_INTR] FOREIGN KEY([INTR_ANML_ID])
REFERENCES [dbo].[VETE_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[VETE_INTERNACAO] CHECK CONSTRAINT [FK_ANML_RS_INTR]
GO
ALTER TABLE [dbo].[VETE_INTERNACAO]  WITH CHECK ADD  CONSTRAINT [FK_OSVT_RS_INTR] FOREIGN KEY([INTR_OSVT_ID])
REFERENCES [dbo].[VETE_ORDEM_DE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_INTERNACAO] CHECK CONSTRAINT [FK_OSVT_RS_INTR]
GO
ALTER TABLE [dbo].[VETE_INTERNACAO]  WITH CHECK ADD  CONSTRAINT [FK_SERV_RS_INTR] FOREIGN KEY([INTR_SERV_ID])
REFERENCES [dbo].[VETE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_INTERNACAO] CHECK CONSTRAINT [FK_SERV_RS_INTR]
GO
ALTER TABLE [dbo].[VETE_INTERNACAO]  WITH CHECK ADD  CONSTRAINT [FK_VETE_RS_INTR] FOREIGN KEY([INTR_VETE_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[VETE_INTERNACAO] CHECK CONSTRAINT [FK_VETE_RS_INTR]
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_ANML_RS_OSVT] FOREIGN KEY([OSVT_ANML_ID])
REFERENCES [dbo].[VETE_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO] CHECK CONSTRAINT [FK_ANML_RS_OSVT]
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_CPMV_RS_OSVT] FOREIGN KEY([OSVT_CPMV_ID])
REFERENCES [dbo].[ESTQ_CAPA_MOVIMENTO] ([ID])
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO] CHECK CONSTRAINT [FK_CPMV_RS_OSVT]
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_FRVN_RS_OSVT] FOREIGN KEY([OSVT_FRVN_ID])
REFERENCES [dbo].[FNCR_FORMA_VENCIMENTO] ([ID])
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO] CHECK CONSTRAINT [FK_FRVN_RS_OSVT]
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_TAXI_RS_OSVT] FOREIGN KEY([OSVT_TAXI_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO] CHECK CONSTRAINT [FK_TAXI_RS_OSVT]
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_TBPC_RS_OSVT] FOREIGN KEY([OSVT_TBPC_ID])
REFERENCES [dbo].[FNCR_TABELA_PRECO] ([ID])
GO
ALTER TABLE [dbo].[VETE_ORDEM_DE_SERVICO] CHECK CONSTRAINT [FK_TBPC_RS_OSVT]
GO
ALTER TABLE [dbo].[VETE_RETORNO]  WITH CHECK ADD  CONSTRAINT [FK_ANML_RS_RTRN] FOREIGN KEY([RTRN_ANML_ID])
REFERENCES [dbo].[VETE_ANIMAL] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO] CHECK CONSTRAINT [FK_ANML_RS_RTRN]
GO
ALTER TABLE [dbo].[VETE_RETORNO]  WITH CHECK ADD  CONSTRAINT [FK_OSVT_RS_RTRN] FOREIGN KEY([RTRN_OSVT_ID])
REFERENCES [dbo].[VETE_ORDEM_DE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO] CHECK CONSTRAINT [FK_OSVT_RS_RTRN]
GO
ALTER TABLE [dbo].[VETE_RETORNO]  WITH CHECK ADD  CONSTRAINT [FK_SERV_RS_RTRN] FOREIGN KEY([RTRN_SERV_ID])
REFERENCES [dbo].[VETE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO] CHECK CONSTRAINT [FK_SERV_RS_RTRN]
GO
ALTER TABLE [dbo].[VETE_RETORNO]  WITH CHECK ADD  CONSTRAINT [FK_VTAG_RS_RTRN] FOREIGN KEY([RTRN_VTAG_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO] CHECK CONSTRAINT [FK_VTAG_RS_RTRN]
GO
ALTER TABLE [dbo].[VETE_RETORNO]  WITH CHECK ADD  CONSTRAINT [FK_VTAT_RS_RTRN] FOREIGN KEY([RTRN_VTAT_ID])
REFERENCES [dbo].[RCHM_FUNCIONARIO] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO] CHECK CONSTRAINT [FK_VTAT_RS_RTRN]
GO
ALTER TABLE [dbo].[VETE_RETORNO_PROCEDIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_RTRN_RS_RTSV] FOREIGN KEY([RTSV_RTRN_ID])
REFERENCES [dbo].[VETE_RETORNO] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO_PROCEDIMENTO] CHECK CONSTRAINT [FK_RTRN_RS_RTSV]
GO
ALTER TABLE [dbo].[VETE_RETORNO_PROCEDIMENTO]  WITH CHECK ADD  CONSTRAINT [FK_SERV_RS_RTSV] FOREIGN KEY([RTSV_SERV_ID])
REFERENCES [dbo].[VETE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_RETORNO_PROCEDIMENTO] CHECK CONSTRAINT [FK_SERV_RS_RTSV]
GO
ALTER TABLE [dbo].[VETE_SERVICO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_SERV] FOREIGN KEY([SERV_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[VETE_SERVICO] CHECK CONSTRAINT [FK_PRDT_RS_SERV]
GO
ALTER TABLE [dbo].[VETE_SERVICO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_PRDT_RS_SVCP] FOREIGN KEY([SVCP_PRDT_ID])
REFERENCES [dbo].[CDST_PRODUTO] ([ID])
GO
ALTER TABLE [dbo].[VETE_SERVICO_COMPOSICAO] CHECK CONSTRAINT [FK_PRDT_RS_SVCP]
GO
ALTER TABLE [dbo].[VETE_SERVICO_COMPOSICAO]  WITH CHECK ADD  CONSTRAINT [FK_SERV_RS_SVCP] FOREIGN KEY([SVCP_SERV_ID])
REFERENCES [dbo].[VETE_SERVICO] ([ID])
GO
ALTER TABLE [dbo].[VETE_SERVICO_COMPOSICAO] CHECK CONSTRAINT [FK_SERV_RS_SVCP]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'PpRr' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'CDST_PROPRIEDADE_RURAL'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Chave Tipo EMPR' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'CMNS_PESSOA'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Fotografia - Logomarcas  etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'CMNS_PESSOA_IMAGEM'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Lote de validade' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ESTQ_LOTE_VALIDADE'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'NrDc' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ESTQ_NUMERO_DOCUMENTO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Custo de aquisição 
   (-) descontos obtidos
   (-) impostos recuperáveis
   (+) impostos não recuperáveis
   (+) fretes
   (+) seguros
   (+) outras despesas incidentes na aquisição
   (=) Custo da Mercadoria Vendida' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FNCR_TABELA_PRECO_ITEM', @level2type=N'COLUMN',@level2name=N'TPIT_CUSTO_VENDA'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'TtCC' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FNCR_TITULO_CENTRO_CUSTO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'FCST' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FSCL_CST'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'RGTB' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'FSCL_REGIME_TRIBUTARIO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'AFXS
   Cadastro de Prefixos e Sufixos do Criador/Produtor' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_AFIXOS'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'APTD' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_APTIDAO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'EvSn' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_EVENTO_SANITARIO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Ganho de Peso médio por categoria' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_GANHO_PESO_MEDIO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'HsCt' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_HISTORICO_CATEGORIA'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'HsCb' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_HISTORICO_COBERTURA'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'HsPs' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_HISTORICO_PESAGEM'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'PRBV' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PECR_PRODUTO_BOVINO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Máquina ou equipamento utilizado no Serviço' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'SRVC_SERVICO_MAQ_EQUIP'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'OBJT' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'SSTM_OBJETO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'OBVS' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'SSTM_OBJETO_VERSAO'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'SVOV' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'SSTM_SISTEMAVERSAO_OBJETOVERSAO'
GO
