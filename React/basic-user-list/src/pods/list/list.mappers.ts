import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMembersToVM = (data: am.memberApi[]): vm.memberEntity[] => data.map(mapMemberToVM);

const mapMemberToVM = (data: am.memberApi): vm.memberEntity => ({
    id: data.id,
    login: data.login,
});