import { romanize } from "..";

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