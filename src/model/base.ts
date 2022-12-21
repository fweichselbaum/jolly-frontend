import type { Card, CardInventory } from "./cards";

export class User {
    id?: string;
    name: string;
    avatarId: number
};

export class Game {
     id: string;
     users: User[]
     playerCards: Map<String, CardInventory>;
     drawPile: Card[];
     discardPile: Card[];
}