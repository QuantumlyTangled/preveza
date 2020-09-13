import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotsModule } from './bots/bots.module';

@Module({
	imports: [BotsModule],
	controllers: [AppController],
	providers: []
})
export class AppModule {}
