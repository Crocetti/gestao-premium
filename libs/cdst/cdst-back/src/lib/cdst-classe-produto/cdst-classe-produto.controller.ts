import { Controller } from '@nestjs/common';
import { AbstractBackController } from '@gpremium/shared-back';
import { ICdstClasseProduto } from ''

@Controller('cdst/cdst-classe-produto')
export class CdstClasseProdutoController  extends AbstractBackController<> {}
