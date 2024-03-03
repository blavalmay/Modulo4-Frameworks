import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMembersToVM = (data: am.memberApi[]): vm.memberEntity[] => data.map(mapMemberToVM);

const mapMemberToVM = (data: am.memberApi): vm.memberEntity => ({
    id: data.id,
    login: data.login,
});

export const mapCharactersToVM = (data: am.characterResultsApi[]): vm.characterEntity[] => data.map(mapCharacterToVM);

const mapCharacterToVM = (data: am.characterResultsApi): vm.characterEntity => ({
    id: data.id,
    name: data.name,
});