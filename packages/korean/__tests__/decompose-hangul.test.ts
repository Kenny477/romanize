import { HangulSyllable } from '../lib/decompose-hangul';

test('decomposeHangul', () => {
  const hangul = new HangulSyllable('훌');
  expect(hangul.split()).toEqual(['ᄒ', 'ᅮ', 'ᆯ']);
});