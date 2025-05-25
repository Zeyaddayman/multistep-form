export interface ILink {
    name: string;
    pathname: string;
    order: number;
}

export interface FormErrors {
    [key: string]: string;
}