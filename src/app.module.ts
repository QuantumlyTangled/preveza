import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotsModule } from './bots/bots.module';
import { HumansModule } from './humans/humans.module';

@Module({
	imports: [BotsModule, HumansModule],
	controllers: [AppController],
	providers: []
})
export class AppModule {}
