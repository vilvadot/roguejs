import { INPUTS } from "../input.js";

export class InputMovement {
  static run(entities) {
    for (const { inputControlled, position } of entities) {
      if (!inputControlled || !position) return;

      const PLAYER_STEP = 1;

      const action = inputControlled.lastAction;

      const candidate = { x: position.x, y: position.y };
      if (action === INPUTS.ArrowRight) candidate.x += PLAYER_STEP;
      if (action === INPUTS.ArrowLeft) candidate.x -= PLAYER_STEP;
      if (action === INPUTS.ArrowUp) candidate.y -= PLAYER_STEP;
      if (action === INPUTS.ArrowDown) candidate.y += PLAYER_STEP;

      position.x = candidate.x;
      position.y = candidate.y;
    }
  }
}