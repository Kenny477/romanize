import { REVISED_ROMANIZATION_OF_KOREAN } from "./constants/systems/revised";
import { HangulSyllable } from "./lib/decompose-hangul";
import HangulTree from "./lib/is-hangul";
import { HangulJamo } from "./types/hangul";

const tree = new HangulTree();

export function separate(hangul: string): string[] {
  if (!tree.isHangul(hangul)) {
    throw new Error("Not a Hangul string");
  }
  const chars = hangul
    .split('')
    .reduce((list, char) => {
      const result = tree.search(char.charCodeAt(0));
      const block = result.length === 1 ? result[0].value : null;
      switch (block) {
        case "HANGUL_SYLLABLES":
          const syllable = new HangulSyllable(char);
          const { initial, medial, final } = syllable;
          if (final != "") {
            return list.concat([initial, medial]);
          }
          return list.concat([initial, medial, final]);
        case null:
        default:
          return list.concat([char]);
      }
    }, [] as (keyof HangulJamo | string)[])
  return chars;
}

function romanize(chars: string[], system: HangulJamo) {
  const result = chars.map((char, i, list) => {
    // romanizable character
    if (char in system) {
      const c = char as keyof HangulJamo;
      // if next character is romanizable, check if special provision exists
      if (i + 1 < list.length && list[i + 1] in system && list[i + 1] in system[char as keyof HangulJamo].next) {
        const next = list[i + 1] as keyof HangulJamo;
        const c = char as keyof HangulJamo;
        const special = system[char as keyof HangulJamo][next];
        if (special) {
          return special;
        }
      }
    }

    // return char.base;
  });
  return result.join('');
}

const res = separate("안녕하세요");
console.log(res);
const romanized = romanize(res, REVISED_ROMANIZATION_OF_KOREAN);
console.log(romanized)