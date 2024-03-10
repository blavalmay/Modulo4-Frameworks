import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapCharactersToVM = (data: am.characterResultsApi[]): vm.characterEntity[] => data.map(mapCharacterToVM);

const mapCharacterToVM = (data: am.characterResultsApi): vm.characterEntity => ({
    id: data.id,
    name: data.name,
    image: data.image,
});