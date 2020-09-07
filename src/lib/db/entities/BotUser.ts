import { Entity, Column, PrimaryColumn, OneToMany, ManyToMany } from 'typeorm';
import { Coin } from './Coin';
import { HumanUser } from './HumanUser';

@Entity()
export class BotUser {
	@PrimaryColumn()
	public id!: string;

	@Column()
	public botName!: string;

	@Column()
	public botId!: string;

	@Column({ default: true })
	public isActive!: boolean;

	@OneToMany(
		() => Coin,
		coin => coin.managedBy
	)
	public coins!: Coin[];

	@ManyToMany(
		() => HumanUser,
		human => human.botsManaged
	)
	public managers!: HumanUser[];
}
