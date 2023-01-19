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
      try {
        const syllable = new HangulSyllable(char);
        const { initial, medial, final } = syllable;
        if(final != "") {
          return list.concat([initial, medial]);
        }
        return list.concat([initial, medial, final]);
      } catch (e) {
        return list.concat([char]);
      }
    }, [] as (keyof HangulJamo | string)[])
  return chars;
}

function romanize(chars: string[], system: HangulJamo) {
  const result = chars.map(char => {
    if (typeof char === 'string') {
      return char;
    }
    // return char.base;
  });
  return result.join('');
}

const res = separate("안녕하세요");
console.log(res);
const romanized = romanize(res, REVISED_ROMANIZATION_OF_KOREAN);
