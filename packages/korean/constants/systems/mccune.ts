import { HangulJamo } from '../../types/hangul'

// https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer
export const MCCUNE_REISCHAUER: HangulJamo = {
  // https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer#Consonants
  'ᄀ': {
		base: 'k',
	},
  'ᄁ': {
		base: 'kk',
	},
  'ᄂ': {
		base: 'n',
	},
  'ᄃ': {
		base: 't',
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
		base: 'p',
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
		base: 'c',
	},
  'ᄍ': {
		base: 'tch',
	},
  'ᄎ': {
    base: 'ch\'',
  },
  'ᄏ': {
    base: 'k\'',
  },
  'ᄐ': {
    base: 't\'',
  },
  'ᄑ': {
    base: 'p\'',
  },
  'ᄒ': {
		base: 'h',
	},
  // https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer#Vowels
  'ᅡ': {
		base: 'a',
    next: {
      'ᅦ': 'aë'
    }
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
    base: 'ŏ',
  },
  'ᅦ': {
		base: 'e',
	},
  'ᅧ': {
    base: 'yŏ',
  },
  'ᅨ': {
    base: 'ye',
  },
  'ᅩ': {
    base: 'o',
    next: {
      'ᅦ': 'oë'
    }
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
    base: 'wŏ',
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
    base: 'ŭ',
  },
  'ᅴ': {
    base: 'ŭi',
  },
  'ᅵ': {
    base: 'i',
  },
  // https://en.wikipedia.org/wiki/McCune%E2%80%93Reischauer#Consonants
  'ᆨ': {
    base: 'k',
  },
  'ᆩ': {
    base: 'k',
  },
  'ᆪ': {
    base: 'kt',
  },
  'ᆫ': {
    base: 'n',
  },
  'ᆮ': {
    base: 't',
  },
  'ᆯ': {
    base: 'l',
  },
  'ᆷ': {
    base: 'm',
  },
  'ᆸ': {
    base: 'p',
  },
  'ᆺ': {
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
    base: '',
  },
}