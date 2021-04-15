export interface Person {
    id: string;
    name: string;
    birthYear?: string;
    eyeColor?: string;
    gender?: string;
    hairColor?: string;
    height?: string;
    mass?: number;
    skinColor?: string;
    species?: {
        name: string;
    };
    homeworld?: {
        name: string;
    };
    starshipConnection: {
        starships: { name: string}[];
      }
}