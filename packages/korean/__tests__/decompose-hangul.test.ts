import { HangulSyllable } from '../lib/decompose-hangul';

test('decomposeHangul', () => {
  const hangul = new HangulSyllable('훌');
  expect(hangul.map()).toEqual(['ᄒ', 'ᅮ', 'ᆯ']);
});

test('romanizeHangul', () => {
  const hangul = new HangulSyllable('훌');
  expect(hangul.romanize()).toEqual('hul');

  const hangul2 = new HangulSyllable('쩍');
  expect(hangul2.romanize()).toEqual('jjeok');
});