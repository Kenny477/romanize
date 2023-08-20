import { RomanizationSystem, romanize } from "../index";

test('romanizeHangul1', () => {
  expect(romanize('훌')).toEqual('hul');
  expect(romanize('버')).toEqual('beo');
  expect(romanize(`훌쩍 커버렸어
  함께한 기억처럼
  널 보는 내 마음은
  어느새 여름 지나 가을`)).toEqual(`huljjeok keobeoryeosseo
  hamkkehan gieokcheoreom
  neol boneun nae maeumeun
  eoneusae yeoreum jina gaeul`);
})

const tests: Record<string, Record<RomanizationSystem, string>> = {
  "안녕하세요": {
    [RomanizationSystem.REVISED]: "annyeonghaseyo",
    [RomanizationSystem.MCCUNE]: "annyŏnghaseyo",
    [RomanizationSystem.YALE]: "annyenghaseyyo",
  },
  "안녕": {
    [RomanizationSystem.REVISED]: "annyeong",
    [RomanizationSystem.MCCUNE]: "annyŏng",
    [RomanizationSystem.YALE]: "annyeng",
  },
  "안녕하십니까": {
    [RomanizationSystem.REVISED]: "annyeonghasimnikka",
    [RomanizationSystem.MCCUNE]: "annyŏnghasimnikka",
    [RomanizationSystem.YALE]: "annyenghasipnikka",
  },
  // "좋고": {
  //   [RomanizationSystem.REVISED]: "joko",
  //   [RomanizationSystem.MCCUNE]: "chok'o",
  //   [RomanizationSystem.YALE]: "cohko",
  // },
  // "놓다": {
  //   [RomanizationSystem.REVISED]: "nota",
  //   [RomanizationSystem.MCCUNE]: "not'a",
  //   [RomanizationSystem.YALE]: "nohta",
  // },
  // "잡혀": {
  //   [RomanizationSystem.REVISED]: "japyeo",
  //   [RomanizationSystem.MCCUNE]: "chap'yŏ",
  //   [RomanizationSystem.YALE]: "caphye",
  // },
  // "낳지": {
  //   [RomanizationSystem.REVISED]: "nachi",
  //   [RomanizationSystem.MCCUNE]: "nach'i",
  //   [RomanizationSystem.YALE]: "nahci",
  // },
  // "김치": {
  //   [RomanizationSystem.REVISED]: "gimchi",
  //   [RomanizationSystem.MCCUNE]: "kimch'i",
  //   [RomanizationSystem.YALE]: "kimchi",
  // },
  // "학여울": "hangnyeoul",
  // "알약": "allyak",
  // "백마": "baengma",
  // "신문로": "sinmunno",
  // "종로": "jongno",
  // "왕십리": "wangsimni",
  // "별내": "byeollae",
  // "신라": "silla",
  // "막내": "mangnae",
}

test('romanizeHangul2', () => {
  for (const [hangul, romanized] of Object.entries(tests)) {
    for (const system of Object.values(RomanizationSystem)) {
      expect(romanize(hangul, { system })).toEqual(romanized[system]);
    }
  }
})

test('romanizeNotHangul', () => {
  expect(() => romanize("我")).toThrowError('Not a Hangul string');
});