import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { BotUser } from './BotUser';
import { Transaction } from './Transaction';

@Entity()
export class HumanUser {
	@PrimaryColumn()
	public id!: string;

	@Column()
	public remaining = 25000;

	@Column()
	public email: string | undefined;

	@ManyToMany(() => BotUser)
	public botsManaged!: BotUser[];

	@OneToMany(() => Transaction, (tx) => tx.user)
	public transactions!: Transaction[];
}
