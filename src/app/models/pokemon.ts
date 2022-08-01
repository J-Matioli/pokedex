export interface Pokemon {
    id: string;
    images: {
        [key: string]: string
    };
    name: string;
    types: string[];
}