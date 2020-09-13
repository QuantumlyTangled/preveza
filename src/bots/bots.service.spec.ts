import { Test, TestingModule } from '@nestjs/testing';
import { BotsService } from './bots.service';

describe('BotsService', () => {
	let service: BotsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BotsService]
		}).compile();

		service = module.get<BotsService>(BotsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should return the sample bot', () => {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(service.getBot).toBeDefined();
		expect(service.getBot('0001')).toStrictEqual({ id: '0001', name: 'whatever' });
	});
});
