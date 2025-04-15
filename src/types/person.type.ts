export interface Person {
    "first name": string;
    "last name": string;
    "telephone code": string;
    "telephone number": string;
    "address": string;
    "country": string;
}

export interface PersonFilter {
    country: string,
    name: string
}