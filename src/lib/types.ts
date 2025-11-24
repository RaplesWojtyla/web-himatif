export interface Member {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
}

export interface Division {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    imageUrl: string;
}

export interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
}

export interface EventItem {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}
