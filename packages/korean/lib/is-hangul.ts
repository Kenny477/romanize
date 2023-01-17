import { HANGUL_BLOCKS } from "../constants/unicode";
import { IntervalTree } from "./interval-tree";

export class HangulTree extends IntervalTree {
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

export default HangulTree;