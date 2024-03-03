export interface memberEntity {
    login: string;
    id: number;
}

export interface characterEntity {
    name: string;
    id: number;
}

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
    linkId?: string;
    align?: 'right';
    format?: (value: number) => string;
}