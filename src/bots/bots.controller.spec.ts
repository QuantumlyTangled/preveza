import { Test, TestingModule } from '@nestjs/testing';
import { BotsController } from './bots.controller';
import { BotsService } from './bots.service';

describe('BotsController', () => {
	let controller: BotsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [BotsController],
			providers: [BotsService]
		}).compile();

		controller = module.get<BotsController>(BotsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('should return the sample bot', () => {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(controller.getBot).toBeDefined();
		expect(controller.getBot('0001')).toStrictEqual({ id: '0001', name: 'whatever' });
	});
});
