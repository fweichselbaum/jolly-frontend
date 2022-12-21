
export enum CardSymbol {
	Spades,
	Clubs,
	Hearts,
	Diamonds,
}

export enum CardValue {
	Two,
	Three,
	Four,
	Five,
	Six,
	Seven,
	Eight,
	Nine,
	Ten,
	Jack,
	Queen,
	King,
	Ace,
	Joker,
}

export class Card {
	value: CardValue;
	symbol: CardSymbol;
	points: number;
}

export class CardInventory {
	cardsInHand: Card[];
	combinationsOnTable: CardCombination[];
}

export class CardCombination {
	cards: Map<Card, string>;
}