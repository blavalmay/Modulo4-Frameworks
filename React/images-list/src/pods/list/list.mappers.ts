import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapCharactersToVM = (data: am.characterResultsApi[]): vm.PictureInfo[] => data.map(mapCharacterToVM);

const mapCharacterToVM = (data: am.characterResultsApi): vm.PictureInfo => ({
    id: data.id,
    name: data.name,
    image: data.image,
    selected: false,
});