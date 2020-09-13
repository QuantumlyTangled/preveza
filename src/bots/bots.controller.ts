import { Controller, Get, Param } from '@nestjs/common';
import { BotsService } from './bots.service';

@Controller('bots')
export class BotsController {
	public constructor(private readonly botsService: BotsService) {}

	@Get(':id')
	public getBot(@Param('id') id: string) {
		return this.botsService.getBot(id);
	}
}
