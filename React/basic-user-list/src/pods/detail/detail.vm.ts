export interface MemberDetailEntity {
    id: string;
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
}

export const createDefaultMemberDetail = (): MemberDetailEntity => ({
    id: "",
    login: "",
    avatar_url: "",
    name: "",
    company: "",
    bio: "",
});

export const memberDetails = ['avatar_url', 'id', 'login', 'company', 'bio'];

export interface CharacterDetailEntity {
    id: string;
    name: string;
    image: string;
    species: string;
    status: string;
}

export const createDefaultCharacterDetail = (): CharacterDetailEntity => ({
    id: "",
    name: "",
    image: "",
    species: "",
    status: "",
});

export const characterDetails = ['image', 'id', 'species', 'status'];