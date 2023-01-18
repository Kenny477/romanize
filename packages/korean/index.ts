import { HangulSyllable } from "./lib/decompose-hangul";
import HangulTree from "./lib/is-hangul";

export function romanize(hangul: string): string {
  const tree = new HangulTree();
  if (!tree.isHangul(hangul)) {
    throw new Error("Not a Hangul string");
  }
  return hangul
    .split('')
    .map((char) => {
      try {
        const syllable = new HangulSyllable(char);
        return syllable.romanize();
      } catch (e) {
        return char;
      }
    })
    .join('');
}