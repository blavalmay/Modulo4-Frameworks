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