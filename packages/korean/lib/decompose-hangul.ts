
export class HangulSyllable {
  syllable: string;
  constructor(syllable: string) {
    if(syllable.length !== 1 || syllable.charCodeAt(0) < 0xAC00 || syllable.charCodeAt(0) > 0xD7A3)
      throw new Error('Invalid Hangul Syllable');
    this.syllable = syllable;
  }

  // https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_in_Unicode
  split() {
    const code = this.syllable.charCodeAt(0);
    // [(initial) × 588 + (medial) × 28 + (final)] + 44032
    const shifted = code - 0xAC00;
    const i = Math.floor(shifted / 588);
    const m = Math.floor((shifted % 588) / 28);
    const f = (shifted % 588) % 28;
    const initial = String.fromCharCode(i + 0x1100);
    const medial = String.fromCharCode(m + 0x1161);
    const final = f === 0 ? '' : String.fromCharCode(f + 0x11A7);
    console.log(initial, medial, final)
    return [initial, medial, final];
  }

  romanize() {
    const [initial, medial, final] = this.split();
  }
}