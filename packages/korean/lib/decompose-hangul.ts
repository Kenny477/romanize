import { REVISED_ROMANIZATION_OF_KOREAN } from "../constants/system";

export class HangulSyllable {
  static SBase = 0xAC00;
  static LBase = 0x1100;
  static VBase = 0x1161;
  static TBase = 0x11A7;
  static LCount = 19;
  static VCount = 21;
  static TCount = 28;
  static NCount = HangulSyllable.VCount * HangulSyllable.TCount; // 588
  static SCount = HangulSyllable.LCount * HangulSyllable.NCount; // 11,172

  syllable: string;
  constructor(syllable: string) {
    if(syllable.length !== 1 || syllable.charCodeAt(0) < 0xAC00 || syllable.charCodeAt(0) > 0xD7A3)
      throw new Error(`Invalid Hangul Syllable "${syllable}"`);
    this.syllable = syllable;
  }

  // https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  // [(initial) × 588 + (medial) × 28 + (final)] + 44032
  // See https://www.unicode.org/versions/Unicode13.0.0/ch03.pdf#G24646
  // for official documentation on the arithmetic decomposition mapping of Hangul syllables
  map() {
    const code = this.syllable.charCodeAt(0);
    const SIndex = code - HangulSyllable.SBase;
    const LIndex = Math.floor(SIndex / HangulSyllable.NCount);
    const VIndex = Math.floor((SIndex % HangulSyllable.NCount) / HangulSyllable.TCount);
    const TIndex = SIndex % HangulSyllable.TCount;
    const LPart = String.fromCharCode(HangulSyllable.LBase + LIndex);
    const VPart = String.fromCharCode(HangulSyllable.VBase + VIndex);
    const TPart = TIndex === 0 ? '' : String.fromCharCode(HangulSyllable.TBase + TIndex);
    return [LPart, VPart, TPart];
  }
 
  romanize() {
    const [initial, medial, final] = this.map();
    const romanization = REVISED_ROMANIZATION_OF_KOREAN[initial] 
      + REVISED_ROMANIZATION_OF_KOREAN[medial]
      + REVISED_ROMANIZATION_OF_KOREAN[final];
    return romanization;
  }
}