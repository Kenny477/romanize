// See https://en.wikipedia.org/wiki/Korean_language_and_computers#Hangul_syllables_block
// for list of all Unicode characters for initials, medials, and finals in Hangul
export interface HangulInitials {
  'ᄀ': string;
  'ᄁ': string;
  'ᄂ': string;
  'ᄃ': string;
  'ᄄ': string;
  'ᄅ': string;
  'ᄆ': string;
  'ᄇ': string;
  'ᄈ': string;
  'ᄉ': string;
  'ᄊ': string;
  'ᄋ': string;
  'ᄌ': string;
  'ᄍ': string;
  'ᄎ': string;
  'ᄏ': string;
  'ᄐ': string;
  'ᄑ': string;
  'ᄒ': string;
}

export interface HangulMedials {
  'ᅡ': string;
  'ᅢ': string;
  'ᅣ': string;
  'ᅤ': string;
  'ᅥ': string;
  'ᅦ': string;
  'ᅧ': string;
  'ᅨ': string;
  'ᅩ': string;
  'ᅪ': string;
  'ᅫ': string;
  'ᅬ': string;
  'ᅭ': string;
  'ᅮ': string;
  'ᅯ': string;
  'ᅰ': string;
  'ᅱ': string;
  'ᅲ': string;
  'ᅳ': string;
  'ᅴ': string;
  'ᅵ': string;
}

export interface HangulFinals {
  '': string;
  'ᆨ': string;
  'ᆩ': string;
  'ᆪ': string;
  'ᆫ': string;
  'ᆬ': string;
  'ᆭ': string;
  'ᆮ': string;
  'ᆯ': string;
  'ᆰ': string;
  'ᆱ': string;
  'ᆲ': string;
  'ᆳ': string;
  'ᆴ': string;
  'ᆵ': string;
  'ᆶ': string;
  'ᆷ': string;
  'ᆸ': string;
  'ᆹ': string;
  'ᆺ': string;
  'ᆻ': string;
  'ᆼ': string;
  'ᆽ': string;
  'ᆾ': string;
  'ᆿ': string;
  'ᇀ': string;
  'ᇁ': string;
  'ᇂ': string;
}

export type HangulJamo = HangulInitials & HangulMedials & HangulFinals;