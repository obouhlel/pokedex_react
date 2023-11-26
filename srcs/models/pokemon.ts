export default class Pokemon {
	id: number;
	name: string;
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
	types: Array<string>;
	moves: Array<string>;
	picture: string;
	created: Date;

	constructor(
		id: number = 0,
		name: string = 'Default',
		hp: number = 0,
		attack: number = 0,
		defense: number = 0,
		specialAttack: number = 0,
		specialDefense: number = 0,
		speed: number = 0,
		types: Array<string> = ['Normal'],
		moves: Array<string> = ['Default'],
		picture: string = 'https://...',
		created: Date = new Date()
	) 
	{
		this.id = id;
		this.name = name;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.specialAttack = specialAttack;
		this.specialDefense = specialDefense;
		this.speed = speed;
		this.types = types;
		this.moves = moves;
		this.picture = picture;
		this.created = created;
	}
}