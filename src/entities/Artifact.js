import { Pickable, Position, Spawn, Sprite } from "../components/index.js";
import { TILES } from "../tiles.js";
import { COLORS } from "../colors.js";
import {uid} from '../util.js'

export class Artifact{
  constructor() {
    this.id = `anomaly-${uid()}`;
    this.name = "Artifact";
    this.sprite = new Sprite(17, 4, "animation--float");
    this.position = new Position();
    this.spawn = Spawn.random();
    this.pickable = new Pickable();
    this.isStatic = true; // TODO: Change for collision (go trough)
  }
}
