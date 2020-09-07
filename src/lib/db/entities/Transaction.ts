import { Column, Entity, ManyToOne } from 'typeorm';
import { Coin } from './Coin';
import { HumanUser } from './HumanUser';

@Entity()
export class Transaction {
	@Column()
	public id!: string;

	@ManyToOne(
		() => HumanUser,
		human => human.transactions
	)
	public user!: HumanUser[];

	@Column()
	public fromAmount!: number;

	@Column()
	public toAmount!: number;

	@ManyToOne(() => Coin)
	public fromCoin!: Coin;

	@ManyToOne(() => Coin)
	public toCoin!: Coin;
}
