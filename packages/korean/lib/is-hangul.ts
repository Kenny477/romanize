import { HANGUL_BLOCKS } from "../constants/unicode";
import { IntervalTree, IntervalTreeNode } from "./interval-tree";

const lyrics = `훌쩍 커버렸어
함께한 기억처럼
널 보는 내 마음은
어느새 여름 지나 가을`;

class Hangul extends IntervalTree {
  constructor() {
    super();
    Object.entries(HANGUL_BLOCKS).forEach(([block, { start, end }]) => {
      super.insert(start, end, block);
    });
  }

  isHangulChar(char: string): boolean {
    const code = char.charCodeAt(0);
    return super.exists(code);
  }

  isHangul(str: string): boolean {
    for (const char of str) {
      if (!this.isHangulChar(char)) {
        return false;
      }
    }
    return true;
  }
}

const hangul = new Hangul();
console.log(hangul.isHangulChar(lyrics[0]));
console.log(hangul.isHangul(lyrics));