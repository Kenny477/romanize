import { HangulJamo } from "../../types/hangul"

// https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean
export const REVISED_ROMANIZATION_OF_KOREAN: HangulJamo = {
  // https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean#Consonant_letters
  'ᄀ': {
		base: 'g',
	},
  'ᄁ': {
		base: 'kk',
	},
  'ᄂ': {
		base: 'n',
	},
  'ᄃ': {
		base: 'd',
	},
  'ᄄ': {
		base: 'tt',
	},
  'ᄅ': {
		base: 'r',
	},
  'ᄆ': {
		base: 'm',
	},
  'ᄇ': {
		base: 'b',
	},
  'ᄈ': {
		base: 'pp',
	},
  'ᄉ': {
		base: 's',
	},
  'ᄊ': {
		base: 'ss',
	},
  'ᄋ': {
    base: '',
  },
  'ᄌ': {
		base: 'j',
	},
  'ᄍ': {
		base: 'jj',
	},
  'ᄎ': {
		base: 'ch',
	},
  'ᄏ': {
		base: 'k',
	},
  'ᄐ': {
		base: 't',
	},
  'ᄑ': {
		base: 'p',
	},
  'ᄒ': {
		base: 'h',
	},
  // https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean#Vowel_letters
  'ᅡ': {
		base: 'a',
	},
  'ᅢ': {
		base: 'ae',
	},
  'ᅣ': {
		base: 'ya',
	},
  'ᅤ': {
		base: 'yae',
	},
  'ᅥ': {
		base: 'eo',
	},
  'ᅦ': {
		base: 'e',
	},
  'ᅧ': {
		base: 'yeo',
	},
  'ᅨ': {
		base: 'ye',
	},
  'ᅩ': {
		base: 'o',
	},
  'ᅪ': {
		base: 'wa',
	},
  'ᅫ': {
		base: 'wae',
	},
  'ᅬ': {
		base: 'oe',
	},
  'ᅭ': {
		base: 'yo',
	},
  'ᅮ': {
		base: 'u',
	},
  'ᅯ': {
		base: 'wo',
	},
  'ᅰ': {
		base: 'we',
	},
  'ᅱ': {
		base: 'wi',
	},
  'ᅲ': {
		base: 'yu',
	},
  'ᅳ': {
		base: 'eu',
	},
  'ᅴ': {
		base: 'ui',
	},
  'ᅵ': {
		base: 'i',
	},
  // https://en.wikipedia.org/wiki/Revised_Romanization_of_Korean#Consonant_letters
  '': {
    base: '',
  },
  'ᆨ': {
		base: 'k',
    next: {
      'ᄋ': 'g',
      'ㄴ': 'ngn',
      'ᄅ': 'ngn',
      'ㅁ': 'ngm',
      // 'ㅎ': 'kh,k',
    }
	},
  'ᆩ': {
		base: 'k',
	},
  'ᆪ': {
		base: 'k',
	},
  'ᆫ': {
		base: 'n',
	},
  'ᆬ': {
		base: 'n',
	},
  'ᆭ': {
		base: 'n',
	},
  'ᆮ': {
		base: 't',
    next: {
      'ᄋ': 'd', // 'd,j' TODO: check
      'ㄴ': 'nn',
      'ᄅ': 'nn',
      'ㅁ': 'nm',
      // 'ㅎ': 'th,t,ch',
    }
	},
  'ᆯ': {
		base: 'l',
    next: {
      'ᄋ': 'r',
    }
	},
  'ᆰ': {
		base: 'l',
    next: {
      'ᄋ': 'lg',
    }
	},
  'ᆱ': {
		base: 'l',
    next: {
      'ᄋ': 'lm',
    }
	},
  'ᆲ': {
		base: 'l',
    next: {
      'ᄋ': 'lb',
    }
	},
  'ᆳ': {
		base: 'l',
    next: {
      'ᄋ': 'ls',
    }
	},
  'ᆴ': {
		base: 'l',
    next: {
      'ᄋ': 'lt',
    }
	},
  'ᆵ': {
		base: 'l',
    next: {
      'ᄋ': 'lp',
    }
	},
  'ᆶ': {
		base: 'l',
    next: {
      'ᄋ': 'lh',
    }
	},
  'ᆷ': {
		base: 'm',
	},
  'ᆸ': {
		base: 'p',
	},
  'ᆹ': {
		base: 'p',
    next: {
      'ᄋ': 'ps',
    }
	},
  'ᆺ': {
		base: 't',
	},
  'ᆻ': {
		base: 't',
	},
  'ᆼ': {
		base: 'ng',
	},
  'ᆽ': {
		base: 't',
	},
  'ᆾ': {
		base: 't',
	},
  'ᆿ': {
		base: 'k',
	},
  'ᇀ': {
		base: 't',
	},
  'ᇁ': {
		base: 'p',
	},
  'ᇂ': {
		base: 't',
    next: {
      'ᄋ': 'h',
      'ᄀ': 'k',
      'ᄂ': 'nn',
      'ᄃ': 'nn',
      'ᄅ': 'nn',
      'ᄆ': 'nm',
      'ᄇ': 'p',
      'ᄉ': 'hs',
      'ᄌ': 'ch',
      'ᄐ': 'th',
    }
	},
}

