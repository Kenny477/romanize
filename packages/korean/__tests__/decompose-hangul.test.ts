import { HangulSyllable } from '../lib/decompose-hangul';

test('decomposeHangul', () => {
  const hangul = new HangulSyllable('훌');
  expect([hangul.initial, hangul.medial, hangul.final]).toEqual(['ᄒ', 'ᅮ', 'ᆯ']);
});