export interface Pokemon {
    id: string;
    images: {
        [key: string]: string
    };
    name: string;
    types: string[];
    attacks?: Attack[];
    weaknesses?: Weaknesse[];
}

export interface Attack {
    convertedEnergyCost: number;
    name: string;
    cost: string[];
    damage: string;
    text: string;
}

export interface Weaknesse {
    type: string;
    value: string;
}