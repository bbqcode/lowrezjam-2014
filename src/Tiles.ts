module Lowrezjam {

    export enum Tiles {
        GROUND = 0,
        DOOR = 1
    }

    export function GetTileMap(scale: number): { [id: number]: Array<number> } {
        var tileMap: { [id: number] : Array<number> } = {};
        tileMap[Tiles.GROUND] = [scale * 0, 0];
        tileMap[Tiles.DOOR] = [scale * 1, 0];
        return tileMap;
    }
}