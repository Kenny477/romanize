import { REVISED_ROMANIZATION_OF_KOREAN } from "../constants/systems/revised";
import { HangulJamo, HangulInitials, HangulMedials, HangulFinals } from "../types/hangul";

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
  public choseong: keyof HangulInitials;
  public jungseong: keyof HangulMedials;
  public jongseong: keyof HangulFinals;
  constructor(syllable: string) {
    if(syllable.length !== 1 || syllable.charCodeAt(0) < 0xAC00 || syllable.charCodeAt(0) > 0xD7A3)
      throw new Error(`Invalid Hangul Syllable "${syllable}"`);
    this.syllable = syllable;
    const {choseong, jungseong, jongseong} = this.map();
    this.choseong = choseong;
    this.jungseong = jungseong;
    this.jongseong = jongseong;
  }

  // https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  // [(initial) × 588 + (medial) × 28 + (final)] + 44032
  // See https://www.unicode.org/versions/Unicode13.0.0/ch03.pdf#G24646
  // for official documentation on the arithmetic decomposition mapping of Hangul syllables
  private map() {
    const code = this.syllable.charCodeAt(0);
    const SIndex = code - HangulSyllable.SBase;
    const LIndex = Math.floor(SIndex / HangulSyllable.NCount);
    const VIndex = Math.floor((SIndex % HangulSyllable.NCount) / HangulSyllable.TCount);
    const TIndex = SIndex % HangulSyllable.TCount;
    const LPart = String.fromCharCode(HangulSyllable.LBase + LIndex) as keyof HangulInitials;
    const VPart = String.fromCharCode(HangulSyllable.VBase + VIndex) as keyof HangulMedials;
    const TPart = TIndex === 0 ? '' : String.fromCharCode(HangulSyllable.TBase + TIndex) as keyof HangulFinals;
    return {choseong: LPart, jungseong: VPart, jongseong: TPart};
  }
  
  public get initial() {
    return this.choseong
  }

  public get medial() {
    return this.jungseong;
  }

  public get final() {
    return this.jongseong;
  }
}