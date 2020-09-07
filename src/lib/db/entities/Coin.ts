import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { BotUser } from './BotUser';

@Entity()
export class Coin {
	@PrimaryColumn()
	public id!: string;

	@Column()
	public coinName!: string;

	@Column()
	public reserve!: number;

	@Column()
	public rate!: number;

	@Column({ default: true })
	public isActive!: boolean;

	@ManyToOne(
		() => BotUser,
		user => user.coins
	)
	public managedBy!: BotUser;
}
