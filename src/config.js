export const OPTIONS = {
  bg: "white",
  fg: "dimGrey",
  fontFamily: "Fira Mono",
  width: 30,
  height: 30,
  fontSize: 20,
  forceSquareRatio: true,
};

const emojiSet = {
  wall: "⬛️",
  empty : ".",
  enemy: "💀",
  player: "🐸"
}

const asciiSet = {
  wall: "+",
  empty : ".",
  player: "@",
  enemy: "E"
}

export const TILES = asciiSet

export const COLORS = {
  ".": "lightgrey"
};