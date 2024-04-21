export interface orderApiInfo {
    number: number;
    provider: string;
}

export interface orderApi {
    id: number;
    validated: boolean;
    description: string;
    amount: number;
}