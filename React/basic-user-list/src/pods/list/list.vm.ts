export interface memberEntity {
    login: string;
    id: number;
}

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}