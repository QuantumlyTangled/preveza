import { Injectable } from '@nestjs/common';
import { deepClone } from '@sapphire/utilities';

@Injectable()
export class BotsService {
	private bots = [{ id: '0001', name: 'whatever' }];
	public getBot(id: string) {
		return deepClone(this.bots.filter((e) => e.id === id)[0]);
	}
}
